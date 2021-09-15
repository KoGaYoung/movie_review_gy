import React from "react";
import propTypes from "prop-types";

const Movie = ({id, year, title, summary, poster}) => {
    return (
        <div className={"movie__data"}>
            <h3 className={"movie__title"}>{title}</h3>
            <h5 className={"move_year"}> {year}</h5>
            <p className={"movie__summary"}>{summary}</p>
        </div>



    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    year: propTypes.number.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
}
export default Movie;
