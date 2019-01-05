import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {


  //message :string ="Pooja";
  
  dateMessage :string ;
  
  constructor() { 
//setInterval (callback function, interval in millisec)
// arg 1-> Func which is to be repeated 
// arg2 -> every 1 sec
    setInterval(
      () => {
        let currentDate=new Date();

        this.dateMessage=currentDate.toDateString()+' ' +currentDate.toLocaleTimeString();
      }, 1000
    );
    
  }

  ngOnInit() {
  }

}
