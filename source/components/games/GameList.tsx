import * as React from 'react';
import { Game } from './Game';

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
            <div className='GameList--root'>
                <img src="/assets/images/flame.png" />
                <table className='GameList--table' cellspacing="0">
                  <tbody className='GameList--table-body'>
                    <tr>
                      <td></td>
                      <td>Game</td>
                      <td>Addons?</td>
                      <td>Voice?</td>
                    </tr>

                {this.props.games.games.map(game => <Game gameData={game} />)}
                  </tbody>
                </table>
            </div>
        );
    }
}
