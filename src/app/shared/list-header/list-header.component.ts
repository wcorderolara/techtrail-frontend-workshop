import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-header',
  templateUrl: './list-header.component.html',
  styleUrls: ['./list-header.component.scss']
})
export class ListHeaderComponent implements OnInit {

  @Input() title: string;
  @Output() add = new EventEmitter();
  @Output() refresh = new EventEmitter();

  ngOnInit() {}

  handleAdd() {
    this.add.emit();
  }
  handleRefresh() {
    this.refresh.emit();
  }

}
