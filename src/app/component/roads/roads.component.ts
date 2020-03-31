import { Component, OnInit } from '@angular/core';
import { faEye, faPlus } from '@fortawesome/free-solid-svg-icons';
import { EstateService } from '../../services/estate.service';



export interface PeriodicElement {
  name: string;
  id: number;
  noOfHouses: number;
  aka: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Fredrick', noOfHouses: 10, aka: 'Fredrick Close'},
  {id: 2, name: 'Johnsons', noOfHouses: 12, aka: 'Johnsons Street'},
  {id: 3, name: 'Adebowale', noOfHouses: 9, aka: 'Adebowale Close'},
  {id: 4, name: 'Stevens', noOfHouses: 11, aka: 'Stephens Junction'},
  {id: 5, name: 'Church', noOfHouses: 10, aka: 'Church street'},
  {id: 6, name: 'Acme', noOfHouses: 12, aka: 'Acme Road'},
  {id: 7, name: 'Maryland', noOfHouses: 14, aka: 'Maryland Avenue'},
  {id: 8, name: 'Mango', noOfHouses: 11, aka: 'Mango Avenue'},
  {id: 9, name: 'Grammar', noOfHouses: 13, aka: 'Grammar School'}
];


@Component({
  selector: 'app-roads',
  templateUrl: './roads.component.html',
  styleUrls: ['./roads.component.css']
})
export class RoadsComponent implements OnInit {

  view: boolean = false;
  faEye = faEye;
  faPlus = faPlus;
  formView: boolean = false;
  
  constructor( private estateService: EstateService) { }

  ngOnInit(): void {
    this.showEstates();
  }
  viewRoad () {
    if(this.view === false) {
      this.view = true;
    }
    else {
      this.view = false;
    }
  }

  viewForm () {
    if(this.formView === false) {
      this.formView = true;
    }
    else {
      this.formView = false;
    }
  }

  displayedColumns: string[] = ['id', 'name', 'noOfHouses', 'aka'];

  dataSource = '';

  showEstates() {
    this.estateService.getEstates()
      .subscribe((data => {
        console.log('data is', data)
      }));
  }

}
