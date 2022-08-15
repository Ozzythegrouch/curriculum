// DEFINE AND EXPORT
// save this in a file named "greeting.js"
function greeting(name) {
    return `Hello ${name}`;
  }
  
  module.exports = greeting;
  
  // IMPORT AND USE
  const greeting = require('./greeting.js');
  greeting('John');
  
  