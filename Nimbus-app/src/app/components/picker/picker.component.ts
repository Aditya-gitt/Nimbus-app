import { NgFor, NgStyle } from '@angular/common';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
    this.members.push(new Member("Aditya", "0px", "0px", "0px", "0px", "none"));
    this.members.push(new Member("Keyur", "0px", "0px", "0px", "0px", "none"));
    this.members.push(new Member("Pratik", "0px", "0px", "0px", "0px", "none"));
    this.members.push(new Member("Pranav", "0px", "0px", "0px", "0px", "none"));
    this.members.push(new Member("Pratap", "0px", "0px", "0px", "0px", "none"));
    this.members.push(new Member("Suman", "0px", "0px", "0px", "0px", "none"));
  }

  flag: boolean = false;
  something: number = screen.availHeight;
  members: Member[] = [];
  selectedMember: Member = new Member("", "", "", "", "", "");
  rondomizeButtonDisabled: boolean = false;

  hideContent = () => {
    this.flag = !this.flag;
  };

  addMember = (memberName: string) => {
    if (!this.isMemberPresent(memberName) && memberName.length != 0) {
      this.members.push(new Member(memberName, "0px", "0px", "0px", "0px", "none"));
    }

  };

  getElementsStyle(index: number, member: Member): Object {
    let left: string = member.posLeft;
    let top: string = member.posTop;
    if (member.posLeft === "0px") {
      left = Math.floor(Math.random() * (screen.availHeight - 200)) + "px";
      top = Math.floor(Math.random() * (screen.availHeight - 200)) + "px";
      member.posLeft = left;
      member.posTop = top;
    }

    return {
      position: "absolute",
      left,
      top,
      "font-size": 20 + "px",
      display: member.display
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


  sleep(ms: number): Promise<void> {
    return new Promise(
      (resolve) =>
        setTimeout(resolve, ms));
  }



  async randomize(): Promise<void> {
    this.rondomizeButtonDisabled = true;
    this.selectedMember.display = "none";
    var max = 8000;
    var min = 3000;
    var time = Date.now() + Math.floor(Math.random() * (max - min + 1) + min);
    var length = this.members.length - 1;
    var prepicked = Math.floor(Math.random() * length);
    while (Date.now() < time) {
      var current = Math.floor(Math.random() * length);
      this.members[current].display = "inline";
      await this.sleep(600);
      this.members[current].display = "none";
    }
    this.selectedMember = this.members[prepicked];
    this.members[prepicked].display = "inline";
    this.rondomizeButtonDisabled = false;
  }
}
