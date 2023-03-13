import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { InvoiceService } from 'src/app/core/services/invoice.service';
import * as actions from '../actions/invoice.actions';



@Injectable()
export class InvoiceEffects {


  constructor(private actions$: Actions, private invoiceService: InvoiceService) { }


  loadInvoices$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadInvoices),
      tap(data => console.log('data', data)),
      mergeMap(
        () => this.invoiceService.getInvoices().pipe(
          tap(invoices => console.log('invoices', invoices)),
          map((invoices) => {
            return actions.loadInvoicesSuccess({ invoices })
          }),
          catchError((error) => of(actions.loadInvoicesFailure(error)))

        )
      )
    )
  });

  loadIdInvoice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadIdInvoice),
      tap(data => console.log('id invoice', data)),
      mergeMap(
        () => this.invoiceService.createIdInvoice().pipe(
          tap(invoices => console.log('id invoice', invoices)),
          map((idInvoice) => {
            return actions.loadIdInvoiceSuccess({ idInvoice })
          }),
          catchError((error) => of(actions.loadInvoicesFailure(error)))

        )
      )
    )
  });

  loadCreateInvoice$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(actions.loadCreateInvoice),
      tap(data => console.log('loadCreateInvoice', data)),
      mergeMap(
        (data:any) => this.invoiceService.createInvoice(data).pipe(
          tap(invoices => console.log('loadCreateInvoice', invoices)),
          map((invoice) => {
            return actions.loadCreateInvoiceSuccess({ invoice })
          }),
          catchError((error) => of(actions.loadCreateInvoiceFailure(error)))

        )
      )
    )
  });

}

