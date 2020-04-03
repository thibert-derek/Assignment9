import { Component, Input, OnInit } from '@angular/core';
import { Content } from './content-card/content-card-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Assignment 9';
  @Input() content: Content[];
  ngOnInit(): void {
  }
}
