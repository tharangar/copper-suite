import {Express, Request, Response} from "express";
import * as git from "./gitfunctions";

export class Router {


/**
     * Setup all endpoints of your API. You can extend this method or if there are many different routes,
     * it might be better to move this to a separate class.
     */
    public static setupRoutes(app: Express): void {
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

        // tr modifications
        app.get("/gw", (req: Request, res: Response) => {
            res.render('gw',{title:'Router'});
        });
        app.get("/access", (req: Request, res: Response) => {
            res.render('access',{title:'Access Management'});
        });
        app.get("/git", (req: Request, res: Response) => {
           // download the content from a git url
            res.render('git',{title:git.callGit('www.git.com')});
            //res.render('git',{title:git.connectGit('www.git.com')});

        });

    }

}