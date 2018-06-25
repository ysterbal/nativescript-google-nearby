
export class MessageManager {
    private _messageManager: any;
    public init(key:string):Promise<boolean> {
        return new Promise((resolve, reject) => {
            try {
              resolve();
            } catch (ex) {
              console.error("Error: Initializing MessageManager!")
              reject(ex);
            }
          });
    }
}
