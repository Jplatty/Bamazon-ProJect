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

![customer main page](https://user-images.githubusercontent.com/41643506/51793580-818f7c80-2177-11e9-9686-ff470ce0222f.png)

Then customers have to enter how many they would like to purchase

If **Bamazon** does not have enough products it will let customers know that the store does not have the quantity they asked for 

![customer insufficient quantity](https://user-images.githubusercontent.com/41643506/51793576-789eab00-2177-11e9-9ade-4410c5fdef95.png)

If **Bamazon** have the quantity customers asks for will provide them with total of their purchase and ask how they would like to pay

![customer item purchase](https://user-images.githubusercontent.com/41643506/51793578-7b999b80-2177-11e9-9534-b45f20a4d3b1.png)


After choosing payment method **Bamazon** will process the payment and thank customers for shopping at **Bamazon**.


## Managers View

When managers choose manager user to load the managers dashboard they have to enter their user name and password

![2 manager main page](https://user-images.githubusercontent.com/41643506/51793574-72a8ca00-2177-11e9-8365-b851e1ee4962.png)

If the user name or password or both does not match the manager login **Bamazon** will let the users know they entered the wrong credentials

If the user name and password match the manager login **Bamazon** will display to the user the Managers Dashboard and welcome them and show them date and time at the moment of loggin in and display the Managers Menu options *view products for sale*, *view low inventory*, *add to inventory*, *add new products*. Whatever they choose **Bamazon** will send them back to the menu option after they are done with task they do until they choose **_Exit_** which is will exit the app

![manager option 1](https://user-images.githubusercontent.com/41643506/51793583-86543080-2177-11e9-8563-151ab96ed095.png)

If they choose to *view products for sale* **Bamazon** will list all the products are available for sale

![manager option 2](https://user-images.githubusercontent.com/41643506/51793585-8bb17b00-2177-11e9-942f-bc043b6d1089.png)

If they choose to *view low inventory*

**Bamazon** will list all items with an inventory count lower than five

![manager option 3](https://user-images.githubusercontent.com/41643506/51793586-91a75c00-2177-11e9-9f29-280654280f66.png)

If they choose to *add to inventory*

**Bamazon** will ask users two questions, what is the *item id* and *quantity* to be added as shown in the pictures below an example of a product before adding and after adding

Here you can see the updated item with difference in the *stock quantity* between the two and let the user that their add has been successfully processed

![manager option 4](https://user-images.githubusercontent.com/41643506/51793589-9a982d80-2177-11e9-8bb0-fb25db3d6a6c.png)

If they choose to *add new products* **Bamazon** will gather information about the product they need to add as shown in the pictures below, *product name*, *department name*, *price*, *quantity*

After getting all the information **Bamazon** will let the users know when their add is successfully processed.


Finally if users are done with all the tasks they need to be done they can choose **_Exit_** to exit the app.

