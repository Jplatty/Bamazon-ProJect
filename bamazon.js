var inquirer = require("inquirer");





inquirer.prompt([

  {

    type:'list',

    name: 'user',

    message:'Are you a Customer or Manager?',

    choices:['Customer', 'Manager']

  }

]).then(function(answer){

  switch (answer.user) {

    case 'Customer':

    require('./bamazonCustomer.js');

    break;

    default: var customer = require('./bamazonCustomer.js');



    case 'Manager':

    validate()

    break;



  }

});



function validate() {

  inquirer.prompt([

    {

      type:'input',

      name: 'username',

      message:'Please enter your username'

    },

    {

      type:'password',

      name: 'password',

      message:'Please enter your password'

    }
//Promise for managers function
  ]).then(function(answer) {

    if(answer.password == 'manager' && answer.username == answer.username){

      var date = new Date();

      console.log('\n \" Managers Dashboard\"\n Welcome back '+answer.username+'!\n ',date.toDateString()+"\n ", date.toLocaleTimeString()+"\n -------------------------------------- \n");

      require('./bamazonManager.js');

    }

    else {

      console.log('\n Sorry your user name or password is wrong!');

    }

  })

}