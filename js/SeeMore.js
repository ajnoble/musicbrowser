import Helpers from './utils/Helpers.js';
const helper = new Helpers();
const seeMoreBtn = document.querySelector('.top-songs__see-more-btn');
const topSongsItems = document.querySelectorAll('.top-songs__list-item');
/**
 * Class representing the see more button.
 *
 * @class SeeMore
 */
class SeeMore {
  /**
   * Constructor method for the class
   */
  constructor(){
    this.bindEvents();
  }
  /**
   * bindEvents method add's listeners for the window resize and click events
   */
  bindEvents(){
    //resize event calls isMobile helper then calls seeLess or seeMore
    window.addEventListener('resize', (helper.isMobile()) ? this.seeLess(seeMoreBtn) : this.seeMore(seeMoreBtn));

    //click event
    seeMoreBtn.addEventListener('click', function () {
      if(seeMoreBtn.classList.contains('see-more-js')){
        this.seeMore(seeMoreBtn);
      } else{
        this.seeLess(seeMoreBtn);
      }
    }.bind(this))
  }

  /**
   * seeMore method loops over topSongsItems array and displays all items
   */
  seeMore(){
    let i = 0;
    for(i=0; i<topSongsItems.length; ++i){
      helper.hideOrShow(topSongsItems[i], false);
    }
    //Remove class used to determine buttons state
    seeMoreBtn.classList.remove('see-more-js');
    //Swap text out on button
    seeMoreBtn.innerHTML = 'See Less';
  }
  /**
   * seeLess method loops over topSongsItems array and hides any items with an index greater then 2
   */
  seeLess(){
    let i = 0;
    for(i=0; i<topSongsItems.length; ++i){
      if(i>2){
        helper.hideOrShow(topSongsItems[i], true);
      }
    }
    //Add class used to determine buttons state
    seeMoreBtn.classList.add('see-more-js');
    //Swap text out on button
    seeMoreBtn.innerHTML = 'See More';
  }
}

export default SeeMore
