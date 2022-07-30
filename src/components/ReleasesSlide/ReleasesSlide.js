import css from "../ReleasesSlider/ReleasesSlider.module.scss";

import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

const ReleasesSlide = ({img, name, genre, rating}) => {
    return (
        <li className={css.releases__movie} style={{backgroundImage: `url(${img})`}}>
            <div className={css.releases__wrapper}>
                <span className={`${css.releases__genre} ${css.genre}`}>
                    {genre}
                </span>
                <RatingForMovie value={rating}/>
                <h3 className={`${css.title} ${css.releases__title}`}>
                    {name}
                </h3>
            </div>
        </li>
    );
};

export {ReleasesSlide};