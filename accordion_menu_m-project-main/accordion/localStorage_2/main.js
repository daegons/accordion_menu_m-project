//브라우저 로컬 데이터에 저장

//주요 메서드2개
//값 저장하기 --> localStorage.setItem('key', value);
//값 가져오기 --> localStorage.getItem('key');
//값 삭제하기 --> localStorage.removeItem('key');
//key를 그대로 놓고 새로운 값을 저장하면 덮어쓰기가 되면서 기존 로컬 데이터 정보가 수정

//Set Data 버튼
const btnSet = document.querySelector('.btnSetLocalData');
console.log(btnSet);

//Input text 값
const inPut = document.querySelector('input');
console.log(inPut);

//SetData 버튼 클릭 시
btnSet.addEventListener('click',() => {
    //할일처리 -->입력한 텍스트 값 가져오기
    const inPutValue = inPut.value;
    // console.log(inPutValue);

    //localStorage에 저장하기
    localStorage.setItem('userid', inPutValue);
    // localStorage.setItem('key', value);
    inPut.value ='';
    //input text내용 입력 후 글씨 지워줌
});

//Get Data 버튼 클릭시
const btnGet = document.querySelector('.btnGetLocalData');
console.log(btnGet);

btnGet.addEventListener('click',() => {
    //할일 처리 -->해당 키의 로컬데이터가 있으면 가져옴
    // localStorage.getItem('key');
    const getData = localStorage.getItem('userid');

    if(!getData) {
        alert('해당 키로 로컬에 저장된 데이터가 없습니다.');
    } else {
        inPut.value = getData; //input 텍스트 박스에 삽입.
    }
})

// Remove 버튼 클릭시
const btnRemove = document.querySelector('.btnRemoveLocalData');

btnRemove.addEventListener('click', () => {
    //할일 처리 --> 해당 키의 로컬 데이터 삭제
    localStorage.removeItem('userid');
    alert('로컬 데이터 삭제 완료!');
    inPut.value ='';
})