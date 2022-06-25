import { Component, Input } from "@angular/core";

@Component({
    selector: 'label-component',
    templateUrl:'./label.component.html'
})

export class LabelComponent {
    @Input()
    message:string=""

    messagePrefix="Label message:"
}