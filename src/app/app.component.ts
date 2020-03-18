import { Component } from '@angular/core';
import { stringify } from 'querystring';
import { Q } from "./Queue";
import { element } from 'protractor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'visualsearch';
  map=new Map();
  //start stores index of starting element destination of destination element
  pathrow:number;
  pathcol:number;
  startrow:number=0;
  startcol:number=0;
  destinationrow:number=1;
  destinationcol:number=3;
  destination=[1,3];
  intervals:any;

  //pressed stores if user is dragging any of the board elements
  pressed:boolean=false;
  //val stores clicked element value, 4 if none
  val:number=4;
  //snaketiles stores values of board
  snaketiles:number[][]=new Array(5);
  prevrow:number=-1;
  prevcolumn:number=-1;
  transferElement:string;
  inter:number;
  theQ:Q[]=[{row:this.startrow,col:this.startcol,isvisited:true,prevrow:-1,prevcol:-1}];
  element:Q;

  
keepBlocks():void{
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++)
    {
      let element:string=i.toString()+"-"+j.toString();
      if(this.snaketiles[i][j]==5){
        this.snaketiles[i][j]=0;
        document.getElementById(element).style.backgroundColor="white";


      }
      
      //else if(this.snaketiles[i][j]==)
    }
  }
  this.snaketiles[this.startrow][this.startcol]=1;
  this.snaketiles[this.destinationrow][this.destinationcol]=2;
  let element:string=this.startrow.toString()+"-"+this.startcol.toString();
  document.getElementById(element).style.backgroundColor="green";
  element=this.destinationrow.toString()+"-"+this.destinationcol.toString();
  document.getElementById(element).style.backgroundColor="red";
  while(this.theQ.length>0)
  {
    this.theQ.shift();
  }
  this.theQ.push({row:this.startrow,col:this.startcol,isvisited:true,prevrow:-1,prevcol:-1});

}

