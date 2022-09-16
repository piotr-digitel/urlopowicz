import { Component, OnInit } from '@angular/core';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



//class Hero {

//  constructor(
//    public id: number,
//    public name: string,
//    public power: string,
//    public alterEgo?: string
 // ) {  }

// }


export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  //public powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

  public model = {id: 1, name: 'Dr IQ', pass: '1234'};





  submitted = false;

  onSubmit() { this.submitted = true; }

}
