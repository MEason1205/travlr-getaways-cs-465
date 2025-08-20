import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Trip, TripDataService } from '../services/trip-data';
import { TripCardComponent } from '../trip-card/trip-card.component';

@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TripCardComponent],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  private api = inject(TripDataService);

  loading = false;
  error: string | null = null;
  trips: Trip[] = [];

  ngOnInit(): void { this.fetch(); }

  fetch(): void {
    this.loading = true;
    this.api.getTrips().subscribe({
      next: data => { this.trips = data; this.loading = false; },
      error: err => { this.error = String(err); this.loading = false; }
    });
  }
  handleDeleted(code: string): void {
  this.api.deleteTrip(code).subscribe({
    next: () => this.fetch(),
    error: err => this.error = String(err)
  });
}
}
