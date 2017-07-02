import { Component, OnInit } from '@angular/core';
import { ContactUser } from "app/domains/contact.user";
import { ContactService } from "app/services/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[ContactService]
})
export class ContactComponent {

    private cUser = new ContactUser();

    private contactService:ContactService;

  log(){
    console.log("Gelen Deger :" );
  }
  sendContactMessage(){
    alert("Sending Form : "+JSON.stringify(this.cUser));
    
    this.contactService.setUser(this.cUser);
    this.contactService.sendMessagge();
  }

}
