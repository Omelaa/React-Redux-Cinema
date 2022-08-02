import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from "./MoviesList.module.scss";

import {Search} from "../Search/Search";
import {movieActions} from "../../redux";
import {moviesCategories} from "../../services";
import {MovieCard} from "../MovieCard/MovieCard";

const MoviesList = () => {
    const dispatch = useDispatch();
    const {genres} = useSelector(state => state.genre);
    const {searchValue} = useSelector(state => state.filter);
    const {movies} = useSelector(state => state.movie);

    const [foundMovies, setFoundMovies] = useState([]);

    const {results} = movies;

    useEffect(() => {
        dispatch(movieActions.getAll({moviesType: moviesCategories.discover}));
    }, [dispatch, searchValue]);

    const filteredMovies = foundMovies.filter(movie => movie.title.toLowerCase().includes(searchValue.toLowerCase()))

    return (
        <section className={css.movies}>
            <div className={css.container}>
                <div className={css.movies__inner}>
                    <h3 className={`${css.movies__title} ${css.category}`}>
                        All Movies
                    </h3>
                    <div className={css.movies__wrapper}>
                        <ul className={css.filter}>
                            <li className={`${css.filter__item} ${css.genre}`}>
                                Fantasy
                            </li>
                            <li className={`${css.filter__item} ${css.genre}`}>
                                Action
                            </li>
                            <li className={`${css.filter__item} ${css.genre}`}>
                                Happy
                            </li>
                            <li className={`${css.filter__item} ${css.genre}`}>
                                Fire
                            </li>
                            <li className={`${css.filter__item} ${css.genre}`}>
                                Heroes
                            </li>
                        </ul>
                        <Search setFoundMovies={setFoundMovies}/>
                    </div>
                </div>
                <ul className={css.movies__items}>
                    {foundMovies.length > 0 ?
                        foundMovies && filteredMovies.map(movie =>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                genres={genres.genres}
                                styleCard={css.movies__item}
                            />
                        )
                        :
                        results && results.map(movie =>
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                genres={genres.genres}
                                styleCard={css.movies__item}
                            />
                        )
                    }
                </ul>
            </div>
        </section>
    );
};

export {MoviesList};