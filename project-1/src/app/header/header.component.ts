import { Component } from '@angular/core';
import { dataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  collapsed = true;

  constructor(private datastorageservice: dataStorageService) { }

  onSaveData() {
    this.datastorageservice.storedRecipw
  }
  onFetchData() {
    this.datastorageservice.fetchRecipe
  }

}
