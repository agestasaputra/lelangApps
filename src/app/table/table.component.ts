import { Component, OnInit } from '@angular/core';
import { LelangService } from '../lelang.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  public closeResult: String;

  public dataLelang: any = []
  
  constructor(private _lelangService: LelangService, private modalService: NgbModal ) { }

  async ngOnInit() {
    await this._lelangService.getLelang()
    .subscribe(data => this.dataLelang = data)
    // .subscribe(data => console.log('cek data:', data))
    // console.log('cek dataLelang:', this.dataLelang)
  }

  open = (modalContent) => {
    // console.log('cek modalContent:', modalContent)
    this.modalService.open(modalContent, {ariaLabelledBy: 'modal-basic-title', size: "lg" }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  
}
