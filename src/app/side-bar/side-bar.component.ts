import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  
  copyStyle: string = 'copy-defult';
  constructor() { }

  ngOnInit(): void {
  }

  copyMail(){
    const copyText = "yashwanthhs07@gmail.com";
    navigator.clipboard.writeText(copyText);
    this.copyStyle = 'copy-onClick';
    setTimeout(() => {
      this.copyStyle = 'copy-defult';
    }, 2000);
  }
}
