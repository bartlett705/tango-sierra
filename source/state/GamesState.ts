import { Game } from "../models/Game";

export interface GamesState {
    games: Game[];
    isFetching: boolean;
    isError: boolean;
    detailIndex: number;
    progress: number;
}
