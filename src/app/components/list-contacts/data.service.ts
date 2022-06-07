import { Injectable } from '@angular/core';
import { ContactsI, User } from 'src/app/models'; 
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  private urlAPI = 'https://fakecontactsspq.z6.web.core.windows.net/contactos.json'
  
  constructor( private http: HttpClient ) {}
  
  getAllContacts(){
    
    return this.http.get<ContactsI>(this.urlAPI)
            .pipe(
              map( (resp:  any) => 
              {
                return resp.contacts.map( (user: any) => {
                   return new User(
                    user.id, user.age, user.name,
                    user.gender, user.company,
                    user.email, user.photo, user.connections
                      )
                }).sort
                  (
                    (a: { name: number; },b: { name: number; }) => 
                    (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)
                  )
              })  
            )
  }
}


 