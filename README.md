# Portfolio
포트폴리오

## 프로젝트 소개 🖥️
포트폴리오입니다.
## 개발 기간 ⏱️
24.07.03 - 24.07.04

### 맴버 구성 🧑‍🤝‍🧑

- 한다솔: 프론트앤드 담당

### 개발 환경 ⚙️
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
## 주요 기능 📌
- DB값 겅증
- 로그인, ID찾기, PW찾기
- 로그인시 세션 생성

# 주요 코드
### JAVASCRIPT
    $(document).ready(function() {
    // 리스트 선언
    let reply_list = [];
    
    <c:forEach var="blist" items="${reply}" varStatus="status">
    // 서버에서 받은 LIST 구조형 자료를 자바스크립트 변수에 저장
    reply_list.push({num:"${blist.dr_num}",// 작성된 다이어리 순번
    writer:"${blist.dr_writer}", // 다이어리 작성자
    content:"${blist.dr_content}",// 다이어리 내용
    code:"${blist.dr_code}"});// 유저 코드    
    </c:forEach>
    
    reply_list.forEach(function(arr) {
    // 위 자바스크립트에 저장된 변수를 활용하여 댓글 끌어오기
    const list = $(`#cmtlist\${arr['num']`);
    const plus = `<p>\${arr['writer']} : \${arr['content']} </p> <hr>`;
    list.append(plus); 
    });
    
### 추후 아래 코드를 적용할 예정
전반적인 코드 설명: 새로고침 없이 댓글 남기기, 삭제 등 구현

@Controller -> @RestController 사용

### JAVASCRIPT

    function deldir(code){ 
    // 다이어리 삭제
    $("#diary" + code).attr("style", "display: none;"); // 삭제시 화면에서 지움
    // ajax를 이용하여 서버로 삭제할 다이어리 코드 전달
    }

    const writecmt = (num) => { // 댓글 작성
    let a = $(`#comt\${num}`);
    const list = $(`#cmtlist\${num}`);
    const plus = `<p>익명인 : \${a.val()} </p>`;
    a.val('');
    list.append(plus);
    // ajax를 이용하여 서버로 추가된 댓글과 다이어리 코드 전달
    }
