const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}


app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From ConsumeSafe Server!' });
});



app.listen(port, () => console.log(`Listening on port ${port}`));