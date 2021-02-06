import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { defineCustomElements } from '@xplat-demo/ui-lib/loader';

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
})
export class UiLibAngularModule {}
