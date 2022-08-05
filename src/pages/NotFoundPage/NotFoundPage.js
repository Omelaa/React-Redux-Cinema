import css from './NotFoundPage.module.scss';

const NotFoundPage = () => {
    return (
        <div className={css.found__wrapper}>
            <span className={css.found__404}>404</span>
            <span className={css.found__not}>Not Found</span>
            <div>
                <p>
                    The resource requested could not be found on this server!
                </p>
            </div>
        </div>
    );
};

export {NotFoundPage};