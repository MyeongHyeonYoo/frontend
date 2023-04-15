# **Frontend**  

## 💡 `HTML/CSS` 

--- 

- **웹사이트 문서 형식** <br>
    - **html**: 마크업 작업 (.html | .htm → 확장자) <br>
        - 태그(tag)를 사용하여 문서에서 어느부분이 제목이고, 본문이고, 사진, 링크인지를 표시하는 것 <br>
        - 문서의 뼈대, 골격을 만드는 작업 → 텍스트 이미지(문자, 글) <br>
    - **css**
        - html(태그)에서 만들었던 골격에 디자인을 입히는 것 <br>
        - 폰트, 크기, 색상, 위치 등을 지정 → "디자인: 꾸며주는 것"<br>
    
    |<히스토리>| | | |
    |---|---|---|---|
    |html|1991년|10월| |
    |html2|1995년|11월| |
    |html3|1997년|1월| |
    |html4|1997년|12월| |
    |html5|2014년|10월|버전 - 웹표준|

    |<히스토리>| | | |
    |---|---|:---:|---|
    |css1|1996년|12월| → 거의 대부분 사용|
    |css2|1998년|5월| → 거의 대부분 사용|
    |css3|2005년|12월 5일| → css3까지 지원(html5 버전부터)|
    |css4||대부분 브라우저 지원 안함(미래)| → 현재 거의 되지 않는다.|

    1994년 팀 버너스리가 W3C 재단을 창설 <br>
    W3C: 웹표준을 재정하는 단체 <br>

- **웹표준** [코딩 규칙] <br>
    - 국제웹표준화기구(W3C)에서 지정 <br>
    - 세계 각국의 다양한 기존의 html 문서방식을 표준화하여 어떤 브라우저에서도 모두 동일한 사이트를 볼 수 있도록 만드는 것 <br>

- **웹 접근성** [선택이 아닌 필수!] <br>
    - 장애인 차별 금지법 <br>
    - 장애에 구애 없이 모든 사람들이 손쉽게 정보를 공유할 수 있고, 그 어떠한 사이트로 하여금 장애인과 비장애인이 차별되지 않도록 사이트를 모든 사람들이 사용할 수 있도록 만드는 것 → 접근성 안에 웹표준 포함(포괄적) <br>

[웹접근성 이해 동영상]
```
https://nax.naver.com/index
```

[마크업 검사 사이트]
```
http://validator.kldp.org
https://validator.w3.org/#validator-by_input
```

[CSS유효성 검사 사이트]
```
http://css-validator.kldp.org
https://jigsaw.w3.org/css-validator
```

[브라우저]  <br>
＊ 크롬(구글) → html5에 가장 빠르게 대응 <br>
＊ 사파리(애플) <br>
＊ 파이어폭스(모질라) <br>
＊ 인터넷익스플로러(마이크로소프트) → 사용 x <br>
＊ 엣지(마이크로소프트) → (폐지 예정) <br>

[웹브라우저 점유율] <br>
```
http://gs.statcounter.com
```

[브라우저별 지원확인] <br>
```
http://www.w3schools.com

확인할 태그 또는 css입력 후 Browser Support에서 확인
'HTML Browser Support' 검색
```
---

## HTML

- **기본 구조** <br>

```HTML
<!-- <!DOCTYPE html> => html5선언 -->
<!DOCTYPE html>
    <head>
        <title>제목 타이틀</title>
    </head>

    <body>
        내용
    </body>
</html>
```

```hTML
<tagname> ~ </tagname>
<!-- 시작 태그(여는 태그) ~ 종료 태그(닫는 태그) -->
<!-- 종료 태그가 없는 것도 있다. -->
```

---

- **규칙** <br>
    - ★ 마크업,css 모두 **소문자**로 입력(예외도 있다.) <br>
    ```HTML
    <태그 속성명="속성값" ···> * 하나의 태그에 속성이 여러 개 들어갈 수 있다.
    <html lang="언어">
    <태그 lang="언어">

    ※ 띄어쓰기, "", 소문자 유의
    ```

    ```HTML
    <meta charset="UTF-8">
    <meta charset="utf-8">

    <!-- 둘 다 허용 -->
    ```

[웹접근성] <br>
- 기본 언어 표시: 주로 사용하는 언어를 명시해야 한다. (지표번호 15) <br>
    - **lang** <br>
        - ko(한국어), en(영어), ja(일본어), ru(러시아어), zh(중국어), de(독일어), fr(프랑스어) <br>
        ```HTML
        <태그 lang="언어">내용</태그>
        ```

        ```
        https://www.w3schools.com/tags/ref_language_codes.asp
        ```
---

**&lt;meta&gt;** <br>
→ 닫는태그 없음 <br>
```HTML
<meta charset=" ">
```

1. 문자인코딩 <br>
    - 인코딩 <br>
        - ANSI: Windows 문자 집합으로 256가지 문자 코드를 지원 <br>
        - UTF-8: 세계의 거의 모든 문자와 기호를 포함 [★ **Default 설정**] <br>
            - ▶ 필수 요소 사항(지원 안 하는 경우 - 한글 깨짐 현상, 없으면 글씨 깨지는 등) <br>
                - **문자 인코딩에 대한 정보가 속성으로 들어감**

2. 웹페이지의 추가정보 전달 <br>
```HTML
name="keywords"     검색키워드
name="subject"      문서 제목 정보
name="description"  내용 요약
·····
```
meta 외 회사마다 쓰이는 속성을 달리함. <br>
사이트마다 다르다. <br>
cf) "google에서 인식하는 메타 태그" 참조(검색) <br> 
<img src="img-cf/00_메타태그.JPG" width="500" height="450"> <br>
이 외에도 많다. <br>

3. 모바일, 반응형 지정 <br>
```HTML
meta name="viewport"
```


---

**&lt;title&gt; ~ &lt;/title&gt;** → ♣ [0_웹접근성] <br>
문서의 제목 <br>
- 마크업: 입력하지 않으면 오류로 인식 <br>

[웹접근성] <br>
- 제목 제공: 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다. [지표번호 13] <br>
    - 프레임태그는 html5에서 사용 중지 됨 <br>
    - &lt;h1&gt; ~ &lt;h6&gt; 태그 <br>
    - empty(비워있으면) → 오류 <br>
    ```
    홈페이지 상단에 나와있는 제목
    ex) 회사 이름

    단, [지표번호 13-4] → html5에 없음
    ```

---

**주석(코멘트)** <br>
○ 다른 사람이 소스를 보더라도 내용을 알아보기 쉽게 설명하는 글, 실행되지 않음, 소스에서만 보임 <br>
○ 마크업과 개발의 편의를 위해 작성한 주석은 실제 서비스를 적용할 때 반드시 삭제한다.(일부 회사규칙) <br>

```HTML
<!-- 태그내용 --> 한 줄

여러줄
<!-- 
    태그내용
    태그내용
    태그내용
 -->
```

---

**&lt;hn&gt; ~ &lt;/hn&gt;** <br>
h1 ~ h6까지 <br>
body 안의 제목 <br>

- 마크업: 입력하지 않아도 오류로 인식하지 않음 <br>
- 웹접근성: (제목 제공) 페이지, 프레임, 콘텐츠 블록에는 적절한 제목을 제공해야 한다. [지표번호 13] <br>
```
<h1> 대제목 </h1>
<h2> 중제목 </h2>
<h3> 소제목 </h3>
<h4> 소소제목 </h4>
<h5> 소소소제목 </h5>
<h6> 소소소소제목 </h6>

────────────────────────

◎ 줄 바꿈이 되는 태그
◎ 하나하나의 인덱스
◎ 중복해서 쓸 수 있다.
h1 대제목을 한 번 쓰고, 각각의 내용에 해당하는 h2태그 여러 번 작성 가능
◎ 순차적으로 사용할 것
h1, h2 다음 바로 h6 이런 식으로 사용 x

★ h 태그를 안 쓰면 마크업 오류는 아니지만 '접근성'에서 걸린다.
```

---

**&lt;hr&gt;** <br>
[닫는 태그 없음] <br>
구분선, 경계선 <br>

---

**&lt;p&gt; ~ &lt;/p&gt;** <br>
단락, 텍스트, 이미지 등 내용을 입력할 때 사용 <br>
줄바꿈으로 표시됨 (내용이 길어지면 자동 줄바뀜) <br><br>
★ p 태그와 h 태그는 분리해서 마크업해야 한다. <br>
```
▶ P 태그 영역 안에 h 태그를 넣어서 사용할 수 없다.
▶ h 태그 영역 안 p태그 → 실행되지만 오류
```

---

