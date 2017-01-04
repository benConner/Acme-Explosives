var categories;
var types;
var products;

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
  .then(selectMenu)

  function selectMenu(){
    for (var i = 0; i < categories.length; i++) {
        $("#cat-list").append(`<option>${categories[i].name}</option>`)
    }
    $("#cat-list").change(pagePopulate)
  }

function pagePopulate(e){
    $("#explosives").empty()
    var  targVal;

    if(e.target.value === "Fireworks"){
        targVal = 0;
    }else if(e.target.value === "Demolition"){
        targVal = 1;
     }
    for (var i = 0; i < types.length; i++) {
        console.log(types[i].id)
        if(types[i].category === targVal){
            $("#explosives").append(`<div class="col-sm-4">
                                    <h2>
                                        Type name:${types[i].name}
                                    </h2>
                                    <div>
                                        Basic Description: ${types[i].description}
                                    </div>
                                    <div class=${types[i].name}></div>
                                    </div>`)

            for (var q = 0 in products[0]) {
                if (types[i].id === products[0][q].type){
                    console.log(types[i].name)
                    $("."+types[i].name).append(`<div>
                                                    Name: ${products[0][q].name}
                                                </div>
                                                <div>
                                                    Description: ${products[0][q].description}
                                                </div>
                                                <div>
                                                    Stock: ${products[0][q].stock}
                                                </div>`)
                }
            }
        }
    }
}
