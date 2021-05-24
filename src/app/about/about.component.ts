import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {
  }

  onMouseWheel(evt: any) {
    // if(evt.deltaY > 0){
    //   this.route.navigate(['experience']);
    // }
    // else{
    //   this.route.navigate(['']);
    // }
  }

}
