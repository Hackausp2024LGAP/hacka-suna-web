//import { PrismaClient } from '@prisma/client'
//const prisma = new PrismaClient()

import { Button } from "@/components/ui/button";

export default function Page() {
    return (
        <div className="rounded-xl w-80 h-96 bg-gray-100 flex align-middle justify-center">
            <form id="form">
                <p className="text-[2rem] text-center mb-12 mt-12">Log In</p>
                <label className="text-lg">E-mail:</label><br></br>
                <input type="text" id="email" name="email" className="p-1 mb-6 outline outline-1 rounded-sm"></input><br></br>
                <label className="text-lg">Senha:</label><br></br>
                <input type="password" id="pass" name="pass" className="p-1 outline outline-1 rounded-sm"></input><br></br>
                <div className="justify-center flex">
                    <Button type="submit" form="form" value="Submit" className="mt-6">Entrar</Button>
                </div>
            </form>
        </div>
    )
}