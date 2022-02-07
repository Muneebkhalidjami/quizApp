var quizdb=[
    {
        question: "Q1: What is the Full Form of HTML?",
        a: "Hello To My Land",
        b: "HyperText Markup Language",
        c: "Hey Text Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q2: What is the Full Form Of CSS?",
        a: "Cascading Style Sheet",
        b: "Cartoon Style Sheet",
        c: "Cascading Style Sheep",
        d: "Cascading Super Sheet",
        ans: "ans1"
    },
    {
        question: "Q3: What is the Full Form Of HTTP?",
        a: "Hyper Test Tranfer Protocol",
        b: "HyperText Transfer Product",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the Full Form Of JS?",
        a: "Javascript ",
        b: "Jav Script",
        c: "JordanShoes",
        d: "JustScript",
        ans: "ans1"
    }
];


const question=document.querySelector(".question");
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit = document.querySelector("#submit");
const answers = document.querySelectorAll(".answer");

const showScore=document.querySelector('#showScore')

let questionCount=0;
let score=0;

const Loadquestion=()=>{

    const questionList = quizdb[questionCount];
    question.innerHTML=questionList.question;


    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
}

Loadquestion();

 
const getCheckAnswer = () =>{
    let answer;
    answers.forEach((curAnsEle) => {
        if (curAnsEle.checked) {
            answer=curAnsEle.id;
        }
    });
    return answer;
};

submit.addEventListener('click' , () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

    if (checkedAnswer === quizdb[questionCount].ans) {
        score++;
    }
    questionCount++;

    if (questionCount< quizdb.length) {
        Loadquestion();
    }else{
        showScore.innerHTML=`
            <h3> You Scored ${score}/${quizdb.length}</h3>
            <button class="btn text-center" onclick="location.reload()">Play Again</button
    
        `;

        showScore.classList.remove('scorearea');
    }
})