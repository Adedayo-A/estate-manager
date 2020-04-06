import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstateService } from 'src/app/services/estate.service';
import { GeneralService } from 'src/app/services/general.service';
import { Iestatedata } from 'src/app/interfaces/iestatedata';
import { Router } from '@angular/router';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  allEstates: any;

  constructor(
    private repo : EstateService,
    private router: Router,
    // public dialogRef: MatDialogRef<FormComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: any,
    public generalService: GeneralService
  ) {}

  filterData: any;
  model: any = {};
  itemList: Iestatedata[];


  ngOnInit(): void {
  }

  onNoClick(): void {
    // this.dialogRef.close();
    this.generalService.blur = false;
  }

  postEstate() {
    console.log('here');

    // this.model.grant_type = "password";
    this.repo.postEstate(this.model).subscribe(
      data => {
        this.repo.setList(data);
        this.router.navigate(['/getestates']);
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

  getEstates() {
    this.repo.getEstates().subscribe(
      data => {
        this.allEstates = data;
        setTimeout(() => {
        }, 1000)
      },
      error => {
        console.log('error is', error);
        setTimeout( () => {}, 1000 )
      }
    )
  }

  public get hideBlur(): boolean {
    console.log('gen service getts', this.generalService);

    return this.generalService.blur;
  }

  public set hideBlur(value: boolean) {
    console.log('value as at here', value);
    this.generalService.blur = value;
    console.log('value', this.generalService);

  }

}
