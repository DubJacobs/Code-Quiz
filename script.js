// const questionOne = 'how old am i'
// const questionTwo = 'how tall am i'
// const questionThree
// // $ is used for letting someone know (that is looing at my code) that i am targeting either html or JSON.
// const $questionOne = $('<h3>')
// $questionOne.text(questionOne)
// $('#quiz').append($questionOne)

// $('#submit').on('click', function(){
//     $('#quiz').empty()
//     const $questionTwo = $('<h3>')
//     $questionTwo.text(questionTwo)
//     $('#quiz').append($questionTwo) 

// next steps: 
// structure of an object is 'key value pairs'

// you can have an array strings as well as objects

const questions = [{
    question: 'Who invented Javascript?',
    choices: ['William Jacobs', 'Michael Scott', 'Brendan Eich'],
    answer: 2
}, {
    question: 'What characters are used to define a string?',
    choices: ['double/single quotes', 'exclamation point', 'comma'],
    answer: 0
}, {
    question: 'When was Javascript first developed?',
    choices: ['1992', '1995', '2006'],
    answer: 1
}]


// })

// const questions = ['Who invented Javacript?', 'What syntax is used to declare a variable?', 'What characters are used to define a string in Javascript?']
let questionIndex = 0
render()

$('#submit').on('click', function () {
    $('#quiz').empty()
    questionIndex = questionIndex + 1 //questionIndex++ 
    render()
})
function render() {
    const $question = $('<h3>')
    $question.text(questions[questionIndex].question)
    $('#quiz').append($question)
    for (let i = 0; i < questions[questionIndex].choices.length; i++) {
        const $choice = $('<button>')
        $choice.text(questions[questionIndex].choices[i])
        $('#quiz').append($choice)
    }
}
