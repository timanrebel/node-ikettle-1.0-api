var iKettleFinder = require('../index').iKettleFinder;

iKettleFinder.discoverKettles('10.0.1.0/24').then(function(kettles) {
  if (kettles.length > 0) {
    var kettle = kettles[0];
    kettle.connect().then(function() {
      return kettle.getStatus();
    }).then(function(status) {
      console.log(status);
    });
  }
});
