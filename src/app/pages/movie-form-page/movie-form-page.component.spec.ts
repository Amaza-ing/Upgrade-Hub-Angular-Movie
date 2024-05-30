import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFormPageComponent } from './movie-form-page.component';

describe('MovieFormPageComponent', () => {
  let component: MovieFormPageComponent;
  let fixture: ComponentFixture<MovieFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
