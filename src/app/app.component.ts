import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visualsearch';

  snaketiles:number[][]=new Array(15);
  ngOnInit(){
    for(let i=0;i<50;i++){
      this.snaketiles[i]=new Array(15);
      for(let j=0;j<50;j++){
        this.snaketiles[i][j]=0;
     
      }
     
    }
    
  }
  
  



}
