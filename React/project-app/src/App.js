// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Hello from './Hello'; // 확장자 .js 생략 가능
import Event from './Jsevent1';
import Event2 from './components/Jsevent2';
import List from './components/List';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './link/Home';
import Link1 from './link/Link1';
import Link2 from './link/Link2';
import Link3 from './link/Link3';

function App() {
  // 1
  let txt1 = 'React';

  // 2
  let txt2 = 'css테스트';

  // 3
  const txt3 = {
    color: 'red',
    fontSize : "20px"
  }

  // 4
  const x1 = 5;
  let text = "5입니다.";
  if (x1 < 10) {
    text = "10보다 작다";
  }

  // 5
  const x2 = 5;

  // 6
  function x3() {
    return <p>x3결과 반환함.</p>
  }

  // 7
  const txt4 = 3;

  // 8
  const daum = {
    name : '다음',
    url : 'https://m.daum.net',
    target : '_blank',
  }

  // 9
  const evt1 = () => {
    alert("evt1 클릭했어요");
  }

  // 10
  const evt2 = (x) => {
    alert(x + " evt2 클릭했어요");
  }

  // 11
  const evt3 = (b, c) => {
    alert(c.type);
  }

  // 12
  function evt4(d) {
    console.log(d.target.value);
  }

  // 13
  function evt5 (txtevt) {
    console.log(txtevt);
  }

  // 14
  let [ex1] = useState(['웹표준1', '웹접근성1', '웹개발1']);

  // 15
  let [ex2, i] = useState(['웹표준2', '웹접근성2', '웹개발2']);

  // 16
  let [ex3, k] = useState(0);

  // 17
  let pro = '웹개발';
  function project1() {
    pro = pro === '웹개발' ? '앱개발' : '웹개발';
    document.getElementById('pro').innerText = pro;
  }

  // 18
  const [pro2, setName] = useState('웹개발2');
  function project2() {
    setName(pro2 === '웹개발2' ? '앱개발2' : '웹개발2');
  }

  // 19
  const [pro3, setName3] = useState('웹개발3');

  return (
    <div className="App">
      {/* 설치하면서 생긴 기존 내용 */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* ********************************************************* */}

      {/* 1. */}
      <div>
        <h3>{txt1}</h3> {/* {데이터 바인딩} */}
        <h3
        // 태그 사이에 주석
        >{txt1}</h3>
        이름<input type="text" defaultValue={txt1} />
      </div>
      <hr />

      {/* 2 */}
      <div>
        <h4 style={{color : 'red', fontSize : '20px'}}>{txt2}</h4>
        <h4 className='txt2'>{txt2}</h4>
      </div>
      <hr />

      {/* 3 */}
      <div>
        <h4 style={txt3}>{txt2}</h4>
        {/* <Fragment> ~ </Fragment> <> ~ </>*/}
        <>
          <p style={
            {
              color: 'blue',
              border: '2px solid #ff0000',
              paddingTop: '50px',
            }
          }>
            css테스트
          </p>
        </>
      </div>
      <hr />

      {/* 4 */}
      <div>
        <p>계산 : 1 + 3 = {1 + 3}입니다.</p>
        <p>결과 : {text}</p>
      </div>
      <hr />

      {/* 5 */}
      <p>결과 : { (x2) > 10 ? "True" : "False" }</p> 
      <hr />

      {/* 6 */}
      <p>결과 : { x3() }</p>
      <hr />

      {/* 예제 */}
      {
        2 + 2 === 5
        ? (<p>맞아요!</p>)
        : (<p>틀려요!</p>)
      }

      {
        2 + 2 === 4 && (<p>맞아요!</p>)
      }
      <hr />

      {/* 7 */}
      {
        (function() {
          if (txt4 === 1) return (<p>1!</p>);
          if (txt4 === 2) return (<p>2!</p>);
          if (txt4 === 3) return (<p>3!</p>);
        })() //즉시 실행 넣어 준 것 ()
      }
      {
        (() => {
          if (txt4 === 1) return (<p>1!</p>);
          if (txt4 === 2) return (<p>2!</p>);
          if (txt4 === 3) return (<p>3!</p>);
        })() 
      }
      <hr />

      {/* 8 */}
      <p><a href={daum.url} target={daum.target}>{daum.name}</a></p>
      <hr />

      {/* 9 */}
      <p><button onClick={evt1}>클릭하세요!!</button></p>
      <hr />

      {/* 10 */}
      <p><button onClick={() => evt2("evt2 클릭했어요")}>클릭하세요!!</button></p>
      <hr />

      {/* 11 */}
      <p><button onClick={(event) => evt3("evt3 클릭했어요", event)}>클릭하세요!!</button></p>
      <hr />

      {/* 12 */}
      <p><input type="text" onChange={evt4} /></p>
      <p>
        <input type="text" onChange={e => {
          console.log(e.target.value);
        }} />
      </p>
      <hr />

      {/* 13 */}
      <p><input type="text" onChange={e => {
        const txtevt = e.target.value;
        evt5(txtevt);
      }}/></p>
      <hr />

      {/* 14 */}
      <p>{ex1[0]}</p>
      <p>{ex1[1]}</p>
      <p>{ex1[2]}</p>
      <hr />

      {/* 15 */}
      <p>{ex2[0]}</p>
      <p>{ex2[1]}</p>
      <p>{ex2[2]}</p>
      <hr />
      <p>
        <button onClick={ () => {
          let copy = [...ex2];
          copy[0] = '이젠 웹';
          i(copy);
        }}>내용수정</button>
      </p>
      <hr />

      {/* 16 */}
      <div>
        <p>결과 : <button onClick={ () => {
          k(ex3 + 1)
        }}>좋아요!!</button> ✨ {ex3}</p>
      </div>
      <hr />

      {/* 17 */}
      <p id="pro">{pro}</p>
      <button onClick={project1}>내용변경1</button>
      <hr />

      {/* 18 */}
      <p>{pro2}</p>
      <button onClick={project2}>내용변경2</button>
      <hr />

      {/* 19 */}
      <p>{pro3}</p>
      <button onClick={() => {
        setName3(pro3 === '웹개발3' ? '앱개발3' : '웹개발3');
      }}>내용변경3</button>
      <hr />

      <div>
        <Hello />
        <Hello />
        <Hello />
      </div>
      <hr />

      <div>
        <Event />
      </div>
      <hr />

      <div>
        <Event2 />
        <Event2 num={10}/>
      </div>
      <hr />

      <div>
        <List />
      </div>
      <hr />

      <div style={{ height : '200px'}}>
        <BrowserRouter>
          <nav className='link'>
            <Link to="/">홈</Link>
            <Link to="link1">링크1</Link>
            <Link to="link2">링크2</Link>
            <Link to="link3">링크3</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Link1" element={<Link1 />} />
            <Route path="Link2" element={<Link2 />} />
            <Route path="Link3" element={<Link3 />} />
          </Routes>
        </BrowserRouter>
      </div>

    </div>
  );
}

export default App;
