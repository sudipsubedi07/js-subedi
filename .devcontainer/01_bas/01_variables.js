const accountId = 144553
let accountEmail = "sudip@google.com"
var accountPassword = "12345"
accountCity = "Gaindakot"
let accountState;

// accountId = 2 // not allowed


accountEmail = "ic@ic.com"
accountPassword = "21212121"
accountCity = "Nawalpur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])