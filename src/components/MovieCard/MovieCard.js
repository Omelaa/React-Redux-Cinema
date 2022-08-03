import css from "./MovieCard.module.scss";

import {GenreBadge} from "../GenreBadge/GenreBadge";
import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

const MovieCard = ({
                       styleCard,
                       styleGenre,
                       styleTitle,
                       movie: {title, vote_average, poster_path, genre_ids},
                       genres
                   }) => {
    const img = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    const rating = vote_average / 2;

    return (
        <>
            {
                poster_path ?
                    <li className={`${css.card} ${styleCard}`} style={{backgroundImage: `url(${img})`}}>
                        <div className={css.card__wrapper}>
                            <GenreBadge styleGenre={styleGenre} genreIds={genre_ids} genres={genres}/>
                            <RatingForMovie value={rating}/>
                            <h3 className={`${css.title} ${`${styleTitle}` || css.card__title}`}>
                                {title}
                            </h3>
                        </div>
                    </li>
                    :
                    ''
            }
        </>
    );
};

export {MovieCard};