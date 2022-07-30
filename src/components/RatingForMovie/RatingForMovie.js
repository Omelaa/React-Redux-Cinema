import {Rating} from "@mui/material";

const RatingForMovie = ({value}) => {

    return (
        <div>
            <Rating name="read-only" value={value} readOnly />
        </div>
    );
};

export {RatingForMovie};