let checkDisplay = document.getElementById('checkDisplay')

let ind = JSON.parse(localStorage.getItem('checkout'));


Object.keys(ind).forEach((item) => {
    let gamelist = ind[item];
    checkDisplay.innerHTML += `
    <div class="checkout">
                    <div class="image">
                        <img src="${gamelist.img}" alt="">
                    </div>
                    <div class="title">
                        <h3>${gamelist.Name}</h3>
                    </div>
                    <div class="title">
                        <p>${gamelist.Model}</p>
                    </div>
                    <div class="quantity">
                        <input type="number" name="" id="" placeholder="1">
                    </div>
                    <div class="amount">
                        <h3>Amount:</h3>
                        <p class="card-text">R ${gamelist.Price}.00</p>
                    </div>
                    <div class="delete">
                    <button id="delete" class="del btn btn-danger">Delete</button>
                    </div>
    </div>
    `
})