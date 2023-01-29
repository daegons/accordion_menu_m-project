// JS쿠키 사용자 정의 함수 및 전체 삭제 만들기.

//쿠키 읽기.
const getCookie = function () {
    //로컬에 저장된 모든 쿠키 읽어오기
    const allCookies = document.cookie; //하나의 문자열로 리턴.
    console.log(allCookies);

    //if조건문 --> 쿠키가 있으면
    if(allCookies != '') {
        alert('저장된 쿠키의 값은: '+allCookies);
    } else {
        alert('저장된 쿠키가 없습니다');
    }
}

//쿠키 생성하기 --> 함수 표현식.
const setCookie = function(cname, cvalue, cexpire) { //3개의 파라미터값 전달

    //할 일 처리.
    event.preventDefault(); // submit, href 발생시 --> 이동 방지 및 새로 실행되는 것을 방지. 타이핑한value남음.

    //넘어온 값 체크.
    if(document.getElementById('cname').value != '') {
    cname = document.getElementById('cname').value;
    cvalue = document.getElementById('cvalue').value;
    cexpire = document.getElementById('cexpire').value;
    }
    //html input에서required 넣으면 else 작업 굳이 안해도 가능.
    console.log("cname = " + cname,", cvalue = " + cvalue,", cexpire = " + typeof cexpire); 
    //cexpire은 string이므로 나중에 사용하려면 형변환 해줘야함******.

    //만료일 생성 --> 현재에서 30일간으로 생성 --> setDate() 메서드 사용예정.
    let expiration = new Date(); //현재날짜 변수 할당.
    console.log(expiration);
    expiration.setDate(expiration.getDate() + parseInt(cexpire));
    //현재 날짜 담긴 expiration에 setDate()메서드로 현재 날짜 가져와서 창에서 입력된 .
    //cexpire 값을parseInt로 숫자 변환하여 현재일자에 더하므로 만료기간 설정.
    //Number()로도 처리 가능.
    console.log(expiration);

    //날짜를 쿠키로 저장하기 위해서 --> UTC방식으로 표기 --> toUTCString()메서드 사용.
    console.log(expiration.toUTCString());

    //쿠키 생성하기.
    let cookies = '';
    cookies += `${cname}=${cvalue};`;
    cookies += `expires=${expiration.toUTCString()}`;
    console.log(cookies);

    //쿠키 저장하기
    document.cookie = cookies; //쿠키생성
    // document.getElementById('cname').value = ''; //쿠키 생성후 입력창 비우기.
    // document.getElementById('cname').focus(); //입력창 비우고 커서 깜빡이게.
    // document.getElementById('cvalue').value = '';
    // document.getElementById('cexpire').value = '';

    document.getElementById('form').reset(); // 입력창 비우는거랑, 이거로 한방에 처리.
    document.getElementById('cname').focus(); //입력창 비우고 커서 깜빡이게.

    alert('쿠키를 생성하였습니다.');
}

//쿠키 삭제하기.
const delCookie = function(cname) {
    //쿠키 삭제? --> 지나간 시간을 입력하므로 수정해서 삭제시킴.
    // document.cookie = 'user_id=; expires=Sat,01 Jan 1972 00:00:00 GMT';
    console.log(cname);
    setCookie(cname,"",0);
    alert('쿠키를 삭제하였습니다.');
}

//쿠키 전체 삭제.
const allDelCookies = function(domain, path) {
    //const doc  = document;
    domain = domain || document.domain;
    path = path || '/';

    const cookies = document.cookie.split('; ');
    const expiration = 'Sat, 01 Jan 1972 00:00:00 GMT'; //만료일 이전시간 지정(수정/삭제).
    // console.log(cookies);
    // console.log(expiration);

    //반복문으로 쿠키 전체 삭제.
    for (let i = 0; i < cookies.length; i++) {
        // cookies[i].split('=')[0]
        // =를 기준으로 나눠서 [0],[1]구분지어 쿠키 이름만 출력 value는 제외.

        // document.cookie = cookies[i].split('=')[0]+'=;expires='+expiration+';domain='+domain+';path='+path;
        document.cookie = cookies[i].split('=')[0]+'=;expires='+expiration;
        //'=; expires='의 문자열과 위에서 설정한 만료변수(expiration)추가. document.cookie에 할당
        //split() 문자열을 분할하는 메서드.
    }
    alert('쿠키를 모두 삭제하였습니다.');
}

//addEventListener.
const form = document.getElementById('form');
form.addEventListener('submit', setCookie); //form태그 안에서 submit이 작동했을 때 위에 함수 setCookie을 실행.