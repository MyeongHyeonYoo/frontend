# **Frontend** 

## 💡 `Vue` 

--- 

### **`Vue 3`** <br>

1. VSCode 부가기능 설치 (확장팩) <br>
    - Vetur <br>
    코드 하이라이팅(코드 색상 부여) <br>
    - Vue 3 Snippets <br>
    코드 자동 생성 <br>
        - template, script, style로 구성된 초기 구성을 만들어 준다. <br>
            ```
            vetur도 지원하지만, 잘 안 되는 경우도 있기에 Vue 3 Snippets를 추가로 설치
            ```
            ```
            cf)

            (+) 확장팩
            ESList : 자바스크립트 문법 검사기 
            ```

2. Node.js 설치 <br>
구글 검색 후 설치 → LTS (최신 버전 말고 버전 낮은 것으로 설치 ▷ 안정성) <br>
    - Node.js : 서버 측에서 실행되는 자바스크립트 실행환경 <br>
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
    - 설치 경로 바꾸지 말 것 → 구동 안 된다. <br>

3. 폴더 만들기 <br>

4. VSCode에서 파일 → 폴더 열기 <br>
    - 터미널 → 새 터미널 <br>
        ```
        Ctrl + Shift + P (터미널 선택)
        Terminal: Select Default Profile을 클릭 ▷ Command Prompt 클릭

        Ctrl + J (터미널 열기)
        ```
        - 터미널 닫았다가 다시 실행 (안 되면 VSCode 재시작) <br>
    - `npm install -g @vue/cli` <br>
        ```
        node -v : 설치 버전 확인

        install → i 로 줄여 쓸 수 있음
        -g : global(전역적으로) → 옵션 맨 뒤에 써줘도 된다.
        ```
    - 오류(권한 오류) ▶ 건들지 말 것! (오류 더 나고 실행 안 될 수 있다.) <br>
        ```
        1) window powershell(우클릭으로 관리자모드 실행)

        2) Set-ExecutionPolicy-ExecutionPolicy Unrestricted 입력 후 Y → 컴퓨터 재부팅
        ```

5. 작업 폴더에서 <br>
작업 수행할 '폴더 생성' 및 추가 이후에 작업 ▷ Vue를 만들 폴더 추가 <br>
    - `vue create 프로젝트 이름` * <br>
        ```
        vue create project1

        선택 버전 나오면 3선택 → 그냥 Enter 키 누르면 3버전
        ```
    - 파일 → 생성된 폴더 선택 <br>

6. 결과물 브라우저 확인 <br>
(설치/생성 되면 .git(폴더) 삭제해도 된다.(삭제 안 하면 알람 계속 뜸))
    - `npm run serve` <br>
        ```
        ex)

        http://localhost:8080/ (Local, Ctrl + 클릭)
        ```
---

**폴더 구조** <br>
- node_modules : 설치한 모듈이 저장되는 장소 <br>
- public : index.html
    ```html
    <div id="app"></div>
    ```
- src : App.vue … <br>
- package.json : 라이브러리 버전, 프로젝트 설정 기록 <br>

**App.vue** <br>
- template : HTML + 뷰데이터 바인딩 영역 (HTML, CSS 등) <br>
- script : 뷰컴포넌트(화면블록)의 내용을 정의하는 영역 (data, methods 등 …) <br>
- style : HTML 태그에 CSS 스타일을 정의하는 영역 <br>

**뷰 라우터** <br>
일종의 라이브러리 <br>
- 웹 페이지 간의 이동 <br>
    웹 페이지 간의 이동 방법 ▷ 화면 간의 전환을 매끄럽게 진행시킬 수 있음.(깜박이 없이~) <br>
    ```HTML
    <router-link to ="URL 값"> : 페이지 이동 태그

    <router-view> : 페이지 표시 태그. 변경되는 URL에 따라 해당 컴포넌트를 출력
    ```
- 터미널 종료 후 재실행 <br>
    ```
    npm install vue-router@4 (☆ 뷰 버전마다 설치버전 다름)
    ```
    - node_modules 폴더 ▷ vue-router 생성됨 <br>
- main.js 코두 추가 <br>
    ```javascript
    import router from './router'
    createApp(App).use(router).mount('#app')
    ```
- router.js 파일 생성 후 코드 추가 <br>
    ```javascript
    import { createWebHistory, createRouter } from "vue-router";
    …

    const routes = [
        {
            path:
            component:
        },
    ];

    const router = createRouter({
        history: createWebHistory(),
        routes
    });

    export default router;
    ```

**뷰에서 제이쿼리 사용** <br>
- 터미널 ▷ 새 터미널 <br>
    ```
    npm install --save jquery
    ```
    ```
    npm i jquery.touchslider : 터치 슬라이더 기능
    ```
    ```
    cf)

    npm install --save react (뷰에서 리액트 사용)
    ```
