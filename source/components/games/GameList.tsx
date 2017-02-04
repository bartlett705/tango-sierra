import * as React from 'react';
import { Game } from './Game';
import { GameDetail } from './GameDetail';
import { Loading } from './Loading';

export interface GameListProps extends React.Props<GameList> {
    // Define any props taken by List itself.
}

export interface ConnectedProps {
    // Define any connected props here. (The ones mapped by ListContainer.)
}

export interface ConnectedDispatch {
    // Define any connected dispatch actions here. (The ones mapped by ListContainer.)
}

type CombinedTypes = GameListProps & ConnectedProps & ConnectedDispatch;

export class GameList extends React.Component<CombinedTypes, void> {
    componentWillMount() {
      this.props.fetchGames();
    }
    render() {
        console.log(this.props);
        return (
            <div className='GameList--root' onClick={()=> if (this.props.detailIndex !== null) return this.props.setDetailIndex(null)}>
                <img src="/assets/images/flame.png" />
                <table className='GameList--table'>
                  <tbody>
                    <tr className='title-row'>
                      <td><Loading isLoading={this.props.isFetching}/></td>
                      <td>Game</td>
                      <td>Addons?</td>
                      <td>Voice?</td>
                    </tr>
                    {this.props.games.length ?
                      this.props.games.map((game, index) => <Game gameData={game} key={`${game.Name}${index}`} viewDetail={() => this.props.setDetailIndex(index)}/>) :
                      <tr className='GameList--loading-text'>Coming right up...</tr>}
                  </tbody>
                </table>
                <GameDetail gameData={this.props.games[this.props.detailIndex]} />
            </div>
        );
    }
}
