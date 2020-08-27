import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'http';
  items: any[] = []
  constructor(private http: HttpClient) {
    /*
      http.get<any>("https://api.edamam.com/api/food-database/v2/parser?ingr=chicken  &app_id=d2c69be4&app_key=955f8412dc4da9b312d538c3b0a2969f").subscribe(x=>{
        console.log(x);
      var f:any[]=x.hints;
      console.log(f);
      for(var i=0;i<5;i++)
      {
        console.log(f[i].food.label);
        console.log(f[i].food.nutrients.FAT);
        console.log(f[i].food.image);
        this.items.push(f[i]);

      }
       
   
    //  console.log(x.hints[0].food.label);
       // console.log(x.hints[0].food.nutrients.FAT);


      });
*/
  


  }
  ara(text){
    fetch("https://website-translation1.p.rapidapi.com/translateLanguage/translate?type=plain&text=Marketing%20is%20the%20study%20and%20management%20of%20exchange%20relationships.%20It%20is%20the%20business%20process%20of%20identifying%252C%20anticipating%252C%20and%20satisfying%20customers'%20needs%20and%20wants.%20Because%20marketing%20is%20used%20to%20attract%20customers%252C%20it%20is%20one%20of%20the%20primary%20components%20of%20business%20management%20and%20commerce.&target=tr", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "website-translation1.p.rapidapi.com",
        "x-rapidapi-key": "077201bf84msh1d5ab1ed30471cdp1d5679jsn97667f7895da"
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err);
    });



    this.http.get<any>('https://recipe-puppy.p.rapidapi.com/?p=1&q='+text, {
      headers: { 'x-rapidapi-host': 'recipe-puppy.p.rapidapi.com', 'x-rapidapi-key': '077201bf84msh1d5ab1ed30471cdp1d5679jsn97667f7895da' }
    }).subscribe(res=>{
      console.log(res.results);
        this.items=res.results;
    });
    var url="https://website-translation1.p.rapidapi.com/translateLanguage/translate?type=plain&text=Value&target=tr";
    this.http.get(url, {
      headers: { 'x-rapidapi-host': 'website-translation1.p.rapidapi.com', 'x-rapidapi-key': '077201bf84msh1d5ab1ed30471cdp1d5679jsn97667f7895da','useQueryString':'true'}
    })
  }




}
