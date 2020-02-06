import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  public title = 'pets-app';
  public message : String ="Hello Mr. Nagendra!!!!!!!!!!!!!!!!!!!!!!!";  
  public ttname:String;

  public compute():void {
       //Nagendra Kumar CS
       //{"Nagendra","Kumar","CS"}
//       var arr=this.ttname.split("[ ]+");
  ///     console.log(arr);
     ///  var temp="";
       //for(var x=0;x<arr.length;x++){
         // console.log(arr[x]);
          //temp=arr[x]+" "+temp
       //} 
        var temp="Hello Mr. "+ this.ttname.toUpperCase();
        this.message=temp;
        this.ttname="";
       console.log("(@(@(@(@(@(@(@(@((@yeap yeap!!!!!!!!!!!!!!!"+temp);
  }
  
}
