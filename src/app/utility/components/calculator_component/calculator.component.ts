import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { ComputationResultModel } from "../../models/computationResult.model";
import { CalculatorService } from "../../services/calculator.service";

@Component({
    templateUrl:'./calculator.component.html',
    selector: 'calculator-component'
})
export class CalculatorComponent implements OnInit{
    operand1:string="";
    operand2:string="";
    result:number=0;
    calculatorService!:CalculatorService;

    @Output()
    onResultComputed= new EventEmitter<ComputationResultModel>();

constructor(service:CalculatorService) {
    this.operand1 = "";
    this.operand2 = "";
    this.result=0;
    this.calculatorService=service;


}
ngOnInit(): void {
    
}

onOperand1Edit(data:string)
{
this.operand1=data;

}
onOperand2Edit(data:string)
{
this.operand2=data;
}

onAddClick():void
{
    //this.result = parseInt(this.operand1) + parseInt(this.operand2);
    this.result=this.calculatorService.add(parseInt( this.operand1),parseInt (this.operand2));
    this.onResultComputed.emit(new ComputationResultModel("ADD",this.operand1,this.operand2,this.result.toString()))
}
onSubClick():void
{
    //this.result = parseInt(this.operand1) - parseInt(this.operand2);
    this.result=this.calculatorService.sub(parseInt( this.operand1),parseInt (this.operand2));
    this.onResultComputed.emit(new ComputationResultModel("SUB",this.operand1,this.operand2,this.result.toString()))
}
onClearClick():void{
    this.operand1 = "0";
    this.operand2 = "0";
    this.result=0;
    this.onResultComputed.emit(new ComputationResultModel("","","",""));
        
}

}