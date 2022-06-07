import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConnectionsComponent } from './card-connections.component';

describe('CardConnectionsComponent', () => {
  let component: CardConnectionsComponent;
  let fixture: ComponentFixture<CardConnectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardConnectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConnectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
