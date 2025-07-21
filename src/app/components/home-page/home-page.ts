import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-home-page',
  imports: [MatToolbarModule,MatButtonModule,NgIf, MatCardModule],
  templateUrl: './home-page.html',
  
  styleUrl: './home-page.css',
 
  
})
export class HomePage {
isHome :boolean = true;
isAboutUs :boolean = false;

linkClick(link:string){
      if(link==="home"){
this.isHome = true;this.isAboutUs = false;
      }else{
this.isHome = false;this.isAboutUs = true;
      }
}
}


