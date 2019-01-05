import { Component, OnInit, Input } from '@angular/core';
import { User} from './user.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  //user: any;
  @Input('user') user:User;
  
  isCollapsed: boolean = true;
  //@Input('user') userObject:User;
  
  /*
  @Input('name_input') userName: string;
  @Input('title_input') userTitle: string;
  */

  constructor() { 
  
    }

    toggleCollapse()
    {
      this.isCollapsed=!this.isCollapsed;
    }

  ngOnInit() {
   

    /*
    this.user= {
      name: this.userObject.name,
      title: this.userObject.designation,
      Address: this.userObject.address,  
        Phone: this.userObject.phone 
     
    };

    
  /*
    this.user= {
      name: this.userName,
      title: this.userTitle,
      Address: "Lajpat Nagar, Delhi, India",  
        Phone: [
        '9899636046', '9871208573','9810152501'
      ] 
     
    };*/

  }

}
