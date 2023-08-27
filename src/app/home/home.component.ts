import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav'; // Import MatDrawer

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild(MatDrawer) drawer!: MatDrawer; // Declare the drawer property

  constructor() {}

  ngOnInit(): void {}
}
