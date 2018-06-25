import { Observable } from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';

export interface MessageHandler {
}

export interface SubscriptionParam {
}

export interface MessageHandler {
}

export interface PublicationParam {
}

export interface Strategy {
}

export interface StrategyParam {
}

export interface Permission {
}

export interface Message {
}

export declare class MessageManager {
  _messageManager: any;
  public init(key:string):Promise<boolean>;
  public initWithSubscription(key:string,msgFoundHandler:(msg:GNSMessage) => void, msgLostHandler:(msg:GNSMessage) => void):Promise<boolean>;
  public publish(message:string,type:string):Promise<boolean>;
  public subscribe( messageFoundHandler:(msg:GNSMessage) => void, messageLostHandler:(msg:GNSMessage) => void):Promise<boolean>;
}