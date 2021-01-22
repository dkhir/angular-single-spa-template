import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-lazy-page',
  templateUrl: './lazy-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyPageComponent {}
