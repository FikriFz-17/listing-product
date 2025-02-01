import {PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()


export const getProduct = async (req, res) => {
    try {
        const respones = await prisma.product.findMany()
        res.status(200).json(respones)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}

export const getProductByID = async (req, res) => {
    try {
        const respones = await prisma.product.findUnique({
            where: {
                id: parseInt(req.params.id)
            }
        })
        res.status(200).json(respones)
    } catch (error) {
        res.status(500).json({msg: error.message})
    }
}
export const createProduct = async (req, res) => {
    const {name, price} = req.body
    try {
        const product = await prisma.product.create({
            data:{
                name: name,
                price: price
            }
        })
        res.status(201).json(product)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}
export const updateProduct = async (req, res) => {
    const {name, price} = req.body
    try {
        const product = await prisma.product.update({
            where:{
                id: parseInt(req.params.id)
            },
            data:{
                name: name,
                price: price
            }
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await prisma.product.delete({
            where:{
                id: parseInt(req.params.id)
            },
        })
        res.status(200).json(product)
    } catch (error) {
        res.status(404).json({msg: error.message})
    }
}

