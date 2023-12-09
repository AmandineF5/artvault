import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFeaturesComponent } from './art-features.component';

describe('ArtFeaturesComponent', () => {
  let component: ArtFeaturesComponent;
  let fixture: ComponentFixture<ArtFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtFeaturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
