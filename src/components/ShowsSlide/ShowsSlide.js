import css from "../ShowsSlider/ShowsSlider.module.scss";

import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

const ShowsSlide = ({img, name, rating, genre}) => {
    return (
        <li className={`${css.shows__movie} ${css.releases__movie}`} style={{backgroundImage: `url(${img})`}}>
            <div className={`${css.releases__wrapper}`}>
                <span className={`${css.shows__genre} ${css.genre}`}>
                   {genre}
                </span>
                <RatingForMovie value={rating}/>
                <h3 className={`${css.title} ${css.shows__title}`}>
                    {name}
                </h3>
            </div>
        </li>
    );
};

export {ShowsSlide};