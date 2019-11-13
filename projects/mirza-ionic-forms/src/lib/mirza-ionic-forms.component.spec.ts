import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MirzaIonicFormsComponent } from './mirza-ionic-forms.component';

describe('MirzaIonicFormsComponent', () => {
  let component: MirzaIonicFormsComponent;
  let fixture: ComponentFixture<MirzaIonicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MirzaIonicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MirzaIonicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
