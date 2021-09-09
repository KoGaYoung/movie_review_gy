import React from 'react';
// import Potato from "./Potato";

const Food = (props) => {
    // console.log(props);
    let {fav} = props;
    return (
        <h3>i love {fav}</h3>
    )

}

const App =()=> {
    return (
        <div>
          <h3>Hello!!!!</h3>
          <Food fav={"kimchi"}   /> {/*props는 문자열을 제외하고 전부 중괄호로감싸야함*/}
          <Food fav={"ramen"}   />
          <Food fav={"samgiopsal"}   />
          <Food fav={"chukumi"}   />


          {/*{index.html의 root와 이름이 같은 컴포넌트는 사용할 수 없다.}*/}
        </div>
    )

}

export default App;
