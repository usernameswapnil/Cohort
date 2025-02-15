//assignment problem ka solution----->
const jwt=require("jsonwebtoken");
const zod=require("zod");
const secretpassword="secret";
const emailschema=zod.string();
const passwordschema=zod.string().min(6);
function signin(username,password){
    const usernameResponse=emailschema.safeParse(username);
    const passwordResponse=passwordschema.safeParse(password);

    if(!usernameResponse.success || !passwordResponse.success){
        console.log("Invalid Credentials");
    }
    else{
        console.log("valid Credentials");
    }
    const signature=jwt.sign(username,secretpassword);
    return signature;
}
//function to decode the token
function decodeJwt(token){
    const decoded=jwt.decode(token);
    if(decoded){
        return true;
    }
    else{
        return false;
    }
}
//function to verify the token
function verifyJwt(token){
    const ans=true;
    try{
        jwt.verify(token,secretpassword);    
    }
    catch(e){
        ans=false;
    }
    return ans;
}
const ans=signin("swapnil@gmail.com","cdcscdwcd");
console.log(ans);