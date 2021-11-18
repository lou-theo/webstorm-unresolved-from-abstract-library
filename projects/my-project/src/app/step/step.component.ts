import { AbstractStep } from '@my-project/app/abstract-step/abstract-step';
import { Component } from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss'],
})
export class StepComponent extends AbstractStep {
  public propertyC: string = '';
}
