'use client'
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

export function Signup() {
  const tabRef = React.useRef(null);
  const emailRef = React.useRef(null);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const users = prisma.user.findMany()

  }

  return (
    <Tabs defaultValue="client" className="w-[400px]" ref={tabRef}>
        <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="client">Cliente</TabsTrigger>
            <TabsTrigger value="tecnico">Técnico</TabsTrigger>
        </TabsList>
        <TabsContent value="client">
            <div className="rounded-xl w-80 h-96 bg-gray-100 flex align-middle justify-center">
                <form id="form" onSubmit={handleSubmit}>
                    <p className="text-[2rem] text-center mb-12 mt-12">Cadastre-se</p>
                    <label className="text-lg">E-mail:</label><br></br>
                    <input type="text" ref={emailRef} name="email" className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                    <div className="justify-center flex">
                        <Button type="submit" form="form" value="Submit" className="mt-6" onClick={handleSubmit}>Cadastrar</Button>
                    </div>
                </form>
            </div>
        </TabsContent>
        <TabsContent value="tecnico">
            <div className="rounded-xl w-80 h-96 bg-gray-100 flex align-middle justify-center">
                <form id="form" onSubmit={handleSubmit}>
                    <p className="text-[2rem] text-center mb-12 mt-12">Cadastre-se</p>
                    <label className="text-lg">E-mail:</label><br></br>
                    <input type="text" ref={emailRef} name="email" className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                    <div className="justify-center flex">
                        <Button type="submit" form="form" value="Submit" className="mt-6" onClick={handleSubmit}>Cadastrar</Button>
                    </div>
                </form>
            </div>
        </TabsContent>
  </Tabs> 
  )
}