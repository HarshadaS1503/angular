import { Component, OnInit } from '@angular/core';
import { ImageDetail } from './ImageDetails';

@Component({
  selector: 'app-images-component',
  templateUrl: './images-component.component.html',
  styleUrls: ['./images-component.component.css']
})
export class ImagesComponentComponent implements OnInit {

  
  selectedvalue:any="";
  derivedPath:any="";
  p:string='./assets/facebook.png';
  constructor() {

    console.log(this.selectedvalue);
  }

  ngOnInit(): void {
  }


  imglist:ImageDetail[]=
  [
    {id:'1',name:'facebook',path:'./assets/facebook.png'},
    {id:'2',name:'instagram',path:'./assets/instagram.jpg'},
    {id:'3',name:'twitter',path:'./assets/twitter.png'}

  ];

  onChange(selected:string)
  {
//    console.log(typeof(this.imglist.find(x=>x.id==selected)?.path));
    this.derivedPath=this.imglist.find(x=>x.id==selected)?.path;
   console.log(this.derivedPath);
  }

}
