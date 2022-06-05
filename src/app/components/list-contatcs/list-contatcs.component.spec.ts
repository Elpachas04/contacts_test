import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContatcsComponent } from './list-contatcs.component';

describe('ListContatcsComponent', () => {
  let component: ListContatcsComponent;
  let fixture: ComponentFixture<ListContatcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContatcsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContatcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
