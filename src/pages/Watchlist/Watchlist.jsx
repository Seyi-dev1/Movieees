import React from "react";
import "./watchlist.scss";

import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { selectWatchlistItems } from "../../redux/wishlist/wishlistSelector";
import Movie from "../../components/movie/Movie";
import { FaTrashAlt } from "react-icons/fa";
import {
  clearWatchlist,
  removeMovie,
} from "../../redux/wishlist/wishlistReducer";
const Watchlist = () => {
  const selectAllWatchlist = createSelector(
    [selectWatchlistItems],
    (watchlist) => watchlist,
  );
  const watchlistItems = useSelector(selectAllWatchlist);

  const dispatch = useDispatch();
  return (
    <div className="watchlist">
      {watchlistItems.length ? (
        <>
          <div className="title_con">
            <span className="title">My Watchlist</span>{" "}
            <span
              className="clear_watchlist"
              onClick={() => {
                dispatch(clearWatchlist());
              }}
            >
              <FaTrashAlt />
            </span>
          </div>

          <div className="movie_list">
            {watchlistItems.map((moviedata) => (
              <Movie wishlist={true} key={moviedata.id} {...moviedata} />
            ))}
          </div>
        </>
      ) : (
        <div className="emptywatchlist">Nothing to see here😒</div>
      )}
    </div>
  );
};

export default Watchlist;
