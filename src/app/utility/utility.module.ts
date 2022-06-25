import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { WidgetsModule } from "../widgets/widgets.module";
import { BasicCalculatorComponent } from "./components/basic_calculator/basic_calculator.component";
import { CalculatorComponent } from "./components/calculator_component/calculator.component";
import { ComputationSummaryComponent } from "./components/computation_summary/computation_summary.component";
import { SearchComponent } from "./components/search_component/search.component";
import { ApiLoggerService } from "./services/apiLogger.service";
import { CalculatorService } from "./services/calculator.service";
import { ConsoleLoggerService } from "./services/consoleLogger.service";
import { SearchResultComponentComponent } from './components/search-result-component/search-result-component.component';
import { HoverDirective } from './directives/hover.directive';

@NgModule({
    declarations:[BasicCalculatorComponent,CalculatorComponent,ComputationSummaryComponent, SearchResultComponentComponent, SearchComponent, HoverDirective],
    imports:[WidgetsModule,FormsModule],
    exports:[BasicCalculatorComponent,SearchComponent,SearchResultComponentComponent,HoverDirective],
    providers:[{provide:CalculatorService,useClass:CalculatorService},
    //{provide:ConsoleLoggerService,useClass:ConsoleLoggerService}
{provide:"consoleLoggerService",useClass:ApiLoggerService},
{provide:"apiAddress",useValue:"http://pic.com/log/v1"}
//{provide:ILogger,useClass:ApiLoggerService}
]
})

export class UtilityModule {}