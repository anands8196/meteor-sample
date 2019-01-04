import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
// import App from '/imports/ui/App'


// console.log("Meteor:",Meteor.appCache)

// Meteor.AppCache.config({
//   chrome: true,
// });


Meteor.startup(() => {

  console.log("inside meteor startup")
  // if('serviceWorker' in navigator){
  //   navigator.serviceWorker.register('/sw.js').then(function (registration) {
  //     console.log('ServiceWorker registration successful with scope: ', registration.scope);
  //   }).catch(function (err) {
  //     console.log('ServiceWorker registration failed: ', err);
  //   });
  // }






  render(<div>render</div> , document.getElementById('react-target'));
});