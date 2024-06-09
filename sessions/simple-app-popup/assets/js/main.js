let seasonTitle = document.querySelector('#season-title');
let seasonImg = document.querySelector('#season-img');
let allSeasonImgs = document.querySelector('.allSeasons');

function loadPage(season) {
  switch (season) {
    case 'spring':
      seasonTitle.textContent = 'Welcome to Spring';
      seasonImg.src = "./assets/images/spring.png";
     break;
     case 'summer':
     seasonTitle.textContent ="Welcome to Summer";
     seasonImg.src ="./assets/images/summer.png";
     break;
     case 'fall':
     seasonTitle.textContent ="Welcome to Fall";
     seasonImg.src ="./assets/images/fall.png";
     break;
     case 'winter':
    seasonTitle.textContent ="Welcome to Winter";
    seasonImg.src="./assets/images/winter.png";
    break;
    

    default:

  }

  }
