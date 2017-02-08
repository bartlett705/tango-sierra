// These tests exercise redux code; namely action creators, reducers, and
// createStore in globals.

import { store, initGlobals } from '../globals';
import { initialStateFixture, gamesDataFixture } from './fixtures';
import { fetchGamesStarted, fetchGamesFailed, fetchGamesSucceeded, updateProgress, setDetailIndex } from '../actions/games';
import { GamesState } from '../state/GamesState';

let fetchingStateFixture: GamesState;
let progressStateFixture: GamesState;
let fetchFailedStateFixture: GamesState;

describe('globals tests', () => {
    it('initGlobals() runs gracefully', () => {
        initGlobals();
    });
    it('createStore() returns a store object with initial values', () => {
        expect(store.getState().games).toEqual(initialStateFixture);
    });
});

describe('actions/games synchronous actions & gamesReducer tests', () => {
    it('fetchGamesStarted() properly modifies state.games.isFetching', () => {
        store.dispatch(fetchGamesStarted());
        fetchingStateFixture = Object.assign({}, initialStateFixture, { isFetching: true });
        expect(store.getState().games).toEqual(fetchingStateFixture);
    });
    it('updateProgress() properly modifies state.games.progress', () => {
        store.dispatch(updateProgress(50));
        progressStateFixture = Object.assign({}, fetchingStateFixture, { progress: 50 });
        expect(store.getState().games).toEqual(progressStateFixture);
    });
    it('FetchGamesFailed() properly modifies state.games.isError and state.games.isFetching', () => {
        store.dispatch(fetchGamesFailed());
        fetchFailedStateFixture = Object.assign({}, progressStateFixture, { isFetching: false, isError: true });
        expect(store.getState().games).toEqual(fetchFailedStateFixture);
    });
    it('FetchGamesSucceeded() properly modifies state.games.isFetching, state.games.isError, and state.games.games', () => {
        // from here on we're comparing properties individually rather than the entire state,
        // because the expected / actual log for a failure of a whole-state test is
        // so long as to render the test output useless.
        store.dispatch(fetchGamesSucceeded(gamesDataFixture));
        expect(store.getState().games.isFetching).toEqual(false);
        expect(store.getState().games.isError).toEqual(false);
        expect(store.getState().games.games.length).toEqual(198);
    });

    it('Games are sorted by Game.Order', () => {
        const currentState = store.getState().games;
        expect(currentState.games[0].Order <= currentState.games[1].Order).toEqual(true);
        expect(currentState.games[1].Order <= currentState.games[5].Order).toEqual(true);
        expect(currentState.games[7].Order <= currentState.games[9].Order).toEqual(true);
        expect(currentState.games[10].Order <= currentState.games[100].Order).toEqual(true);
    });

    it('setDetailIndex() properly modifies state.games.detailIndex', () => {
        store.dispatch(setDetailIndex(1));
        expect(store.getState().games.detailIndex).toEqual(1);
    });
});
