import { OnDestroy } from '@angular/core';

import { Observable } from 'rxjs';

import { TakeUntilDestroy } from '../decorators/take-until-destroy.decorator';

// TODO: Add Angular decorator.
@TakeUntilDestroy
export abstract class Destroyable implements OnDestroy {
  protected componentDestroy: () => Observable<unknown>;

  ngOnDestroy(): void {}
}
