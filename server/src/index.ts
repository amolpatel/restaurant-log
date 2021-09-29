import { PrismaClient } from '@prisma/client'
import cors from 'cors'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
  const restaurants = await prisma.restaurant.findMany({
    where: {},
    include: {review: false}
  })
  res.json(restaurants)
})

app.get('/reviews', async (req, res) => {
    const reviews = await prisma.review.findMany({
      where: {},
      include: {}
    })
    res.json(reviews)
  })

  app.put('/visited/:id/:visited', async (req, res) => {
    const { id, visited } = req.params
    const rest = await prisma.restaurant.update({
      where: { id: Number(id) },
      data: { visited: Boolean(visited) },
    })
    res.json(rest)
  })

const server = app.listen(3001, () =>
  console.log(
    'Server runnning at: http://localhost:3001',
  ),
)