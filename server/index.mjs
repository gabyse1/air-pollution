import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();

app.set('PORT', process.env.PORT || '8080');
app.use(cors({ origin: `http://localhost:${app.get('PORT')}` }));

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(app.get('PORT'), () => {
  console.log(`Server listening on localhost:${app.get('PORT')}`);
});
