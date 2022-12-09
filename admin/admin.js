let items = JSON.parse(localStorage.getItem('games'));
console.log(items);

Object.keys(items).forEach((game) => {
    let gamelist = items[game];
let f = document.querySelector('#game-list');
console.log(items[game]);
f.innerHTML += `
<div class="table-responsive">
          <tbody id="game-list">
          <tr>
          <td>#</td>
          <td>${gamelist.Name}</td>
          <td>${gamelist.Model}</td>
          <td>${gamelist.img}</td>
          <td>R ${gamelist.Price}.00</td>
          <td><button><ion-icon name="create-outline"></ion-icon></button></td>
          <td><button><ion-icon name="trash-outline"></ion-icon></button></td>
          </tr></tbody>
        
    </div>
`
})