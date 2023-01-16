//faq_container
const faqContainer = document.querySelectorAll('.faq_container');
//querySelectorAll = faq_container가 적용된 박스를 전부 가져옴(5개)
console.log(faqContainer);//faqContainer를 NodeList 객체로 가져옴

//faq_answer
let faqAnswer = document.querySelectorAll('.faq_answer');
console.log(faqAnswer);

//btn-all-close
const btnAllClose = document.getElementById('btn_all_close');
console.log(btnAllClose);

//반복문 순회하면서 해당 FAQ 제목 클릭시 콜백처리
for(let i = 0; i < faqContainer.length; i++) {

    faqContainer[i].addEventListener('click',function() {
        //클릭시 처리할 일
        console.log('나 클릭'+i);
        //FAQ제목 클릭시 --> 본문이 보이게 -->active class 추가.
        // this.classList.add('active');
        //이렇게 추가하면 this가 div(faq_container)여기에 active를 추가하는거라서 안됌x
        //faq_answer 여기에 추가해야 함
        console.log(faqAnswer[i]);
        faqAnswer[i].classList.add('active');
    } );
}

btnAllClose.addEventListener('click',function() {
    console.log('모두 닫기 버튼 클릭..');
    //버튼 클릭시 처리할 일
    // let faqAnswer = document.querySelectorAll('.faq_container'); 위에 있어서 또 쓸필요X
    for(let i = 0; i < faqAnswer.length; i++) {
        faqAnswer[i].classList.remove('active');
    }
})