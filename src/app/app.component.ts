import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: 'Title',
    isFavorite: true
  };
  onFavoriteChanged(eventArgs) {
    // tslint:disable-next-line:quotemark
    console.log("favorite changed: ", eventArgs);
  }
}
