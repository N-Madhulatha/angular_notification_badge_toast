import { Component, OnInit } from '@angular/core';
import { BadgeToastService } from '../badge-toast.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private btService: BadgeToastService ) { }

  count: number=0;

  ngOnInit() {
    
  }

  ngDoCheck(){
    this.count=this.btService.countReturn();
   // console.log(this.count);
  }


}
