import { Component, OnInit, Input } from '@angular/core';
import { ModalItem } from './modal.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input() public ModalConfig: ModalItem = {
    title: 'Sample Title',
    customClass: '',
    isOpen: false
  };

  public closeModal() {
    this.ModalConfig.isOpen = false;
  }

}
