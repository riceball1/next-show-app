console.log('App is running!')

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

    const numRows = 4;
    const squaresPerRow = 3;
    
    for (let i = 0; i < numRows; i++) {
        const row = document.createElement('div');
        row.classList.add('row');
        
        for (let j = 0; j < squaresPerRow; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            square.textContent = 'title';
            row.appendChild(square);
        }
        
        contentElement.appendChild(row);
    }

}


function updateHero({imageData, metaData, title}) {
    updateHeroImage(imageData.imageUrl)
    updateHeroContent({title, metaData})
}

function updateHeroImage(imageUrl) {
    const hero = document.querySelector('#hero');
    hero.style.backgroundImage = `url(${imageUrl})`;
}

function updateHeroContent({title, metaData}) {
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
    appendHero(data.shows[0])
    appendVideoRows()
}


render();