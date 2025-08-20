import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trip, TripDataService } from '../services/trip-data';

@Component({
  selector: 'app-trip-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private tripService = inject(TripDataService);

  loading = false;
  saving = false;
  error: string | null = null;

  // NEW: track whether we’re editing an existing trip
  isEdit = false;

  trip: Trip = {
    code: '', name: '', resort: '',
    start: '', end: '', length: 1,
    perPerson: 0, image: '', description: ''
  };

  ngOnInit(): void {
    const code = this.route.snapshot.paramMap.get('code');
    if (code) {
      this.isEdit = true;
      this.loading = true;
      this.tripService.getTrip(code).subscribe({
        next: t => { this.trip = t; this.loading = false; },
        error: err => { this.error = String(err); this.loading = false; }
      });
    }
  }

  save(): void {
    this.saving = true;
    this.error = null;

    const done = () => this.saving = false;
    const onSuccess = () => { this.router.navigate(['/']); done(); };
    const onError = (err: unknown) => { this.error = String(err); done(); };

    if (this.isEdit) {
      this.tripService.updateTrip(this.trip).subscribe({ next: onSuccess, error: onError });
    } else {
      this.tripService.addTrip(this.trip).subscribe({ next: onSuccess, error: onError });
    }
  }

  cancel(): void {
    this.router.navigate(['/']);
  }
}
