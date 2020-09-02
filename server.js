const express = require('express');
const app = express();

app.use(express.static('./dist/music-search-app.json'));
app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/music-search-app/'}
);
});
app.listen(process.env.PORT || 8081);
