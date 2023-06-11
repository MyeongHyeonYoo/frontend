# **Frontend** 

## 💡 `React` 

--- 

### **`React`** 
##### (맛보기) <br>
- 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리 <br>
- 메모리에 VIRTUAL DOM 생성 <br>
- React를 사용하려면 Node.js에 포함된 npm 필요 <br>
- jsx : JavaScript 안에서 HTML을 사용할 수 있는 문법 (JavaScript XML) <br>
- JSX는 ES6 기반 JavaScript 언어의 확장 <br>
- class : className <br>
    ```
    className이 HTML의 class
    ```
- 데이터 바인딩 : { 중괄호 } <br>
- style : style={{스타일명 : '값'}} <br>

<br>

1. React 부가기능 설치 (확장팩) <br>
    - Reactjs code snippets <br>
    - Simple React Snippets <br>
2. Node.js 설치 <br>
    - Node.js : 서버 측에서 실행되는 자바스크립트 실행 환경 <br>
    - npm(각종 웹 개발 라이브러리 설치 도우미)을 쓸 수 있다. <br>
        ```
        'Node Package Manager'
        ↘
          공식적으로는 npm 줄임말이 아닌 'npm' 자체로 하나의 단어라고 한다.
        ```
    - `nodejs.org` <br>
        ```
        Linux, macOS 및 Windows용 노드 정적 바이너리
        ```
    - 좌측 버튼 <br>
        ```
        EXTENSIONS: MARKETPLACE [Ctrl + Shift + X]
        ```
    - 설치경로 바꾸지 말 것 → 구동 안 된다. <br>
3. 폴더 만들기 <br>
4. VSCode에서 파일 ▷ (3번에서 생성한) 폴더 열기 <br>
    - 터미널 → 새 터미널 <br>
        ```
        Ctrl + Shift + P (터미널 선택)
        Terminal: Select Default Profile을 클릭 ▷ Command Prompt 클릭

        Ctrl + J (터미널 열기)
        ```
        - 터미널 닫았다가 다시 실행 (안 되면 VSCode 재시작)

<br>

```
npx create-react-app 프로젝트명(소문자)

▶ 경고 떠도 문제 없이 작동한다.


node -v : 설치 버전 확인
```
5. 4번에서 생성된 작업 폴더 열기 <br>
    - 파일 ▷ 폴더 열기 <br>
6. 결과물 브라우저 확인 <br>
    ```
    npm start

    
    ex)

    http://localhost:3000/ (Local, Ctrl + 클릭)
    ```

---

**폴더 구조** <br>
- node_modules : 설치한 모듈이 저장되는 장소 <br>
- public : index.html <br>
    ```HTML
    <div id="root"></div>
    ```
- src : 리액트를 작업할 폴더 <br>
- package.json : 라이브러리 버전, 프로젝트 설정 기록 <br>

**state** <br>
```JavaScript
import { useState } from 'react'; // state를 사용하기 위해 임포트
```
```JavaScript
useState(보관할 자료);
```
- 변수선언[작명, 작명] 왼 : 변수(state 값) / 우 : state변경 도와주는 함수

**Component** <br>
- UI를 독립적이고 재사용 가능하도록 나눈 조각 → 다 할 필요 없다. <br>
- 컴포넌트의 이름 첫 글자는 대문자로 작성 <br>
- 컴포넌트 타입에는 함수형과 클래스형이 있음 <br>

<br>

**`함수형 컴포넌트`** <br>
```JavaScript
import React from 'react';

function …() {
    return …;
} // 리턴문 안에 HTML 작성

export default …;
```
**`클래스형 컴포넌트`** <br>
```JavaScript
import React from 'react';

class … extends React.Component {
    constructor() {
        …
    }

    componentDidMount() {
        …
    }

    render() {
        return …;
    }
}

export default …;
```

---

**리액트에서 제이쿼리 사용** <br>
- 터미널 ▷ 새 터미널 <br>
    ```
    npm install jquery
    (npm i jquery --save)
    ```
- package.json 설치 버전 확인 <br>

```JavaScript
import $ from 'jquery';
```

**리액트 라우터** <br>
- 웹 페이지 간의 이동 <br>
- 터미널 종료 후 재실행 <br>
    ```
    npm i -D react-router-dom
    ```
- 라우터 삭제<br>
    ```
    npm uninstall react-router-dom
    ```

<br>

```JavaScript
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; // 모두 써줘야 한다.
```
- &lt;`BrowserRouter`&gt; : 브라우저 History API를 사용해 현재 위치의 URL을 저장 <br>
- &lt;`Routes`&gt; : 자식 **route**들을 구성하고 있는 단위이다. <br>
- &lt;`Rotue`&gt; : **path**를 통해 URL을 분기시킬 수 있다. / 중첩해서 사용할 수 있다.(중첩 라우팅) <br>
    ```JavaScript
    <Route path="" element={} /> // 닫는 태그 없는 태그는 XML 문법으로 써야 한다.
    ```
- &lt;`Link`&gt; : 링크 연결 <br>
    ```JavaScript
    <Link to="경로">링크명</Link>
    ```

```JavaScript
<BrowserRouter>
    <Link to=""></Link>

    <Routes>
        <Route path="" element={} />
    </Routes>
</BrowserRouter>
```

**배포** <br>
- 터미널 ▷ 새 터미널 <br>
    ```
    npm run build
    ```
- build 폴더 확인 <br>
- 알드라이브에 업로드 후 확인 <br>
- github.com <br>
로그인 ▷ New Repository ▷ 왼쪽에 아이디(이름).github.io/ README 파일 생성 체크 ▷ 파일 끌어다 놓기 <br>


||||
|---:|:---:|:---|
|src|components<br><br>Vue에는 있었지만, React는 없다.<br>(직접 생성해 주어야 한다.)|Jsevent2.js<br>Jsevent3.js<br>List.js<br>List.module.css|
||db|data.json|
||link|Home.js<br>Link1.js<br>Link2.js<br>Link3.js|
||Hello.js||
||Jsevent1.js||
||||

---
---
---