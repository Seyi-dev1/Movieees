import React from "react";
import "./history.scss";

import { createSelector } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import Movie from "../../components/movie/Movie";
import { FaTrashAlt } from "react-icons/fa";
import { clearHistory } from "../../redux/history/historyReducer";
import { selectHistoryItems } from "../../redux/history/historySelector";
const History = () => {
  const selectAllHistory = createSelector(
    [selectHistoryItems],
    (history) => history,
  );
  const historyItems = useSelector(selectAllHistory);

  const dispatch = useDispatch();
  return (
    <div className="history_page">
      {historyItems.length ? (
        <>
          <div className="title_con">
            <span className="title">History</span>{" "}
            <span
              className="clear_history"
              onClick={() => {
                dispatch(clearHistory());
              }}
            >
              <FaTrashAlt />
            </span>
          </div>

          <div className="movie_list">
            {historyItems.map((moviedata) => (
              <Movie
                wishlist={false}
                history={true}
                key={moviedata.id}
                {...moviedata}
              />
            ))}
          </div>
        </>
      ) : (
        <div className="emptyhistory">Nothing to see here😒</div>
      )}
    </div>
  );
};

export default History;
