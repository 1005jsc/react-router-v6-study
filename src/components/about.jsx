import React, { Component } from 'react';


// 7. 쿼리스트링
// useLocation 
// location이라는 객체를 반환하고, 이 객체는 현재 사용자가 보고있는 페이지의 정보를 가지고있다 

// 이 객체에는 다음과 같은 값들이 있다.

// pathname: 현재 주소의 경로 (쿼리스트링 제외)
// search: 맨 앞의 ? 문자 포함한 쿼리스트링 값
// hash: 주소의 # 문자열 뒤의 값 (주로 History API 가 지원되지 않는 구형 브라우저에서 클라이언트 라우팅을 사용할 때 쓰는 해시 라우터에서 사용합니다.)
// state: 페이지로 이동할때 임의로 넣을 수 있는 상태 값
// key: location 객체의 고유 값, 초기에는 default 이며 페이지가 변경될때마다 고유의 값이 생성됨

// 여기서 쿼리스트링은 location.search값을 통해 조회할 수 있다 
// http://localhost:3000/about?detail=true&mode=1 라고 직접 입력해서 어떤 값이 나타나는지 확인할 수 있다.

// 쿼리스트링 값이 현재 ?detail=true&mode=1 으로 표시가 되고 있습니다. 
// 이 문자열에서 앞에 있는 ? 로 지우고, & 문자열로 분리한뒤 key 와 value 를 파싱하는 작업을 해야 하는데요,
// 다행히도 리액트 라우터에서는 v6부터 useSearchParams 라는 Hook을 통해서 쿼리스트링을 더욱 쉽게 다룰 수 있게 됐습니다.



import { useSearchParams } from 'react-router-dom';

const About = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get('detail');
  const mode = searchParams.get('mode');

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === 'true' ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
      <p>detail: {detail}</p>
      <p>mode: {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
    </div>
  );
};

export default About;

















// import { useLocation } from 'react-router-dom';

// const About = () => {
//   const location = useLocation();

//   return (
//     <div>
//       <h1>소개</h1>
//       <p>리액트 라우터를 사용해 보는 프로젝트입니다.</p>
//       <p>쿼리스트링: {location.search}</p>
//     </div>
//   );
// };

// export default About;