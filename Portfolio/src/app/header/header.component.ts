import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  btn1():void{
    this.router.navigate(['home']);
  }
  btn2():void{
    this.router.navigate(['portfolio']);
  }
    
  
  btn3(){
    console.log('Menu');
  }

}
