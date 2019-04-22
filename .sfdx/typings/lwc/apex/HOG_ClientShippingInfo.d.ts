declare module "@salesforce/apex/HOG_ClientShippingInfo.getOrderDetails" {
  export default function getOrderDetails(param: {RecordId: any}): Promise<any>;
}
declare module "@salesforce/apex/HOG_ClientShippingInfo.getAccountInfo" {
  export default function getAccountInfo(param: {ClientId: any}): Promise<any>;
}
declare module "@salesforce/apex/HOG_ClientShippingInfo.saveClientToOrder" {
  export default function saveClientToOrder(param: {ClientId: any, OrderId: any}): Promise<any>;
}
