//Require the entry point for sass so that webpack can generate css file
require('../css/styles.scss');

//import and instantiate our javascript classes
import Navigation from './Navigation.js';
import SeeMore from './SeeMore.js';
new Navigation();
new SeeMore();
