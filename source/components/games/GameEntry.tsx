import * as React from 'react';
import { config } from "./../../globals";
import { Game } from '../../models/Game';
import  Image  from '../Image';

interface GameComponentProps {
  gameData: Game;
  viewDetail: Function;
}

export const GameEntry: React.SFC<GameComponentProps> = ({ gameData, viewDetail }) => {
  console.log(config);
  return (
    <tr onClick={() => viewDetail()}>
      <td>
      <Image
        src={`https://clientupdate-v6.cursecdn.com/GameAssets/${gameData.ID}/Icon64.png`} />
      </td>
      <td>{gameData.Name}</td>
      <td><div className={gameData.SupportsAddons ? 'check' : 'cancel' }></div></td>
      <td><div className={gameData.SupportsVoice ? 'check' : 'cancel' }></div></td>
    </tr>
  );
};
