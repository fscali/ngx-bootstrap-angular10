import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [MyLibComponent],
  imports: [
    ModalModule.forRoot()
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
