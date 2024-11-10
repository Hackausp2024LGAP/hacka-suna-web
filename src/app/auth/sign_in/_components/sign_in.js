'use client'

import { getUsers } from "@/script"
import { Button } from "@/components/ui/button";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

import { useRef, useState } from "react";
import { FallbackMode } from "next/dist/lib/fallback";
import { redirect } from "next/navigation";

export function SignIn() {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const [showModal, setShowModal] = useState(false)

    async function handleSubmit(event) {
        event.preventDefault()
        event.nativeEvent.stopImmediatePropagation();
        const users = await getUsers();
        if (users.some((item) => (item.email === emailRef.current.value && item.pass === passRef.current.value))) {

            const userData = {
                user: item.usuario,
                email: item.email,
                cpf: item.cpf,
            }

            Cookies.set('session', JSON.stringify(userData), { expires: 7 })
            window.location.href = '/app'
        }
        else {
            setShowModal(true)
        }
    }

    return (
        <div className="rounded-xl w-80 h-96 bg-gray-100 flex align-middle justify-center">
            <form id="form" onSubmit={handleSubmit}>
                <p className="text-[2rem] text-center mb-12 mt-12">Log In</p>
                <label className="text-lg">E-mail:</label><br></br>
                <input type="email" ref={emailRef} name="email" className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Senha:</label><br></br>
                <input type="password" ref={passRef} name="pass" className="p-1 outline outline-1 rounded-sm"></input><br></br>
                <div className="justify-center flex">
                    <AlertDialog open={showModal} onOpenChange={setShowModal}>
                        <AlertDialogContent>
                            <AlertDialogHeader>
                                <AlertDialogTitle>Erro ao entrar</AlertDialogTitle>
                                <AlertDialogDescription>
                                    Suas credenciais estão incorretas.
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel>Continuar</AlertDialogCancel>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                    <Button type="submit" form="form" value="Submit" className="mt-6">Entrar</Button>
                </div>
            </form>
        </div>
    )
}