import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'angular-component',
  template: `<div>Angular counter: {{ counter }}</div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularComponent  {
  @Input() counter: number;
}
