import {useEffect} from "react";
import {Autoplay, Navigation} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import css from "./ReleasesSlider.module.scss";

import {movieActions} from "../../redux";
import {genreActions} from "../../redux";
import {moviesCategories} from "../../services";
import {MovieCard} from "../MovieCard/MovieCard";


const ReleasesSlider = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movie);
    const {genres} = useSelector(state => state.genre);

    const {results} = movies;

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(movieActions.getAll({moviesType: moviesCategories.moviesFor('upcoming')}));
    }, [dispatch]);

    return (
        <section className={css.releases}>
            <div className={css.container}>
                <a className={css.category} href={'#'}>New releases</a>
                <ul className={css.releases__movies}>
                    <Swiper
                        slidesPerView={5.5}
                        spaceBetween={60}
                        loop={true}
                        navigation={true}
                        autoplay={{
                            delay: 2500,
                        }}
                        modules={[Navigation, Autoplay]}>

                        {
                            genres && results && results.map((movie) =>
                                <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                    <MovieCard key={movie.id} movie={movie} genres={genres.genres}/>
                                </SwiperSlide>
                            )
                        }
                    </Swiper>
                </ul>
            </div>
        </section>
    );
};

export {ReleasesSlider};