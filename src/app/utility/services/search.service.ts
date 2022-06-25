import { Inject, Injectable } from "@angular/core";
import { ILogger } from "./iLogger.contract";

@Injectable({
    providedIn:"root"
})

export class SearchService {
private searchResult:string="";
/**
 *
 */
constructor(@Inject("loggerService")  public logger:ILogger) {
    

}
search(key:string):void{
    this.searchResult = `search success with key ${key}`;
    this.logger.writeLogger(this.searchResult);
}
getResult():string{
    return this.searchResult;
}
}