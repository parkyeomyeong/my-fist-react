// 만약에 리액트 실행때 warning 없는걸 원하면 아래 같이 쓰셈
// /* eslint-disable*/ 
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집'

  let [myList, myFunc] = useState(['남자코트 추천', '강남 맛집', '파이썬 독학'])
  let [likes, likesFunc] = useState(0)

  function changeTitle() {
    // deep copy를 위한 spread인가...? 
    // deep copy는 굉장히 중요하고 꼭 해야함 state를 건들게되면 재렌더링이 안될 수 있음
    var newArray = [...myList];
    newArray[0] = '여자코트 추천';
    myFunc(newArray)
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div>개발</div>
      </div>
      <div className='list'>
        <button onClick={() => { changeTitle() }}>버튼</button>
        <h4>{myList[0]} <span onClick={() => { likesFunc(likes + 1) }}>👍</span>{likes}</h4>
        <p>2월 17일 발행</p>
        <hr />
        <h4>{myList[1]}</h4>
        <p>2월 18일 발행</p>
        <hr />
        <h4>{myList[2]}</h4>
        <p>2월 19일 발행</p>
        <hr />
      </div>
      {/* <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div> */}
      
{/* 이렇게 아래에 컴포넌트를 만들어두고 html문법처럼 하나의 태그만 쓰면 쉽게 정리 가능하네 ..? */}
      <Modal></Modal>
    </div>
  );
}

function Modal() {
  return (
    <div className='modal'>
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
