// A file with the Spanish Alphabet is created,
// in case of using another language it must be added in the folder './alphabet' and imported.
import { SPANISH_ALPHABET } from './alphabet/spanish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-alphabet',
  templateUrl: './list-alphabet.component.html',
  styleUrls: ['./list-alphabet.component.scss']
})
export class ListAlphabetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  alphabet = SPANISH_ALPHABET;

  onSelect(letter:any): void {
    alert(`la letra pulsada es ${letter}`)
  }
  
}
