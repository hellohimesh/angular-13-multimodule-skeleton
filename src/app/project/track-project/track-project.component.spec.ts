import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackProjectComponent } from './track-project.component';

describe('TrackProjectComponent', () => {
  let component: TrackProjectComponent;
  let fixture: ComponentFixture<TrackProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
