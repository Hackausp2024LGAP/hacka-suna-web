import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus } from "lucide-react"

export function SendBudget() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button size="sm"><Plus />Adicionar orçamento</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Envio de orçamento</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Orçamento
                        </Label>
                        <Input
                            id="orcamento"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="username" className="text-right">
                            Descrição
                        </Label>
                        <Textarea className="resize-none col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Enviar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
