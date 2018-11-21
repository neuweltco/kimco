module.exports = function(app) {
  app.get('/', function(req, res) { // res.send('It works right now!'); This just sends string as get response
    res.render('index'); //callback function
  });
  app.get('/footer', function(req, res) {
    res.render('footer');
  });
  app.get('/header', function(req, res) {
    res.render('header');
  });
  app.get('/components', function(req, res) {
    res.render('components');
  });
  app.get('/layout_components', function(req, res) {
    res.render('layout_comps');
  });
};
