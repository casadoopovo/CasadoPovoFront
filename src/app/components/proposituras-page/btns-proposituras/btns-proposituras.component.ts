import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'cp-btns-proposituras',
  templateUrl: './btns-proposituras.component.html',
  styleUrls: ['./btns-proposituras.component.css']
})
export class BtnsPropositurasComponent implements OnInit {

  @Output() filtro: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  listar(filtro: string) {
    this.filtro.emit(filtro);
  }

}
