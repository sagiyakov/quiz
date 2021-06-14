const express = require('express')
const app = express()
const port = 3000

const db = require('./server/db');

const run = async () => {
    await db.connect();
    
    app.use('/', express.static(__dirname + '/public'));
    
    app.get('/api/questions', async (req, res) => {
        const questions = await db.getQuestions();
        res.send({questions})
    })

    app.get('/api/players', async (req, res) => {
      const questions = await db.getPlayers();
      res.send({players})
  })
    
    app.listen(port, () => {
      console.log(`Example app listening at ${port}`);
    });
    
    app.post('/api/questions', (req, res) => {
      console.log('Hello!')
    })
    // db.addQuestion({
    //     question: '12+2',
    //     answers:[43,112, 14,56],
    //     correct: 2
    // })
}

run();
