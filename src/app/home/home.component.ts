import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  para = 'Hi This is'
  name = 'Nagarjuna'
  subject = 'Mean-Stack Developer'
  constructor() { }

  ngOnInit() {
  }

}
