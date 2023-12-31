document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-box');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        question.addEventListener('click', function () {
            answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            
        });
    });
});
