// src/App.js
import React from 'react';
import './App.css';

function App() {
  const goToMain = () => alert('메인으로 이동 (예시)');

  return (
    <div className="container">
      <h1 className="title">로그인</h1>
      <button className="button" onClick={goToMain}>kakao 로그인</button>
      <button className="button" onClick={goToMain}>Naver 로그인</button>
      <button className="button" onClick={goToMain}>Apple 로그인</button>
      <button className="button" onClick={goToMain}>이메일로 로그인</button>
      <div className="signup">회원가입</div>
    </div>
  );
}

export default App;
