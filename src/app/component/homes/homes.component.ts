import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.css']
})
export class HomesComponent implements OnInit {

  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
