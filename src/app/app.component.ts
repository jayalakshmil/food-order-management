import { Component } from '@angular/core';
import { User } from './models/user';
import { AccountService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'final-project';
  loadedFeature='home';


  
}
