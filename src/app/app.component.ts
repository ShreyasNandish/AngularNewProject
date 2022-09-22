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

  userName:string = "";
  nameError:string = "";


  ngOnInit():void{
    this.title="Welcome bridgelabz";
  }

  onClick($event:any){
    console.log("Image is clicked",$event);
    window.open(this.Url,"blank");
  }

  onInput($event:any){
    console.log("change event occured",$event.data);
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');
    if(nameRegex.test(this.userName)){
      this.nameError="";
      return;
    }
    else
    this.nameError = "name is not correct";
  }
 
}
