import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { ConsoleLoggerService } from './utility/services/consoleLogger.service';
import { UtilityModule } from './utility/utility.module';
import { LabelComponent } from './widgets/components/label/label.component';
import { WidgetsModule } from './widgets/widgets.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WidgetsModule,
    LayoutModule,
    UtilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
