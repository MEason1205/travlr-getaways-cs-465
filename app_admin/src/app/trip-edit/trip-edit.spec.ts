import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TripEditComponent } from './trip-edit.component';

describe('TripEdit', () => {
  let component: TripEditComponent;
  let fixture: ComponentFixture<TripEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [TripEditComponent] }).compileComponents();
    fixture = TestBed.createComponent(TripEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { expect(component).toBeTruthy(); });
});
