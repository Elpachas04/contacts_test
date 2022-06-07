import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAlphabetComponent } from './list-alphabet.component';

describe('ListAlphabetComponent', () => {
  let component: ListAlphabetComponent;
  let fixture: ComponentFixture<ListAlphabetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAlphabetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAlphabetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
