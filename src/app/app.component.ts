import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //states
  newMemberName: string = "";
  members: string[] = [];
  errorMessage: string = "";
  noOfTeam: number | "" = "";
  teams: string[][] = [];
  // method to manipulat state
  onInput(member: string) {
    this.newMemberName = member;
    // console.log(this.newMemberName);
  }
  onInput2(noOfTeamInput: string) {
    this.noOfTeam = Number(noOfTeamInput);
    // console.log(this.noOfTeam);
  }
  addMember() {
    if (this.newMemberName) {
      this.errorMessage = "";
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      console.log(this.members);
    } else {
      this.errorMessage = "Name cant be empty";
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000)
    }
  }
  generateTeams() {
    if (!this.noOfTeam || this.noOfTeam <= 0) {
      this.errorMessage = "Invalid number of teams";
      setTimeout(() => {
        this.errorMessage = "";
      }, 3000);
      return;
    }
    if (this.members.length < this.noOfTeam) {
      this.errorMessage = "not enough member";
    }
    const allMembers = [...this.members];
    while (allMembers.length) {
      for (let i = 0; i < this.noOfTeam; i++) {
        const randomIndex = Math.floor(Math.random() * allMembers.length);
        const member = allMembers.splice(randomIndex, 1)[0];
        if (!member) break;
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
    console.log(this.teams);
    this.members = [];
    this.noOfTeam = "";
  }
}