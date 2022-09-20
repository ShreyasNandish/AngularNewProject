import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularnew';
  imgUrl ="../assets/Bridgelabzlogo.jpg";
  Url="https://www.youtube.com";


  ngOnInit():void{
    this.title="Welcome bridgelabz";
  }

  onClick($event:any){
    console.log("Image is clicked",$event);
    window.open(this.Url,"blank");
  }
 
}
