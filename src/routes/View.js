import React, {useState, useEffect} from 'react';
import './View.css';
import Chart from '../Components/Chart';
import List from '../Components/List';

const View = () => {
    const menuList = {
        0: <Chart/>,
        1: <List/>,
    };
    // const tabContent = [
    //     {
    //         tabTitle: (
    //             <li onClick={()=>changeTab()} > Chart </li>
    //         ),
    //         tabCont: (
    //             <div> 탭1 내용 </div>
    //         )
    //     },
    //     {
    //         tabTitle: (
    //             <li onClick={()=>changeTab()}> List </li>
    //         ),
    //         tabCont: (
    //             <div> 탭2 내용 </div>
    //         )
    //     }
    // ];


    // 생성자 대치 constructor
    const [mainTabIndex, setMainTabIndex] = useState(0);
    const changeTab = () => {
        setMainTabIndex(prevState => prevState === 0 ? 1 : 0);
        console.log(mainTabIndex)
    };

    // const [movies, setMovie] = useState([]);
    //
    // const loadingProcess = () => {
    //     setLoading(prevState => !prevState)
    // }
    // const movieSetting = (response) => {
    //     setMovie(prevState => response.data.data.movies)
    // }
    //
    // const loadingMovies = async () => {
    //     const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
    //     movieSetting(response)
    //     loadingProcess()
    // };
    //
    // // componentDidMount 구현하기
    // // useEffect는 첫번째 인자로 callback을 받는다.
    // useEffect(() => {
    //     loadingMovies();
    // }, // eslint-disable-next-line react-hooks/exhaustive-deps
    // [])

    // // componentDidUpdate 구현하기
    // // useEffect는 첫번째 인자로 callback을 받는다.
    // useEffect(() => {
    //     // 컴포넌트가 마운트되고 setTimeout실행
    //     setTimeout(() => {
    //         console.log(`you click ${isLoading} times`)
    //     }, 3000)
    // },[isLoading] )



    return (
        <div className="container">
            <div className="menuBar">
                <ul className="tabs">
                    <li className={`${mainTabIndex === 0? 'is-active': ''}`} onClick={()=> changeTab()}>Chart</li>
                    <li className={`${mainTabIndex === 1? 'is-active': ''}`} onClick={()=> changeTab()}>List</li>
                </ul>
            </div>
            <div className="contentArea">
                {menuList[mainTabIndex]}
            </div>
        </div>
    )
}

export default View;
