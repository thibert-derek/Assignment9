import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { SafePipe } from './safe.pipe';
import { DefaultTypePipe } from './default-type.pipe';
import { AttributeDirective } from './attribute.directive';
//import { CreateContentComponent } from './create-content/create-content.component';
import { MessagesComponent } from './messages/messages.component';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import { InMemoryDataService} from './in-memory-data.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {AddContentComponent, AddContentDialogComponent} from './create-content/create-content.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ContentDetailComponent } from './content-detail/content-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ContentCardComponent,
    ContentListComponent,
    SafePipe,
    DefaultTypePipe,
    AttributeDirective,
    MessagesComponent,
    AddContentComponent,
    AddContentDialogComponent,
    ContentDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'content/:id', component: ContentDetailComponent},
      { path: 'content', component: ContentListComponent},
      { path: '', redirectTo: 'content', pathMatch: 'full'},
      { path: '**', component: NotFoundComponent}
    ]),
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false,
      delay: 1000 })
  ],
  entryComponents: [
    AddContentDialogComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
