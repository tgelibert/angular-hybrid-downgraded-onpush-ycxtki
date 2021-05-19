import angular from 'angular';
import { downgradeComponent } from "@angular/upgrade/static";

import { AngularComponent } from "./angular.component";

export const AngularjsModule = angular.module('app', [])
  .component('angularjsComponent', {
    template: `
      Angularjs counter: {{ $ctrl.counter }}
      <angular-component [counter]="$ctrl.counter"></angular-component>
    `,
    controller: [ '$interval', function($interval: ng.IIntervalService) {
      this.counter = 1;

      $interval(() => this.counter += 1, 1000);
    }]
  })
  .directive('angularComponent', downgradeComponent({ component: AngularComponent }));
