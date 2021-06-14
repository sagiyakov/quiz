let data = [];
let score = Number;

var navigation = new Vue({
    el: '#navigation',
    data: {
        answers: [],
        questionIdx: 0,
     //   score: 0,
    },
    computed: {
        isPrevDisabled: function() {
            return this.questionIdx == 0;
        },
        isNextDisabled: function () {
            return this.questionIdx == data.length - 1;
        }
        
    },
    methods: {
        nextQuestion: () => {
            navigation.questionIdx++;
            showQuestion(navigation.questionIdx);
        },
        prevQuestion: () => {
            navigation.questionIdx--;
            showQuestion(navigation.questionIdx);
        },
        finish: () => {
            calcScores();
        }

    }

})

var player = new Vue ({

    el: 'player',
    data:{
        name: String,
        password: String,
        totalScore: Number
    }

})
var question = new Vue({
    el: '#question',
    data: {
        text: '',
        answers: [],
        picked: null,
        correct: Number,
    },
    watch: {
        picked: val => {
            data[navigation.questionIdx].picked = val;
        }
    }

});

const showQuestion = (idx) => {
    question.text = "Question Number "+ (idx+1) +":" + data[idx].question;
    question.answers = data[idx].answers;
    question.picked = data[idx].picked;
    question.correct = data[idx].correct;
}


const startGame = (name,password) => {
    player.name = name;
    player.password = password;
}

const calcScores =  () => {
    score = 0;
    for (let i = 0; i < data.length; i++) { 
    if (data[i].picked == data[i].correct) {
        score++;
   } }
    document.write(score+" out of "+data.length + " questions ");

}

const init = async () => {
    const res = await axios.get('/api/questions');
    data = res.data.questions;
    showQuestion(0);
    //showCorrect(0);
   // alert(question.correct);
}

init();

