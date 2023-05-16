import fastify from "fastify";
import {PrismaClient} from "@prisma/client";

const app = fastify()
const prisma = new PrismaClient()

app.get('/', () => {
    return 'hello world'
})

app.get('/users', async () => {
    const users = await prisma.user.findMany()
    return users
})

app.listen({
    port:7777,
}).then(() => {
    console.log('API em execução http://localhost:7777')
})