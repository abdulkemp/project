localStorage.setItem('games', JSON.stringify([
    {
        "Name" : "Xbox",
        "Model": "Series X",
        "Price": 11999,
        "img" : "https://i.postimg.cc/vHhJWTz0/xboxseriesx-cnslcntlr-anl-rgb-afdf.jpg"
    },
    {
        "Name" : "Nintendo",
        "Model": "Switch",
        "Price": 8499,
        "img" : "https://i.postimg.cc/W30Kt1z6/Nintendo-Switch-Console-Docked-w-Joy-Con-RB.jpg"
    },
    {
        "Name" : "Pc",
        "Model": "Gaming PC",
        "Price": 4320,
        "img" : "https://i.postimg.cc/251NjYn2/41xi6h-Imxb-L-SX450.jpg"
    },
    {
        "Name" : "Playstion",
        "Model": 5,
        "Price": 17999,
        "img" : "https://i.postimg.cc/P5qBKHVT/ps5.webp"
    },
    {
        "Name" : "God Of War",
        "Model": "Ragnorok",
        "Price": 1369,
        "img" : "https://i.postimg.cc/9Fc3RZG4/Ragnarok-ps5.webp"
    },
    {
        "Name" : "Call Of Duty",
        "Model": "Modern Warefare 2",
        "Price": 1379,
        "img" : "https://i.postimg.cc/Hx5G5tZM/Call-of-Duty-MW-2.webp"
    },
    {
        "Name" : "FIFA",
        "Model": 23,
        "Price": 1069,
        "img" : "https://i.postimg.cc/4yTD1hqS/FIFA-23-Xbox-Series-X.jpg"
    },
    {
        "Name" : "MarioKart",
        "Model": "Deluxe",
        "Price": 1000,
        "img" : "https://i.postimg.cc/nhwNPWN7/Guide-21.webp"
    }
]));

let ind = JSON.parse(localStorage.getItem('games'));

console.log(ind);

Object.keys(ind).forEach((game) => {
    let collect = ind[game];
    let d = document.querySelector('#gaming');
    console.log(ind[game]);
    d.innerHTML += `
    <div class="col">
        <div class="card">
        <img
            src="${collect.img}"
            class="card-img-top"
            alt="..."
        />
        <div class="card-body">
            <h5 class="card-title">${collect.Name}</h5>
            <h5 class="card-title">${collect.Model}</h5>
            <p class="card-text">R ${collect.Price}.00</p>` + 
            "<button id='record' onclick='addToCart(items)'>Add to cart</button>" +
        `</div>
        </div>
    </div>
    `

})