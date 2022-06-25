import { ComputationResultModel } from "../models/computationResult.model";
import { ILogger } from "./iLogger.contract";

export class ConsoleLoggerService implements ILogger {
    writeLogger(messageToLog:string):void{
        console.log(messageToLog);
    }
    otherlogger(messageToLog:ComputationResultModel):void{
        console.log(messageToLog);
    }
}