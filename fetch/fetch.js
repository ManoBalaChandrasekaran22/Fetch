fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((data)=>{
        data.map((value)=>{
           let card = `<div class="card" style="width: 18rem;">
  <img src="${value.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${value.title}</h5>
    <p class="card-text">${value.descriptin}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
            document.getElementById("main-div").innerHTML += card;
        })
    })