import css from "../MoviesList/MoviesList.module.scss";

const Skeleton = ({styleCard, amount}) => {
    return (
        <>
            {
                [...Array(amount)].map(() =>
                    <div className={`${styleCard || css.movies__skeleton} ${css.card}`}>Loading...</div>
                )
            }
        </>
    );
};

export {Skeleton};