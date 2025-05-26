import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AuthPage } from './auth.component';

describe('AuthComponent', () => {
  let component: AuthPage;
  let fixture: ComponentFixture<AuthPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AuthPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
