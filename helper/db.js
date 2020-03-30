const mongoose = require('mongoose');

module.exports = () => {
  mongoose.connect('mongodb://deneme1:deneme123@ds143893.mlab.com:43893/heroku_0l7qtqhk', { useMongoClient: true});

  mongoose.connection.on('open', () => {
     console.log('MongoDB: Connected');
  });
  mongoose.connection.on('error', (err) => {
    console.log('MongoDB: Error', err);
  });

  mongoose.Promise = global.Promise;
};
