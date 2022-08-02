import css from "../MovieCard/MovieCard.module.scss";

const GenreBadge = ({genreIds, styleGenre, genres}) => {
    return (
        <span className={`${`${styleGenre}` || css.card__genre} ${css.genre}`}>
            {genreIds.length > 0?
                genres && genres.map((genre) => genre.id === genreIds[0] ? genre.name : '')
                :
                'No genre'
            }
        </span>
    );
};

export {GenreBadge};