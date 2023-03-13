import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InvoiceEffects } from '../../store/effects/invoice.effects';

describe('InvoiceEffects', () => {
  let actions$: Observable<any>;
  let effects: InvoiceEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InvoiceEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InvoiceEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
