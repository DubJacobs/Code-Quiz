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
    choices: ['25', '28', '30'],
    answer: 1
},{
    question: 'What characters are used to define a string?',
    choices: ['25', '28', '30'],
    answer: 1
}]

// })

// const questions = ['Who invented Javacript?', 'What syntax is used to declare a variable?', 'What characters are used to define a string in Javascript?']
let questionIndex = 0
const $questionOne = $('<h3>')
$questionOne.text(questions[questionIndex].question)
$('#quiz').append($questionOne)

$('#submit').on('click', function(){
    $('#quiz').empty()
    const $question = $('<h3>')
    questionIndex = questionIndex + 1 //questionIndex++
    $question.text(questions[questionIndex].question)
    $('#quiz').append($question)    
})

