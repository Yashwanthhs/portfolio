import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { IMessageModel } from '../interfaces/messages';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})

export class ContactComponent implements OnInit {

  private itemsCollection: AngularFirestoreCollection<IMessageModel>;
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('')
  });


  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {
    this.itemsCollection = firestore.collection<IMessageModel>('messages');
  }

  ngOnInit(): void {
    this.firestore.collection('messages').valueChanges().subscribe(res =>{
      console.log(res);
    });
  }

  sendMail(msgForm: any, formDirective: FormGroupDirective){
    this.openDiag();
    const id = this.genrateID(15);
    const message: IMessageModel = {
      name: msgForm?.value?.name,
      mailId: msgForm?.value?.email,
      message: msgForm?.value?.message
    }
    this.itemsCollection.doc(id).set(message);
    formDirective.resetForm();
    this.contactForm.reset();
  }

  openDiag(): void {
    this.dialog.open(ThanksDialog, {});
  }

  genrateID(length: Number) {
    const result = [];
    const characters  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
    }
    return result.join('');
  }
}

@Component({
  selector: 'thanks-dialog',
  template: '<p class="thanks-msg">Thank you <br> Looking Forward to have a chat with you!!!😄</p>',
  styleUrls: ['./contact.component.scss']
})

export class ThanksDialog {

  constructor(
    public dialogRef: MatDialogRef<ThanksDialog>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.dialogRef.close();
    }, 3000);
  }
}