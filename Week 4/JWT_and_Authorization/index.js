const jwt=require("jsonwebtoken");
const value={
    name:"Swapnil",
    accountnumber:"12345",
}
const token=jwt.sign(value,"secret");
console.log(token);

//a person goes to the bank gives his name and accountnumber to the bank, in return the bank gives a checkbook. The next time the person comes this checkbook is used for verification of the person 

// here this checkbook is the token

/*How JWT Works in Authentication
User logs in → The server verifies credentials.
Server generates a JWT and sends it to the client.
Client stores the JWT (e.g., local storage, HTTP-only cookie).
Client sends JWT in requests (e.g., in Authorization header).
Server verifies JWT and processes the request.*/

/*
Role of the Secret Key
When signing a JWT using HMAC (e.g., HS256, HS384, HS512), the secret key is used to create a unique signature.
The same secret key is required to verify the token later.
If someone tries to modify the JWT without the correct secret, verification will fail */
