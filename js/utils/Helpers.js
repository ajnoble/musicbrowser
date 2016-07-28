const desktopBreakpoint = 641;
/**
 * Class representing helper functions for manipulating dom and its state.
 *
 * @class Helpers
 */
class Helpers {
  /**
   * addClass method used for adding a class to an element
   * @param {string} classAdditionTarget - selecter for class to be added
   * @param {string} className - class name that will be added to toggleTarget
   */
  addClass(classAdditionTarget, className){
    document.querySelector(classAdditionTarget).classList.add(className);
  };
  /**
   * removeClass method used for removing a class on an element
   * @param {string} classRemovalTarget - selecter for class to be added
   * @param {string} className - class name that will be added to toggleTarget
   */
  removeClass(classRemovalTarget, className){
    document.querySelector(classRemovalTarget).classList.remove(className);
  };
  /**
   * hideOrShow method used for hiding or showing an element
   * @param {object} element - element in question
   * @param {boolean} hide - if hide=true then display: 'none' added, if false then removed
   */
  hideOrShow(element, hide){
    (hide===true) ? element.style.display = 'none' : element.style.display = 'block';
  };
  /**
   * isMobile method evaluates the clientWidth and returns true or false
   */
  isMobile(){
    return (document.documentElement.clientWidth<desktopBreakpoint) ? true : false;
  }

  /**
   * ariaHideOrShow method used for hiding or showing an element
   * @param {object} element - element in question
   * @param {boolean} trueOrFalse - attribute value for aria-hidden
   */
  ariaHideOrShow(element, trueOrFalse){
    document.querySelector(element).setAttribute('aria-hidden', trueOrFalse)
  };


}

export default Helpers
