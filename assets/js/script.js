
function openCardFooter(card) {
    card.getElementsByClassName('card-footer')[0].style.display = 'block';
}
function closeCardFooter(card) {
    card.getElementsByClassName('card-footer')[0].style.display = 'none';
}

function createMain() {

    for (let i = 0; i < 8; i++) {
        document.getElementById('cardBox').innerHTML += '' +
            '              <div name="cardItem" class="col-3 card cardItem">' +
            '                  <div class="card-body cardImg"></div>' +
            '                  <div class="card-footer" style="display: none">' +
            '                       <h5 class="card-title">Text</h5>' +
            '                       <p class="card-text">Text Text Text Text Text Text</p>' +
            '                  </div>' +
            '              </div>';
    }

    let cardsItem = document.getElementsByName('cardItem');
    for (let i = 0; i < cardsItem.length; i++) {
        cardsItem[i].addEventListener('onmouseover', openCardFooter(this));
        cardsItem[i].addEventListener('onmouseout', openCardFooter(this));
    }


}

