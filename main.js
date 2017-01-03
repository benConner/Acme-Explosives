var promise1 = new Promise(function(resolve, reject){
  var request1 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request1.responseText).categories
    resolve(list)// pass the info we're waiting for to the resolve
  })
  request1.open("GET", "categories.json")
  request1.send()
})
var promise2 = new Promise(function(resolve, reject){
  var request1 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request1.responseText).types
    resolve(list)// pass the info we're waiting for to the resolve
  })
  request1.open("GET", "types.json")
  request1.send()
})
var promise3 = new Promise(function(resolve, reject){
  var request1 = new XMLHttpRequest()
  request1.addEventListener("load", function() {
    var list = JSON.parse(request1.responseText).products
    resolve(list)// pass the info we're waiting for to the resolve
  })
  request1.open("GET", "products.json")
  request1.send()
})

 promise1
  .then(
  function(val){
    categories = val
    console.log(categories)
    return promise2
  })
  .then(
  function(val){
    types = val
    console.log(types)
    return promise3
  })
  .then(
  function(val){
    products = val
    console.log(products)
  })