**&lt;br&gt;** <br>
[닫는 태그 없음] <br>
내용을 강제로 줄바꿈 <br>
보통 단독으로 쓰지 않고, (특정) 태그 안에서 줄바꿈하기를 권장 <br>
→ 태그에 포함하여 사용 (단순히 여백을 위해 사용하지 말 것! - 권장사항 x ☞ 여백을 주는 것 따로 있다.) <br>

---

**&lt;address&gt; ~ &lt;/address&gt;** <br>
기울림 글꼴 <br>
연락처, 이메일, 주소(실제 주소 - 회사 주소 등), (주로 홈페이지 하단에 위치) <br>

<br>

copyright 저작권 표기(한국저작권위원회) → p 태그 안에 마크업(회사마다 다름) <br>

```
p 태그로 했을 때 의미가 달라진다.

ex) address 후 copyright 추가 (address 태그 안 표시)

────────────────────────────────────────────────────────────────
address 안 h 태그 사용하지 말 것! (사용은 가능(화면 표시), but 오류)
```

---

[목록 만드는 태그] → ♣ [02_목록_정의형_특수기호] <br>

1. 순서가 없는 목록 <br>
    ```HTML
    <ul>
        <li>내용</li>
        <li>내용</li>
    </ul>
    ```
    - 기본 disc ● (점 생성) [default]<br>
    ```
    ●
    ●
    ●
    ●
    ```
    - li*4 → li를 4개 생성 (다른 태그를 써도 똑같이 사용 가능) <br>
    ```
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    ```
    
    - html5 → css 또는 이미지 아이콘으로 변경 가능 <br>
    ```
    ○ circle
    ■ square
    ```

```
ul 태그 안 h 태그 사용 x
ul 태그 안 p 태그 사용 x

───────────────────────
ul 안에 li(자식) 태그만 가능!
li 안 h, p, a 태그 가능
```

2. 순서가 있는 목록 <br>
    ```HTML
    <ol>
        <li>내용</li>
        <li>내용</li>
    </ol>
    ```

    - 기본: 숫자 <br>
    ```
    1.
    2.
    3.
    4.
    ```
    - 모양 변경 <br>
        - 태그 속성으로 변경(변경 가능) <br>
        ```
        <ol type=""> 1 숫자(기본값), a 영문소문자, A 영문대문자, i 로마소문자, I 로마대문자
        
        </ol>
        ```
        - css에서 변경 <br>
        ```
        숫자, 로마자, 영문, 이미지 등 
        ```
        - 중간 번호로 시작 <br>
        ```
        <ol type="" start="시작할 숫자">
        
        </ol>
        ```
        ```
        <ol start="3"> → 3부터 시작
        
        </ol>
        ```
        ```
        <ol type="a" start="4"> → 알파벳(type) 4번째(start) 순번(d)부터 시작 
        
        </ol>
        ```
        - 역순으로 표시 <br>
        ```
        <ol type="" reversed>
        
        </ol>

        ul 태그에 사용 금지(순서 없기 때문에)
        ```

---

[정의형, 질문/답 목록 만들기] → ♣ [01_selector, inline_style/01_selector.html(selector1.css)] <br>
```
<dl>
    <dt>용어제목</dt> → 질문(이렇게도 가능)
    <dd>용어설명</dd> → 답(이렇게도 가능)
</dl>

dd 태그는 들여쓰기 된다.
```
```
dl+ → tab키 ▶ 자동 서식 생성
```
```
dl 태그 안 h, p, ul, ol 태그 허용 x
dt 태그 다음 ul, ol 태그 쓰면 dl 태그가 dd 태그를 못 참음
dt 태그 안 h, ol, ul 태그 허용 x / p 허용 o
dd 태그 안 h, p, ol, ul 태그 허용 o
```

---

[특수기호(엔티티) 기호] <br>
```
[홈페이지 참고]
https://www.w3schools.com/html/html_entities.asp
```

| | | |
|---|---|---|
|공백|& nbsp;|space(공백)는 내용에 1번만 적용|
|"|& quot;| |
|<|& lt;|less than|
|>|& gt;|greater than|
|©|& copy;| |
|&|& amp;| |
|/|& frasl;| |

<img src="img-cf/character entity.png" width="600" height="1200">

---

**&lt;img&gt;** <br>
[닫는 태그 없음] <br>
이미지(웹 이미지) <br>
```
.jpg/.jpeg
.png: (배경투명) 다양한 색상표현 / 1,600만가지 색상 지원 → png가 좀 더 안정적
.gif: (배경투명, 아이콘) 최대 256가지 색상 표시
▷ 기본 확장자는 3개(더 추가될 수도 있다.)

.svg: 벡터화 이미지(ie8 이하 버전에는 지원 x) - cf) <svg /> 태그 : 코드로 도형을 만들 수 있다.
```

```HTML
<img src="경로" 속성="값">
```

[속성] <br>

- **src** <br>
```
같은 폴더:          src="이미지 파일명" | src=".이미지 파일명" | src="./이미지 파일명" (./생략 가능)
하위 폴더:          src="폴더명/이미지 파일명"
하위하위 폴더:      src="폴더명/폴더명/이미지 파일명"
한 단계 상위 폴더:  src="../폴더명/이미지 파일명"
```

- **alt** <br>
    - 이미지를 설명해주는 대체 텍스트  <br>
    - 입력하지 않으면 마크업 오류로 인식[지표번호 1-1] <br>
        - 웹접근성 검사항목 1번(적절한 대체 텍스트 제공) <br>
        - (텍스트가 아닌 콘텐츠는 그 의미나 용도를 이해할 수 있도록 대체 텍스트를 제공해야 한다.) <br>
            - alt만 쓰면 마크업 오류 x → but, 접근성 위반 <br>
            ```
            alt="그림" (x → 설명 부족)
            alt="#" (x → 특수문자만)
            alt=" " (x → 공백만)
            alt="" (x → 빈 값)
            ```
- **width** <br>
너비 <br>
`픽셀`사이즈로 인식 [default] <br>
```
width="100" (o) 
width="100px" (x)
```

- **height** <br>
높이 <br>
`픽셀`사이즈로 인식 [default] <br>
```
height="100" (o) 
height="100px" (x)
```

- **title** <br>
툴팁, 풍선도움말 <br>
→ 사용 안 해도 무방(사용 안 해도 오류x, 접근성 위반 x) <br>

[임시 이미지로 표시] <br>
```HTML
<!-- <img src="https://via.placeholder.com/너비x높이"> -->

<img src="https://via.placeholder.com/100x200">
```

```
※ W3C에서 항상 이미지 사이즈를 넣어주기를 권장

안 해준다고 접근성 위반사항은 아니지만,
이미지를 불러올 떄 '깜박임 현상' 발생할 수 있다.
```

---

**&lt;figure&gt; ~ &lt;/figure&gt;** <br>
이미지에 설명글(캡션) <br>
이미지와 텍스트를 묶어서 사용 가능(html5 버전부터 사용 가능) <br>
```HTML
<figure>
    대상
    <figcaption>설명글(캡션)</figcaption>
</figure>
```

```
figure 태그 안 a 태그 허용 x
```

---

**&lt;a&gt; ~ &lt;/a&gt;** [02_이미지_링크] <br>
링크 만들기 (클릭할 때 적용되는 것)<br>
```HTML
<a 속성="속성값">텍스트/이미지 등</a>
```

[속성] <br>
- **href** <br>
    - 링크할 문서나 사이트의 주소 <br>
    ```HTML
    href="event.html"
    href="https://www.naver.com"
    href="#" → 빈 링크(임시 링크)
    ```

- **target** <br>
    - 링크한 내용이 표시될 위치 <br>
        - _self: 현재창 [default] <br>
        - _blank: 새창 <br>


[메일보내기] <br>
```HTML
<a href="mailto:이메일주소">텍스트/이미지등</a>
```

```
a 태그 안 figure, img 태그 허용 ○

→ ♣ [02_이미지 링크, 맵 실습/02_이미지 링크 실습.html]
```

---

**&lt;map&gt; ~ &lt;/map&gt;** → ♣ 02_이미지 맵.html <br>
하나의 이미지에 클릭 위치에 따라 서로 다른 링크를 설정 <br>
| | |
|---|---|
|사각|rect|
|타원|circle|
|다각|poly|

```HTML
<img src="이미지경로/파일명" alt="대체텍스트" usemap="#이미지맵명">
<map name="이미지맵명"> <!-- (img의 usemap명과 같아야 한다.) -->
    <area shape="모양" coords="좌표" href="연결주소" alt="대체텍스트" target="">
</map>
```

```
이름 사용 o
#abc, #map1, #u_map, #u-map(언더바, 대시 가능하다.) 
```

```
이름 사용 x
#123, #1map, #a(한 글자로만 하는 것은 많은 오류를 발생시킬 수 있다.)
```

