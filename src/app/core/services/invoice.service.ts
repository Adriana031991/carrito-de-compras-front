import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Invoice, ResponseCreateIdInvoice } from '../models/invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private env = environment;
  private UrlInvoicesList = this.env.urlInvoicesList;
  private UrlCreateIdInvoice = this.env.urlCreateIdInvoice;
  private UrlCreateInvoice = this.env.urlCreateInvoice;
  
  
  constructor( private http: HttpClient) { }

    
  getInvoices(): Observable<Invoice[]> {
    return this.http.get<Invoice[]>(`${this.UrlInvoicesList}`);
    
  }

    
  createIdInvoice(): Observable<ResponseCreateIdInvoice> {
    return this.http.post<ResponseCreateIdInvoice>(`${this.UrlCreateIdInvoice}`, {});
  }
  
    
  createInvoice(carId: string): Observable<Invoice> {
    return this.http.post<Invoice>(`${this.UrlCreateInvoice}/${carId}`, {});
  }
  
}
