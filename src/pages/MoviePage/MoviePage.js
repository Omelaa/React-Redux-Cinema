import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import css from './MoviePage.module.scss';

import {movieService} from "../../services";
import {RatingForMovie} from "../../components";

const MoviePage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState();
    const [video, setVideo] = useState([]);

    const rating = movie && movie.vote_average / 2;
    const img = `https://image.tmdb.org/t/p/original/${movie && movie.backdrop_path}`;

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const {data} = await movieService.getById(id);
                setMovie(data);
            } catch (e) {
                alert('error!');
            }
        };

        const fetchVideo = async () => {
            try {
                const {data} = await movieService.getVideo(id);
                setVideo(data.results);
            } catch (e) {
                alert('error!');
            }
        };
        fetchMovie();
        fetchVideo();
    }, [id]);

    if (!movie) {
        return 'loading...'
    }

    return (
        <>
            <section className={css.movie} style={{backgroundImage: `url(${img})`}}>
                <div className={css.container}>
                    <div className={css.movie__wrapper}>
                        <div className={css.movie__video}>
                            <iframe width={720} height={405} src={`https://www.youtube.com/embed/${video[0].key}`} title="YouTube
                                    video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write;
                                    encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                            </iframe>
                        </div>
                        <div className={css.movie__info}>
                            <h3 className={css.movie__title}>
                                {movie.title}
                            </h3>
                            <div className={css.movie__date}>
                                <span className={css.movie__line}>Year: {movie.release_date}</span>
                                <span className={css.movie__line}>Time: {movie.runtime} min</span>
                                <span className={css.movie__line}>Adult: {movie.adult ? '18+' : '12+'}</span>
                            </div>
                            <div className={css.movie__more}>
                                <span className={css.movie__country}>Countries:</span>
                                {
                                    movie.production_countries.map((country, index) =>
                                        <span className={css.movie__line} key={index}>
                                                {country.iso_3166_1}
                                        </span>
                                    )
                                }
                            </div>
                            <div className={css.movie__more}>
                                <span className={css.movie__genre}>Genres:</span>
                                {
                                    movie.genres.map(genre =>
                                        <span className={css.movie__line} key={genre.id}>
                                            {genre.name}
                                        </span>
                                    )
                                }
                            </div>
                            <RatingForMovie value={rating}/>
                            <div className={"movie__overview"}>
                                <p>
                                    {movie.overview}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
export {MoviePage};
