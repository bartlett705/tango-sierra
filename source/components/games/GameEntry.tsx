import * as React from 'react';
import { Game } from '../../models/Game';
import { Image }  from '../Image';

export interface GameComponentProps {
  gameData: Game;
  viewDetail: Function;
}

export const GameEntry: React.SFC<GameComponentProps> = ({ gameData, viewDetail }) => {
  return (
    <tr onClick={() => viewDetail()}>
      <td>
      <Image
        className='gameImage'
        src={`https://clientupdate-v6.cursecdn.com/GameAssets/${gameData.ID}/Icon64.png`} />
      </td>
      <td>{gameData.Name}</td>
      <td><div className={gameData.SupportsAddons ? 'check' : 'cancel' }></div></td>
      <td><div className={gameData.SupportsVoice ? 'check' : 'cancel' }></div></td>
    </tr>
  );
};
