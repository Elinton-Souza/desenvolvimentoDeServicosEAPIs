import { prisma } from "../../lib/prisma"
import { Router } from "express"

const router = Router()

router.get("/", async (req, res) => {
    try {
        const notebooks = await prisma.notebook.findMany()
        res.status(200).json(notebooks)
    } catch (error) {
        res.status(500).json({ erro: "Erro no servidor" })
    }
})

router.post("/", async (req, res) => {
    const { 
        modelo, 
        marca, 
        processador, 
        preco, 
        quant
    } = req.body

    if (
        !modelo || 
        !marca || 
        !processador || 
        !preco || 
        !quant) {
        res.status(400).json({ erro: "Informe modelo, marca, processador, preco e qtd" })
        return
    }

    try {
        const notebook = await prisma.notebook.create({
            data: {
                modelo, 
                marca, 
                processador, 
                preco, 
                quant }
        })
        res.status(201).json(notebook)
    } catch (error) {
        res.status(500).json({ error })
    }
})

router.put("/:id", async (req, res) => {
    // recebe o id passado como parâmetro
    const { id } = req.params

    const { 
        modelo, 
        marca, 
        processador, 
        preco, 
        quant
    } = req.body

    if (!modelo || 
        !marca || 
        !processador || 
        !preco || 
        !quant) {
        res.status(400).json({ erro: "Informe modelo, marca, processador, preco e qtd" })
        return
    }

    try {
        const notebook = await prisma.notebook.update({
            where: { id: Number(id) },
            data: {
                modelo, 
                marca, 
                processador, 
                preco, 
                quant }
        })
        res.status(200).json(notebook)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

router.delete("/:id", async (req, res) => {
    // recebe o id passado como parâmetro
    const { id } = req.params

    // realiza a exclusão da viagem
    try {
        const notebook = await prisma.notebook.delete({
            where: { id: Number(id) }
        })
        res.status(200).json(notebook)
    } catch (error) {
        res.status(500).json({ erro: error })
    }
})

export default router