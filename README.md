# REST Easy: Intro to APIs with JavaScript
Welcome to this workshop! Today, we will be looking at Electrocharged, a fast-growing tech accessories store.

## Electrocharged: Lightning-Fast Accessories 
Electrocharged runs an online store and a brick-and-mortar store in the City of Lightning. Customers can use the online store to buy products that Electrocharged ships out to them. Electrocharged also serves customers coming into their physical store. Their physical store also serves as a warehouse for all their goods.

Because keeping the systems that run both the online and physical stores separate would lead to problems with inventory, Electrocharged's online store has an Application Programming Interface (API) designed to allow sales and restocks done in the physical store to be logged in the online store. This means the data used across both stores remains the same. No more selling off stuff they don't have!

## The API
Electrocharged's store API is coded in the main.js file and consists of the following functions:

* GET /product  
  This returns all the products Electrocharged sells and their details.
* GET /product/:id  
  This returns the details of just one product, based on the ID provided.
* POST /product  
  This creates a new product.
* POST /product/sell/:id  
  This logs a product sale in the system.
* POST /product/restock/:id  
  This logs a restock in the system for a particular product.

You can run `npm start` to start the server and begin testing out the API.

## What We'll Do
While business has been good for Electrocharged, the owner has come to us saying that the API has not been working properly as of late. They say the API is allowing employees at the store to sell more products than they actually have.

Try to find and fix the problematic API function. If you can suggest other improvements, even better!
