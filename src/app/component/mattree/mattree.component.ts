import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { GeneralService } from '../../services/general.service';
import { Router } from '@angular/router';



interface NavNode {
  name: string;
  children?: NavNode[];
}

const TREE_DATA: NavNode[] = [
  {
    name: 'Lists',
    children: [
      {name: 'Estates'},
      {
        name: 'Users'
      },
    ]
  },
  {
    name: 'Create',
    children: [
      { name: 'Estate'},
      { name: 'Road'},
      { name: 'Home'},
      { name: 'User'},
      { name: 'HomeOwner'},
      { name: 'Occupant'},
      { name: 'Home Staff'},
    ]
  },
];
;


@Component({
  selector: 'app-mattree',
  templateUrl: './mattree.component.html',
  styleUrls: ['./mattree.component.css']
})
export class MattreeComponent {
  treeControl = new NestedTreeControl<NavNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<NavNode>();

  constructor(private generalService: GeneralService, private router: Router ) {
    this.dataSource.data = TREE_DATA;
  }

  openComponent(nodeName) {
    console.log('node name is', nodeName);
    if(nodeName === 'Estates') {
      return this.router.navigate(['/getestates']);
    } else if (nodeName === 'Users') {
      return this.router.navigate(['/getusers']);
    }
    else if (nodeName === 'Estate') {
      this.router.navigate(['/estateform']);
      return;
    } 
    else if (nodeName === 'Road') {
      this.router.navigate(['/roadform']);
      return;
    }
  }

  hasChild = (_: number, node: NavNode) => !!node.children && node.children.length > 0;
}

