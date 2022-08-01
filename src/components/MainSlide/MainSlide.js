import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

import css from "../MainSlider/MainSlider.module.scss";

const MainSlide = ({movie: {backdrop_path, original_title, overview, vote_average, genre_ids}}) => {
    const img = `https://image.tmdb.org/t/p/original/${backdrop_path}`;
    const rating = vote_average / 2;

    return (
        <div className={css.mainScreen__background}
             style={{backgroundImage: `url(${img})`}}>
            <div className={css.container}>
                <div className={css.mainScreen__info}>
                    <span className={`${css.genre}`}>
                       {genre_ids}
                    </span>
                    <RatingForMovie value={rating}/>
                    <h1 className={`${css.mainScreen__title} ${css.title}`}>
                        {original_title}
                    </h1>
                    <div className={css.mainScreen__description}>
                        <p>
                            {overview}
                        </p>
                    </div>
                    <button className={`${css.button}`} type={'button'}>
                        Watch now
                    </button>
                </div>
            </div>
        </div>
    );
};

export {MainSlide};