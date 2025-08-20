import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Trip } from '../services/trip-data'; // adjust path if yours differs

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.component.html',
  styleUrls: ['./trip-card.component.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;
  @Output() deleted = new EventEmitter<string>();

  private router = inject(Router);

  edit(): void {
    this.router.navigate(['/trip', this.trip.code, 'edit']);
  }

  remove(): void {
    if (confirm(`Delete "${this.trip.name}"?`)) {
      this.deleted.emit(this.trip.code);
    }
  }
}
