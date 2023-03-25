import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component01',
  templateUrl: './component01.component.html',
  styleUrls: ['./component01.component.css']
})
export class Component01Component implements OnInit {


  dummyValues = [
    ['Value 1', 'Value 2', 'Value 3', 'Value 4', 'Value 5', 'Value 6'],
    ['Value 7', 'Value 8', 'Value 9', 'Value 10', 'Value 11', 'Value 12'],
    ['Value 13', 'Value 14', 'Value 15', 'Value 16', 'Value 17', 'Value 18'],
    ['Value 19', 'Value 20', 'Value 21', 'Value 22', 'Value 23', 'Value 24']
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
