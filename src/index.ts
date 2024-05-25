import Server from "./app";

const server = new Server(parseInt(process.env.PORT ?? '5000'));
const app = server.expressApp

app.get("/", (req, res) => {
    res.send("Hello World");
});

try {
    server.start();
} catch (error) {
    console.error(error);
}