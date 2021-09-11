import React from 'react';
import propTypes from 'prop-types';
// import Potato from "./Potato";


const foodILike = [
    {
        id: 1,
        name: 'kimchi',
        link: 'https://steemitimages.com/DQmUCKzQx9R5UTHwm91PwyUv236V1SJeJXFaN8C5sJW4GEM/2c77e779b5a5caa8d129a105a34e677a093927.jpg',
        rating: 4.5
    },
    {
        id: 2,
        name: 'samgteopsal',
        link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.z1NRYI5oQWdaIQQ7QJwhjAHaHa%26pid%3DApi&f=1',
        rating: 5
    },
    {
        id: 3,
        name: 'bibimbap',
        link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.TyqKdm936XUIYdpzHOOetgHaE8%26pid%3DApi&f=1',
        rating: 3.5
    },
    {
        id: 4,
        name: 'doncasu',
        link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmp-seoul-image-production-s3.mangoplate.com%2Fsources%2Fweb%2Frestaurants%2F269317%2F1331742_1561072063557%3Ffit%3Daround%257C512%3A512%26crop%3D512%3A512%3B*%2C*%26output-format%3Djpg%26output-quality%3D80&f=1&nofb=1',
        rating: 2.5
    },
    {
        id: 5,
        name: 'kimbap',
        link: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.CylRHw_Y-qcfL667IP170wHaHa%26pid%3DApi&f=1',
        rating: 1.5
    }
];


const Food = ({name, picture, rating}) => {
    return (
        <div>
            <h3>i love {name}</h3>
            <img src={picture}
                 alt={name}
            />
            <h4>rate {rating}/5.0</h4>
        </div>

    );
}
Food.propTypes ={
    name: propTypes.string.isRequired,
    picture: propTypes.string.isRequired,
    rating: propTypes.number
}

//
// const renddrFood = (item) => {
//     return  <Food name = {item.name} picture = {item.link}/>
// }

const App = () => {
    return (
        <div>
            {foodILike.map(item =>
                <Food key={item.id}
                      name={item.name}
                      picture={item.link}
                      rating={item.rating}
                />
            )}
            {/*{index.html의 root와 이름이 같은 컴포넌트는 사용할 수 없다.}*/}
        </div>
    )

}

export default App;
