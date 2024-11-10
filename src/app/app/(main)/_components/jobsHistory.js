'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import { PrismaClient } from '@prisma/client'
import { historyJobsList } from "@/store/historyJobs"
const prisma = new PrismaClient()

export function JobsHistory() {
    /*const historyJobsList = prisma.Trabalho.findMany({
        where: {
            OR: {
                cpfTecnico: '',
                cpfCliente: ''
            }
        }
    })*/
    const [isVendor, setIsVendor] = useState(false)
    const [username, setUsername] = useState('José')

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Define um listener para o evento customizado
        const handleVendorStateChange = () => {
            setIsVendor(Cookies.get('isVendor:state') === 'true');
        };

        window.addEventListener('vendorStateChange', handleVendorStateChange);

        // Verifica o estado inicial
        handleVendorStateChange();
        setIsLoading(false);

        // Limpa o listener ao desmontar o componente
        return () => window.removeEventListener('vendorStateChange', handleVendorStateChange);
    }, [])

    if (isLoading) {
        return null // ou um spinner de carregamento, por exemplo
    }

    return (
        <div className="w-full flex flex-col p-20 space-y-10">
            {historyJobsList
                .filter(job => (isVendor ? job.Vendor === username : job.Client === username))
                .map((job, index) => (
                    <Card key={`c${job}-${index}`}>
                        <CardHeader>
                            <CardTitle className="uppercase text-xl">{job.Title}</CardTitle>
                            <CardDescription className="normal-case text-md">{job.Description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>Card Content</p>
                        </CardContent>
                        <CardFooter>
                            <p>Card Footer</p>
                        </CardFooter>
                    </Card>
                ))}
        </div>
    )
}