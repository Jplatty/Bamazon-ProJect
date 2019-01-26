//installed npm packages
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

      password: "PAqman24",

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

db.connect(showItemsForSale);



function showItemsForSale(){

  db.connection.query("SELECT * FROM products;", function(err, res) {

    if(err){

      throw err;

    }

    console.log("\n             \"ITEMS AVAILABLE TO PURCHASE\"");

    console.log("+---------------------------------------------------------+")

    console.log("      ITEM_ID      |", "    PRICE     |", "    ITEM_NAME         ")

    console.log("|---------------------------------------------------------|")



    for(var i=0; i < res.length; i++){

      console.log("        "+res[i].item_id+"         ", "    "+res[i].price+ "          "+res[i].product_name);

      console.log("|---------------------------------------------------------|");

    }

    handleCustomerOrder();

  })

}



function handleCustomerOrder(){

  var date = new Date();

  console.log('\n Welcome to Bamazon!\n ',date.toDateString()+"\n ", date.toLocaleTimeString()+"\n -------------------------------------- \n");

  inquirer.prompt([

    {

      type:'input',

      name: 'itemID',

      message:'What is the ITEM ID you would like to purchase?'

    },

    {

      type:'input',

      name: 'quantity',

      message:'How many would you like to purchase?'

    }

  ]).then(function(answers){

    db.connection.query("SELECT * FROM products WHERE item_id = ?", [answers.itemID], function(err, res){

      if(err){

        throw err;

      }

      var quantity = res[0].stock_quantity;

      var itemPrice = res[0].price;

      if(answers.quantity <= quantity){

        quantity -= answers.quantity;

        db.connection.query('UPDATE products SET ? WHERE ?',

        [{

          stock_quantity: quantity

        },

        {

          item_id: answers.itemID

        }

      ],

      function(err, res){

        if(err){

          throw err;

        }

        if(res.serverStatus == 2){

          console.log("\n  YOUR TOTAL: $"+ answers.quantity * itemPrice,"\n");

          inquirer.prompt([

            {

              type:'list',

              name: 'payment',

              message:'How would you like to make your payment?',

              choices:['Credit Card', 'PayPAl', 'Electronic Check']

            }

          ]).then(function(answers){

            console.log("\n "+"Processing your payment ....\n"+" Your payment was successfully made on",date.toDateString(), date.toLocaleTimeString(), "\n Thank you! for shopping with Bamazon!");

            db.disconnect();

          });

        }

      });

    }

    else {

      console.log("Insufficient quantity!!\n","Quantity: ",quantity);

      handleCustomerOrder();

    }

  });

});

}