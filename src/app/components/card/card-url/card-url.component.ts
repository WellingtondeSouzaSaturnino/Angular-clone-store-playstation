import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-url',
  templateUrl: './card-url.component.html',
  styleUrls: ['./card-url.component.css']
})
export class CardUrlComponent implements OnInit{

  @Input()
  gameUrl:string = ""
  constructor() { }

  ngOnInit(): void {

  }

}
