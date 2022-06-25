import { Component, Input } from "@angular/core";
import { ComputationResultModel } from "../../models/computationResult.model";

@Component({
    'templateUrl':"./computation_summary.component.html",
    selector:"computation-summary"
})
export class ComputationSummaryComponent{
    @Input()
    resultSummary:ComputationResultModel=<ComputationResultModel>{};
}