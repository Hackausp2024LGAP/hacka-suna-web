'use client'

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FallbackMode } from "next/dist/lib/fallback";
import { getUsers } from "@/script"
import { redirect } from "next/navigation";

export function Signup() {
  const emailRef = useRef(null);

  const [canSign, setCanSign] = useState(false)

  async function handleSubmit (event) {
    event.preventDefault();
    const users = await getUsers();
    if(users.some((item) => item.email === emailRef.current.value)){
        window.location.href = '/auth/sign_in'
    }
    else{
      setCanSign(true)
    }
  }

  return  (
    <div>
      {canSign ?
        <></>
      : 
        <div className="rounded-xl w-80 h-96 bg-gray-100 flex align-middle justify-center">
          <form id="form" onSubmit={handleSubmit}>
              <p className="text-[2rem] text-center mb-12 mt-12">Cadastre-se</p>
              <label className="text-lg">E-mail:</label><br></br>
              <input type="text" ref={emailRef} name="email" className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
              <div className="justify-center flex">
                  <Button type="submit" form="form" value="Submit" className="mt-6" onClick={handleSubmit}>Cadastrar</Button>
              </div>
          </form>
        </div>}
    </div>
  )
}