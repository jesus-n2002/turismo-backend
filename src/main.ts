import { MongoDB } from "./common/data/mongodb/mongodb-connect";
import { ServerApp } from "./server";

async function bootstrap(){
    // Start Database
    await new MongoDB().connect()

    // Server Start
    new ServerApp().start()
}


bootstrap()