// @ts-ignore
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from './content-card-helper';
import {ContentService} from '../services/content.service';
import {MessagesService} from '../messages.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})

export class ContentCardComponent implements OnInit {
  @Output() deleteBookEvent = new EventEmitter<Content>();
  @Input() content: Content;


  constructor(private contentService: ContentService, private messagesService: MessagesService) {
  }

  clickMe() {
    console.log('Id: ' + this.content.id);
  }
  deleteBook() {
    this.deleteBookEvent.emit(this.content);
    this.messagesService.add('Deleted Book: ' + this.content.title);
  }

  ngOnInit(): void {
  }
}
