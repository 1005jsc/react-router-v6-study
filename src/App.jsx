import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './components/about';
import Article from './components/article';
import Articles from './components/articles';
import Home from './components/home';
import Layout from './components/layout';
import Login from './components/login';
import PublicRoute from './components/login/public_route/public_route';
import MyPage from './components/myPage';
import NotFound from './components/notFound';
import Profile from './components/profile';
import Yes from './components/yes';


const App = () =>{



    // 1. index.js에 browserRouter라고 전체적으로 감싸준다 
  
  // 원칙!: 모든 Route들은 app.tsx에서 정리한다

  
    // 2. <Routes><Routes/>를 넣는다 
  // routes로 감싸지지 않은 <route/>는 작동하지 않게된다  

  // 3. route 컴포넌트 
  // <Route path="주소규칙" element={보여 줄 컴포넌트 JSX} />

  // 4. link
  // <Link to="경로">링크 이름</Link> 
  
  // 5. URL 파라미터와 쿼리스트링
  // URL 파라미터 예시: /profile/velopert
  // 쿼리스트링 예시: /articles?**page=1&keyword=react
  
  
  
  // 6. URL파라메터
  

  // 7. 쿼리스트링



  // 8. 중첩된 라우트  
  // <Route path="/articles" element={<Articles />} />
  //     <Route path="/articles/:id" element={<Article />} />
  // 이런식으로 두고 articles에는 article/1, article/2, article/3으로 가는 link를 따로 두면 
  // id 1, 2, 3 마다 게시글이 렌더되게 된다 






  // 중요~~! 이거 몰라서 한시간 허비함
  // 달랑 <Route path="/articles/:id" element={<Article />} />만 쓰면 Article이 안뜬다

  // <Route path="/articles" element={<Articles />} />
  //     <Route path="/articles/:id" element={<Article />} />

  // articles/:id만 써놓으면 안된다 
  // articles도 써 놓아야 articles/:id 가 작동한다  





  

  // <outlet/> 쓰는법 
  // 부모컴포넌트에 넣고
  // <Outlet/> 은 자식 컴포넌트를 보여준다 
  // 
  // (1) 부모 라우트에 자식 라우트를 끼워넣고
  // <Route path="/articles" element={<Articles />}>
  // <Route path=":id" element={<Article />} />
  // </Route>
  //  
  // (2) <Articles/> 컴포넌트에 Outlet이라는 컴포넌트를 껴넣는다 

  // (3) 그러면 outlet자리에 article/1 article/2 article/3 가 나타나게 된다 
  // (4) 결론 outlet :  자식 컴포넌트를 보여준다 


  
  // <outlet/>을 통해 props전달하는 방법 
  // 답: useOutletContext라는게 있다 


  // 예1 
  // 부모 컴포넌트에서 
  // const hi = 'hi'
  // <Outlet context={hi}/>
  // 자식 컴포넌트에서 
  // const hi = useOutletContext();
  // console.log(hi)
  //하면 된다 
  
  
  // 예 2 (공식사이트)
  // function Parent() {
  //   const [count, setCount] = React.useState(0);
  //   return <Outlet context={[count, setCount]} />;
  // }
  // function Child() {
  //   const [count, setCount] = useOutletContext();
  //   const increment = () => setCount(c => c + 1);
  //   return <button onClick={increment}>{count}</button>;
  // }


  // 또 useOutletContext로 변수를 정의할때 타입을 붙여주는게 좋다 안붙이면 함수 쓸때 에러난다 
  // const handleLogin:handleLoginType = useOutletContext()

  // 또 전달하고자 하는 prop이 두개 이상일떄는 배열로 전달한다 
  // <Outlet context={[count, setCount]} />;
  // 
  // 팁 그리고 배열보다 {}를 쓰는 걸 추천한다 


  // 중요!!! 이것 때문에 함 크게 혼남 
  // typescript 로 쓰면 
  // 1. <Outlet context={[count, setCount]} />;
  // 2. type contextType = [count:number, setCount: () => void ]
  // 3. const [count, setCount] = useOutletContext();
  // 이 세가지 꼴이 모두 같아야한다
  // 
  // 한곳은 배열이고 한곳은 오브젝트이면 안된다 

  // 보통 
  // <Outlet context={{handleLogin, loginState}}/>
  
  // (1)const yes = useOutletContext<LoginContextType>() 아니면
  // (2)const {handleLogin, loginState} = useOutletContext<LoginContextType>()
  // 로 쓰고 
  // (1) yes.handleLogin, yes.loginState
  // (2) handleLogin, loginState 이렇게 쓴다 


  // 또, outlet context를 쓰면 outlet 경로의 컴포넌트 는 물론 
  // 그 밑 자식들 모두 useOutletContext로 context를 받아올 수 있다 
// 주저하지 말고 적극적으로 애용하자 










  // 9. 공통 레이아웃 컴포넌트 
  // <Route element={<Layout />}>
    // 이런식으로 전체를 감싸주면 모든 페이지에서 레이아웃이 나옴 
  
  //</Route>


  // path="/" => index
  // <Route index element={<Home hi={hi}/>}       />
  // '이건 홈이야' 라고 명시적으로 표현해줌  
  // path="/"와 아예 똑같은 의미임



  // 10. useNavigate

  // (1) const navigate = useNavigate(); 먼저 달고 
  
  
  // (2) 이전페이지로 이동
  // const goBack = () => {
  //   navigate(-1);
  // }; 
  // 
  
  // (3) 두번 뒤로가기
  // const goBackTwice = () => {
  //   navigate(-2);
  // }; 

  // (3) articles 경로로 이동
  // //  const goArticles = () => {
  //   navigate('/articles');
  // };

  // (4)다른 페이지로 이동을 할 때 replace 라는 옵션이 있는데요, 
  // 이 옵션을 사용하면 페이지를 이동할 때 현재 페이지를 페이지 기록에 남기지 않습니다.
  // 여기 왔다는 기록을 웹에 남기고 싶지 않을 때 씀 
  // 그래서 1, 2, 3(replace true), 4 순서로 페이지를 이동했다면, 4에서 뒤로가기할때 3으로 가지않고 2로 감  
  // const goArticles = () => {
  //   navigate('/articles', { replace: true });
//   // }
//   그 다음에 / 경로로 들어가서 Home 페이지를 띄운 뒤에, 소개 링크를 눌러 About 페이지로 이동하세요. 
// 그리고, 상단의 게시글 목록 페이지를 눌러보세요.

// 그 상태에서 브라우저의 뒤로가기 버튼을 눌러 이전 페이지로 이동을 해보세요.
// 만약 { replace: true } 설정이 없었더라면 직전에 봤던 페이지인 About 페이지가 나타나야 하지만, 
// 이 옵션이 활성화되어있기 때문에, 그 전의 페이지인 Home 페이지가 나타나게 됩니다.



  // (5) 넘기면서 데이터도 같이 실어서 넘기고 싶을때
//   navigate(
//   'thepath',
//   {
//     state: {
//       //...values
//     }
//   }
// })


// If you need to replace the current location instead of push a new one onto the history stack,
// use navigate(to, { replace: true }). If you need state, use navigate(to, { state }). 
// You can think of the first arg to navigate as your and the other arg as the replace and state props.
// 라고 하는데 설명 너무 잘함 

// To access the route state in the consuming component use the useLocation React hook:
// 그리고 도착해서 짐 푸는 방법은
// const { state } = useLocation();
// 라고 하면된다 
// useState처럼 쓰면 됨 













// 11. NavLink (링크 컴포넌트에서 살짝 발전된 것으로 css를 추가해줌 지금은 안쓸것 같아서 일단 정리 안함 )


// 12. NotFound ()

// path="*" -> 다른 라우트들의 주소와 일치되지 않은 주소가 입력됬다면 이 곳으로 오게 된다 
// <Route path="*" element={<NotFound />} />
// 위 라우트를 올려 놓고 이제 notfound컴포넌트만 잘 만들어 놓으면 됨 





// 13. Navigate 컴포넌트 

// 예를 들어서, 사용자의 로그인이 필요한 페이지인데 로그인을 안했다면 로그인 페이지를 보여주어야겠죠?
// Navigate 컴포넌트는 컴포넌트를 화면에 보여주는 순간 다른 페이지로 이동을 하고 싶을 때 사용하는 컴포넌트입니다.
// 즉, 페이지를 리다이렉트 하고 싶을 때 사용합니다.

// const isLoggedIn = false;

//   if (!isLoggedIn) {
//     return <Navigate to="/login" replace={true} />;
//   }

// mypage를 로그인 없이 가려할 경우 
// 바로 로그인 페이지로 이동하게 된다 




// 14. 절대경로 vs 상대경로
// path를 쓸때 절대경로와 상대경로가 있다 
// 절대경로는 걍 쓰면 되지만 상대경로는 부모 route가 있어야 사용할 수 있다(당연한말이지만)  
{/* <Route path="/main" element={<Main/>} >
        <Route path="/main/biography" element={<Biography/>}>
          <Route path="biography/note" element={<BiographyWords/>}/>
          <Route path="/main/biography/bio" element={<BiographyBio/>}/>
        </Route>
        <Route path="works" element={<Works/>}/>
        <Route path="/main/exhibition" element={<Exhibition/>}/>
        <Route path="/main/critics" element={<Critics/>}/>
        <Route path="/main/contacts" element={<Contacts/>}/>
      </Route> */}

// 절대경로: path="/main/biography"같이 제일 앞에 "/"로 시작된다 
// 상대경로: path="biography" "/"없이 시작한다 대신 부모 Route가 있어야된다 
// 위 예시에서 path="works" 는 결국 path="/main/works"랑 같은 말이다 


// 15. 여러 경로에서 완전 똑같은 컴포넌트를 보여줘야 할때 

// 참고로 url의 제일 끝의 ''와 '/'는 차이가없다 (제일 앞의 ''와 '/'는 14번 이야기다) 


// 예를 들어 url '/main' '/main/biography'둘다 아예 똑같은 화면을 보여줘야 된다고 치자



// 이렇게 하면 된다 



// 경우 1:  '/main'일 경우 
// <Route path="/main" element={<Main/>} >

// <Route path='' element={<Biography/>}>
//   <Route path="" element={<BiographyWords/>}/>
// </Route>
// </Route>


// 경우 2:  '/main/biography'일 경우 
// <Route path="/main" element={<Main/>} >
// <Route path='biography' element={<Biography/>}>
//   <Route path="" element={<BiographyWords/>}/>
//   <Route path="note" element={<BiographyWords/>}/>
//   <Route path="bio" element={<BiographyBio/>}/>
// </Route>
// </Route>


// 경우 1과 경우 2를 합치면 우리가 원하는 바인 
// url '/main' '/main/biography'둘다 아예 똑같은 화면을 보여줄수 있게 된다 


// <Route path="/main" element={<Main/>} >

// <Route path='' element={<Biography/>}>
//   <Route path="" element={<BiographyWords/>}/>
// </Route>
// <Route path='biography' element={<Biography/>}>
//   <Route path="" element={<BiographyWords/>}/>
//   <Route path="note" element={<BiographyWords/>}/>
//   <Route path="bio" element={<BiographyBio/>}/>
// </Route>
// </Route>




//16.  react router로 로그인 구현하기 

// 목적: 로그인해야만 볼수 있는 영역이 필요하다
// 이 영역은 privateRoute라는 내가만든 커스텀라우트로 감싸면 
// 로그인이 되면 이 컴포넌트를 보여주고,
// 로그인이 안되어있으면 다시 main으로 돌아가게끔하는 로직을 수행하는 리엑트 컴포넌트 

// ***참고로 <PrivateRoute/>처럼 Route의 이름을 내 커스텀대로 만들어서
// Routes에 껴 넣는 것은 v6부터 불가능해졌다 
// (에러뜸 Routes가 <PrivateRoute/>의 body를 그냥 무시해버림 )
// 그래서 v6부터는 Route를 커스텀하게 만들지말고 
// 걍 로그인에따라 출입을 허가하고 아니면 불가하는 로직이 들어있는 
// React컴포넌트를 만드는게 맞다 


// 위의 방법은 2가지 있는데 2가지 모두 소개하겠다 

// 1. children을 props로 받는 리엑트 컴포넌트를 만든다 


// private_route.tsx

// type PrivateRoute = {
//   children: JSX.Element
//   login: boolean
// }
// const PrivateRoute = ({children, login}:PrivateRoute) => {
//   return login ? children : <Navigate to='/main/private' replace={true}/>
// }
// export default PrivateRoute;


// (1) Props에 있는 children은 jsx.element(예를들어 우리가 흔히 쓰는 
// 이런거를 말함 <Main/> <Layout/>)을 받고 
// (2) 로그인 되면 children을 그대로 주고, 안되어있으면
// Navigate를 통해서 main/private로 돌아가게끔 한다 
// replace={true}는 웹에 여길 방문했다는 기록을 남기지 않겠다는 옵션인데
// 유저가 뒤로가기를 눌러도, 여길 방문했다는 기록이 없으니까
// 다시 여기로 돌아오지 않케끔 하는 역할을 한다 

// 그리고 app.tsx에서

      // <Routes>
      //   <Route path="example" element={
      //     <PrivateRoute2 login={login}>
      //       <LoggedIn hi={hi}/>
      //     </PrivateRoute2>}/>
      // </Routes>

// Route의 element로 넣어주고
// PrivateRoute의 children은 사이에 끼워서 전달해주면 된다 
// 1. 끝



// 2. Outlet으로 자식을 넘겨주는 방법

// type PrivateRouteProps = {
//   login : boolean;
// }

// const PrivateRoute = ({login}: PrivateRouteProps) => {

//   if(!login){
//     return <Navigate to="/main/private" replace={true}/> 
//   }
  //   return <Outlet/>
// }
// export default PrivateRoute;

// 말그대로 자식을 children이아닌 Outlet으로 넘겨주는방법이다 
// 


{/* <Route path="loggedin" element={<PrivateRoute login={login}/>}>
            <Route path="" element={<LoggedIn hi={hi}/>}/>
            <Route path="" element={<LoggedIn hi={hi}/>}/>
          </Route> */}


// App.tsx에서는 보통 쓰는 것처럼 쓰면 된다 
// 2. 가 1. 보다 좋은 점은 자식 Route를 여러개 넣을 수 있다는 점이다 
// loggedin밑에있는 route들은 전부 로그인 체크가 가능하게 된다 







// 끝



















  return <>
  
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />}       />
      <Route path="/about" element={<About/>}   />
      <Route path="/profiles/:username" element={<Profile />} />
    </Route>

    <Route path="/articles" element={<Articles />} >
      <Route path=":id" element={<Article />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/mypage" element={<MyPage />} />
    <Route path="*" element={<NotFound />} />
    <Route path="/yes" element={<PublicRoute/>}>
      <Route path="" element={<Yes/>}/>
    </Route>


  </Routes>
  
  </> 


}

export default App;

