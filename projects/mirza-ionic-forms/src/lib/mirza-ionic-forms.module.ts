import { NgModule } from '@angular/core';
import { MirzaIonicFormsComponent } from './mirza-ionic-forms.component';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [MirzaIonicFormsComponent],
  imports: [
    CommonModule
  ],
  exports: [MirzaIonicFormsComponent]
})
export class MirzaIonicFormsModule { }
