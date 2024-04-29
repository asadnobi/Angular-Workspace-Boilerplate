import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

interface HttpOptions {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
}

@Injectable()
export class ApiHttpService {
  constructor(private http: HttpClient) {}

  public get<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.get<T>(url, options);
  }

  public post<T>(url: string, data: any, options?: HttpOptions): Observable<T> {
    return this.http.post<T>(url, data, options);
  }

  public put<T>(url: string, data: any, options?: HttpOptions): Observable<T> {
    return this.http.put<T>(url, data, options);
  }

  public delete<T>(url: string, options?: HttpOptions): Observable<T> {
    return this.http.delete<T>(url, options);
  }
}
