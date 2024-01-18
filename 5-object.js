
// object
let colors = {
  name: "red",
  hexValue: "#FF000",
  rgbValue: "rgb(255,0,0)"
}
console.log(colors)

let myWatch = {
  name: "cassio",
  price: 50000,
  modelNumber: 234,
  type: "analog"
}
console.log(myWatch)
myWatch.price = "hundred";
console.log("After Change", myWatch);

let user1 = "Ram"
user1 = {
  name: "Ram",
  permanentAddress: {
    province: 1,
    district: "Jhapa",
    street: "putalisadak"
  },
  temporaryAddress: {
    province: 3,
    district: "Kathmandu",
    street: "xyz"
  },
}
console.log(user1);
console.log(user1.temporaryAddress.district);
console.log(user1.permanentAddress.district);

console.log(`Ram is from jhapa`);
let input1 = 1;
let input2 = 100;
sum = input1 + input2;
console.log(`sum of ${input1}+${input2}=${sum}`);

let users2 = ["ram", "sita", "hari"]
users3 = {
  name: "Ram",
  Ph: 9812323,
  Address: "Sanepa"
}


