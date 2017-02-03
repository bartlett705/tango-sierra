import { GamesState } from "../state/GamesState";
import {
    FetchGamesStarted, FetchGamesSucceeded, FetchGamesFailed,
    FETCH_GAMES_STARTED, FETCH_GAMES_SUCCEEDED, FETCH_GAMES_FAILED,
} from '../actions/games';

type Actions = FetchGamesStarted | FetchGamesSucceeded | FetchGamesFailed;

const initialState: GamesState = {
    games: [],
    isFetching: false,
    isError: false,
};

export function gamesReducer(state: GamesState = initialState, action: Actions) {
    console.log('state: ', state, 'action: ', action);
    switch (action.type) {
        case FETCH_GAMES_STARTED:
            return Object.assign({}, state, { isFetching: true });
        case FETCH_GAMES_FAILED:
            // Handle action
            return Object.assign({}, state, { isFetching: false, isError: true });
        case FETCH_GAMES_SUCCEEDED:
          const sortedGames = action.games.sort((gameA, gameB) => gameA.Order - gameB.Order);
          return Object.assign({}, state, { isFetching: false, games: sortedGames });
        default:
            return state;
    }
}