- 사각형(위치좌표 4개)
```
shape="rect" coords="시작 X좌표, 시작 Y좌표, 끝 X좌표, 끝 Y좌표"


시작①              시작②
    ┌─────────────┐
    │             │
    │             │
    │             │
    │             │
    └─────────────┘
  끝②              끝①

위에서 아래 대각선 방향으로 할 것.
(아래에서 위로 하면 오류난다.)
```
- 원형(위치좌표 3개)
```
shape="circle" coords="중심 X좌표, 중심 Y좌표, 반지름"
```
- 다각형(위치좌표 n개)
```
shape="poly" 
coords="첫 꼭지점 X좌표, 첫 꼭지점 Y좌표, 
둘째 꼭지점 X좌표, 둘째 꼭지점 Y좌표 ··· (가급적 시계방향으로 한 바퀴)"
```

```
※ 좌표 구할 때 '★원본 사이즈'로 구해야 한다.

폴더 - 보기 탭 - 세부 정보 창(alt + shift + p) ▷ 이미지 사이즈(사진 크기) 확인 가능
```

---

**[네임앵커]** → ♣ [03_네임앵커_텍스트] <br>
페이지가 긴 문서에서 특정요소를 클릭하면 그 위치로 이동 <br>

1. 한 페이지 안에서 특정위치로 이동 <br>
    - 위치 설정 <br>
    ```HTML
    <태그 id="id명">

    id명은 중복해서 쓸 수 없다.
    id명: 한글x, 숫자만x, 특수문자x, 한 글자x
    ```
    - 이동 <br>
    ```HTML
    <a href="#id명">텍스트/이미지</a>
    ```
    ▶ 현재 페이지 내에서 href의 id 위치로 이동 <br>

2. 한 페이지에서 다른 페이지의 특정 위치 이동 <br>
    - 위치 설정 <br>
    ```HTML
    <태그 id="id명" >

    id명은 중복해서 쓸 수 없다.
    id명: 한글x, 숫자만x, 특수문자x, 한 글자x
    ```
    - 이동 <br>
    ```HTML
    <a href="파일명#id명">텍스트/이미지</a>
    ```
    ▶ 현재 페이지 href의 id 위치로 이동 <br>

```
※ id를 <p>, <img> 태그 등, 이동하고 싶은 태그 위치에 주면 된다.
```

---

**[텍스트]** <br>

**&lt;b&gt; ~ &lt;/b&gt;** <br>
굵은 텍스트 <br>
'시각적 특정', 그 내용의 의미를 중요하게 보는 것은 아니다.('의미' 없는 태그) <br>

**&lt;strong&gt; ~ &lt;/strong&gt;** <br>
중요도, 강조를 높인 텍스트 - 굵게 표시됨 <br>
일부 음성 브라우저의 경우 강조 관련 요소로 좀 더 크게 읽어 주거나 두 번 반복하여 읽어 주기도 함. <br>

**&lt;i&gt; ~ &lt;/i&gt;** <br>
기울임 꼴 텍스트 <br>
'시각적 특정', 그 내용의 의미를 중요하게 보는 것은 아니다.('의미' 없는 태그) <br>

**&lt;em&gt; ~ &lt;/em&gt;** <br>
중요도, 강조를 높인 텍스트 - 굵게 표시됨 <br>
일부 음성 브라우저의 경우 강조 관련 요소로 좀 더 크게 읽어 주거나 두 번 반복하여 읽어 주기도 함. <br>

**&lt;u&gt; ~ &lt;/u&gt;** <br>
밑 줄 텍스트

**&lt;small&gt; ~ &lt;/small&gt;** <br>
작은 텍스트 <br>

```
cf)

<big></big> 태그
▷ html5부터 중지(지원x)

css로 크기(font-size) 대체
```

**&lt;sup&gt; ~ &lt;/sup&gt;** <br>
위 첨자 텍스트 <br>

**&lt;sub&gt; ~ &lt;/sub&gt;** <br>
아래 첨자 텍스트 <br>

**&lt;s&gt; ~ &lt;/s&gt;** <br>
틀린 텍스트(잘못된 텍스트)를 정의할 때 - 취소선 <br>

**&lt;del&gt; ~ &lt;/del&gt;** <br>
내용이 업데이트된 사항에서 그 텍스트가 삭제될 때(기존 내용 삭제) <br>
속성으로 `datetime` 사용 → `삭제` 언제 이루어졌는지 값을 지정할 수 있다. (특정 기간 x (00년 a월 ~ b월 안 된다.) / 특정 시점 o) ▷ 시각적 표현은 없고, 의미적 표현 <br>

**&lt;ins&gt; ~ &lt;/ins&gt;** <br>
내용이 업데이트된 사항에서 그 텍스트가 추가될 때 <br>
속성으로 `datetime` 사용 → `추가` 언제 이루어졌는지 값을 지정할 수 있다. (특정 기간 x (00년 a월 ~ b월 안 된다.) / 특정 시점 o) ▷ 시각적 표현은 없고, 의미적 표현 <br>

```
datetime="2022-10-05" (o)

datetime="2022-3-05" (x)
datetime="2022-03-5" (x)
datetime="2022/03/05" (x)
```

---

**&lt;mark&gt; ~ &lt;/mark&gt;** <br>
노란색 형광펜 효과 <br>

**&lt;meter&gt; ~ &lt;/meter&gt;** <br>
값이 차지하는 크기 <br>
값(value) → 범위에서 차지하는 값 <br>
```
max="범위의 최대 값" (생략 가능)
min="범위의 최소 값" (생략 가능)
```

**&lt;ruby&gt; ~ &lt;/ruby&gt;** <br>
해당 문자의 발음이나 설명을 작은 크기의 윗첨자로 알려주는 루비 주석(ruby annotation)을 정의할 때 사용 <br>
- **&lt;rt&gt; ~ &lt;/rt&gt;** <br>
문자 발음 <br>

```HTML
<ruby>
    가나다
    <rt>123</rt>
</ruby>

───────────────────────────────────────
cf)

<ruby>
    가나<br>다 <!-- br 태그 사용 가능 -->
    <rt>123</rt>
</ruby>

<ruby>
    가나다 <br> <!-- br 태그 안 먹음 -->
    <br><rt>123</rt> <!-- br 태그 안 먹음 -->
</ruby>
```

- **&lt;ruby&gt; ~ &lt;/ruby&gt;** <br>
    - **&lt;rb&gt; ~ &lt;/rb&gt;**: ruby bottom - 아래 쪽에 들어갈 글자를 지정 <br>
    - **&lt;rp&gt; ~ &lt;/rp&gt;**: ruby parentheses - 브라우저가 루비를 지원하지 않을 때 표시할 '괄호'를 지정 <br>
    - **&lt;rt&gt; ~ &lt;/rt&gt;**: ruby top - 위쪽에 들어갈 글자를 지정 <br>

```CSS
style="ruby-position: under;"
style="ruby-position: over;"
```
    
---

**&lt;div&gt; ~ &lt;/div&gt;** <br>
내용을 덩어리로 묶을 때 <br>
```
cf) 웹 사이트 내 팝업 창(광고) - 바로 가기, 닫기, 설명 등 포함(의미적이지는 않는다. → 서로 연관된 것들이 아닌 경우)
```

**&lt;span&gt; ~ &lt;/span&gt;** <br>
덩어리 안에서 일부만 묶을 때(일부 내용/단어) <br>
```
span: 폭, 좁은 공간
```

```CSS
/* span 태그는 css를 글자 있는 영역에 적용 */

#ex5 p span
#ex5 p /* p 전체에 대한 것 */

```
---

**`하위구조` ul, ol 중첩** → ♣ [04_하위목록] <br>
ul, ol <br>
```HTML
<ul>
    <li>대메뉴</li>
    <li>대메뉴
        <ul>
            <li>서브메뉴</li>
            <li>서브메뉴</li>
            <li>서브메뉴</li>
        </ul>
    </li>
</ul>
```

```
ex) 홈페이지 탭 목록 안 새로운 목록
```

---

## CSS
※ CSS 작업 시 'mark-up 작업 순서'를 고려하여 작성(유추, 가독성) <br>
```
[css 참고]

https://www.w3schools.com/css
```

스타일 시트 <br>
- 확장자 → .css <br>

주석 <br>
```CSS
/* 주석 */
```

**css 적용하는 방법 3가지** <br>

1. **인라인 스타일(inline style)**: 특정요소에 직접 css를 적용 → ♣ [05_1_css설정] <br>
→ 장점보다는 단점 많음 → 분리 안 되는 문제 발생(마크업(구조)와 css가 분리가 안됨) <br>
▶ 최소한에 적용할 때 사용 <br>
```HTML
<태그 style="속성명: 속성값;">
```

2. **내부 스타일(internal style)** → ♣ [05_1_css설정] <br> 
- &lt;head&gt;와 &lt;/head&gt; 사이에 정의 <br>

