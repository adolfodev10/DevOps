import fastify from "fastify";


const app = fastify();

app.get("/", async (_request, reply) => {
    reply.send("Server is running");
});

app.listen({port:8080, host: "0.0.0.0"}, () => {
    console.log("Server is running")
})