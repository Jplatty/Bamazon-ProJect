var mysql = require("mysql");

var inquirer = require("inquirer");



var db = {

  connectedState: false,

  connection: null,

  createConnection: function() {

    this.connection = mysql.createConnection({

      host: "localhost",

      port: 3306,



      // Your username

      user: "root",



      // Your password

      password: "root",

      database: "bamazon_db"

    });

  },

  connect: function(cb) {

    var self = this;

    this.connection.connect(function(err) {

      if (err) throw err;

      self.connectedState = true;

      cb();

    });

  },



  disconnect: function() {

    this.connectedState = false;

    this.connection.end();

  }

}

db.createConnection();

db.connect(showMenu);



function showMenu() {

  var query;

  inquirer.prompt([

    {

      type: 'list',

      name: 'menu',

      message: "Menu Options",

      choices:["View Products for Sale", 'View Low Inventory', 'Add to Inventory', 'Add New Product', 'Exit']

    }

  ]).then(function(answer){

    switch (answer.menu) {

      case 'View Products for Sale':

      viewProducts();

      break;

      case 'View Low Inventory':

      viewLowInventory();

      break;

      case 'Add to Inventory':

      addToInventory();

      break;

      case 'Add New Product':

      addNewProduct();

      break;

      case 'Exit':

      db.disconnect();

      break;

    }

  });

}



function viewProducts(){

  db.connection.query("SELECT * FROM products;", function(err, res) {

    if(err){

      throw err;

    }

    console.log("\n                              \"ITEMS AVAILABLE TO PURCHASE\"");

    console.log("+------------------------------------------------------------------------------------------------------------+")

    console.log("      ITEM_ID      |", "    PRICE     |", "  STOCK_QUANTITY   |", "    DEPARTMENT_NAME   |", "    PRODUCT_NAME             ")

    console.log("|------------------------------------------------------------------------------------------------------------|")



    for(var i=0; i < res.length; i++){

      console.log("        "+res[i].item_id+"         ", "    "+res[i].price+ "              "+res[i].stock_quantity+ "                   "+res[i].department_name+ "                "+res[i].product_name);

      console.log("|------------------------------------------------------------------------------------------------------------|");

    }

    showMenu();

  });

}



function viewLowInventory(){

  db.connection.query("SELECT * FROM products WHERE stock_quantity < 5", function(err, res) {

    if(err){

      throw err;

    }

    console.log("\n                \"LOW INVENTORY PRODUCTS\"");

    console.log("+------------------------------------------------------------------------------------------------------------+")

    console.log("      ITEM_ID      |", "    PRICE     |", "  STOCK_QUANTITY   |", "    DEPARTMENT_NAME   |", "    PRODUCT_NAME             ")

    console.log("|------------------------------------------------------------------------------------------------------------|")



    for(var i=0; i < res.length; i++){

      console.log("        "+res[i].item_id+"         ", "    "+res[i].price+ "              "+res[i].stock_quantity+ "                   "+res[i].department_name+ "                "+res[i].product_name);

      console.log("|------------------------------------------------------------------------------------------------------------|");

    }

    showMenu();

  });

}

function addToInventory() {

  inquirer.prompt([

    {

      type: 'input',

      name: 'itemID',

      message: 'What is the item ID?'

    },

    {

      type: 'input',

      name: 'quantity',

      message: 'How many would you like to add?'

    }

  ]).then(function(answers){

    var  quantity = answers.quantity;

    var itemID = answers.itemID;

    db.connection.query("UPDATE products SET stock_quantity= stock_quantity+"+quantity+" Where item_id="+itemID+"",

    function(err, res){

      if(err){

        throw err;

      }

      if(res.serverStatus == 2){

        db.connection.query("SELECT * FROM products WHERE item_id=?",[itemID], function(err, res) {

          console.log("\n Your item has been updated!")

          if(err){

            throw err;

          }

          console.log("\n                                 \"UPDATED PRODUCT\"");

          console.log("+------------------------------------------------------------------------------------------------------------+")

          console.log("      ITEM_ID      |", "    PRICE     |", "  STOCK_QUANTITY   |", "    DEPARTMENT_NAME   |", "    PRODUCT_NAME             ")

          console.log("|------------------------------------------------------------------------------------------------------------|")



          for(var i=0; i < res.length; i++){

            console.log("        "+res[i].item_id+"         ", "    "+res[i].price+ "              "+res[i].stock_quantity+ "                   "+res[i].department_name+ "                "+res[i].product_name);

            console.log("|------------------------------------------------------------------------------------------------------------|");

          }

          showMenu();

        });

      }

    });

  });

}



function addNewProduct() {

  inquirer.prompt([

    {

      type: 'input',

      name: 'itemName',

      message: 'What is the name of the item?'

    },

    {

      type: 'list',

      name: 'departmentNme',

      message: 'What department you would like the item to be listed in?',

      choices:['Electronics','Furniture','Cosmitec','Auto']

    },

    {

      type: 'input',

      name: 'price',

      message: 'What is the item price?'

    },

    {

      type: 'input',

      name: 'quantity',

      message: 'How many items are available?'

    }

  ]).then(function(answers){

    db.connection.query("INSERT INTO `products`(`product_name`,`department_name`,`price`, `stock_quantity`) VALUES('"+answers.itemName+"','"+answers.departmentNme+"','"+answers.price+"','"+answers.quantity+"')", function(err, res){

      if(err){

        throw err;

      }

      if(res.serverStatus == 2){

        console.log("\n Your item has been added!")

        db.connection.query("SELECT * FROM products WHERE product_name=?",[answers.itemName], function(err, res) {

          if(err){

            throw err;

          }

          console.log("\n                                 \"ADDED PRODUCT\"");

          console.log("+------------------------------------------------------------------------------------------------------------+")

          console.log("      ITEM_ID      |", "    PRICE     |", "  STOCK_QUANTITY   |", "    DEPARTMENT_NAME   |", "    PRODUCT_NAME             ")

          console.log("|------------------------------------------------------------------------------------------------------------|")



          for(var i=0; i < res.length; i++){

            console.log("        "+res[i].item_id+"         ", "    "+res[i].price+ "              "+res[i].stock_quantity+ "                   "+res[i].department_name+ "                "+res[i].product_name);

            console.log("|------------------------------------------------------------------------------------------------------------|");

          }

          showMenu();

        });

      }

    });

  });

}