import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { UI_PIPES } from './pipes';

// stencil lib
import { UiLibAngularModule } from '@xplat-demo/ui-lib-angular';

const MODULES = [TranslateModule, UiLibAngularModule];

@NgModule({
  imports: [...MODULES],
  declarations: [...UI_PIPES],
  exports: [...MODULES, ...UI_PIPES],
})
export class UISharedModule {}