```
--save 옵션

npm5부터 --save 옵션 추가 없이 'npm install' 시 dependencies에 패키지 추가
(devDependencies가 아닌 dependencies에 패키지 추가)


ex)

npm install react --save 
        ∥ (npm 5부터)
        ∥ (같다)
npm install react
```
```
npm install -D

-D 옵션 : devDependencies에 패키지들이 추가 된다.

-- production 옵션 : 배포할 프로젝트 빌드할 때, devDependencies에 있는 패키지들은 포함되지 않게 한다.

-g 옵션 : (global)
1) 해당 패키지를 전역으로 설치
2) 시스템 상에 있는 모든 node_modules 디렉토리에 해당하는 패키지를 설치한다는 것
3) 즉, 이미 세팅되어져 있는 다른 프로젝트에서 해당 패키지를 사용할 수 있게 된다.
```
- package.json 설치 버전 확인 <br>    
```javascript
import $ from 'jquery'
```
- mounted : 인스턴스가 마운트된 후 호출 <br>

**뷰에서 bootstrap** <br>
- 터미널 ▷ 새 터미널 <br>
    ```
    npm install bootstrapp --save
    ```
- package.json 설치버전 확인 <br>
- main.js <br>
    ```javascript
    import 'bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css' 
    ```
    ```
    https://getbootstrap.kr
    ```

**배포** <br>
- 터미널 ▷ 새 터미널 <br>
    ```
    npm run build
    ```
- dist 폴더 확인 <br>
- 알드라이브 업로드 후 확인 <br>
- github.com <br>
    로그인 ▷ New Repository ▷ 왼쪽에 아이디(이름).github.io/ README 파일 생성 체크 ▷ 파일 끌어다 놓기 <br>
    ```
    아이디(이름).github.io/ → 이렇게 안 하면 다른 창으로 열린다.
    
    https:// 이걸로 들어가서 확인 가능
    ```

<br>

```
백업 시

node_modules는 용량이 커서 node_modules만 제외하고 백업해도 된다.
(다만 작업 시 node_modules 필요 → npm i 설치 : npm 모듈 로컬 설치)
```

[1]
||||
|---:|:---:|:---|
|src|assets|information.js|
||components|LessonOne.vue<br>LessonTwo.vue<br>LessonThree.vue<br>LessonFour.vue<br>LessonSix.vue<br>LessonEight.vue<br>LessonNine.vue<br>VueLink1.vue<br>VueLink2.vue<br>VueLink3.vue|
|src|App.vue||
||LessonFive.vue||
||LessonSeven.vue||
||main.js||
||router.js||
||||

<br>

[2]
|||||
|---:|:---:|:---|:---|
|src|assets|css|reset.css|
|||images||
||components|EzenHome.vue<br>ListWrap1.vue<br>ListWrap2.vue<br>ListWrap3.vue<br>ListWrap4.vue<br>EzenBottom.vue||
||App.vue|||
||main.js|||
||router.js|||
|||||


---

**`npm 명령어`** <br>
||||
|:---|:---:|:---:|
|npm +|내용|기타|
|npm init|package.json 생성||
|npm help|명령어를 모를 때 역할, 옵션 등을 알 수 있다.||
|npm 명렁어 help<br>npm install help|해당 명령어에 대해 알고 싶을 때||
|npm install<br>npm i|npm 모듈 로컬 설치|--save or -S : dependencies에 추가<br>--save-dev or -D : devDependencies에 추가<br>-g : global 패키지에 추가|
|npm uninstall moduleName|npm 모듈 삭제||
|npm update|npm 모듈 업데이트||
|npm dedupe|중복된 모듈 정리||
|npm root|node_modules의 위치를 알려준다.||
|npm outdated|오래된 패키지의 존재 유무를 알려준다.||
|npm ls|패지키를 조회한다.|npm ls 패키지명 : 해당 패키지의 유무, 어떤 패키지의 dependencies인지 알려준다.|
|npm ll|패키지의 더 자세한 정보를 알려준다.||
|npm cache|npm 내의 cache 목록 확인|캐시(Cache)|
|npm cache clean --force|캐시 삭제|캐시(Cache)|
|npm rebuild|npm 재설치|에러가 발생했을 때 주로 npm cache clean을 해주고 명령 실행|
|npm -v<br> node -v<br>npm -version|버전 확인||
|npm install rimraf|rimraf 설치|node_modules 폴더 삭제 전,<br>리눅스나 맥의 rm -rf (파일/폴더 삭제 명령어)를 윈도우에서도 사용할 수 있게 만들어줌.|
|rimraf node_modules|node_modules 폴더 삭제|node_modules 폴더 삭제 진행|
|npm prune|package.json 내에 정의되지 않은 패키지 삭제||
|npm start|package.json scripts에 있는 start 명령어를 실행|따로 설정하지 않았다면 node server.js가 실행|
|npm stop|실행 중인 npm을 중지||
|npm restart|stop후에 다시 start||
|npm run|그 이외의 scripts 실행|npm run 명령어|
|npm config|npm의 설정을 조작|npm config list : 현재 설정 조회<br>npm set : 이름 값<br>npm get 이름 : 이름으로 속성을 설정하거나 조회|
||||


---
---
---