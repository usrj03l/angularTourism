import { Component } from '@angular/core';
import { DistDataService } from 'src/app/dist-data.service';

@Component({
  selector: 'app-district-main',
  templateUrl: './district-main.component.html',
  styleUrls: ['./district-main.component.css']
})
export class DistrictMainComponent {
  single: any
  constructor(public hero: DistDataService) {

  }

  ngOnInit() {
    let id: any = localStorage.getItem('id')
    let data = this.hero.getData()
    this.single = data.filter(e => e.id == id)

  }

}
