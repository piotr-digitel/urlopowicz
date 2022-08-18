import { Component, OnInit } from '@angular/core';

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



  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];

  model = {id: 18, name: 'Dr IQ', power: this.powers[0], alterEgo: 'Chuck Overstreet'};





  submitted = false;

  onSubmit() { this.submitted = true; }

}
