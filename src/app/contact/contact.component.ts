import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import "../../assets/smtp.js";
declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  });


  constructor() {}

  ngOnInit(): void {}

  sendMail(msgForm: any){
    const userName: string = msgForm?.value?.name;
    const userMailId: string = msgForm?.value?.email;
    const message:string = msgForm?.value?.message;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "yashwanthhs07@gmail.com",
      Password : "********************",
      To : "yashwanthhs07@gmail.com",
      From : userMailId,
      Subject : "Test email",
      Body : `Hi ${userName}, Received your message: ${message} Thank you!`
    }).then((message: any) => alert(message));
  }
}
