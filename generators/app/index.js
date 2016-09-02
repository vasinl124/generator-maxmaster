'use strict';
const generators = require('yeoman-generator');

module.exports = generators.Base.extend({
  // The name `constructor` is important here
  constructor: function () {
    // Calling the super constructor is important so our generator is correctly set up
    generators.Base.apply(this, arguments);

    // Set member variables
    this.generator = this;

    // Define arguments (e.g. yo qsc ______ )
    this.generator.argument('appName', {
        desc: 'The name of the app',
        required: false,
        type: String
    });

  }
});
