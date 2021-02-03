import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {ChildComponent} from './child/child.component';

describe('AppComponent', () => {
  let component: ChildComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ChildComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'decorators-demo'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('decorators-demo');
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to decorators-demo');
  });

  // it('setting value to the input properties variables', () => {
  //   component.myInputMsg = 'I am Parent Component for child';
  // });

  it('should correctly render the passed @Input value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component.myInputMsg = 'I am Parent Component for child'; // 1
    fixture.detectChanges(); // 2
    const compiled = fixture.debugElement.nativeElement; // 2
    expect(compiled.querySelector('div').innerText).toBe('I am Parent Component for child'); // 3
    // expect(fixture.debugElement.nativeElement.myInputMsg).toBeTruthy(); // 3
  });
});
