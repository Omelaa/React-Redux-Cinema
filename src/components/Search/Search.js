import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './Search.module.scss';

import {filterActions} from "../../redux";
import {moviesCategories, movieService} from "../../services";

const Search = ({setFoundMovies}) => {
    const dispatch = useDispatch();
    const {searchValue} = useSelector(state => state.filter);

    const [valueIn, setValueIn] = useState('');
    const inputRef = useRef(null);

    const onClickClear = () => {
        dispatch(filterActions.setSearchValue(''));
        setValueIn('');
        inputRef.current.focus();
    };

    const getSearchMovies = async (event) => {
        event?.preventDefault();
        if (searchValue) {
            const {data} = await movieService.search(moviesCategories.search(searchValue));
            setFoundMovies(data.results);
        }
    };

    const onChangeInput = async (event) => {
        setValueIn(event.target.value);
        await dispatch(filterActions.setSearchValue(event.target.value));
    }

    useEffect(() => {
        getSearchMovies();
    }, [setFoundMovies]);


    return (
        <form onSubmit={getSearchMovies}>
            <label className={css.search} style={{display: "flex"}}>
                <input className={css.search__input}
                       type="text"
                       ref={inputRef}
                       value={valueIn} onChange={onChangeInput}
                       placeholder={'Search...'}/>
                <button type={"submit"}>submit</button>
                {
                    valueIn && (
                        <button className={css.search__btn} onClick={onClickClear}>X</button>
                    )
                }
            </label>
        </form>
    );
};

export {Search};