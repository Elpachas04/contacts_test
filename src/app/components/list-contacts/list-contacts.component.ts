import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { User } from 'src/app/models'; 

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.scss']
})

export class ListcontactsComponent implements OnInit {
  public page !: number;
  public users : User[] = [];

  constructor(private dataservice:DataService,private renderer2:Renderer2){}

  ngOnInit() {    
    this.dataservice.getAllContacts()
        .subscribe( users => {
          this.users = users;
        });  
  }

  public selectUser(user: any){    
    const elementImg: any = document.querySelector('#user-image');
    const elementText: any = document.querySelector('#user-text');
        
    this.renderer2.setAttribute(elementImg,'src',user.photo);
    elementText.textContent = user.name;
        
  }
}
