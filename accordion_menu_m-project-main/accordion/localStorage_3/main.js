//로컬 스토리지 5개 저장
localStorage.setItem('user-id', 'superman');
localStorage.setItem('color', '#A585BE');
localStorage.setItem('font-weight', '900');
localStorage.setItem('user-name', '슈퍼맨');
localStorage.setItem('background-color', '#FF0000');
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
   console.log(localStorage.length);//5

//----------------------------------------------------------------------------
/*
//배열 정보를 동적으로 테이블 생성하여 삽입하기 --> today
let ar = new Array();
let result = '';

ar.push({name:'송대곤',email:'qzom1425@naver.com',age:34,pastime:'웹개발'});
ar.push({name:'김은주',email:'daegoon@naver.com',age:34,pastime:'음악감상'});
ar.push({name:'홍길동',email:'gootglfee@naver.com',age:17,pastime:'노래'});
ar.push({name:'이상화',email:'hooytg@naver.com',age:28,pastime:'피아노'});
ar.push({name:'김순실',email:'abcdef7271@naver.com',age:40,pastime:'운동'});


console.log(ar[0].name);//송대곤
console.log(ar[0].email);//qzom1526@...
console.log(ar[0].age);//34
console.log(ar[0].pastime);//웹개발

//반복문을 순회하면서 배열의정보를 result 변수에 누적
    for(const i in ar) {
        // console.log(i);
        result += "<tr>";
        result += "<td>"+ar[i].name+"</td>";
        result += "<td>"+ar[i].email+"</td>";
        result += "<td>"+ar[i].age+"</td>";
        result += "<td>"+ar[i].pastime+"</td>";
        result += "</tr>";
    }
    // console.log(result);
    let hTbody = document.getElementById('htmlTbody');
    console.log(hTbody);


    //Append - 제이쿼리
    //tr붙이기 전에 그자리 있는걸 지움
    // $('#htmlTbody').empty();
    //tr붙이기
    // $('#htmlTbody').append(result);

    //Appen - JS
    //hTbody.append(result); //텍스트 문자열 형태로 Append됨
    //hTbody.appendChild(result); //Node Err.
    //hTbody.innerText(result); //괄호가X
    //hTbody.innerText = result;
    hTbody.innerHTML = result;
    //------------------------------------------------------------------------------
    */

    //------------------------------------------------------------
    //결과 변수 --> 우선 반복문 쓰지 않고 하나만 출력.
    // let result = "";
    // result +="<tr>";
    // result +="<td class='align-middle' width='30%'>"+localStorage.key(2)+"</td>";
    // result +="<td class='align-middle' width='30%'>"+localStorage.getItem(localStorage.key(2))+"</td>"
    // result +="<td class='remove_box'><button class='btnRemove butn'>Remove</button></td><td></td>"
    // result +="<tr>";

    // let hTbody = document.getElementById('htmlTbody');
    // console.log(result);
    // hTbody.innerHTML = result;
    //------------------------------------------------------------




    //------------------------------------------------------------
    //key순회하면서 key:value 값들 출력하기
    //------------------------------------------------------------
    console.log('로컬 스토리지 길이 = '+localStorage.length); //5출력

    let ar = new Array();
    let result2 ="";

    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        console.log(`${key} : ${localStorage.getItem(key)}`);

        //결과 변수
        result2 +="<tr>"
        result2 +="<td class='align-middle' width='30%'>"+ key +"</td>"
        result2 +="<td class='align-middle'>"+ localStorage.getItem(key) +"</td>"
        result2 +="<td class='remove_box'><button class='btnRemove butn'>Remove</button></td><td></td>"  //<td></td> 하나 끝에 추가해서 pastime공백 박스 매꿈
        result2 +="</tr>"

        //배열에 저장
        ar.push(result2);
    }
    console.log(ar);

    //Append(붙이기) 제이쿼리로
    $('#htmlTbody').empty();
    $('#htmlTbody').append(result2);
});