import Helpers from './utils/Helpers.js';
const helper = new Helpers();
const navOpenClass = 'navigation--open';
const navigationSelector = '.navigation';
const openMenuBtnSelector = '.mobile-header__menu-btn';
const closeMenuBtnSelector = '.naviagtion__toggle';
const mobileHeaderSelector = '.mobile-header';
const mobileNavigationToggleSelector = '.naviagtion__toggle';
const showMoreBtnSelector = '.top-songs__see-more-btn';

/**
 * Class representing the navigation.
 *
 * @class Navigation
 */
class Navigation {
  /**
   * Constructor method for the class
   */
  constructor(){
    this.bindEvents();
    this.accessabilitySetup();
  }
  /**
   * bindEvents method add's listeners for the open and close mobile menu buttons
   */
  bindEvents(){
    //Open mobile menu
    document.querySelector(openMenuBtnSelector).addEventListener('click', function () {
      //add open class to the mobile nav
      helper.addClass(navigationSelector, navOpenClass);
      //show the mobile nav
      helper.ariaHideOrShow(navigationSelector, false);
      //hide the mobile header
      helper.ariaHideOrShow(mobileHeaderSelector, true);
      //focus on the mobile nav close button
      document.querySelector(closeMenuBtnSelector).focus()
    });
    //close mobile menu
    document.querySelector(closeMenuBtnSelector).addEventListener('click', function () {
      //remove open class from the mobile nav
      helper.removeClass(navigationSelector, navOpenClass);
      //hide the mobile nav
      helper.ariaHideOrShow(navigationSelector, true);
      //show the mobile header
      helper.ariaHideOrShow(mobileHeaderSelector, false);
      //focus on the hamburger
      document.querySelector(openMenuBtnSelector).focus()
    });
  }
  /**
   * accessabilitySetup method add's listeners for the resize event
   */
  accessabilitySetup(){
    //resize event for aria tags
    window.addEventListener('resize', (helper.isMobile())? this.mobileAriaSetup() : this.desktopAriaSetup());
  }
  /**
   * mobileAriaSetup method updates the aria-hidden attribute for various elements for mobile view
   */
  mobileAriaSetup(){
    //hide the desktop nav
    helper.ariaHideOrShow(navigationSelector, true);
    //show the mobile header
    helper.ariaHideOrShow(mobileHeaderSelector, false);
    //show the hamburger
    helper.ariaHideOrShow(mobileNavigationToggleSelector, false);
    //show the show more button
    helper.ariaHideOrShow(showMoreBtnSelector, false);
  }
  /**
   * desktopAriaSetup method updates the aria-hidden attribute for various elements for desktop view
   */
  desktopAriaSetup(){
    //show the desktop nav
    helper.ariaHideOrShow(navigationSelector, false);
    //hide the mobile header
    helper.ariaHideOrShow(mobileHeaderSelector, true);
    //hide the hamburger
    helper.ariaHideOrShow(mobileNavigationToggleSelector, true);
    //hide the show more button
    helper.ariaHideOrShow(showMoreBtnSelector, true);
  }
}

export default Navigation
