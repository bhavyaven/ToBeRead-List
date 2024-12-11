import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterEntryComponent } from './filter-entry.component';

describe('FilterEntryComponent', () => {
  let component: FilterEntryComponent;
  let fixture: ComponentFixture<FilterEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterEntryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
