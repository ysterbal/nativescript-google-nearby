import { Observable } from 'tns-core-modules/data/observable';
import { GoogleNearby } from 'nativescript-google-nearby';

export class HelloWorldModel extends Observable {
  public message: string;
  private googleNearby: GoogleNearby;

  constructor() {
    super();

    this.googleNearby = new GoogleNearby();
    this.message = this.googleNearby.message;
  }
}
