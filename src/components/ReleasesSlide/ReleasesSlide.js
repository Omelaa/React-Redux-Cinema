import css from "../ReleasesSlider/ReleasesSlider.module.scss";

import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

const ReleasesSlide = ({movie: {title, vote_average, poster_path, genre_ids}}) => {
    const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    let rating = vote_average / 2;

    return (
        <li className={css.releases__movie} style={{backgroundImage: `url(${img})`}}>
            <div className={css.releases__wrapper}>
                <span className={`${css.releases__genre} ${css.genre}`}>
                    {genre_ids}
                </span>
                <RatingForMovie value={rating}/>
                <h3 className={`${css.title} ${css.releases__title}`}>
                    {title}
                </h3>
            </div>
        </li>
    );
};

export {ReleasesSlide};