const jsConvert = require('js-convert-case');
const { v4: uuidv4 } = require('uuid');
let userArray = [{uname: "Pooja", emailId: "PooJa@gmail.com", cartId: ""},
{uname: "Poonit", emailId: "PooNIt@gmail.com", cartId: ""},
{uname: "Poonam", emailId: "PooNam@gmail.com", cartId: ""}];

for(let item of userArray)
{
 item.cartId = uuidv4();
}
for(let item of userArray)
{
    let msg = `UserId = ${jsConvert.toHeaderCase(item.uname)} , Email = ${jsConvert.toLowerCase(item.emailId)} , CartId = ${jsConvert.toUpperCase(item.cartId)}`;
    console.log(msg);
}
