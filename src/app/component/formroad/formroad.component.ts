import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstateService } from 'src/app/services/estate.service';
import { RoadsService } from 'src/app/services/roads.service';
import { GeneralService } from 'src/app/services/general.service';
import { Iestatedata } from 'src/app/interfaces/iestatedata';

@Component({
  selector: 'app-formroad',
  templateUrl: './formroad.component.html',
  styleUrls: ['./formroad.component.css']
})
export class FormroadComponent implements OnInit {

  filterData: any;
  model: any = {};
  estateList = [];

  constructor(private roadService : RoadsService,
    private generalService: GeneralService,
    private estateService: EstateService) { }

  ngOnInit(): void {
    this.getEstatesFromGenService();
    console.log(this.getEstatesFromGenService);
  }

  onNoClick(): void {
    this.generalService.blur = false;
  }

  getEstatesFromGenService() {
    this.estateList = this.estateService.getList();
    return;
  }

  getIdFromModel() {
    console.log(this.model.id);
    this.roadService.setRoadIdFromSelect(this.model.id);
    return;
  }

  postRoad() {
    console.log('here');
    // this.model.grant_type = "password";
    this.roadService.postRoad(this.model).subscribe(
      data => {
        console.log('data is', data);

        this.roadService.roadList.push(data);
        setTimeout(() => {
        }, 10000)
      }, 
      error => {
        console.log(error);
        setTimeout(() => {
        }, 1000);
      }
    )
  }

}
