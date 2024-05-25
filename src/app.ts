import express, { Express } from "express";
import routes from "./routes";

class Server {

    private app: Express;
    private port: number;

    constructor(port: number) {
        this.app = express();
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        // mounting routes
        this.app.use(routes)
        this.port = port;
    }

    public start() {
        this.app.listen(this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });
    }

    get expressApp() {
        return this.app;
    }
}

export default Server;