refresh():void{
  
  for(let i=0;i<10;i++){
    //this.snaketiles[i]=new Array(10);
    for(let j=0;j<10;j++){
      let element:string=i.toString()+"-"+j.toString();
      if(i==0&&j==0)
      {
        this.snaketiles[i][j]=1;
        document.getElementById("0-0").style.backgroundColor="green";
        continue;
      }
      if(i==1&&j==3)
      {
      this.snaketiles[i][j]=2;
      document.getElementById("1-3").style.backgroundColor="red";
      continue;
      }
      this.snaketiles[i][j]=0;
      document.getElementById(element).style.backgroundColor="white";


   
    }
   
  }
  this.startrow=0;
  this.startcol=0;
  console.log(this.theQ.length);
  while(this.theQ.length>0){
    this.theQ.shift();
  }
  this.theQ.push({row:this.startrow,col:this.startcol,isvisited:false,prevrow:-1,prevcol:-1});
  //clearInterval(this.intervals);*/
  
}
  
  //0 is white 1 is start 2 is destination 3 is wall
  ngOnInit(){
    for(let i=0;i<10;i++){
      this.snaketiles[i]=new Array(10);
      for(let j=0;j<10;j++){
        if(i==0&&j==0)
        {
          this.snaketiles[i][j]=1;
          document.getElementById("0-0").style.backgroundColor="green";
          continue;
        }
        if(i==1&&j==3)
        {
        this.snaketiles[i][j]=2;
        document.getElementById("1-3").style.backgroundColor="red";
        continue;
        }
        this.snaketiles[i][j]=0;

     
      }
     
    }

    
  }

  clicked(event:Event){
    // let elementId: string = (event.target as Element).id;
    // let row:number=parseInt(elementId[0]);
    // //console.log(row);
    // let col:number=parseInt(elementId[2]);

    // //updates val to value of pressed value in board
    // this.val=this.snaketiles[row][col];
    // if(this.val==3){
    //   this.snaketiles[row][col]=0;
    //   document.getElementById(elementId).style.backgroundColor="white";
    // }
    
    
  }


  //mousedown event
  press(event:Event){
   // console.log('here');
    this.pressed=true;
    let elementId: string = (event.target as Element).id;
    let row:number=parseInt(elementId[0]);
    //console.log(row);
    let col:number=parseInt(elementId[2]);

    //updates val to value of pressed value in board
    this.val=this.snaketiles[row][col];
    //console.log(this.val);

    //checks if val is white or brown
    if(this.val==0||this.val==3){
      this.snaketiles[row][col]=3;
      document.getElementById(elementId).style.backgroundColor="grey";
    }
    else if(this.val==1||this.val==2){//checks if val is green
      this.prevrow=row;
      this.prevcolumn=col;
      this.transferElement=elementId;
     //console.log(this.prevrow);
     //console.log(this.transferElement);
     //console.log(this.prevcolumn);
    }
    

  }
  findpath():void{
    
    let elementStr:string=this.pathrow.toString()+"-"+this.pathcol.toString();
    //this.theQ.shift();
   //console.log(elementStr);
   
   document.getElementById(elementStr).style.backgroundColor="blue";
   let ele:string=this.map.get(elementStr);
   console.log(ele);
  // clearInterval(this.intervals);
   this.pathrow=parseInt(ele[0]);
   this.pathcol=parseInt(ele[2]);
   if(this.pathrow==this.startrow&&this.pathcol==this.startcol)
   {
    clearInterval(this.intervals);
   }
   //console.log(this.pathrow);
   

   

  }


  renders(): void {
   //console.log(this.theQ);
   
   this.element=this.theQ[0];
    
    let rows=this.element.row
    let cols=this.element.col;
    if(this.snaketiles[rows][cols]==2)
    {
      this.snaketiles[rows][cols]=2;
    let elementStr:string=rows.toString()+"-"+cols.toString();
    this.theQ.shift();
   // console.log(elementStr);
   document.getElementById(elementStr).style.backgroundColor="blue";

   clearInterval(this.intervals);
   this.pathrow=rows;
   this.pathcol=cols;
   //this.map.set((rows+1).toString+"-"+cols.toString(),elementStr);
   //console.log(this.map.get("0-2"));
   this.intervals=setInterval(()=>{this.findpath(),100});
   return;
    }
    this.snaketiles[rows][cols]=5;
    let elementStr:string=rows.toString()+"-"+cols.toString();
    this.theQ.shift();
   // console.log(elementStr);
   document.getElementById(elementStr).style.backgroundColor="yellow";
   if(rows-1>=0&&(this.snaketiles[rows-1][cols]==0||this.snaketiles[rows-1][cols]==2))
   {
     this.theQ.push({row:rows-1,col:cols,isvisited:false,prevrow:rows,prevcol:cols});
     this.map.set((rows-1).toString()+"-"+cols.toString(),elementStr);

   }
   if(rows+1<10&&(this.snaketiles[rows+1][cols]==0||this.snaketiles[rows+1][cols]==2))
   {
     this.theQ.push({row:rows+1,col:cols,isvisited:false,prevrow:rows,prevcol:cols});
     this.map.set((rows+1).toString()+"-"+cols.toString(),elementStr);

   }
   if(cols-1>=0&&(this.snaketiles[rows][cols-1]==0||this.snaketiles[rows][cols-1]==2))
   {
    this.theQ.push({row:rows,col:cols-1,isvisited:false,prevrow:rows,prevcol:cols});
    this.map.set((rows).toString()+"-"+(cols-1).toString(),elementStr);


   }
   if(cols+1<10&&(this.snaketiles[rows][cols+1]==0||this.snaketiles[rows][cols+1]==2))
   {
    this.theQ.push({row:rows,col:cols+1,isvisited:false,prevrow:rows,prevcol:cols});
    this.map.set((rows).toString()+"-"+(cols+1).toString(),elementStr);
   // console.log(this.map.get(rows.toString+"-"+(cols+1).toString()))

   }

    

  }

  startSearch(event:Event){
    this.theQ.shift();
    this.theQ.push({row:this.startrow,col:this.startcol,isvisited:true,prevrow:-1,prevcol:-1});
     this.intervals=setInterval(() => {
      this.renders()}, 50);
 //console.log(this.theQ);


  }

  //mouseup event
  mouseupp(event:Event){
    //console.log('hello');
    let elementId: string = (event.target as Element).id;
    let row:number=parseInt(elementId[0]);
    let col:number=parseInt(elementId[2]);
   // console.log('here');
    if(this.val==1){
      //console.log('here');
      if(this.snaketiles[row][col]==0){
        this.snaketiles[this.prevrow][this.prevcolumn]=0;
        this.snaketiles[row][col]=1;
        this.startrow=row;
        this.startcol=col;
        document.getElementById(elementId).style.backgroundColor="green";
        document.getElementById(this.transferElement).style.backgroundColor="white";
        
      }
     this.pressed=false;
     this.val=4;
      
    }
    else if(this.val==2){
      if(this.snaketiles[row][col]==0){
        this.snaketiles[this.prevrow][this.prevcolumn]=0;
        this.snaketiles[row][col]=2;
        this.destinationrow=row;
        this.destinationcol=col;
        document.getElementById(elementId).style.backgroundColor="red";
        document.getElementById(this.transferElement).style.backgroundColor="white";
        
      }
      this.pressed=false;
      this.val=4;
      

    }
    
    // console.log('here');
this.pressed=false;
      this.val=4;
    
    
  }

  
  //mouse enter event
  mousecome(event:Event){
    //console.log('hello');
    // if(this.val==1||this.val==2)
    // {
    //   //do nothing
    //  // console.log('here');
    // }
    // else{
   
    let elementId: string = (event.target as Element).id;
    let row:number=parseInt(elementId[0]);
    let col:number=parseInt(elementId[2]);
    
    if((this.val==0||this.val==3)&&this.pressed==true&&(this.snaketiles[row][col]==0||this.snaketiles[row][col]==3)){
      this.snaketiles[row][col]=3;
      document.getElementById(elementId).style.backgroundColor="grey";
      //console.log('here');
    }
  
  }
  mouseleft(event:Event){
    
    // let elementId: string = (event.target as Element).id;
    // let row:number=parseInt(elementId[0]);
    // let col:number=parseInt(elementId[2]);
    // if(elementId!=this.start&&elementId!=this.destination&&this.snaketiles[row][col]!=3)
    // {
    //   let doc=document.getElementById(elementId);
    //   doc.style.backgroundColor="white";
    // }
  }
  
  



}
