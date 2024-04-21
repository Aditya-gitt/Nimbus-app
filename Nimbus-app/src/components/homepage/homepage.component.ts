import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [NgFor,NgStyle],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent  implements OnInit{

  ngOnInit() {
    this.members = ["Keyur","Aditya","Pratik"];
  }

  members : string[] = [];
  flag : boolean = false;
  position: number[][] = [];
  getValue(val:string){
    this.members.push(val);
  }
  hideContent(){
    this.flag = !this.flag;
  }

}
