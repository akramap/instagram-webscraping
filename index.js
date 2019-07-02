const ig = require('./instagram');

(async () => {
  // launch and open new page. 
  await ig.initialize();
 // open instagram page and then login page
  await ig.login('ajsdjasdj','jadkshjkh');


  debugger;
})()