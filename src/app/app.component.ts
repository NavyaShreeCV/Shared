import { Component } from '@angular/core';
import { Router } from '@angular/router';


import { Admin } from './classes';
import { FeedbackService } from './feedback.service';
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Feedback Form';
  admin: Admin[];
  neww:Admin[];
  abc =false;
  fail=false;
  constructor(private feedbackService: FeedbackService) {
    this.neww = new Array<Admin>();
  }

  nextConfirm(id, password) {
    //this.abc = "jg";
    // this.new.forEach(element => {
    //   this.abc = element.UserName;

    //   if (element.UserName == id && element.Password == password) {
    //     this.abc = "success";
    //   }
      
    // });
   // this.abc = "success";
    for (var i = 0; i < this.neww.length; i++) {
     // this.abc = this.neww[i].UserName;

      if (this.neww[i].UserName == id && this.neww[i].Password == password) {
      //  this.abc = "success";
      }
    }

    
  }

  confirm(id, password) {
    // var admin = new Array<Admin>();
    //var admin;
    //this.abc = "yyy";
    // admin.UserName = id;
    // admin.Password = password;

    if(id=="Navya" || id=="aa")
    {
    this.abc = true;
    this.fail=false;
  }
    else
    {this.fail=true;
      this.abc = false;}
    this.feedbackService.admin().subscribe((res) => this.admin = res);
    this.neww=this.admin;
    debugger
    

   // this.nextConfirm(id, password);


  }
}
