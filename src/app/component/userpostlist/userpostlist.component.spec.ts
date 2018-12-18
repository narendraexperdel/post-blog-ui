import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserpostlistComponent } from './userpostlist.component';

describe('UserpostlistComponent', () => {
  let component: UserpostlistComponent;
  let fixture: ComponentFixture<UserpostlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserpostlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserpostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
