import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  heading='Hi Guys!'
  para = 'I have Previous working experience as a MEAN Stack Developer for (1) years'
  name = 'Nagarjuna'
  age = '22 Years'
  Experience = '1 Years'
  Country = 'India'
  Location ='Anantapur'
  email = 'arjunchowdary335@gmail.com'
  Phone ='9381563895'
  Freelance='Available'




  constructor() { }

  ngOnInit() {
  }

}
