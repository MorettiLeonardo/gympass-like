import { app } from "./app"

app.listen({
    host: "0.0.0.0",
    port: process.env.PORT,
}).then(() => {
    console.log("HTTP server running on http://localhost:3333")
}).catch(() => {
    console.error("Error starting the server:")
})
