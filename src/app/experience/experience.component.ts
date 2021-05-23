import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  constructor(private readonly route: Router) { }

  ngOnInit(): void {}

  onMouseWheel(evt: any) {
    if(evt.deltaY > 0){
      this.route.navigate(['contact']);
    }
    else{
      this.route.navigate(['about']);
    }
  }

}
