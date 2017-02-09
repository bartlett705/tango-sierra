import * as React from 'react';
import { GameEntry } from './GameEntry';
import { GameDetail } from './GameDetail';
import { Game } from '../../models/Game';

export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
  detailIndex: number;
  isFetching: boolean;
  isError: boolean;
  games: Game[];
  progress: number;
}

export interface ConnectedDispatch {
    fetchGames: Function;
    setDetailIndex: Function;
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    componentWillMount() {
      this.props.fetchGames();
    }
    render() {
        return (
            <div className='GameList--root' onClick={(e) => { console.log(e); if (this.props.detailIndex !== null) { this.props.setDetailIndex(null); }}}>
                <div id="banner"/>
                <table className='GameList--table'>
                  <tbody>
                    <tr className='title-row'>
                    <td></td>
                      <td>Game</td>
                      <td>Addons?</td>
                      <td>Voice?</td>
                    </tr>
                    { this.props.games.length ?
                      this.props.games.map((game: Game, index: Number) => <GameEntry gameData={game} key={`${game.Name}${index}`} viewDetail={() => this.props.setDetailIndex(index)}/>) :
                      this.props.isError ?
                        <tr><td colSpan={4}><h3>Couldn't reach Curse CDN :(</h3></td></tr> :
                        <tr><td colSpan={4}><h3>Loading...{this.props.progress}%</h3></td></tr>
                      }
                  </tbody>
                </table>
                <GameDetail gameData={this.props.games[this.props.detailIndex]} />
            </div>
        );
    }
}
