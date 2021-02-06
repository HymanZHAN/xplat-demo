import { Component } from '@angular/core';

// xplat
import { AppBaseComponent } from '@xplat-demo/xplat/web/features';

@Component({
  selector: 'xplat-demo-root',
  templateUrl: './app.component.html',
})
export class AppComponent extends AppBaseComponent {
  constructor() {
    super();
  }
}
