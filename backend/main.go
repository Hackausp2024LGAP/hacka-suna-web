package main

import (
	"log"
	"math/rand"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
	"github.com/gorilla/websocket"
)

var upgrader = websocket.Upgrader{
	ReadBufferSize:  1024,
	WriteBufferSize: 1024,
	CheckOrigin: func(r *http.Request) bool {
		return true
	},
}

type Message struct {
	Content string `json:"content"`
	User    string `json:"user"`
}

var clients = make(map[*websocket.Conn]bool)

var broadcast = make(chan Message)

func handler(w http.ResponseWriter, r *http.Request) {
	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Println(err)
		return
	}

	defer conn.Close()

	userId := "user" + strconv.Itoa(rand.Intn(1000))
	clients[conn] = true

	for {
		var msg Message
		err := conn.ReadJSON(&msg)

		if err != nil {
			log.Printf("error: %v", err)
			delete(clients, conn)
			break
		}

		msg.User = userId

		broadcast <- msg
	}
}

func handleMessage() {
	for {
		msg := <-broadcast

		for client := range clients {
			err := client.WriteJSON(msg)

			if err != nil {
				log.Printf("error: %v", err)
				client.Close()

				delete(clients, client)
			}
		}
	}
}

func main() {

	go handleMessage()

	log.Println("Hello World!")

	r := chi.NewRouter()

	r.Get("/ws", handler)

	err := http.ListenAndServe(":8080", r)

	if err != nil {
		log.Fatal("error", err)
	}
}
