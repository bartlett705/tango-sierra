// These tests exercise redux code; namely action creators, reducers, and
// createStore in globals.

import { store, initGlobals } from '../globals';
import { initialStateFixture } from './fixtures';
import { gamesDataFixture } from './fixtures/gamesDataFixture';

import { fetchGamesStarted, fetchGamesFailed, fetchGamesSucceeded, updateProgress, setDetailIndex } from '../actions/games';

describe('globals tests', () => {
    it('initGlobals() runs gracefully', () => {
        initGlobals();
    });
    it('createStore() returns a store object with initial values', () => {
        expect(store.getState().games).toEqual(initialStateFixture);
    });
});

describe('synchronous action creator / reducer tests', () => {
    it('fetchGamesStarted() properly modifies state.games.isFetching', () => {
        store.dispatch(fetchGamesStarted());
        expect(store.getState().games.isFetching).toEqual(true);
    });
    it('updateProgress() properly modifies state.games.progress', () => {
        store.dispatch(updateProgress(50));
        expect(store.getState().games.progress).toEqual(50);
    });
    it('FetchGamesFailed() properly modifies state.games.isError and state.games.isFetching', () => {
        store.dispatch(fetchGamesFailed());
        expect(store.getState().games.isError).toEqual(true);
        expect(store.getState().games.isFetching).toEqual(false);
    });
    it('FetchGamesSucceeded() properly modifies state.games.isFetching, state.games.isError, and state.games.games', () => {
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
