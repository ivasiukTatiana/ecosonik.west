const scrollHandler = (classes) => {
  window.addEventListener('scroll', () => {

    let allCards = document.querySelectorAll(`.${classes.cardWrapper}`);
    let contentNav = document.querySelectorAll('#contentNav a');

    for (let card of allCards) {
      if (card.getBoundingClientRect().top <= 20 && card.getBoundingClientRect().bottom > 200) {
        for (let item of contentNav) {
          item.classList.remove(classes.active);
          let itemHash = item.hash;
          let hashPos = itemHash.lastIndexOf('#');
          if (hashPos !== -1) {
            let itemLink = itemHash.slice(hashPos + 1, itemHash.length);
            if (itemLink === card.id) {
              item.classList.add(classes.active);
            }
          }
        }
      }
    }
  })
}

export default scrollHandler;
