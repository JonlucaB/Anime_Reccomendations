import../ Pages / style.css

export default function createAnimeCard(animeData) {
    const newCard = document.createElement('div');
    const newImg = document.createElement('img');
    const newLink = document.createElement('li');

    newCard.className = 'card';
    newCard.setAttribute('h1', animeData.title);
    newImg.setAttribute('src', animeData.coverImg);
    newImg.className = 'img-fluid img-center img-round img-featured';
    newImg.setAttribute('data-v-0f11a864', '');
    newLink.setAttribute('href', animeData.moreInfoLink);

    newCard.setAttribute('img', newImg);
    newCard.setAttribute('li', newLink);

    return newCard;
}