import { Component, OnInit } from '@angular/core';
import { BadgeToastService } from '../badge-toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent implements OnInit {

  count=0;

  constructor(private bts:BadgeToastService) { }

  ngOnInit() {
  }

  toastCount(){
    this.count++;
    this.bts.toastCount(this.count);
    
  }

}
