import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trip {
  code: string;
  name: string;
  resort: string;
  start: string;
  end: string;
  length: number;
  perPerson: number;
  image: string;
  description: string;
}

@Injectable({ providedIn: 'root' })
export class TripDataService {
  private baseUrl = '/api/trips';

  constructor(private http: HttpClient) {}

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
    // Update by code (what the course uses)
    return this.http.put<Trip>(`${this.baseUrl}/${encodeURIComponent(trip.code)}`, trip);
  }

  deleteTrip(code: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${encodeURIComponent(code)}`);
  }
}
