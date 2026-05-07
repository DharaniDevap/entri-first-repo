const users = [
  { id: 1, name: "Amit" },
  { id: 2, name: "Riya" }
];
const products = [
  { name: "Pen", price: 20 },
  { name: "Bag", price: 800 },
  { name: "Bottle", price: 300 }
];
const nameArr = users.map(function(user){
  return user.name
})
console.log(nameArr)

let productlist = products.filter(pro=>pro.price<500)
console.log("products name ",productlist)
productlist.map(function(item){
  return item.name
})
console.log("----"+productlist)