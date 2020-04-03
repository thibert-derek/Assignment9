import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Content } from '../content-card/content-card-helper';
import {ContentService} from '../services/content.service';
import { MessagesService } from '../messages.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  content: Content[];
  twoWayBinding: any;
  bookFoundLive: string;
  bookFound: string;
  defaultCover: any;
  selectedBook: Content;

  constructor(private contentService: ContentService, private messagesService: MessagesService) {
  this.twoWayBinding = '';
  }
    /*this.content = [];
    // tslint:disable-next-line:no-unused-expression
    this.content.push;
    this.content[0] = {
      id: 1,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51EqnTkohBL._SX307_BO1,204,203,200_.jpg',
      author: 'J.D. Salinger',
      title: 'Catcher in the Rye',
      body: '"Phonies!"',
      tags: ['Coming of Age'],
      type: 'Novel',
    };
    this.content[1] = {
      id: 2,
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Shiningnovel.jpg/220px-Shiningnovel.jpg',
      author: 'Stephen King',
      title: 'The Shining',
      body: '"All work and no play makes Jack a dull boy."',
      tags: ['Horror', 'Thriller'],
      type: 'Novel',
    };
    this.content[2] = {
      id: 3,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg',
      author: 'George Orwell',
      title: '1984',
      body: '"It already happened."',
      tags: ['Apocalypse'],
      type: 'Novel',
    };
    this.content[3] = {
      id: 4,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51rCQAn0SGL.jpg',
      author: 'Hermann Melville',
      title: 'Moby Dick',
      body: '"Call me Ishmael!"',
      tags: ['Adventure'],
      type: 'Novel',
    };
    this.content[4] = {
      id: 5,
      imageUrl: 'https://images1.penguinrandomhouse.com/cover/9781101637760',
      author: 'Mary Shelley',
      title: 'Frankenstein',
      body: '"It`s alive!"',
      tags: ['Horror'],
      type: 'Novel',
    };
    this.content[5] = {
      id: 6,
      imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1356486866l/14898345.jpg',
      author: 'Brothers Grimm',
      title: 'Hansel and Gretel',
      body: '"House made of candy."',
      tags: ['Fantasy'],
      type: 'Fairytale',
    };
    this.content[6] = {
      id: 7,
      imageUrl: '',
      author: 'Stephen King',
      title: 'The Institute',
      body: '"A new book"',
      tags: ['Horror'],
      type: 'Novel',
    };
  }*/
  ngOnInit() {
  // this.content = this.contentService.getContent();
  this.contentService.getContentObs().subscribe(content =>
  this.content = content);
  }
  /*onSelect(content: Content): void {
    this.selectedBook = this.content;
    this.messageService.add('ContentService: Selected book id=${content.id');
  }
  getBooks(): void {
    this.contentService.getContent().subscribe(content => this.content = content);
  }
*/
  findBook(name: string): void {
    this.bookFound =
      this.content.filter(b =>
        b.title.toLowerCase() === name.toLowerCase()).length > 0 ?
        'Book found!' :
        'Book not found';
  }

  findBookLive(name: string): void {
    this.bookFoundLive = this.content.filter(b => b.title.toLowerCase() === name.toLowerCase()).length !== 0 ? 'Book Found' : 'Book not found';
  }
  addBookToList(newBookFromChild: Content) {
    this.contentService.addContent(newBookFromChild)
      .subscribe(c => {
        this.content.push(c);
        const myClonedArray = Object.assign([], this.content);
        this.content = myClonedArray;
      });
  }
  onSelect(content: Content): void {
    this.selectedBook = content;
    this.messagesService.add(`Retrieved book id=${content.id}`);
  }
  updateBookToList(updatedBookFromChild: Content) {
    this.contentService.updateContent(updatedBookFromChild)
      .subscribe(() => console.log('Content updated'));
    const itemtoUpdate = this.content.find(c => c.id === updatedBookFromChild.id);
    const itemtoUpdateId = this.content.indexOf(itemtoUpdate);
    this.content[itemtoUpdateId] = updatedBookFromChild;
    const myClonedArray = Object.assign([], this.content);
    this.content = myClonedArray;
  }
  deleteBookFromList(deletedBookFromChild: Content) {
    this.content = this.content.filter(h => h !== deletedBookFromChild);
    this.contentService.deleteContent(deletedBookFromChild)
      .subscribe(() => console.log('Content deleted'));
  }
}
