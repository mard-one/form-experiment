import { Child } from "./child";


export class User {
  constructor(public name?: string, public nationality?: string, public gender?:string, public dateOfBirth?: Date, public mobileNumber?: number, public email?: string, public child?: Child[]){

  }
}
