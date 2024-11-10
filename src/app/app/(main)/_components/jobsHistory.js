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
import { AddJobModal } from "./addJobModal"
import { SendBudget } from "./sendBudget"
import Image from "next/image"
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
        <div className="w-full flex flex-col px-20 py-10 space-y-10">
            <div className="flex justify-center">
                {!isVendor && <AddJobModal />}
            </div>
            {historyJobsList
                .filter(job => (isVendor ? job.Vendor === username : job.Client === username))
                .map((job, index) => (
                    <Card key={`c${job}-${index}`} className="px-20 py-5">
                        <div className="flex w-full">
                            <Image
                                src={job.Image}
                                width={200}
                                height={200}
                                alt=""
                            />
                            <div className="w-full">
                                <CardHeader>
                                    <CardTitle className="text-xl flex flex-row justify-between">
                                        <div className="uppercase">
                                            {job.Title}
                                        </div>
                                        <div className="font-medium">
                                            {(isVendor ? job.Client : `Resolvido por: ${job.Vendor}`)}
                                        </div>
                                    </CardTitle>
                                    <CardDescription className="normal-case text-lg text-inherit">{job.Description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-row justify-between items-center">
                                        <p className="text-2xl font-medium">{job.Price}</p>
                                        {job.Status === "Pendente" && isVendor ?
                                            <div className="flex flex-col items-end space-y-3">
                                                <div className="flex items-center">
                                                    <p className="text-lg">{job.Status}</p>
                                                </div>
                                                <SendBudget />
                                            </div> :
                                            <p className="text-lg">{job.Status}</p>
                                        }
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <p>{job.FromDate} a {job.ToDate}</p>
                                </CardFooter>
                            </div>
                        </div>
                    </Card>
                ))}
        </div>
    )
}