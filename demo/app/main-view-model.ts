import { Observable } from 'tns-core-modules/data/observable';
import { MessageManager}  from 'nativescript-google-nearby';

//declare GMSService:any;
export class HelloWorldModel extends Observable {
  public message: string;
  private count: number;
  public messageManager: MessageManager;

  constructor() {
    super();
    this.messageManager = new MessageManager(); 

    this.messageManager.init("AIzaSyBkGQjHLpSZKAxgoezKY_KTion9AM8lDnY");
    this.count = 0;
  }
  
  public startSubscription() {
    this.messageManager.subscribe(this.messageFoundHandler,this.messageLostHandler);
  }

  public onTap() {
    var message = "test-" + this.count;
    this.messageManager.publish(message, "Text");  
    this.message = "Message sent: " + message;
    this.notifyPropertyChange('message', this.message);
    this.count += 1;
  }

  public messageFoundHandler(msg:GNSMessage) : void {
    var message = NSString.alloc().initWithDataEncoding(msg.content,NSUTF8StringEncoding);
    console.log("Message found: " + message);
  };

  public messageLostHandler(msg:GNSMessage) : void {
    var message = NSString.alloc().initWithDataEncoding(msg.content,NSUTF8StringEncoding);
    console.log("Message lost: " + message);
  };
}
