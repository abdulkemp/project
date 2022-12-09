localStorage.setItem(
  "check",
  JSON.stringify([
    {
      id: 1,
      Name: "Xbox",
      Model: "Series X",
      Price: 11999,
    },
    {
      id: 2,
      Name: "Nintendo",
      Model: "Switch",
      Price: 8499,
    },
    {
      id: 3,
      Name: "Pc",
      Model: "Gaming PC",
      Price: 4320,
    },
    {
      id: 4,
      Name: "Playstion",
      Model: 5,
      Price: 17999,
    },
    {
      id: 5,
      Name: "God Of War",
      Model: "Ragnorok",
      Price: 1369,
    },
    {
      id: 6,
      Name: "Call Of Duty",
      Model: "Modern Warefare 2",
      Price: 1379,
    },
    {
      id: 7,
      Name: "FIFA",
      Model: 23,
      Price: 1069,
    },
    {
      id: 8,
      Name: "MarioKart",
      Model: "Deluxe",
      Price: 1000,
    },
  ])
);

let type = JSON.parse(localStorage.getItem("check"));
console.log(type);

Object.keys(type).forEach((game) => {
  let collect = type[game];
  let d = document.querySelector("#cart");
  console.log(type[game]);
  d.innerHTML += `
    <div class="container">
              <div id="collect">
                <h3>Checkout</h3>
                <p>${collect.Name}-${collect.Model}<span class="price">R ${collect.Price}.00</span></p>
                <hr />
                <p>
                  Total <span class="price" style="color: black"><b></b></span>
                </p>
              </div>
            </div>`;
});