```HTML
<head>
    <style> /* style 태그 → css 영역 생성 */
        선택자(selector) { 속성명: 속성값; } /* selector 종류 많다. */ 
        /* [속성명: 속성값]에 (" ") 큰 따옴표 사용 x */
    </style>    
</head>

선택자(selector): css가 적용되는 대상

해당 파일에만 적용된다.
```

3. **외부 스타일(external style)** → ♣ [05_1_css설정] <br>
- &lt;head&gt;와 &lt;/head&gt; 사이에 정의 <br>

```HTML
<link rel="stylesheet" href="폴더명/파일명.css">

<link rel="stylesheet" href="폴더명/파일명.css" media="">  <!-- media 속성 추가 가능 -->

css파일 적용 여부 관련하여 html 마크업(마크업한 것)으로 확인
```

- media: css 용도 <br>
    - screen(pc, 모바일, 반응형) <br>
    - print(인쇄) <br>
    - all (screen, print 모두 적용) [default]<br>
    ```HTML
    media="all" [Default]
    ```
→ css파일 연동하면 다른파일에도 적용 된다.(에디터마다 주는 값에 따라 생성 여부 다르다.) <br>

```HTML
<style>
    @import "폴더명/css파일명";
    @import url("폴더명/css파일명");
</style>


<link rel="stylesheet" href="폴더명/파일명.css">와 기능 같다.

```

```
link + @import 혼합형으로 쓸 수 있다.
```

---

**선택자(selector)** → ♣ [05_2_css selector/01_selector.html(css/selector1.css)] <br>
```CSS
선택자 { 속성명: 속성값; }
```
- css가 적용되는 대상 <br>
```CSS
p { color: blue; }

p { /* Style Guide 권장 방식 */
    color: blue; 
}
/* p → selector */
```

---

**전체 선택자** <br>
html 모든 태그에 적용됨 <br>
```CSS
* {
    속성명: 속성값;
}
```

```CSS
/* div 전체 */

div * { 
    속성명: 속성값; 
}
```

**태그(요소) 선택자** <br>
특정 태그에만 적용됨 <br>
초기화 작업할 때 많이 쓰임 <br>
```CSS
/* 태그를 동일시할 때(공통으로 할 때) */

태그 {
    속성명: 속성값;
}
```

```
※ 스타일시트가 중복 적용될 경우 우선 순위

1. inline > internal > external

2. 가장 마지막에 적용한 것 우선

▶ 둘 다 따져봐야 한다.
```

---

**클래스 선택자** <br>
```HTML
<태그 class="class명">
```
class명 중복 가능, 공통으로 적용됨
```HTML
<!-- 클래스명 중복 사용 -->
<h1 class="aa"></h1>
<p class="aa"></p>
<dl class="aa"></dl>
```

```CSS
.클래스명 {
    속성명: 속성값;
}
/* .(점) 반드시 써줄 것 */
/* 클래스명: 내용의 단어로 (유추 가능성) */
/* 클래스명: 숫자만 x, 한 글자 x, 한글 x, 특수문자 x */
```

```CSS
/* txt class 전체 */
.txt {
    color: red;
}

/* p태그 txt 전체 */
p.txt {
    color: red;
}
```

**다중 클래스** <br>

```HTML
<태그 class="class명 class명 class명 ···">
<태그 class="list1 list2 list3 ···">
```

```CSS
.list1 { }
.list2 { }
.list3 { }
```

```HTML
<p class="txt txt1 ···"></p>
<h1 class="txt txt2 ···"></h1>

<!-- txt: 공통 | txt1, txt2: 개별(구분) -->
<!-- 공통으로 적용하는 부분과 별개로 사용할 부분을 나눠서 쓸 수 있다. -->
```

**아이디 선택자** <br>
```HTML
<태그 id="id명">
```
id명 중복 사용 x <br>

```CSS
#id명 {
    속성명: 속성값;
}
```

```CSS
#txt {
    color: red;
}


/* p id에만 적용 */
p#txt {
    color: red;
}
```

```
class + id
태그 안에 같이 쓸 수 있다.
```

```
id는 중복이 안 되어 크게 묶어서 쓸 때 사용할 수 있고,
class는 중복이 되기 때문에 큰 id 안, 나눠서 사용할 수 있다.
```

---

**`color` 글자색** <br>
```
https://www.w3schools.com/cssref/css_colors.asp
```

```HTML
<태그 style="color: red;">
```

- **color** <br>
    - color: red; <br>
    - color: #000000; | color: #ffffff; → 사용범위, 대/소문자 가능(회사마다 다르다.) <br>
    - color: rgb(red, green, blue); <br>
    - color: rgba(red, green, blue, alpha); <br>
    - color: hsl(hue, saturation, lightness) <br>
    - color: hsla(hue, saturation, lightness, alpha) <br>
---

**`background-color` 배경색** <br>
- **background-color** <br>
    - background-color: red;
    - background-color: #000000; → #000 | #fff 축약형으로 가능 (6자리 모두 같은 경우) <br>
    - background-color: rgb(red, green, blue); → 색상 단위[0 ~ 255] <br>
    - background-color: rgba(red, green, blue, alpha); → 투명도 설정[0 ~ 1] (0: 완전한 투명 | 1: 완전한 불투명) (0.5 → .5로 표현 가능) <br>
    - background-color: hsl(hue, saturation, lightness); <br>
    - background-color: hsla(heu, saturation, lightness, alpha); <br>
    - background-color: transparent(투명) [default]  <br>
---

**`font-size` 글자 크기** <br>
- **font-size**: medium [default] | xx-small | x-samll | small | large | x-large | xx-large | <br> 
smaller(부모요소보다 작게) | larger(부모요소보다 크게) | length | initial | inherit <br>
    - inital | inherit → 잘 쓰이지 않는다. ▶ 적용이 잘 안 되거나, 작업 유추하는데 어려움 있고, 다른 방법으로 할 수 있는 방법이 존재한다. <br>

```CSS
font-size: 12px;
font-size: 1.5em;
font-size: 150%;
```

- 단위 <br>
    - **px**(고정 단위) <br>
        - 픽셀이란? : PC 모니터 상의 점. 모니터 해상도가 1024 * 768 이라고 한다면, 가로 1024개의 픽셀과 세로로 768개의 픽셀 <br>

    - **em** : 배수 단위(웹 브라우저의 기본 폰트 크기는 16픽셀), 픽셀 단위는 소수점 이하를 표현하지 못하지만, em은 0.85em과 같이 보다 정교하게 폰트 크기를 조절 할 수 있음 <br>
    ```
    em: 부모의 폰트 사이즈 기준

    1em → 1배(현재 부모의 폰트 사이즈 기준 1배 적용 / 부모 요소가 없으면 최상위 루트(root) 폰트 사이즈 기준)
    최상위 루트 → HTML 요소 (rem과 같다. - root em)
    ```

    - **%** : 백분율 단위 <br>
    ```
    %: 부모 요소 기준

    100% → 1배(현재 부모를 기준으로 1배 적용 / 부모 요소가 없으면 최상위 루트(root) 기준)
    최상위 루트 → HTML 요소
    ```

    ```
    pt(포인트), cm, mm 등 단위 다양하게 존재
    (but, 모든 css에 모든 단위가 적용되는 것은 아니다. 일부 %, em 등 적용 안 되는 것도 있으니 참고) 

    [단위 참고]
    https://developer.mozilla.org/ko/docs/Learn/CSS/Building_blocks/Values_and_units
    ```

---

**`font-weight` 글자의 굵기** <br>
- **font-weight**: normal(400) [default] | bold(700) | <br>
bolder(부모요소 기준 굵게) | lighter(부모요소 기준 얇게) | number | initial | inherit
    - font-weight: normal; → 보통
    - font-weight: bold; → 굵게
    - font-weight: 400; → normal (100 ~ 900)
    - font-weight: 1; → 보다 가볍게 표시 (1.0 이상의 수 허용 (1000.0 이하))
    - font-weight: 0; → 유효하지 않는 값(오류 - not valid)

---

**`font-style` 글자 기울림** <br>
- **font-style**: noraml [default] | italic(제일 많이 쓰인다.) - italic이라는 폰트 사용 | <br>
oblique - noraml에서 기울기만 한 것 | inital | inherit
    - font-style: noraml; → 기울림 해제 (address, i, em, 태그 해제 가능) <br>
    - font-style: italic; <br>

---

**`letter-spacing` 글자 사이 간격**(자간) <br>
- **letter-spacing**: normal [default] | length | initial | inherit <br>
(px: 절대값 / em: 글꼴에 상대적인 요소 / %: 부모에 상대적인 값) (10cm도 가능) <br>
    - 숫자 & 수치(단위) → 마이너스(-) 허용 (허용 안 하는 경우도 있으니 주의)<br>
    - 수치 만큼 간격 벌어진다.(제일 마지막(오른쪽)도 적용 ▷ 오른쪽으로 떨어진다. ) <br>
    - 어느정도 이상되면 줄 바꿈 (1000px, 1100px ···) <br>
    - 0만 그냥 쓸 수 있다. (1부터 단위 꼭 써주어야 한다.) <br>

