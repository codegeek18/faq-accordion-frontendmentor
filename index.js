const questions = document.querySelectorAll('.ques')

function toggleAnswer(ques, event) {
    console.log(event.type)
    if (event.keyCode === 13 || event.key === 'Enter' || event.type === 'click') {
        ques.classList.toggle('active');
        const answer = ques.nextElementSibling
        console.log(answer)
        const plusIcon = ques.querySelector('.plus')
        const minusIcon = ques.querySelector('.minus')
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
            answer.style.marginTop = '0';
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        } else {
            answer.style.maxHeight = answer.scrollHeight + 'px';
            answer.style.marginTop = '1rem';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    }
}

questions.forEach(ques => {
    ques.addEventListener('click', (event) => toggleAnswer(ques, event))
})

questions.forEach(ques => {
    ques.addEventListener('keydown', (event) => toggleAnswer(ques, event))
})

