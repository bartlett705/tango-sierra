import { GlobalStateGetter } from "../state/GlobalState";
import { Game } from "../models/Game";
import { config } from '../globals';

// Update download progress
export type UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export const UPDATE_PROGRESS: UPDATE_PROGRESS = 'UPDATE_PROGRESS';
export type UpdateProgress = {
    type: UPDATE_PROGRESS;
    progress: Number;
};

export function updateProgress(progress: Number): UpdateProgress {
    return { type: UPDATE_PROGRESS, progress };
}


// Set index of game to view details
export type SET_DETAIL_INDEX = 'SET_DETAIL_INDEX';
export const SET_DETAIL_INDEX: SET_DETAIL_INDEX = 'SET_DETAIL_INDEX';
export type SetDetailIndex = {
    type: SET_DETAIL_INDEX;
    detailIndex: Number;
};

export function setDetailIndex(detailIndex: Number): SetDetailIndex {
    return { type: SET_DETAIL_INDEX, detailIndex };
}

// Fetch Games Started
export type FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export const FETCH_GAMES_STARTED: FETCH_GAMES_STARTED = 'FETCH_GAMES_STARTED';
export type FetchGamesStarted = {
  type: FETCH_GAMES_STARTED;
};

export function fetchGamesStarted(): FetchGamesStarted {
  return { type: FETCH_GAMES_STARTED };
}

// Fetch Games Succeeded
export type FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export const FETCH_GAMES_SUCCEEDED: FETCH_GAMES_SUCCEEDED = 'FETCH_GAMES_SUCCEEDED';
export type FetchGamesSucceeded = {
  type: FETCH_GAMES_SUCCEEDED;
  games: Game[];
};

export function fetchGamesSucceeded(games: Game[]): FetchGamesSucceeded {
  return { type: FETCH_GAMES_SUCCEEDED, games };
}

// Fetch Games Failed
export type FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export const FETCH_GAMES_FAILED: FETCH_GAMES_FAILED = 'FETCH_GAMES_FAILED';
export type FetchGamesFailed = {
    type: FETCH_GAMES_FAILED;
};

export function fetchGamesFailed(): FetchGamesFailed {
    return { type: FETCH_GAMES_FAILED };
}

// Fetch Games Thunk
export function fetchGames() {
    return (dispatch: Redux.Dispatch<any>, getState: GlobalStateGetter) => {
        dispatch(fetchGamesStarted());
        const xhr = new XMLHttpRequest();

        xhr.onload = function(e) {
          dispatch(fetchGamesSucceeded(JSON.parse(xhr.responseText).data));
        };

        xhr.addEventListener("error", (e) => {
          console.log('error!', e.error);
          dispatch(fetchGamesFailed());
        });

        xhr.addEventListener('progress', (e) => {
          dispatch(updateProgress(parseInt((e.loaded / 3003).toString().slice(0, 2))));
        });

        xhr.open("GET", config.gamesDataURL);
        xhr.send();

        // fetch(config.gamesDataURL)
        //   .then((response) => response.json())
        //   .then((data: any) => {
        //     dispatch(fetchGamesSucceeded(data.data));
        //   })
        //   .catch((err:Error)=> {
        //     console.log('Error! ', err);
        // });
    };
}
