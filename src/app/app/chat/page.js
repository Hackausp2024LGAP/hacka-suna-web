'use client'

import { useEffect, useState } from "react"

export default function Page(){
  
  const [message, setMessage] = useState([])
  const [socket, setSocket] = useState(null)
  const [userId, setUserId] = useState("")

  const [msg, setMsg] = useState("")
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080/ws")

    socket.onopen = () => {
        console.log("Connected to serv");
    }

    socket.onmessage = (event) => {
        const newMessage = JSON.parse(event.data)
        setMessage((prevMessage) => [...prevMessage, newMessage])
    }

    socket.onclose = () => {
        console.log("Disconnected from serv");
        
    }

    setSocket(socket)

    const userId = "user" + Math.floor(Math.random() * 1000)

    setUserId(userId);

    return () => {
        socket.close();
    }

  }, [])

  const sendMessage = () => {
    if(socket) {
        const messageObj = {user: userId, content: msg}

        socket.send(JSON.stringify(messageObj))

        setMsg("")
    }
  }

  return (
    <div>
        <p>Chat</p>
        <div>
            {message.map((msg, i) => (
                <div key={i}>
                    {msg.user}: {msg.content}
                </div>
            ))}
        </div>
        <input 
            className="outline outline-1 mr-1"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
        />

        <button onClick={sendMessage}>Enviar</button>
    </div>
  )
}
