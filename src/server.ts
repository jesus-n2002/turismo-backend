import express from "express";
import { RoutesApp } from "./routes";



export class ServerApp{
    public app = express();

    start(){

        this.app.use( express.json()  ) // Habilitar json 
        this.app.use( express.urlencoded({extended: true})  ) // Habilitar x-www-form-urlencoded

        this.app.use(RoutesApp.routes)

        this.app.listen(3000, ()=>{
            console.log("Server running on port 3000")
        })
    }
}