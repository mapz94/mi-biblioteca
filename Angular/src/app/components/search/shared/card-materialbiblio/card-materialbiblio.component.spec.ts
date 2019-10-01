import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMaterialbiblioComponent } from './card-materialbiblio.component';

describe('CardMaterialbiblioComponent', () => {
  let component: CardMaterialbiblioComponent;
  let fixture: ComponentFixture<CardMaterialbiblioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardMaterialbiblioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardMaterialbiblioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
