const jwt=require("jsonwebtoken");
const verified=jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3dhcG5pbCIsImFjY291bnRudW1iZXIiOiIxMjM0NSIsImlhdCI6MTczOTYzNjI1MX0.cM13Oyt7xk-YBFbawShLUozeDPVlcabZa82z1GMpbEM","secret");
console.log(verified);