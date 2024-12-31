const products = [
    { name: "Apple", price: 1.2 },
    { name: "Banana", price: 0.8 },
    { name: "Cherry", price: 2.5 },
    { name: "Date", price: 3.0 },
    { name: "Eggplant", price: 1.8 }
  ];
  
  const productList = document.getElementById("productList");

  function displayProducts(elem) {
    productList.innerHTML = "";
  
    elem.forEach(function(dets){
      const li = document.createElement("li");
      li.textContent = `${dets.name} - $${dets.price.toFixed(2)}`;
      productList.appendChild(li);
    });
  }
  displayProducts(products);

  const input = document.getElementById("searchInput");
  
   input.addEventListener("input", function(event){  
    const golden = event.target.value.toLowerCase(); 
    const filteredProducts = products.filter(function(elem){
      return elem.name.toLowerCase().includes(golden);
   });
   
    displayProducts(filteredProducts);
  });
  