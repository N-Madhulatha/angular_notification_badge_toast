import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BadgeToastService {

  constructor() { }

  count: number=0;

  toastCount(count){
    this.count=count;    
  }
  countReturn(): number{
    return this.count;
  }
}
