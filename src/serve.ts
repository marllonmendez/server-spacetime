import fastify from "fastify";
import fastifyCors from "@fastify/cors";
import {memoriesRoutes} from "./routes/memories";

const app = fastify()

app.register(fastifyCors, {
    origin: true, // Permite que qualquer URL de front-end acesse nosso back-end
})

app.register(memoriesRoutes)

app.listen({
    port:7777,
}).then(() => {
    console.log('API em execução http://localhost:7777')
})