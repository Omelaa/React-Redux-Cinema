import {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {useDispatch, useSelector} from "react-redux";
import {Autoplay, Navigation, Pagination} from "swiper";

import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import css from "./MainSlider.module.scss";

import {moviesCategories} from "../../services";
import {MainSlide} from "../MainSlide/MainSlide";
import {genreActions, movieActions} from "../../redux";

const MainSlider = () => {
    const dispatch = useDispatch();
    const {movies} = useSelector(state => state.movie);
    const {genres} = useSelector(state => state.genre);

    const {results} = movies;

    useEffect(() => {
        dispatch(genreActions.getAll());
        dispatch(movieActions.getAll({moviesType: moviesCategories.moviesFor('top_rated')}));
    }, [dispatch]);

    return (
        <section className={css.mainScreen}>
            <ul>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3500,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation, Autoplay]}
                >
                    {
                        results && results.map((movie) =>
                            <SwiperSlide key={movie.id} virtualIndex={movie.id}>
                                <MainSlide key={movie.id} movie={movie} genres={genres.genres}/>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
            </ul>
        </section>
    );
};


export {MainSlider};
