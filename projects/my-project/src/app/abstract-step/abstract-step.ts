import { BaseAbstractStep } from 'my-lib';
import { Directive } from '@angular/core';

@Directive()
export abstract class AbstractStep extends BaseAbstractStep {
  public propertyB: string = '';
}
