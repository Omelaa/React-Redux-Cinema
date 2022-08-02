import {useEffect} from "react";
import {Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";

import css from "./ShowsSlider.module.scss";

import {genreActions, movieActions} from "../../redux";
import {MovieCard} from "../MovieCard/MovieCard";
import {moviesCategories} from "../../services";

const ShowsSlider = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movie);
    const {genres} = useSelector(state => state.genre);

    const {results} = movies;

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(movieActions.getAll({moviesType: moviesCategories.moviesFor('now_playing')}));
    }, [dispatch]);

    return (
        <section className={css.shows}>
            <div className={css.container}>
                <a className={css.category} href="#">
                    Now playing
                </a>
                <ul className={`${css.shows__movies} ${css.releases__movies}`}>
                    <Swiper
                        loop={true}
                        navigation={true}
                        slidesPerView={3.1}
                        modules={[Navigation]}>

                        {
                            results && results.map((movie) =>
                                <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                    <MovieCard key={movie.id}
                                               movie={movie}
                                               styleCard={css.shows__movie}
                                               styleTitle={css.shows__title}
                                               styleGenre={css.shows__genre}
                                               genres={genres.genres}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    );
};

export {ShowsSlider};