---

**`word-spacing` 단어 사이 간격** <br>
- **word-spacing**: normal [default] | length | initial | inherit <br>
    - 단어 1개 적용 x → ex: '가', '고기' ···· <br>
    - 음수(-)도 쓸 수 있지만 권장 x → 어느정도(블록) 줄어들면 블록 지정(드래그) 안 되는 버그 생김 <br>
    - 0만 그냥 쓸 수 있다. (1부터 단위 꼭 써주어야 한다.) <br>

---

**`text-decoration` 글자에 선 표시** <br>
- **text-decoration** <br>
    - text-decoration: none → 밑줄 해제 (a, ins 태그 해제 가능) <br>
    - text-decoration: underline → 아래 밑줄 <br>
    - text-decoration: overline → 위에 선 <br>
    - text-decoration: line-through → 취소선 <br>
        - text-decoration-line → 선 위치 <br>
        - text-decoration-style → 선 스타일 ( solid [default] | dotted | dashed | double | wavy ) <br>
        ```
        text-decoration-line + text-decoration-style
        
        text-decoration: underline wavy;
        text-decoration: underline overline wavy red;
        text-decoration: underline overline line-through;

        (단, 여러 개를 작성할 경우, 호환이 안 되어 일부만 적용될 수 있는 점 주의)
        ```
        - text-decoration-thickness → 선 두께(px …) <br>
        - text-decoration-skip-ink → 밑줄 글자(특히 알파벳)에 따른 표시 여부 ( auto [default]: 글자 겹침 없음 | none: 글자 겹침 ) <br>
        - text-underline-position → 밑줄 위치 미세 조정 ( auto [default] | under: 글자에서 살짝 떨어짐 ) <br>
        - text-underline-offset → 밑줄 (글자 - 줄) 간격 조정 (px 등 단위 지정 가능) <br>

---

**`font-family` 글꼴** <br>
글자체 지정 <br>
- **font-family**: family-name | generic-family | initial | inherit <br>
- font-family: 한글, 영문, 대표 패밀리(접근성) <br>

```
대표 패밀리란?

접근성을 고려하여 사용자의 컴퓨터에 
'글꼴이 없는 경우'를 대비해 
대표 패밀리 글꼴을 대체, 마지막에 지정
```

```
serif, sans-serif, cursive, fantasy, monospace
```

```
[Generic Font Family]

serif: 삐침 있는 명조계열의 글꼴(바탕체) → '한글' 많이 쓰임(한글로 할 때)
sans-serif: 삐침 없고 굵기가 일정한 고딕계열의 글꼴(고딕체 ) → '한글' 많이 쓰임(한글로 할 때)
cursive: 손으로 쓴 것 같은 필기계열의 글꼴(필기체) → '영어' 많이 쓰인다.(영어로 할 때)
monospace: 글자 폭과 간격이 일정한 글꼴
fantasy: 화려한 글꼴

☆ 제일 마지막에 선언(필수 - 없으면 안 된다.)
▶ 키워드이기 때문에 따옴표 등 인용부호로 묶지 않는 것이 원칙.
```

```
https://fonts.google.com (구글 폰트 - 무료)

https://www.w3schools.com/cssref/css_websafe_fonts.asp


★ 글씨체 관련하여 '저작권' 문제에 주의!
```

```CSS
/* 큰 따옴표 안 작은 따옴표 → 인라인인 경우 ▶ "font-family: arial, serif, 'Times New Roman'"  */
/* 쉼표(,) 반드시 작성 */

font-family: 글꼴, 대표 패밀리(접근성);

font-family: "돋움"(큰 따옴표 생략 가능), dotum(한글을 지원하지 않는 경우 대비), 대표 패밀리(접근성);
font-family: 돋움, dotum, sans-serif;

font-family: "맑은 고딕"(띄어쓰기 - 큰 따옴표 생략 불가), 대표 패밀리(접근성);

font-family: ⓐ"돋움", ⓑ"굴림", ⓒ"맑은 고딕", ⓓ대표패밀리(접근성);

ⓐ 없으면  ⓑ / ⓑ없으면 ⓒ / 마지막으로 ⓒ 없으면 ⓓ(대표패밀리)가 적용 된다.
```

---

**`line-height` 줄 간격** <br>
- **line-height**: normal [default (1.0 ~ 1.2)] | number | length | initial | inherit <br>
    - line-height: normal;
    - line-height: 1.5em;
    - line-height: 16px;
    - line-height: 200%;

→ 숫자(음수 값 허용 x) ▶ 그냥 숫자만 쓰는 경우 '배수' 적용 <br>
→ height와 px 같게 하면 가운데 지정 (but, 항상 다 되는 것은 아니다. → 적용이 안 되는 경우도 존재) <br>

```
cf)

font: 100%/120% serif;
▷ font-size: 100% + line-height: 120%;

font: 1cm/1.5 sans-serif;


★ 반드시 font-family 지정해 주어야 한다. (최소 1개 이상) → 안 쓰면 적용 x


(뒷 장에 더 자세히 나오니 참고)
```

---

**`width` 너비** <br>
- **width**: auto [default] | value | initial | inherit

→ 자동 넓이는 'tag' 마다 다르다. <br>
→ 사이즈 지정하지 않고 쓰면 `auto` 지정 <br>
→ '0' 값은 단위 없이 그냥 쓸 수 있다. <br>

```
padding(안 쪽 여백), border(테두리), margin(바깥 쪽 여백) 제외하여 지정(포함하지 않음)
```

---

**`height` 높이** <br>
- **height**: auto [default] | length | initial | inherit

→ 자동 넓이는 'tag' 마다 다르다. <br>
→ 사이즈 지정하지 않고 쓰면 `auto` 지정 <br>
→ '0' 값은 단위 없이 그냥 쓸 수 있다. <br>

```
padding(안 쪽 여백), border(테두리), margin(바깥 쪽 여백) 제외하여 지정(포함하지 않음)
```
---

**`text-align` 텍스트 가로 정렬** <br>
★ width(너비) 내에서 가로 정렬 <br>
① block 요소에만 가능 <br>
② block 요소 안 inline(text, 이미지 등 포함) 요소 가능 <br>
- **text-align**: left [default] | right | center | justify | initial | inherit
    - text-align: left → 왼쪽 정렬 <br>
    - text-align: center → 가운데 정렬 <br>
    - text-align: right → 오른쪽 정렬 <br>
    - text-align: justify → 양쪽 맞춤 <br>

```
cf)
div 태그 안 div → 적용 O 
▷ 안의 div 적용 후, 없다면 밖(부모)의 요소 적용 (background-color, text-align 등)

☆ span 태그 → width, height 적용 x
▷ p 태그 안 span 태그 안 span 태그 → 적용 X

※ span 태그는 block 요소가 아니기 때문에 text-align 적용 x
```



---

**`margin` 바깥 쪽 여백** <br>
- **margin**: length | auto | initial | inherit <br>
auto: '수평 방향' 마진 값을 자동으로 설정(왼쪽, 오른쪽 자동 설정) <br>
cf) dl-dt-dd의 'dd'는 margin 값(여백)을 가지고 있다. <br>
    - margin: 10px; → 상 하 좌 우 10px <br>
    - margin: 10px 20px; → 상 하 10px / 좌 우 20px <br>
    - margin: 10px 20px 30px; → 상 10px / 좌 우 20px / 하 30px <br>
    - margin: 10xp 20px 30px 40px; → top - right - bottom - left <br>
    - margin-left: 10px; <br>
    - margin-top: 10px; <br>
    - margin-bottom: 10px; <br>
    - margin: 음수 가능 ☆ (단, 남용 금지 → 상, 하, 좌, 우 일정 부분만 되는 경우 있다. / js, css 애니메이션, css 트랜지션 효과 ▷ '이벤트 효과'를 줄 때 같이 사용(단순히 layout을 줄 때 사용하지 말 것.)) 

```
♣ 가로 중앙으로 위치 변경

⑴ width 사이즈 필수! (width 100%는 적용 x)
⑵ margin-left: auto; margin-right: auto;
  → margin: 0 auto; (위 ⑵와 같다) 
    margin: 상하 여백에 auto를 주는 것은 적용 안 되기 때문에 위처럼 명시하여 사용
    (margin: auto; → 상하 여백을 주지 않아 다른 곳에서 지정해 준 값이 적용이 된다면 원하는 스타일로 적용 안 될 수도 있으니 주의)

```

---

