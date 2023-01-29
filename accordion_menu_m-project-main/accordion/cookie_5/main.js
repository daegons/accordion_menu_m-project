//JS로 Cookie 읽기, 생성하기, 삭제하기
//방법 --> document.cookie = "name=???; name2=???; expires=???; path=???";

//쿠키 읽기(getCookie)
function getCookie() {

    //로컬에 저장된 쿠키 뿌려주기
    const allCookies = document.cookie; //쿠키 변수에 할당//하나의 문자열로 리턴-->cookie1=value;
    console.log(typeof allCookies); // typeof(타입체크) = string

    //if 조건문 --> 쿠키가 있으면
    if (allCookies !=='' ) {
        alert('저장된 쿠키의 값은 : '+allCookies+ "\n(다시 방문해주셔서 감사합니다.)");
    } else {
        alert('저장된 쿠키가 없습니다 \n(첫 방문을 환영합니다.)');
        console.log(allCookies);
    }
}

//쿠키 생성(setCookie)
function setCookie() {
    
    //1)기본적인 날짜 출력 --> 날짜쓸일? --> 만료일 --> expiration, expire
    // let nowDate = new Date(); //현재 날짜, 변수에 할당
    // console.log(typeof nowDate); //object

    //2)만료일 생성--10일후 만료
    // let expiration = nowDate.getDate()+10; //현재(년월시분초)에서 일자만 가져와서 +10일하고 변수에 할당
    // console.log(typeof expiration);//number  //현재 date에 +10일 추가됨

    //위 1,2번 합처서 만듬
    //현재 date에서 10일 뒤로 만료되도록 설정 --> setDate() 메서드 사용
    let expiration = new Date();
    expiration.setDate(expiration.getDate()+7); //일자만 추출하고 +7일
    console.log(expiration); // date+7되어서 출력

    //날짜를 쿠키로 저장하기 위해서 --> utc방식으로 표기 --> toUTCString()메서드 사용.
    console.log(expiration.toUTCString());

    //쿠키 생성하기
    let cookies = '';
    cookies = 'user_id = daegon; expires =' + expiration.toUTCString();
    console.log(cookies);

    //쿠키 저장하기
    document.cookie = cookies;
    alert('쿠키를 생성하였습니다.');
}

//쿠키 삭제(삭제의 의미보다는 값을 대입하는 형태로..수정을 통해 삭제의 효과를 본다)
function delCookie() {

    //document.cookie에 값을 대입하는 형태로 -->쿠키 삭제 or 생성 or 수정
    //쿠키 삭제? --> 이미 지나간 시간을 입력해버림으로 쿠키를 삭제시킨다.
    // document.cookie = 'user_name=songdaegon'; //쿠키 생성
    // document.cookie = 'user_name=eunju'; //eunju로 바뀜으로 쿠키 수정
    // document.cookie = 'user_name=;expires=Sat, 01 Jan 1972 00:00:00 GMT';//이전 시간입력으로 쿠키 삭제시킴
    document.cookie = 'user_id=;expires=Sat, 01 Jan 1972 00:00:00 GMT';
    alert('쿠키를 삭제하였습니다.');

}

//[!] 요약
//------- 0. JS의 쿠키 관련 경량 라이브러리 사용법을 추가 공부
//------- 1. document.cookie사용의 다양성
//------- 2. 쿠키의 삭제는 한 참 지나간 날짜를 입력하므로써 삭제.
//------- 3. 일반적으로 Set(생성), Get(읽기), Del(삭제), 3가지의 사용자 함수를 구현해서 사용가능. 