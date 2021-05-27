import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  animal: string | undefined;
  name: string | undefined;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openMenu(): void {
    this.dialog.open(MenuDialog, {});
  }

}

@Component({
  selector: 'menu-dialog',
  templateUrl: './menu-dialog.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class MenuDialog {
  constructor(public dialogRef: MatDialogRef<MenuDialog>) {}
}