**`padding` 안 쪽 여백** <br>
→ auto 없음 <br>
→ 음수 허용 x <br>
- **padding**: length | initial | inherit <br>
cf) ul/ol 태그는 기본적으로 padding 값을 가지고 있다. <br>
    - padding: 10px; → 상 하 좌 우 10px
    - padding: 10px 20px; → 상 하 10px / 좌 우 20px <br>
    - padding: 10px 20px 30px; → 상 10px / 좌 우 20px / 하 30px <br>
    - padding: 10px 20px 30px 40px; → top - right - bottom - left <br>
    - padding-top: 10px; <br>
    - padding-bottom: 10px; <br>
    - padding-left: 10px; <br>
    - padding-right: 10px; <br>

```
padding을 width에 포함 or height에 포함 시키는 등, 하는 방법이 있다.

(뒷 장 내용에 등장)
```

---

**`목록` ul, ol** <br>
cf) ul, ol: 특수 기호, 여백 - 기본 설정되어 있다. <br>
- **list-style**: list-style-type | list-style-position | list-style-image | initial | inherit <br>
    - list-style: none; → 블릿기호(disc, circle, square) 또는 숫자 없애기 <br>
        - list-style-type: none; → 모양 또는 숫자 없애기(list-style: none;과 같다.) <br>
    - **list-style-position**: outside [default] - 기호별 위치 다름 | inside - 기호 따라다님 <br>
    - **list-style-image**: url('경로/파일명'); → 이미지 파일로 블릿기호 적용 <br>
        - 조정할 수 없다. (repeat-x, repeat-y 처럼 → 추후 position에 등장)
    - **list-style-type**; → 모양 선택 <br>
        - disc: ● [ul tag default] | circle: ○ | square: ■ <br>
        - decimal: 1, 2, 3, … [ol tag default] | decimal-leading-zero: 01, 02, 03, … <br>
        - upper-alpha: (대문자) 알파벳 A, B, C, … | lower-alpha: (소문자) 알파벳 a, b, c … <br>
        - upper-latin: A, B, C … | lower-latin: a, b, c → 알파벳(영어와 같음) <br>
        - upper-roman: Ⅰ, Ⅱ, Ⅲ … | lower-roman: ⅰ, ⅱ, ⅲ, …  → 로마 숫자 <br>
        - korean-hanja-informal: 一, 二, 三, … <br>
        - korean-hangul-formal: 일, 이, 삼 … <br>
        - hangul: 가, 나, 다 <br>
        - hangul-consonant: ㄱ, ㄴ, ㄷ, … <br>
        - disclosure-open: ▼
        - disclosure-closed: ▶

▷ 없애서 사용 → `reset`하여 기본 값 변경 (초기화) <br>
```CSS
ul, li {
    list-style: none;
}

ol, li {
    list-style: none;
}

/* ul, li | ol, li 같이 써도 된다. */
/* ul만 쓰는 경우도 가능 */
/* li만 쓰는 경우도 가능 */
/* 회사마다 다르다. */
```

```CSS
list-style-image: url(경로/파일명);
list-style-type

/* ★ image가 우선 순위 높다. */
```

```
https://www.w3schools.com/cssref/pr_list-style-type.asp
```

---

**`border` 테두리** → ♣ [05_2_css selector/02_selector.html(css/selector2.css)] <br> 
- **border**: border-width  border-style  border-color | initial | inherit <br>
    - border-color: 선 색 → 텍스트 색 [default] <br>
    - border-width: 선 두께 → medium(3px) [default] <br>
    - border-style: 선 종류 → none [default] <br>
    - border: 선 종류, 두께, 색 → 상, 하, 좌, 우 모두 적용 <br>
    ```CSS
    border: 1px solid #000;
    border: #eaeaea 1px solid;
    border: solid 1px red;
    border: 1px red solid;
    /* 순서 상관 없다. */
    
    /* 선 색, 두께, 종류를 각각 지정해서 쓸 수 있고, 한 번에 쓸 수 있다. */
    ```
    - border-top: 상 <br>
    - border-bottom: 하 <br>
    - border-left: 좌 <br>
    - border-right: 우 <br>
        - ­­- 선 종류 - <br>
        - none: 테두리 없음 <br>
        - hidden: 숨김(거의 사용x) <br>
        - dotted: 점선 ………… <br>
        - dashed: 직선 점선 ＿＿＿＿ <br>
        - solid: 실선 ─── <br>
        - double: 이중 겹선 〓〓〓 (선 두께 3px 이상 / 컴퓨터 등 해상도마다 다르다.) <br>
        - groove: 홈이 파인 듯 입체적 (선 두께 3px 이상) <br>
        - ridge: 테두리가 튀어나온 듯 입체적 (선 두께 3px 이상) <br>
        - inset: 테두리가 창에 박혀있는 듯 표시 (선 두께 3px 이상) <br>
        - outset: 테두리가 창에 튀어나온 듯 표시 (선 두께 3px 이상) <br>

---

**`text-transform` 텍스트 대소문자**  <br> 
- **text-transform**: none | capitalize | uppercase | lowercase | initial | inherit <br>
    - text-transform: none; [default] <br>
    - text-transform: uppercase; →  영어 - 소문자를 대문자로 <br>
    - text-transform: lowercase; 영어 - 대문자를 소문자로 <br>
    - text-transform: capitalize; 영어 - 첫 글자만 대문자로 <br>

---

**`font-variant` 글꼴 변형**  <br> 
- **font-variant**: normal | small-caps | initial | inherit <br>
    - font-variant: normal; [default] <br>
    - font-variant: small-caps; → 영문 글꼴 - 소문자를 조금 작은 크기의 '대문자'로 변환 <br>
    - font-variant: slashed-zero → 숫자 0을 '(0 안의)슬래시 0'으로 만듬 <br>

---

**`vertical-align`**  <br> 
블록요소 안에서 세로 정렬 요소 <br>
```
● 대부분 부모 요소에 상대적으로 정렬
● 적용이 잘 안 되는 경우 많다.
● 거의 잘 안 쓰임 - 쓰이는 곳: 테이블, 체크박스 등
● 요소 자체만을 정렬 (table cell은 예외)
● 내용에 영향 없다.
```

- **vertical-align**: baseline | length | sub | super | top | text-top | middle | bottom | text-bottom | initial | inherit <br>
    **inline**이나 **inline-block**요소에 적용 (ex: span, img) <br>
    - vertical-align: top; → 요소의 상단과 해당 하위 항목을 전체 줄의 상단에 맞춤 <br>
    - vertical-align: middle; → 기준선에 부모 요소의 x 높이 절반을 더한 요소의 가운데를 맞춤 <br>
    - vertical-align: bottom; → 요소의 아래쪽과 해당 하위 항목을 전체 줄의 아래쪽에 맞춤 <br>
    - vertical-align: super; → 요소의 기준선을 부모의 위 첨자 기준선에 맞춤 <br>
    - vertical-align: sub; → 요소의 기준선을 부모의 아래 첨자 기준선에 맞춤 <br>
    - vertical-align: baseline; [default] → 알파벳 기준 베이스라인 / 요소의 기준선을 부모의 기준선과 맞춤 <br>
    - vertical-align: text-top; → 요소의 상단을 부모 요소의 글꼴 상단에 맞춤 <br>
    - vertical-align: text-bottom; → 요소의 아래쪽을 부모 요소의 글꼴 아래쪽에 맞춤 <br>
        - 전체적으로 (위치) 약간씩 안 맞는 부분 있다. <br>
            - 길이 값, %, 음수(-) 허용 
            - 숫자로도 쓸 수 있다( 0 값: defalut ) → 정확히 맞춰 쓰기는 애매하다.(이걸로 정렬 x) <br> 

```CSS
div {
    line-height
    vertical-align: middle;
}
/* 수직 중앙 정렬 가능 */
```

```
테이블(table: '표' - 셀)에 적용할 때 아주 잘 된다.
```

---

