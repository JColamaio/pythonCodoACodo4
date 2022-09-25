var path = require('path');

  // Set the default templating engine to ejs
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));