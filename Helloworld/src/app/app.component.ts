import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url="https://bridgelabz.com";
  userName: string = "";

  ngOnInit() : void {
    this.title="Hello from BridgeLabz";
  }

  onClick($event){
    console.log("Save button has been clicked!",$event);
    window.open(this.url, "_blank");
  }
}import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Helloworld';
  imgUrl="../assets/BL_logo_square_jpg.jpg";
  url="https://bridgelabz.com";
  userName: string = "";

  ngOnInit() : void {
    this.title="Hello from BridgeLabz";
  }

  onClick($event){
    console.log("Save button has been clicked!",$event);
    window.open(this.url, "_blank");
  }
}