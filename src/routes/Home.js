import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Movie from '../Components/Movie';
import './Home.css';

const Home = () => {
    // const reducer = (state, action) => {
    //     switch (action.type) {
    //
    //         case 'LOADING':
    //             return {
    //                 loading: true,
    //                 data: null,
    //                 error: null
    //             }
    //         case 'SUCCESS':
    //             return {
    //                 loading: false,
    //                 data: action.data,
    //                 error: null
    //             }
    //         case 'ERROR':
    //             return {
    //                 loading: false,
    //                 data: null,
    //                 error: action.error
    //             }
    //         default:
    //             throw new Error(`Unhandled action type: ${action.type}`);
    //     }
    // }
    // const [state, fetchState] = useReducer(reducer, {loading: true, data: null, error: null})
    // const {loading, data: mov, error} = state; // state.data 를 users 키워드로 조회
    // const loadingMovies = async () => {
    //     fetchState({type: 'LOADING'});
    //     try {
    //         const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
    //         debugger
    //         fetchState({type: 'SUCCESS', data: response.data.data.movies});
    //     } catch (e) {
    //         fetchState({type: 'ERROR', error: e});
    //     }
    // };
    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // if (!mov) return null;

    // 생성자 대치 constructor
    const [isLoading, setLoading] = useState(true);
    const loadingProcess = () => {
        setLoading(prevState => !prevState)
    }
    const [movies, setMovie] = useState([]);
    const movieSetting = (response) => {
        setMovie(prevState => response.data.data.movies)
    }

    // componentDidMount 구현하기
    // useEffect는 첫번째 인자로 callback을 받는다.
    useEffect(() => {
        loadingMovies();
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [])

    const loadingMovies = async () => {
        const response = await axios.get('https://yts.mx/api/v2/list_movies.json');
        console.log(response)
        movieSetting(response)
        loadingProcess()
    };

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
            {isLoading ? (<div className={"loader"}>
                            <span className={"loader__text"}>Loading,,,</span>
                          </div>)
                        :
                (<div className ={"movies"}>
                    {(movies.map(item =>
                        <Movie key={item.id}
                               id={item.id}
                               year={item.year}
                               title={item.title}
                               summary={item.summary}
                               poster={item.medium_cover_image}
                               genres={item.genres}
                        />
                    ))}
                </div>)

            }
            {/*{index.html의 root와 이름이 같은 컴포넌트는 사용할 수 없다.}*/}

        </section>

    )

}

export default Home;
