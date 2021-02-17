let body = document.getElementsByTagName("body")[0];
let cardTemp;

/*
    Functions
 */

function openCardFooter(cardItem) {
    cardItem.getElementsByClassName('card-footer')[0].style.display = 'block';
}

function closeCardFooter(cardItem) {
    cardItem.getElementsByClassName('card-footer')[0].style.display = 'none';
}

function showModal(cardItem) {
    loadModalValues(cardItem);
    document.getElementById("mainModal").style.display = "block";

    body.style.position = "static";
    body.style.height = "100%";
    body.style.overflow = "hidden";
}

function resetFormModal() {
    document.getElementById('background').value = '';
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
    document.getElementById('category').value = '';
}

function closeModal(saveForm = false) {
    if (saveForm) {
        saveModalValues(cardTemp);
        resetFormModal();

    } else {
        resetFormModal();
    }

    document.getElementById("mainModal").style.display = "none";

    body.style.position = "inherit";
    body.style.height = "auto";
    body.style.overflow = "visible";

    // Vacia la variable temporal
    cardTemp = "";
}

function printModalValues(cardItem, idCard) {
    cardItem.getElementsByClassName('card-body cardImg')[0].style.backgroundImage = cardsList[idCard].background;
    cardItem.getElementsByClassName('card-title')[0].innerText = cardsList[idCard].title;
    cardItem.getElementsByClassName('card-text')[0].innerText = cardsList[idCard].description;
    cardItem.getElementsByClassName('card-link')[0].innerText = cardsList[idCard].category;

    reloadMain();
}

function saveModalValues(cardItem) {
    let indexToCardsList = cardItem.id.substr(5, cardItem.id.length);

    cardsList[indexToCardsList].background = document.getElementById('background').value;
    cardsList[indexToCardsList].title = document.getElementById('title').value;
    cardsList[indexToCardsList].description = document.getElementById('description').value;
    cardsList[indexToCardsList].category = document.getElementById('category').value;

    printModalValues(cardItem, indexToCardsList);
}

function loadModalValues(cardItem) {
    let indexToCardsList = cardItem.id.substr(5, cardItem.id.length);

    document.getElementById('background').value = cardsList[indexToCardsList].background;
    document.getElementById('title').value = cardsList[indexToCardsList].title;
    document.getElementById('description').value = cardsList[indexToCardsList].description;
    document.getElementById('category').value = cardsList[indexToCardsList].category;
}

/*
    Main
 */

function reloadMain(element = document.getElementById('cardBox')) {
    while (element.firstChild)
        element.removeChild(element.firstChild);

    createMain();
}

function createMain() {
    for (let i = 0; i < cardsList.length; i++) {
        document.getElementById('cardBox').innerHTML += '' +

            '              <div class="col-3 card cardItem" id="card-' + i + '" name="cardItem" onmouseover="openCardFooter(this)" onmouseout="closeCardFooter(this)">' +
            '                  <div class="card-body cardImg" id="backgroundImage" style="background-image: url(' + cardsList[i].background + ')"></div>' +
            '                  <div class="card-footer" style="display: none">' +
            '                       <h5 class="card-title">' + cardsList[i].title + '</h5>' +
            '                       <p class="card-text">' + cardsList[i].description + '</p>' +
            '                       <p class="card-link">' + cardsList[i].category + '</p>' +
            '                  </div>' +
            '              </div>';
    }

    // Añade el evento y envía la carta
    document.getElementsByName('cardItem').forEach(function (cardItem) {
        cardItem.addEventListener('click', function () {
            showModal(cardItem);
            cardTemp = cardItem;
        });
    });

    // Ordena el array y vuelve a imprimir los datos
    document.getElementById('orderButtonCards').addEventListener('click', function () {
        cardsList.sort(function (a, b) {
            if (a.category > b.category) {
                return 1;
            } else { return 0; }
        });

        reloadMain();
    });
}




