import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-javabrains';

  inputText: string="Inital Value";
  user:User;
  // Create instance for the user to send it to the address card compo.
  constructor()
  {
    this.user=new User();
    this.user.name="Pooja";
    this.user.address="Lajpat";
    this.user.designation="Senior Software Engineer";
    this.user.phone=['9899636046','9871208573'];
  }
}
