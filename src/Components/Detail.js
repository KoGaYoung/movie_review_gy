import React, {useState, useEffect} from 'react';

const Detail = (props) => {
    const {location, history} = props;
    // componentDidMount
    useEffect(() => {
            if (location.state === undefined) { //history 기능 활용하여 redirect 막기
                history.push('/') // Home으로 이동
            }
        }, // eslint-disable-next-line react-hooks/exhaustive-deps
        [])


    if (location.state) { //history 기능 활용하여 redirect 막기
        return (<span>{location.state.title}</span>);
    } else {
        return null
    }
}

export default Detail;
