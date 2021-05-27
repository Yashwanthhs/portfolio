import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {}

  copyMail(){
    const copyText = "yashwanthhs07@gmail.com";
    navigator.clipboard.writeText(copyText)
  }
}
