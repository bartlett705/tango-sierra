import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { GameList, GameListProps, ConnectedProps, ConnectedDispatch } from './GameList';
import { GlobalState } from '../../state/GlobalState';
import { fetchGames,setDetailIndex } from '../../actions/games';

function mapStateToProps(state: GlobalState, props: GameListProps): ConnectedProps {
    return {
      games: state.games.games,
      isFetching: state.games.isFetching,
      isError: state.games.isError,
      detailIndex: state.games.detailIndex,
      progress: state.games.progress,
    };
};

function mapDispatchToProps(dispatch: Dispatch<any>): ConnectedDispatch {
    return bindActionCreators({
      fetchGames,
      setDetailIndex,
    }, dispatch);
};

// tslint:disable-next-line:variable-name
export const GameListContainer = connect(mapStateToProps, mapDispatchToProps)(GameList) as React.ComponentClass<GameListProps>;
