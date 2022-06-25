import { Inject, Injectable } from "@angular/core";
import { ILogger } from "./iLogger.contract";

@Injectable()
export class ApiLoggerService implements ILogger {

    /**
     *
     */
    constructor(@Inject("apiAddress") public url:string) {
        
        console.log("api instantiated");
    }

    writeLogger(message: string): void {
        console.log(`Api logger ${message} of ${this.url}`);
    }
}