**`table` 표** → ♣ [06_table_1, 06_table_2] <br>
- 'table' 태그 안에 써야 적용(전체 div에 table 관련 CSS를 주면 적용 x) <br>
    - border-spacing: 수치 → 수치만큼 셀 간격이 떨어짐 ▷ 단위 반드시 쓸 것 ! / 음수(-) 허용 x, 부분 부분 적용 x (th, td에 (부분) 적용 못 한다. / 부분 부분 적용하고 싶으면 다른 태그 사용할 것)<br>
        - border-spacing: length | initial | inherit <br>
        ```CSS
        border-spacing: 15px; /* 상 하 좌 우 15px */
        border-spacing: 5px 10px; /* 좌우 5px | 상하 10px → padding, border, margin과 다르다. */
        ```
    - **border-collapse**: 테두리 → 〓 두 선을 합치는 것 <br>
        - border-collapse: separate | collapse | initial | inherit <br>
            - border-collapse: separate; [default] → 셀끼리 분리 <br>
            - border-collapse: collapse; 셀끼리 공간 없애기 <br>
            ```
            셀끼리의 선 스타일 다를 때
            ………
            ――― 

            선 스타일을 바꿔줄 때 적용 제대로 안 되니(될 수도 있고 안 될 수도 있다 - 불확실성) 둘 다 적용해 주어야 한다.

            ………
            ――― → "collapse" → 실선 or 점선(어쩌다) ▷ 안정성 ↓ 
            ```
    - **caption-side**: 테이블 캡션 위치 → table 또는 caption 태그에 사용 가능 <br>
        - caption-side: top [default] → 표 상단에 제목(caption) 위치 <br>
        - caption-side: bottom → 표 하단에 제목(caption) 위치 <br>
        ```
        표 좌, 우에 caption(제목) 위치 두고 싶으면 다른 것 사용
        ```
    - **empty-cells**: 표 안의 빈 셀 테두리 <br>
        ```
        ☆ border-collapse 적용하면 empty-cells 적용 x 
        ```
        - empty-cells: show | hide | initial | inherit <br>
            - empty-cells: show; [default] → 빈 셀 테두리 보이기 <br>
            - empty-cells: hide; → 빈 셀 테두리 숨김 <br>

```CSS
#ex1 th, #ex1 td {

}

#ex1 th, td {

}

/* 위 선택자 2개 서로 다르다. */
```

---
## HTML
**`표만들기`** <br>
**&lt;table&gt; ~ &lt;/table&gt;** → ♣ [06_table_1, 06_table_2] <br>
일부 셀만 사이즈 조절 못 한다. <br>
```HTML
<table>
    <caption>표제목</caption> <!-- ▶ caption 태그 반드시 작성 → 접근성 [지표번호 18] -->
    <tr>                      <!-- cf) summary(개요, 요약) [table 속성] → 표의 요약, 구조나 탐색 방법을 기술 -->
        <th>제목셀</th>        <!-- caption과 summary를 같은 용도로 사용하지 말 것 -->
    </tr>                   <!-- ※ caption 또는 summary 둘 중 하나만 써도 됐지만, summary는 HTML5부터 지원 중지(사용하지 말 것) -->
    <tr>
        <td>내용셀</td>
    </tr>
</table>

<!-- th, td 태그 반드시 구분 -->
```
**th**: 글자 굵게, 가운데정렬 → text-align: left [default] 값으로 왼쪽 정렬 가능(예외 사항) <br>
**td**: 글자 보통, 왼쪽 정렬 <br>

```
    <tr>
        ┌───────┬───────┬───────┐
        │       │       │       │ 
        │       │       │       │ table row
        ├───────┼───────┼───────┤
   </tr>│       │       │       │
        │       │       │       │ table row
        ├───────┼───────┼───────┤
        │       │       │       │
        │       │       │       │ table row
        └───────┴───────┴───────┘

        tr: 줄 생성
```

```
th 먼저 width, height 적용되면 td로 변경 불가.
td만 height 적용 안 된다.
첫 행 또는 첫 열에 'height' 정렬되어 있으면 나머지 td는 정렬하는 것(css 적용하는 것) 생략 가능 (일일이 다 줄 필요 없다.)
```

```
★ table 속성으로 border 쓰지 말 것(오류)
```

**`★ 표 접근성`** <br>
검사항목 18. (표의 구성) 표는 이해하기 쉽게 구성해야 한다. <br>
**&lt;caption&gt;** 제공해야 함 <br>
&lt;th&gt;에는 `scope`를 제공해야 함>(col 또는 row → 둘 중 하나) <br>
- &lt;th scope="col"&gt;&lt;/th&gt; → '열' 기준으로 제목 <br> 
- &lt;th scope="row"&gt;&lt;/th&gt; → '행' 기준으로 제목 <br> 
    - &lt;td headers=th의 id 연결&gt;&lt;/td&gt; → ☆ headers 속성 사용하여 구분(접근성) <br>
        - 반드시 `id(속성)`를 사용하여 연결 (id는 th 태그에 사용) / th 태그에 class 사용하여 td 태그의 headers로 연결하면 오류 <br>
```
    
        ┌───────┬───────┬───────┐
        │       │       │       │ 
        │       │       │       │ → row 
        ├───────┼───────┼───────┤
        │       │       │       │
        │       │       │       │ → row
        ├───────┼───────┼───────┤
        │       │       │       │
        │       │       │       │ → row
        └───────┴───────┴───────┘
            ↓       ↓       ↓
           col     col     col
```

**`셀합치기(병합)`** - 나누기는 없음 <br>
- 줄 합치기 **rowspan** <br>
    - &lt;th `rowspan`="병합할 줄 수"&gt;&lt;/th&gt; → 세로 형태 <br>
    - &lt;td rowspan="병합할 줄 수"&gt;&lt;/td&gt; <br>
    ```
        ┌───────┬───────┬───────┐
        │       │       │       │ 
        │       │       │       │ → row 
        │       │───────┼───────┤
        │       │       │       │
        │       │       │       │ → row
        │       │───────┼───────┤
        │       │       │       │
        │       │       │       │ → row
        └───────┴───────┴───────┘
         <td rowspan="3"></td>
    ```
- 칸 합치기 **colspan** <br>
    - &lt;th `colspan`="병합할 칸 수"&gt;&lt;/th&gt; → 가로 형태 <br>
    - &lt;td colspan="병합할 칸 수"&gt;&lt;/td&gt; <br>
    ```
        ┌───────────────────────┐
        │                       │ 
        │                       │ <td colspan="3"></td>
        ├───────┬───────┬───────┤
        │       │       │       │
        │       │       │       │ 
        ├───────┼───────┼───────┤
        │       │       │       │
        │       │       │       │ 
        └───────┴───────┴───────┘
            ↓       ↓       ↓
           col     col     col
    ```
    
    ```
    rowspan, colspan은 '속성' → 태그 x (cf: span 태그)
    ```

**`행그룹화`** - 필수 아닌 '선택사항' <br>
- **&lt;thead&gt;**내용**&lt;/thead&gt;** → 표의 제목행 <br>
- **&lt;tbody&gt;**내용**&lt;/tbody&gt;** → 표의 내용 ♠ <br>
- **&lt;tfoot&gt;**내용**&lt;/tfoot&gt;** → 표의 하단(요약) <br>
    - ☆ 행그룹화를 안 하면 브라우저소스에서 &lt;tbody&gt;내용&lt;/tbody&gt; 자동으로 추가 <br>
        - ▷ 크롬 'F12' 키 참조(Element/요소) <br>
        ```
        cf) 크롬은 "맑은 고딕" 기본체(브라우저마다 다르다.)
        ```
    ```HTML
    <thead>내용</thead>
    <tbody>내용</tbody>
    <tfoot>내용</tfoot>

    <!-- 수동으로 분류(그룹화) 할 수 있다. -->
    ```

    ```
    
        ┌───────┬───────┬───────┐
        │       │       │       │ 
        │   o   │   o   │   o   │ → thead 
        ├───────┼───────┼───────┤
        │       │       │       │
        │  ☆☆  │  ☆☆  │  ☆☆  │ → tbody
        ├───────┼───────┼───────┤
        │       │       │       │
        │   x   │   x   │   x   │ → tfoot
        └───────┴───────┴───────┘
    ```

**`열그룹화`** - 필수 아닌 '선택사항' <br>
※ caption 태그 바로 다음에 넣어주면 깔끔하다. <br>
- **&lt;colgroup&gt;**내용**&lt;/colgroup&gt;** → 세로 열 전체를 그룹화 <br>
    - 속성 : **span** → 속성인 것에 주의! (cf: span 태그 / 태그 span과는 다른 개념) <br>
        - &lt;col span="열 개수"&gt;
    ```HTML
    <table>
        <caption>제목</caption>
        <colgroup>
            <col span="2">
            <col span="1">
        </colgroup>
        <tr>
            <th>제목1</th>
            <th>제목2</th>
            <th>제목3</th>
        </tr>
        <tr>
            <td>내용1</td>
            <td>내용2</td>
            <td>내용3</td>
        </tr>
        <tr>
            <td>내용4</td>
            <td>내용5</td>
            <td>내용6</td>
        </tr>
    </table>
    
    ```
    ```
    '열그룹화' 효과 적용 시 border-collapse: collapse; 로 되어 있어야 적용되는 것도 있다.
    정렬: th, td 같이 있으면 적용 안 된다. (text-align 등)
    ```
