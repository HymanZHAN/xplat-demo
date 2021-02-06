import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { throwIfAlreadyLoaded } from '@xplat-demo/xplat/utils';
import { XplatDemoCoreModule } from '@xplat-demo/xplat/web/core';

@NgModule({
  imports: [XplatDemoCoreModule, IonicModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
})
export class XplatDemoIonicCoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: XplatDemoIonicCoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'XplatDemoIonicCoreModule');
  }
}
