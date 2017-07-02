import { Injectable } from '@angular/core';
import { ContactUser } from "app/domains/contact.user";

const CURRENT_USER : ContactUser={name:"İsminiz",comment:"Mesajınız"};

@Injectable()
export class ContactService {

  constructor() { }

  getUser():ContactUser{
    return CURRENT_USER;
  }

  setUser(user:ContactUser){
    if(user){
      Object.assign(CURRENT_USER,user);
    }
  }

  sendMessagge(){
    // send http request for send email.
  }


}
