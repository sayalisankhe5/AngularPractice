import { Component, Inject, OnInit, ViewChild } from "@angular/core";
import { ComputationResultModel } from "../../models/computationResult.model";
import { ConsoleLoggerService } from "../../services/consoleLogger.service";
import { ILogger } from "../../services/iLogger.contract";
import { ComputationSummaryComponent } from "../computation_summary/computation_summary.component";

@Component({
    templateUrl:'./basic_calculator.component.html',
    selector: 'basic-calculator-component'
})
export class BasicCalculatorComponent implements OnInit{
   
    result:ComputationResultModel=<ComputationResultModel>{};
    //consoleLoggerService!: ConsoleLoggerService;

    @ViewChild(ComputationSummaryComponent)
    computationChild!: ComputationSummaryComponent

// constructor(service:ConsoleLoggerService) {
//     this.consoleLoggerService = service;
    
// }
/**
 *
 */
constructor(@Inject("consoleLoggerService") public consoleLoggerService:ILogger) {
    
}
ngOnInit(): void {
    
}

onResultComputedHandler(data:ComputationResultModel):void {
//this.result = data;
this.consoleLoggerService.writeLogger(data.toString());
this.computationChild.resultSummary = data;
}


}