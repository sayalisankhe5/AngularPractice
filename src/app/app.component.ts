 import { Component, Inject } from '@angular/core';
import { ComputationResultModel } from './utility/models/computationResult.model';
import { ConsoleLoggerService } from './utility/services/consoleLogger.service';
import { ILogger } from './utility/services/iLogger.contract';



//defining metadata
// @decorator with configuration attributes

@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
 })



// export class AppComponent {
//   title = 'first-angular';
// }

export class AppComponent {

  //consoleLogger!:ConsoleLoggerService

  /**
   *
   */
//   constructor(service:ConsoleLoggerService) {
//     this.consoleLogger=service

//   }
// checkLogger():void{
//   this.consoleLogger.logger("from logger from app");
// }
constructor(@Inject("consoleLoggerService") consoleLogger:ILogger)

{
  consoleLogger.writeLogger("frommm App component");
}
  
}