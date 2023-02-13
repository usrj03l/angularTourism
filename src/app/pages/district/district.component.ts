import { Component } from '@angular/core';
import { DistDataService } from 'src/app/dist-data.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-district',
  templateUrl: './district.component.html',
  styleUrls: ['./district.component.css']
})
export class DistrictComponent {
  database:any
  constructor(private dist:DistDataService, private router:Router)
  {
    this.database=this.dist.getData(); 
  }

    gotoPage(id:any){
      localStorage.setItem('id',id);
      this.router.navigate(['/district-info']);
    }
    
}
