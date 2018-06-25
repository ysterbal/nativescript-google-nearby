
import { Message } from './google-nearby.common';

export class MessageManager {

    private _messageManager:GNSMessageManager;

    constructor() {
        console.log("NearbyMessages Initialized");
    }
    
    public init(key:string):Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
              //GNSMessageManager.setDebugLoggingEnabled(true);
              this._messageManager = GNSMessageManager.alloc().initWithAPIKey(key);
              resolve(true);
            } catch (ex) {
              console.error("Error: Initializing MessageManager!")
              reject(ex);
            }
          });
    }

    public initWithSubscription(key:string,msgFoundHandler:(msg:GNSMessage) => void, msgLostHandler:(msg:GNSMessage) => void):Promise<boolean> {
        return new Promise((resolve, reject) => { 
            try {
                //GNSMessageManager.setDebugLoggingEnabled(true);
                this._messageManager = GNSMessageManager.alloc().initWithAPIKey(key);
                console.log("Starting subscription!");
                let sid = this._messageManager.subscriptionWithMessageFoundHandlerMessageLostHandler(msgFoundHandler ,msgLostHandler);
                console.log("Subscribtion Id: "+ sid);
                resolve(true);
              } catch (ex) {
                console.error("Error: Initializing MessageManager!")
                reject(ex);
              }
        });
    }

    public publish(message:string, type:string):Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
                var messageData = NSString.alloc().initWithString(message);
                var data = messageData.dataUsingEncoding(NSUTF8StringEncoding);
                var msg = GNSMessage.messageWithContent(data);
                this._messageManager.publicationWithMessage(msg);
                resolve(true);
            } catch (ex) {
                console.error("Error: Sending Message!")
                reject(ex);
            }
          });
    }
 
    public subscribe(msgFoundHandler:(msg:GNSMessage) => void, msgLostHandler:(msg:GNSMessage) => void):Promise<boolean> {
        return new Promise((resolve, reject) => {
            console.log("Starting subscription!");
            try {
                let sid = this._messageManager.subscriptionWithMessageFoundHandlerMessageLostHandler(msgFoundHandler ,msgLostHandler);
                console.log("Subscribtion Id: "+ sid);
                resolve(true);
            } catch (ex) {
                console.error("Error: Starting Subscription!");
                reject(ex);
            }
        });
    } 
}
