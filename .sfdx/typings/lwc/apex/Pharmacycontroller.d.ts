declare module "@salesforce/apex/Pharmacycontroller.getclient" {
  export default function getclient(param: {clientId: any}): Promise<any>;
}
declare module "@salesforce/apex/Pharmacycontroller.getPharmacyOrder" {
  export default function getPharmacyOrder(param: {clientId: any}): Promise<any>;
}
declare module "@salesforce/apex/Pharmacycontroller.createOrderRec" {
  export default function createOrderRec(param: {orderRecord: any, OrderAccName: any, orderId: any}): Promise<any>;
}
