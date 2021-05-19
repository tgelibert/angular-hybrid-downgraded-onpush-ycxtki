import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';

import { AngularjsModule } from './angularjs.module';

import { AppComponent } from './app.component';
import { AngularComponent } from './angular.component';

@NgModule({
  imports:      [ BrowserModule, UpgradeModule ],
  declarations: [ AppComponent, AngularComponent ],
  entryComponents: [ AngularComponent ],
})
export class AppModule {
  constructor(
    private upgrade: UpgradeModule,
  ) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, [ AngularjsModule.name ], { strictDi: true });
  }
}
