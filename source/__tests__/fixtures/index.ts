import { GlobalState } from '../state/GlobalState';
import { gamesDataFixture } from './gamesDataFixture';
export const initialStateFixture = {
        games: [],
        isFetching: false,
        isError: false,
        detailIndex: null,
        progress: 0,
} as GlobalState;

export const fetchingStateFixture = {
    games:
    {
        games: [],
        isFetching: true,
        isError: false,
        detailIndex: null,
        progress: 0,
    },
} as GlobalState;
export const updateProgressStateFixture = {
    games:
    {
        games: [],
        isFetching: true,
        isError: false,
        detailIndex: null,
        progress: 50,
    },
} as GlobalState;

export const fetchFailedStateFixture = {
    games:
    {
        games: [],
        isFetching: false,
        isError: true,
        detailIndex: null,
        progress: 0,
    },
} as GlobalState;

export const fetchSucceededStateFixture = {
    games:
    {
        games: gamesDataFixture,
        isFetching: false,
        isError: true,
        detailIndex: null,
        progress: 0,
    },
} as GlobalState;

export const setIndexStateFixture = {
    games:
    {
        games: gamesDataFixture,
        isFetching: false,
        isError: true,
        detailIndex: 1,
        progress: 0,
    },
} as GlobalState;
