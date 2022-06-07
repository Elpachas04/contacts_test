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
    this.callAllContacts();
  }
  
  public callAllContacts(){
    this.dataservice.getAllContacts()
     .subscribe( users => {
       this.users = users;
     }); 
     return this.users;
 }

  public selectUser(user: any){    
    const elementImg: any = document.querySelector('#user-image');
    const elementText: any = document.querySelector('#user-text');
    const elementCard: any = document.querySelector('#total-cards');

    const contacts = this.getContacts(user);

    this.createInfoUser(elementImg,elementText,user);
    this.createInfoContacts(contacts,elementCard);
    this.completeStyleContacts();
  }

  public getContacts(user: any){

    let dataConnection: any[] = [];
    let allContacts = this.callAllContacts();
     allContacts.forEach((element: any) => {
       if(user.connections.includes(element.id)){
        dataConnection.push(element);
       }
    });
    return dataConnection;
  }

  public createInfoUser(elementImg: any,elementText: { textContent: any; },user: { photo: string; name: any; }){
    this.renderer2.setAttribute(elementImg,'src',user.photo);
    elementText.textContent = user.name;         
  }

  public createInfoContacts(contacts: any[],elementCard: any){
    elementCard.innerHTML = "";
    contacts.forEach((element: any) => {
      this.completeInfoContacts(element,elementCard);      
   });
  }

  public completeInfoContacts(element: any,elementCard: any){    
    let card = 
    `
    <div class="deck-connection">
      <div class="card-deck">
        <div class="card connection-card">
          <img class="card-img-top rounded-circle" src="${element.photo}" alt="connection image ">        
          <div class="card-body">            
            <p class="card-text">${element.getSplitName()}</p>
          </div>
        </div>                                      
      </div>                              
    </div>
   `;
   elementCard.innerHTML += card;
  }

  public completeStyleContacts(){
    const elementCard = document.querySelectorAll('.deck-connection');
    const imageCard = document.querySelectorAll('.card-img-top');
    const connectionCard = document.querySelectorAll('.connection-card');
    const bodyCard = document.querySelectorAll('.connection-card .card-body');
    

    elementCard.forEach( (element) => {
      this.renderer2.setStyle(element, 'text-align', 'center');
      this.renderer2.setStyle(element, 'padding', '15px');
      this.renderer2.setStyle(element, 'width', '20%');    
      this.renderer2.setStyle(element, 'min-width', '150px');    
    });

   imageCard.forEach( (element) => {
    this.renderer2.setStyle(element, 'padding', '10px');
    });

    connectionCard.forEach( (element) => {
      this.renderer2.setStyle(element, 'background', 'linear-gradient(0deg, #ffffff00, white)');
      this.renderer2.setStyle(element, 'border', 'none');
    });

    bodyCard.forEach( (element) => {
      this.renderer2.setStyle(element, 'padding-top', '0%');
      this.renderer2.setStyle(element, 'color', '#2e6a7e');
      this.renderer2.setStyle(element, 'font-weight', 'bold');
      this.renderer2.setStyle(element, 'font-size', '18px');
    });


    
  }

}
