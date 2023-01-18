//테이블 열과 줄 동적으로 생성해서 삽입하기



//버튼 가져오기
const btnCrc = document.querySelector('.btnCrc');
console.log(btnCrc);

//버튼 클릭시 --> 할 일 처리
btnCrc.addEventListener('click',() => {

    //할 일 처리
    let hTbody = document.getElementById('htmlTbody');
    console.log(hTbody);

    //JavaScript Table row and column.
    //Row 테이블 끝쪽에 삽입시키기
    const newRow0 = hTbody.insertRow(); //<tr></tr>을 만듬
    // const newRow1 = hTbody.insertRow();
    // const newRow2 = hTbody.insertRow();
    // const newRow3 = hTbody.insertRow();
    // const newRow4 = hTbody.insertRow();
    const newCell0 = newRow0.insertCell(); //tr안에<td></td>을 만듬
    const newCell1 = newRow0.insertCell(); //총 <td></td>가 4개 만들어짐
    const newCell2 = newRow0.insertCell();
    const newCell3 = newRow0.insertCell();

    // Append - 텍스트 노드를 새롭게 생성한 Cell에 붙이기
    const newText0 = document.createTextNode('송대곤'); //텍스트 노드 만든 것
    newCell0.appendChild(newText0); //Cell에 붙이기

    const newText1 = document.createTextNode('qzom1425@naver.com'); //텍스트 노드 만든 것
    newCell1.appendChild(newText1); //Cell에 붙이기

    const newText2 = document.createTextNode('34'); //텍스트 노드 만든 것
    newCell2.appendChild(newText2); //Cell에 붙이기

    const newText3 = document.createTextNode('웹개발'); //텍스트 노드 만든 것
    newCell3.appendChild(newText3); //Cell에 붙이기
});