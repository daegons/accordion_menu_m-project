// Local Storage 데이터 값들 출력하기

//버튼가져오기
const btnAll = document.querySelector('.btnAllView');
console.log(btnAll);

//버튼 클릭시 --> 할 일 처리
btnAll.addEventListener('click',() => {
    //할 일 처리 --> 로컬 스토리지 데이터 값 가져와서 출력.
   const getData = localStorage.getItem('background-color');
   console.log(getData);                    //(key에 해당)

   //key만 출력하기
   console.log(localStorage.key(0)); //user-id
   console.log(localStorage.key(1)); //color
   console.log(localStorage.key(2));
   console.log(localStorage.key(3));
   console.log(localStorage.key(4));

   //key가 몇 개인지? --> length
   console.log(localStorage.length);
});