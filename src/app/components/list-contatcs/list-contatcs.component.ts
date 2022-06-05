import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-contatcs',
  templateUrl: './list-contatcs.component.html',
  styleUrls: ['./list-contatcs.component.scss']
})
export class ListContatcsComponent implements OnInit {

  constructor() { 
    console.log("Hoola mundo?")

  }

  ngOnInit(): void {
  }

}
