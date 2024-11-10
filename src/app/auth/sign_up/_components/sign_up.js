'use client'

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FallbackMode } from "next/dist/lib/fallback";
import { getUsers } from "@/script"
import { redirect } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area"
import { Hash } from "lucide-react";


export function Signup() {
  const emailRef = useRef(null);
  const nomeRef = useRef(null);
  const CPFRef = useRef(null);
  const passRef = useRef(null);
  const CelRef = useRef(null);
  const cepRef = useRef(null);
  const cidadeRef = useRef(null);
  const estadoRef = useRef(null);
  const ruaRef = useRef(null);
  const complementoRef = useRef(null);
  const numRef = useRef(null);

  const [canSign, setCanSign] = useState(false)

  async function handleSubmit (event) {
    event.preventDefault();
    const users = await getUsers();
    if(users.some((item) => item.email === emailRef.current.value) && canSign == false){
        window.location.href = '/auth/sign_in'
    }
    else if(!users.some(
        (item) => item.email === emailRef.current.value || item.email === emailRef.current.value) && canSign == true){
          await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              nome: nomeRef.current.value, 
              cpf: CPFRef.current.value, 
              email: emailRef.current.value, 
              senha: passRef.current.value, 
              cel: CelRef.current.value, 
              cep: cepRef.current.value, 
              num: numRef.current.value, 
              rua: ruaRef.current.value, 
              cidade: cidadeRef.current.value, 
              estado: estadoRef.current.value, 
              complemento: complementoRef.current.value,
            })
          })
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
          })
          .then(data => console.log(data))
          .catch(error => console.error(error));
    }
    else if (emailRef.current.value != ""){
      setCanSign(true)
    }
  }

  return  (
    <div>
      {canSign ?
        <ScrollArea className="rounded-xl w-96 h-[500px] bg-gray-100 flex justify-center items-center text-center p-4">
            <form id="form" onSubmit={handleSubmit}>
                <p className="text-[2rem] text-center mb-12 mt-12">Cadastre-se</p>
                <label className="text-lg">E-mail:</label><br></br>
                <input type="email" ref={emailRef} name="email" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Nome:</label><br></br>
                <input type="text" ref={nomeRef} name="nome" className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Senha:</label><br></br>
                <input type="password" ref={passRef} name="senha" minLength="8" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">CPF:</label><br></br>
                <input type="text" maxLength="11" minLength="11" ref={CPFRef} name="CPF" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Celular:</label><br></br>
                <input type="text" ref={CelRef} name="celular" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Cep:</label><br></br>
                <input type="text" maxLength="8" minLength="8" ref={cepRef} name="CEP" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Estado:</label><br></br>
                <input type="text" ref={estadoRef} name="Estado" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Cidade:</label><br></br>
                <input type="text" ref={cidadeRef} name="Cidade" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Rua:</label><br></br>
                <input type="text" ref={ruaRef} name="Rua" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Número:</label><br></br>
                <input type="number" ref={numRef} name="Numero" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Complemento:</label><br></br>
                <input type="text" ref={complementoRef} name="Complemento" required className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <div className="justify-center flex">
                    <Button type="submit" form="form" value="Submit" className="mt-6" onClick={handleSubmit}>Cadastrar</Button>
                </div>
            </form>
        </ScrollArea>
      : 
        <div className="rounded-xl w-80 h-96 bg-gray-100 flex align-middle justify-center">
          <form id="form" onSubmit={handleSubmit}>
              <p className="text-[2rem] text-center mb-12 mt-12">Cadastre-se</p>
              <label className="text-lg">E-mail:</label><br></br>
              <input type="email" ref={emailRef} name="email" className="p-1 mb-6 outline outline-1 rounded-sm" required></input><br></br>
              <div className="justify-center flex">
                  <Button type="submit" form="form" value="Submit" className="mt-6" onClick={handleSubmit}>Cadastrar</Button>
              </div>
          </form>
        </div>}
    </div>
  )
}