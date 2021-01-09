import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('scrollBottom') private scrollBottom: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  scrollToBottom(): void {
    window.scrollTo(0,document.body.scrollHeight);
  }
}
