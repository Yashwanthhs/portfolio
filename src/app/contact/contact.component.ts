import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  // items: Observable<any[]>;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  });


  constructor( private readonly http: HttpClient, private readonly route: Router, private firestore: AngularFirestore) {}

  ngOnInit(): void {
    this.firestore.collection('messages').valueChanges().subscribe(res =>{
      console.log(res);
    });
  }

  sendMail(msgForm: any){
    const userName: string = msgForm?.value?.name;
    const userMailId: string = msgForm?.value?.email;
    const message:string = msgForm?.value?.message;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      name: userName,
      replyto: userMailId,
      message: message
    }
    this.http.post(`https://formspree.io/f/mqkwprwd`, body, { 'headers': headers }).subscribe((res: any)=>{
      console.log(res);
    });
  }

  onMouseWheel(evt: any) {
    // if(evt.deltaY < 0){
    //   this.route.navigate(['experience']);
    // }
  }
}
