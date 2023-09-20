let items = JSON.parse(localStorage.getItem('games'));
console.log(items);

Object.keys(items).forEach((game) => {
    let gamelist = items[game];
    let f = document.querySelector('#game-list');
    console.log(items[game]);
    f.innerHTML += `
          <tr>
          <td id="top">#</td>
          <td>${gamelist.Name}</td>
          <td>${gamelist.Model}</td>
          <td class="image"><img src="${gamelist.img}" alt=""></td>
          <td>R ${gamelist.Price}.00</td>
          <td><button class="sec btn btn-primary"><ion-icon name="create-outline"></ion-icon></button></td>
          <td><button class="sec btn btn-danger"><ion-icon name="trash-outline"></ion-icon></button></td>
          </tr>
`
})