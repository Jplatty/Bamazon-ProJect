# Bamazon
A command line application that helps customers order products from **Bamazon** and deplete stock from the store's inventory and provide access to managers to *view products for sale*, *view low inventory*, *add to inventory*, *add new products*.

## Installation
* Download the project and CD to project folder and run ```npm install```
* Then run ```node bamazon.js``` 

## Initial View
![1 bamazon main page](https://user-images.githubusercontent.com/41643506/51793563-22316c80-2177-11e9-8b86-45cf5d14f74e.png)


## Customers View
Customers have to choose customer user to order through **Bamazon**


Then **Bamazon** will display all the products are available for sale, welcome customers, display the date and time at the moment of logging and start their order by asking first what's the *item id* that they would like to purchase.



Then customers have to enter how many they would like to purchase



If **Bamazon** does not have enough products



**Bamazon** will let customers know that the store does not have the quantity they asked for and let them know how many products are left in stock



If **Bamazon** have the quantity customers asks for will provide them with total of their purchase and ask how they would like to pay



After choosing payment method **Bamazon** will process the payment and thank customers for shopping at **Bamazon**.


## Managers View

When managers choose manager user to load the managers dashboard they have to enter their user name and password


If the user name or password or both does not match the manager login **Bamazon** will let the users know they entered the wrong credentials


If the user name and password match the manager login **Bamazon** will display to the user the Managers Dashboard and welcome them and show them date and time at the moment of loggin in and display the Managers Menu options *view products for sale*, *view low inventory*, *add to inventory*, *add new products*. Whatever they choose **Bamazon** will send them back to the menu option after they are done with task they do until they choose **_Exit_** which is will exit the app


If they choose to *view products for sale* **Bamazon** will list all the products are available for sale



If they choose to *view low inventory*



**Bamazon** will list all items with an inventory count lower than five


If they choose to *add to inventory*



**Bamazon** will ask users two questions, what is the *item id* and *quantity* to be added as shown in the pictures below an example of a product before adding and after adding



Here you can see the updated item with difference in the *stock quantity* between the two and let the user that their add has been successfully processed



If they choose to *add new products* **Bamazon** will gather information about the product they need to add as shown in the pictures below, *product name*, *department name*, *price*, *quantity*


After getting all the information **Bamazon** will let the users know when their add is successfully processed.


Finally if users are done with all the tasks they need to be done they can choose **_Exit_** to exit the app.

