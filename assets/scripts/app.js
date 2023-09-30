console.log('App is running!')

function appendHeader() {
    const headerEl = document.querySelector('header');

    buttonEl = document.createElement('button')
    buttonEl.classList.add('header-button')
    buttonEl.textContent = "Join Today"
    headerEl.appendChild(buttonEl)
}

function appendHero(showData) {
    const { imageData, metaData, title } = showData;
    const hero = document.querySelector('#hero');

    hero.style.backgroundImage = `url(${imageData.imageUrl})`;
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "100% auto";

    const heroContent = document.createElement('div');
    heroContent.setAttribute('id', 'hero-content')

    heroContent.innerHTML = `
    <h1>${title}</h1>
  <p>${metaData.releaseYear} <span class="rating">${metaData.rating}</span></p>
  <p>Season ${metaData.season} ${metaData.episodes} episodes</p>
  <p> Made in ${metaData.countryOfOrigin}</p>`;

    hero.appendChild(heroContent)

}

function appendVideoRows(data) {
    const contentElement = document.querySelector('.content')

    const numRows = 3;
    const squaresPerRow = 6;

    for (let i = 0; i < numRows; i++) {
        // Create a container for each row
        const rowContainer = document.createElement('div');
        rowContainer.classList.add('row-container');
        const imageURL = "./assets/images/placeholder.jpeg";

        for (let j = 0; j < squaresPerRow; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.setAttribute('tabindex', 0)
            const titleEl = document.createElement('div');
            titleEl.classList.add('square-title');
            titleEl.innerHTML = '<h3>Drama</h3>';
            square.appendChild(titleEl);
            square.style.backgroundImage = `url(${imageURL})`;
            square.style.backgroundRepeat = "no-repeat";
            square.style.backgroundSize = "100%";
            rowContainer.appendChild(square);
        }

        // Append the row container to the content element
        contentElement.appendChild(rowContainer);
    }

}


function updateHero({ imageData, metaData, title }) {
    updateHeroImage(imageData.imageUrl)
    updateHeroContent({ title, metaData })
}

function updateHeroImage(imageUrl) {
    const hero = document.querySelector('#hero');
    hero.style.backgroundImage = `url(${imageUrl})`;
}

function updateHeroContent({ title, metaData }) {
    const hero = document.querySelector('#hero');
    const contentEl = hero.querySelector('.content');

}

function fetchData(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function render() {
    let fetchedData = null;
    try {
        fetchedData = await fetchData(500)

    } catch (error) {
        console.error(error)
        return;
    }
    appendHeader()
    appendHero(data.shows[0])
    appendVideoRows()
}


render();