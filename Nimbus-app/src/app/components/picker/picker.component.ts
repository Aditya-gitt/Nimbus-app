import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Member } from '../../../models/Member';

@Component({
  selector: 'app-picker',
  standalone: true,
  imports: [NgFor, NgStyle],
  templateUrl: './picker.component.html',
  styleUrl: './picker.component.scss'
})
export class PickerComponent implements OnInit {

  ngOnInit(): void {
    this.members.push(new Member("Aditya", "0", "0", "0", "0"));
    this.members.push(new Member("Keyur", "0", "0", "0", "0"));
    this.members.push(new Member("Pratik", "0", "0", "0", "0"));
  }

  flag: boolean = false;
  something: number = screen.availHeight;
  members: Member[] = [];

  hideContent = () => {
    this.flag = !this.flag;
  };

  addMember = (memberName: string) => {
    if (!this.isMemberPresent(memberName) && memberName.length != 0) {
      this.members.push(new Member(memberName, "0", "0", "0", "0"));
    }
  };

  getElementsStyle(index: number): Object {

    let left = Math.floor(Math.random() * (screen.availHeight - 200)) + "px";
    let top = Math.floor(Math.random() * (screen.availHeight - 200)) + "px";
    return {
      position: "absolute",
      left,
      top,
      "font-size": 20 + "px",
    }
  }

  isMemberPresent(member: string): boolean {
    for (let _member of this.members) {
      if (member === _member.name) {
        return true;
      }
    }
    return false;
  }
}
