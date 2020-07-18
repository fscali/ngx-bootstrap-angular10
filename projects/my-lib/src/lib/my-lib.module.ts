import { ModuleWithProviders, NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { PopoverModule } from 'ngx-bootstrap/popover';

export const modalForRoot: ModuleWithProviders<ModalModule> = ModalModule.forRoot()
export const popoverForRoot: ModuleWithProviders<PopoverModule> = PopoverModule.forRoot()


@NgModule({
  declarations: [MyLibComponent],
  imports: [
    modalForRoot,
    popoverForRoot
  ],
  exports: [MyLibComponent]
})
export class MyLibModule { }
