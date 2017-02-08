import { GamesState } from "../state/GamesState";
import {
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed, SetDetailIndex, UpdateProgress,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED, SET_DETAIL_INDEX, UPDATE_PROGRESS,
} from '../actions/games';
import { Game } from '../models/Game';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed | SetDetailIndex | UpdateProgress;

const initialState: GamesState = {
    games: [],
    isFetching: false,
    isError: false,
    detailIndex: null,
    progress: 0,
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    switch (action.type) {
        case UPDATE_PROGRESS:
            return Object.assign({}, state, { progress: action.progress });
        case SET_DETAIL_INDEX:
            return Object.assign({}, state, { detailIndex: action.detailIndex });
        case FETCH_GAMES_STARTED:
            return Object.assign({}, state, { isFetching: true, progress: 0 });
        case FETCH_GAMES_FAILED:
            return Object.assign({}, state, { isFetching: false, isError: true });
        case FETCH_GAMES_SUCCEEDED:
          const sortedGames = action.games.sort((gameA: Game, gameB: Game) => gameA.Order - gameB.Order);
          return Object.assign({}, state, { isFetching: false, isError: false, games: sortedGames });
        default:
            return state;
    }
}
