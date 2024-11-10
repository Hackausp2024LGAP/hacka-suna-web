import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const { nome, cpf, email, senha, cel, cep, numero, rua, cidade, estado, complemento } = req.body
        console.log("Aaaa")
        // Você pode fazer qualquer lógica com os dados recebidos, como salvar no banco
        const user = await prisma.usuario.create({
            data: {
            nome: nome,
            cpf: cpf,
            pass: senha,
            email: email,
            cel: cel
            },
        })
        
        
        const client = await prisma.cliente.create({
            data: {
            cpfCliente: cpf,
            cep: cep,
            numero: numero,
            rua: rua,
            complemento: complemento,
            cidade: cidade,
            estado: estado
            },
        })
        
        const tecnico = await prisma.tecnico.create({
            data: {
            cpfTecnico: cpf,
            ratings: 5
            },
        })

        res.status(200).json(usuarioCriado);  // Envia a resposta para o cliente
    } catch (error) {
      res.status(500).json({ error: 'Erro ao processar os dados' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });  // Se o método não for POST
  }
}
