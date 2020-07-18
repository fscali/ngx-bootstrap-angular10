import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-my-lib',
  template: `
  <button type="button" class="btn btn-primary" (click)="openModal(template)">Create template modal</button>

  <ng-template #template>
    <div class="modal-header">
      <h4 class="modal-title pull-left">Modal</h4>
      <button type="button" class="close pull-right" aria-label="Close" (click)="modalRef.hide()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      This is a modal.
    </div>
  </ng-template>


  <ng-container>
    <a
      href="javascript:;"
      class="btn btn-default btn-secondary"
      [popover]="test"
      popoverTitle="Popover on top"
      placement="top"
      #pop3="bs-popover"
    >
      Popover on top
    </a>
  </ng-container>
  <ng-template #test> </ng-template>
  `,
  styles: [
  ]
})
export class MyLibComponent {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
