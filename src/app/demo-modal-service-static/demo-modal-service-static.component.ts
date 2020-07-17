import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-demo-modal-service-static',
  templateUrl: './demo-modal-service-static.component.html',
  styleUrls: ['./demo-modal-service-static.component.scss']
})
export class DemoModalServiceStaticComponent {

  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
