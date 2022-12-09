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

let info = [...new Set(item.map((item)=>
    {return item}))]

    let x = 0;
    document.getElementById('collect').innerHTML = item.map((item)=>
    {
        var {Name, Model, Price} = item;
        return(`
        <div class="col">
        <div class="card">
        <img
            src=""
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${Name}</h5>
            <h5 class="card-title">${Model}</h5>
            <p class="card-text">${Price}</p>` + 
            "<button onclick='addItems("+(x++)+")'>Add to cart</button>" +
       `</div>
        </div>
    </div>
    `)
    }).join('')

var checkings = [];

function showItems(b) {
  let x = 0;
  if (checkings.length == 0) {
    document.querySelector(checkingsItem).innerHTML =
      "Collect some items first";
  } else {
    document.querySelector(checkingsItem).innerHTML = checkings.map((items) => {
      var { Name, Model, Price } = items;
      return (
        `<div id="checkingsItem">
                      <h3>Checkout</h3>
                      <p>${Name} ${Model}<span class="price">R ${Price}.00</span></p>
                      <p>${Name} ${Model}<span class="price">R ${Price}.00</span></p>
                      <p>${Name} ${Model}<span class="price">R ${Price}.00</span></p>
                      <p>${Name} ${Model}<span class="price">R ${Price}.00</span></p>
                      <hr />
                      <p>
                        Total <span class="price" style="color: black"><b>412</b></span>
                      </p>` +
        "<ion-icon name='trash-outline' onclick='delElement(" +
        x++ +
        ")'></ion-icon></div>"
      );
    }).join('');
  }
}
function addItems(b) {
    showItems.push({...info[b]})
    checkings();
}
