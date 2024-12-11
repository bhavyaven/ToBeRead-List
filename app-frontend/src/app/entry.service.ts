import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entry } from './entry';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private baseURL = "http://localhost:8080/api/v1/entries";

  constructor(private httpClient: HttpClient) { }

  getEntriesList(): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(`${this.baseURL}`);
  }

  createEntry(entry: Entry): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, entry);
  }

  getEntryById(id: number): Observable<Entry> {
    return this.httpClient.get<Entry>(`${this.baseURL}/${id}`);
  }

  updateEntry(id: number, entry: Entry): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, entry);
  }

  deleteEntry(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }

  filterEntries(status: string): Observable<Entry[]> {
    return this.httpClient.get<Entry[]>(`${this.baseURL}/filter?status=${status}`);
  }

  getStatus(): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.baseURL}/statuses`)
  }
}
