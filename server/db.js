const mongoose = require('mongoose');

let addQuestion, QuestionModel, player;

const connect = async () => {
    await mongoose.connect('mongodb://cawamoDB:Einodmilvado@adminqa-shard-00-00-jcvi4.mongodb.net:27017,adminqa-shard-00-01-jcvi4.mongodb.net:27017,adminqa-shard-00-02-jcvi4.mongodb.net:27017/quizDB?ssl=true&replicaSet=AdminQA-shard-0&authSource=admin&retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });
    console.log('db connected');

    QuestionModel = mongoose.model('Question', new mongoose.Schema({
        question: String,
        answers: [],
        correct: Number,
    }));
    player = mongoose.model('players', new mongoose.Schema({
        name: String,
        password: String,
        totalScore: Number,
    }));
}


module.exports = {
    addQuestion: async question => {
        const newQuestion = new QuestionModel();
        newQuestion.question = question.question;
        newQuestion.answers = question.answers;
        newQuestion.correct = question.correct;
        newQuestion.save()
    },
    getQuestions: async () => {
        const res = await QuestionModel.find({});
        return res;
    },
    addPlayer: async playerPlus => {
        const newPlayer = new player();
        newPlayer.name = playerPlus.name;
        newPlayer.password = playerPlus.password;
        newPlayer.totalScore = playerPlus.totalScore;
        newPlayer.save()
    },
    getPlayers: async () => {
        const res = await player.find({});
        return res
    },
    connect
}
