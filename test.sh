#!/bin/bash
product="{\"name\": \"nnn\", \"description\": \"ppp\", \"price\": 14900, \"cost\": 10000, \"stock\": 100}"
quantity="{\"quantity\": 5}"

echo "Testing getProducts()"
curl http://localhost:8080/product
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting getDetails(id = 1)"
curl http://localhost:8080/product/1
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting addProduct(name, description, price, cost, stock)"
curl -d "$product" -H "Content-Type: application/json" http://localhost:8080/product
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting getProducts() to see if we still have the product we added"
curl http://localhost:8080/product
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting sell(quantity = 5)"
curl -d "$quantity" -H "Content-Type: application/json" http://localhost:8080/product/sell/1
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting getDetails(id = 1) to see if we sold five items"
curl http://localhost:8080/product/1
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting restock(quantity = 5)"
curl -d "$quantity" -H "Content-Type: application/json" http://localhost:8080/product/restock/1
echo -e "\n"
read -p "Press Enter to continue..."

echo -e "\nTesting getDetails(id = 1) to see if we restocked five items"
curl http://localhost:8080/product/1
echo -e "\n"
read -p "Press Enter to continue..."