import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToppostComponent } from './toppost.component';

describe('ToppostComponent', () => {
  let component: ToppostComponent;
  let fixture: ComponentFixture<ToppostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToppostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToppostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
