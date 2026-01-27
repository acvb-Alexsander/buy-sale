import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatePageComponent } from './contate-page.component';

describe('ContatePageComponent', () => {
  let component: ContatePageComponent;
  let fixture: ComponentFixture<ContatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
