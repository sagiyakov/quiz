let data = [];

var question = new Vue({
    el: '#question',
    data: {
        text: ''
    }
});

var answers = new Vue({
    el: '#answers',
    data: {
        answers: []
    }
})

const showQuestion = (idx) => {
    question.text = data[idx].question;
    answers.answers = data[idx].answers
}

var navigation = new Vue({
    el: '#navigation',
    data: {
        answers: [],
        questionIdx: 0
    },
    computed: {
        isPrevDisabled: () => {
            return this.questionIdx == 0;
        },
        isNextDisabled: () => {
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
        }

    }

})


const init = async () => {
    const res = await axios.get('/api/questions');
    data = res.data.questions;
    showQuestion(0);
}

init();

