import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AbstractStep } from './abstract-step/abstract-step';
import { StepComponent} from './step/step.component';

@NgModule({
  declarations: [
    AppComponent,
    StepComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
