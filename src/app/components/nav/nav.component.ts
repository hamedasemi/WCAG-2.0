import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() navList: string[];

  constructor() { }

  ngOnInit() {
  }

  clickHandler(e) {
    e.preventDefault();
    console.log(12);
  }

}
