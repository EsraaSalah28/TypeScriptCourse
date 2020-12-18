class Customer {

 firstName : String;
 lastName: String;

 constructor(theFirst:String ,theLast:string)
 {
    this.firstName=theFirst;
    this.lastName=theLast;
  

 }


}

let myCustomer = new Customer("Salah","baba");



console.log(myCustomer.firstName);
console.log(myCustomer.lastName);

