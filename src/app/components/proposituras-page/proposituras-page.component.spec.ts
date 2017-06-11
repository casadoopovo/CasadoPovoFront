import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropositurasPageComponent } from './proposituras-page.component';

describe('PropositurasPageComponent', () => {
  let component: PropositurasPageComponent;
  let fixture: ComponentFixture<PropositurasPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropositurasPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropositurasPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
