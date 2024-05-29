// Default array of items (uncomment if needed to use as a default)
// let Arr = [
//     {
//         id: 1,
//         photo: 'https://lab.marsit.uz/media/shop/-Mars%20rug-/Shop_rug.png',
//         name: 'Mars rug',
//         cost: '100 coins',
//         available: '8 dona mavjud',
//     },
//     {
//         id: 2,
//         photo: 'https://lab.marsit.uz/media/shop/-Keyboard%20Sticker-/Shop_keyboard_sticker.png',
//         name: 'Keyboard sticker',
//         cost: '49 coins',
//         available: '22 dona mavjud',
//     },
//     {
//         id: 3,
//         photo: 'https://lab.marsit.uz/media/shop/-Mars%20Watch-/Shop_smart_watch.png',
//         name: 'Smart watch',
//         cost: '899 coins',
//         available: '3 dona mavjud',
//     },
// ];

// Select the required DOM elements
// let id = document.querySelector('.id');
// let photo = document.querySelector('.inp_photo'); // Add this line
// let name = document.querySelector('.inp_name');
// let cost = document.querySelector('.inp_cost');
// let available = document.querySelector('.inp_available');
// let btn = document.querySelector('.btn');
// let wrapper = document.querySelector('.wrapper');

// // Get the array of items from localStorage or use an empty array
// let arr = JSON.parse(localStorage.getItem('users')) || [];

// // Function to read and render the items
// let ReadFunction = () => {
//     wrapper.innerHTML = '';

//     arr.map((v) => {
//         let div = document.createElement('div');
//         div.innerHTML = `
//             <div>
//                 <p>id: ${v.id}</p>
//                 <img src="${v.photo}" alt="${v.name}" />
//                 <p>Name: ${v.name}</p>
//                 <p>Cost: ${v.cost}</p>
//                 <p>Available: ${v.available}</p>
//             </div>
//         `;
//         wrapper.appendChild(div);
//     });
// }

// // Call the ReadFunction to initially render the items
// ReadFunction();

// // Function to add a new item
// let AddFunction = () => {
//     let obj = {
//         id: id.value,
//         photo: photo.value, // Change img to photo
//         name: name.value,
//         cost: cost.value,
//         available: available.value
//     };

//     arr.push(obj);
//     localStorage.setItem('users', JSON.stringify(arr));
//     ReadFunction();
// };

// // Add event listener to the button
// btn.addEventListener('click', () => {
//     AddFunction();
// });



document.getElementById('create-card').addEventListener('click', function () {
    const id = document.getElementById('id').value;
    const url = document.getElementById('url').value;
    const name = document.getElementById('name').value;
    const cost = document.getElementById('cost').value;

    if (id && url && name && cost) {
        const cardContainer = document.getElementById('cards-container');

        const card = createCardElement(id, url, name, cost);
        cardContainer.appendChild(card);

        saveCardToLocalStorage(id, url, name, cost);

        document.getElementById('id').value = '';
        document.getElementById('url').value = '';
        document.getElementById('name').value = '';
        document.getElementById('cost').value = '';
    }
});

function createCardElement(id, url, name, cost) {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = url;
    img.alt = name;

    const idElement = document.createElement('p');
    idElement.textContent = `ID: ${id}`;

    const nameElement = document.createElement('h3');
    nameElement.textContent = name;

    const costElement = document.createElement('p');
    costElement.textContent = `Narxi: $${cost}`;

    card.appendChild(img);
    card.appendChild(idElement);
    card.appendChild(nameElement);
    card.appendChild(costElement);

    return card;
}

function saveCardToLocalStorage(id, url, name, cost) {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    cards.push({ id, url, name, cost });
    localStorage.setItem('cards', JSON.stringify(cards));
}

function loadCardsFromLocalStorage() {
    const cards = JSON.parse(localStorage.getItem('cards')) || [];
    const cardContainer = document.getElementById('cards-container');
    cards.forEach(cardData => {
        const card = createCardElement(cardData.id, cardData.url, cardData.name, cardData.cost);
        cardContainer.appendChild(card);
    });
}

window.addEventListener('load', loadCardsFromLocalStorage);
