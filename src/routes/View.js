import React, {useState, useEffect} from 'react';
import './Home.css';

const View = () => {
    // 생성자 대치 constructor

    // const [isLoading, setLoading] = useState(true);
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
        <section className={"container"}>
            <span>here is chart</span>
            <span>here is </span>
            {/*{isLoading ? (<div className={"loader"}>*/}
            {/*                <span className={"loader__text"}>Loading,,,</span>*/}
            {/*              </div>)*/}
            {/*            :*/}
            {/*    (<div className ={"movies"}>*/}
            {/*        {(movies.map(item =>*/}
            {/*            <Movie key={item.id}*/}
            {/*                   id={item.id}*/}
            {/*                   year={item.year}*/}
            {/*                   title={item.title}*/}
            {/*                   summary={item.summary}*/}
            {/*                   poster={item.medium_cover_image}*/}
            {/*                   genres={item.genres}*/}
            {/*            />*/}
            {/*        ))}*/}
            {/*    </div>)*/}
            {/*}*/}
        </section>
    )
}

export default View;
