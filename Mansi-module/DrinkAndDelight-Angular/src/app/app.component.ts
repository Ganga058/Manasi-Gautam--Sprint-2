import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'RawMaterialStockUI';
  router:Router;
  constructor(router:Router ){
this.router=router;
  }
  
  ngOnInit(){
    this.router.navigate(['app']);
  }
 
  

}