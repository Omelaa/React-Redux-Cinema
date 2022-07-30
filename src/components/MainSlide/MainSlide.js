import {RatingForMovie} from "../RatingForMovie/RatingForMovie";

import css from "../MainSlider/MainSlider.module.scss";

import background from "../../assets/images/background/mainBackground.png";

const MainSlide = () => {
    return (
        <div className={css.mainScreen__background}
             style={{backgroundImage: `url(${background})`}}>
            <div className={css.container}>
                <div className={css.mainScreen__info}>
                    <span className={`${css.genre}`}>
                        Science Fiction
                    </span>
                    <RatingForMovie value={5}/>
                    <h1 className={`${css.mainScreen__title} ${css.title}`}>
                        Godzilla vs. Kong
                    </h1>
                    <div className={css.mainScreen__description}>
                        <p>
                            In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla
                            and
                            Kong on a collision course that will see the two most powerful forces of nature on the
                            planet collide in a spectacular battle for the ages.
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