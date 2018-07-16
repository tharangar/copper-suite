import * as express from "express";
import * as path from "path";
import * as winston from "winston";
import {json} from "body-parser";
import * as morgan from "morgan";
import {Express, Request, Response} from "express";

const PORT: number = 3002;

/**
 * Basic configurations of all middleware libraries are applied here.
 */
export class Server {

    public static start() {

        let app: Express = express();

        // Decode payload as json with body-parser
        app.use(json());

        // Apply morgan request logger
        app.use(morgan("combined"));

        // view engine pug
        app.set("views", path.join(__dirname, "../views"));
        app.set("view engine", "pug");

        // staic public folder
        app.use(express.static(path.join(__dirname, "public")));

        // Set headers for CORS requests
        // TODO: Adjust these settings to your security concerns!
        app.use((req: Request, res: Response, next: any) => {
            res.setHeader("Access-Control-Allow-Origin", "http://localhost:*");
            res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
            res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,authorization");
            next();
        });

        Server.setupRoutes(app);
        app.listen(PORT, () => winston.log("info", "--> Server successfully started at port %d", PORT));
    }

    /**
     * Setup all endpoints of your API. You can extend this method or if there are many different routes,
     * it might be better to move this to a separate class.
     */
    private static setupRoutes(app: Express): void {
        app.get("/", (req: Request, res: Response) => {
            res.status(200).send("Server running ...");
        });
        app.get("/test", (req: Request, res: Response) => {
            res.status(200).send("Server Test ...");
        });
        app.get("/testview", (req: Request, res: Response) => {
            res.render('index',{title:'Copper-Suite'});
            // res.status(200).send("Server Test ...");
        });
    }

}

Server.start();
