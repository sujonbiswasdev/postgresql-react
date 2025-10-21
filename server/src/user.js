import express from 'express'
import { PrismaClient } from '../generated/prisma/index.js'
const prisma = new PrismaClient()
const router =express.Router()
router.get("/",async(req,res)=>{
    const users = await prisma.user.findMany()
    res.status(201).json(users)
    console.log(users)
})


// Create user
router.post("/", async (req, res) => {
  const { name, message } = req.body;
  const user = await prisma.user.create({
    data: { name, message }
  });
  res.status(201).json(user);
});


export default router