```
            1       2       3
        ┌───────┬───────┬───────┐
        │       │       │       │ 
        │       │       │       │ 
        ├───────┼───────┼───────┤
        │       │       │       │
        │       │       │       │ 
        ├───────┼───────┼───────┤
        │       │       │       │
        │       │       │       │ 
        └───────┴───────┴───────┘
            ┗━━━━━━━┛       ┃
            colgroup     colgroup

    1, 2 : col span="2"     3 : col span="1"
```
---
**`인용문넣기`** → ♣ [07_인용문_축약어] <br>
- **&lt;blockquote&gt;&lt;/blockquote&gt;** <br>
    - 남의 글이나 말에서 따온 문장 <br>
    - 다른 블로그나 사이트의 글을 인용할 경우 <br>
    - 들여쓰기로 표시됨 <br>
    - 인용 내용이 줄바뀜을 표시 <br>
    ```HTML
    <blockquote cite="출저">인용내용</blockquote>
    ```
```
cf) 

① 인용부호를 표시하고 의미적 코드를 만족시키는 한 가지 방법은
  'blockquote' 태그를 figure 요소 안에 넣는 방법

② 그런 다음 창의적인 요소를 표현하는 cite(cite 안 a태그 사용 가능) 태그와
  다른 저자 또는 인용 정보를 figcaption에 넣기
```

- **&lt;q&gt;&lt;/q&gt;** <br>
인라인(inline) 따옴표 <br>
    - 남의 글이나 말에서 따온 문장 <br>
    - 다른 블로그나 사이트의 글을 인용할 경우 <br>
    - 따옴표로 표시됨 (&lt;q&gt; 다음부터 끝나는 문장 &lt;/q&gt; (닫는 태그)까지) <br>
    - 인용내용이 줄바뀜 없이 표시
    ```HTML
    <q cite="출저">인용내용</q>
    ```

```
cf)

<cite></cite> → (기울임 꼴)
<cite><a></a></cite>
▷ 창조적인 작품을 '참조'하는데 사용. → 저작물의 출저 + 저작자
※ blockquote, q 태그 내 사용 금지! 

blockquote, q 태그는 인용문의 출저를 나타냄.
```

---
**`축약어`** → ♣ [07_인용문_축약어] <br>
… 점선으로 표시 <br>
**&lt;abbr&gt;&lt;/abbr&gt;** <br>
여러 개의 단어들로 이루어진 문장 <br>

```HTML
<abbr title="축약어 단어문장">축약어</abbr>
```

---

**&lt;bdo&gt;&lt;/bdo&gt;** <br>
텍스트의 방향 <br>
```HTML
<p><bdo dir="ltr">텍스트 방향성</bdo></p>
```
- 속성 **dir** <br>
    - ltr: left to right - 왼쪽에서 오른쪽으로 출력 [default] <br>
    - rtl: right to left - 오른쪽에서 왼쪽으로 출력 <br>

---

**`외부문서(파일, url) 삽입하기`** → ♣ [08_iframe] <br>
외부 파일을 삽입 <br>
외부 사이트(url) 삽입 <br>
→ 못 가져가게 막아 놓은 사이트도 있다. (ex: 네이버, 구글 …) <br>

- **&lt;iframe&gt;&lt;/iframe&gt;** <br>
    ```HTML
    <iframe src="경로/파일명" name="이름" width="너비" height="높이" title="내용 요약(설명)"></iframe>
    <!-- ★ title 속성: 웹 접근성 → 없다고 오류는 아니다. -->
    <!-- name: 필수 x / 필요할 떄 사용 -->
    <!-- width: 300px & height: 150px ▷ [default] → 테두리 자동 생성 -->
    ```
    - width/height: 픽셀(px) 또는 퍼센트 값(%)으로 표시 가능함. <br>
    <br>
    1. 현재 파일에 다른 파일 <br>
    2. 지도 삽입 - https://google.co.kr/maps → '공유 - 지도 퍼가기' <br>
    3. youtube 동영상 - https://youtube.com → '소스코드 복사' <br>
    ```
    cf)

    속성 frameborder(테두리) : 경계선 표시 여부 (0: 경계선 x / 1: 경계선 o)
    → HTML5에서 중지 

    ▶ border: 0; | border: none; 해서 많이 사용.
    ☆ iframe 태그에 'inline'으로 border 속성을 주면 오류 발생
    → style 태그 써줘야 함.
    ```

---

**`비디오파일 삽입하기`** → ♣ [10_동영상] <br>
**&lt;video&gt;&lt;/video&gt;** <br>
video 태그는 HTML5에 추가된 요소 <br>
source도 HTML5에 추가된 요소 <br>
```HTML
<video>
    <source src="파일명" type=""> <!-- source 태그: 브라우저가 video 태그를 지원하지 않을 때 화면에 표시 -->
</video>

<!-- source의 src 속성을 video 태그에 쓸 수 있다. -->
<!-- source 태그에 src, type 속성 중 src 속성 빠지면 오류 -->
<!-- src 속성을 video 태그의 속성으로 쓰고 source에 type만 쓰면 오류 -->
<!-- src, type 형식 맞춰서 써야 오류 안 난다. -->
```

- 지원 브라우저: https://www.w3schools.com (검색 : video, 결과 : HTML video tag) <br>
- 속성 <br>
    - **&lt;source&gt;** 태그 <br>
    - **type** - Media Type <br>
        - MP4 [File Format]  : video/mp4 [Media Type] → 제일 많이 지원 된다. <br>
        - WebM [File Format] : video/webm [Media Type] <br>
        - Ogg [File Format]  : video/ogg [Media Type] <br>
            - ▷ 웹 마다 or 업데이트에 따라 지원 여부 다르다. <br>
    - **&lt;video&gt;** 태그 <br>
    - **width**, **height** → 웬만하면 원본 사이즈로 설정(깨질 것 우려) <br>
    - **preload** → 파일을 재생하기 전에 파일을 모두 다운로드 할 것인지, 일부정보만 다운로드 할 것인지 설정 <br>
        - preload="none" → 재생버튼을 눌러야만 다운로드 <br>
        - preload="metadata" → 전체를 다운로드하지 않고 메타정보만 다운로드 (metadata: 제작사, 강도, 줄거리 등) <br> 
        - preload="auto" → 사용자가 즉시 이용할 수 있도록 모두 다운로드 (보통 이걸로 많이 쓰인다.) <br> 
    - **controls** → 재생 도구 <br>
    - **autoplay** → 자동 재생 (play 버튼 안 눌러도 자동 재생 ▷ 음소거 되어 있어야 가능) <br>
    - **loop** → 반복 재생 <br>
    - **muted** → 음소거 <br>
    - **poster** → 브라우저나 인터넷 연결 문제 등 비디오를 재생할 수 없을 경우 비디오 화면 자리에 대신 표시할 이미지 <br>


**`youtube.com 동영상 삽입`** <br>
youtube.com 접속 - 크롬브라우저, 우 클릭 → '소스코드 복사' <br>

**`yotube 동영상 다운로드`** <br>
youtube.com 접속 - 크롬브라우저, 우 클릭 → '동영상 url 복사' <br>

**`크롬, ie 디자인 통일 시키는 무료 플러그인`** <br>
- https://videojs.com <br>

```
유튜브 영상 다운로드
[4K video downloader]

'4K video downloader' 다운로드 → 실행
유튜브 동영상 URL 복사 → [CTRL + V] (바로) 붙여 넣기 → 영상 다운로드(이름은 영어로)
```

```
cf)

<audio></audio> 태그
음악이나 오디오 스트림과 같은 사운드 정의

● audio 태그는 video와 속성 같다. (다만, width, height, poster 속성은 없음)
● audio 내 위치하는 '텍스트'는 사용자가 audio 요소를 지원하지 않을 경우 화면에 표시(video도 동일)
● mp3 / wav / ogg (mp3 많이 쓰임 - 지원 많이 된다.)


source 태그는 <audio> 태그 안에서도 쓸 수 있다.
```

---

**`data`** 속성 <br>
HTML 요소에 추가 정보를 저장 <br>
속성명 작성 시 반드시 '소문자'로 작성(대문자 작성 시 오류) <br>
- data- ▷ `태그`에 속성으로 쓸 수 있다. <br>
    - data-* : 대시(-) 다음 어떤 이름이든 사용 가능 → 확장 가능성 고려 <br>
        - data-setup="{}" <br>
        - data-columns="3" <br>
        - data-index-number="1234" <br>
        - data-parent="cars" <br>
            - Javascript, CSS에 접근할 떄 사용할 수 있다. <br>
            ```
            ● Javascript: 'html data-setup' 검색 참조
            https://developer.mozilla.org/ko/docs/Learn/HTML/Howto/Use_data_attributes
            ```

            ```CSS
            /* ● CSS */

            tag[data-columns='3'] {
                width: 400px;
            }
            id명[data-columns='3'] {
                width: 400px;
            }
            class명[data-columns='3'] {
                width: 400px;
            }
            ```
---