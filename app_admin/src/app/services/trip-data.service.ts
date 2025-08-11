import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  code: string;
  name: string;
  resort: string;
  start: string;    // ISO date
  end: string;      // ISO date
  length: number;
  perPerson: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class TripDataService {
  private http = inject(HttpClient);
  private baseUrl = '/api/trips';

  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.baseUrl);
  }

  getTrip(code: string): Observable<Trip> {
    return this.http.get<Trip>(`${this.baseUrl}/${encodeURIComponent(code)}`);
  }

  addTrip(trip: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.baseUrl, trip);
  }

  updateTrip(trip: Trip): Observable<Trip> {
    return this.http.put<Trip>(`${this.baseUrl}/${encodeURIComponent(trip.code)}`, trip);
  }

  deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${encodeURIComponent(code)}`);
  }
}
