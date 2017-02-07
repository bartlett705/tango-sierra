import * as React from 'react';
import { config } from "./../../globals";

interface GameComponentProps {
  gameData: Object;
  viewDetail: Function;
}

export const Game: React.SFC<GameComponentProps> = ({ gameData, viewDetail }) => {
  return (
    <tr onClick={viewDetail}>
      <td><img src={config.gameIconURLTemplate({ gameID: gameData.ID })}/></td>
      <td>{gameData.Name}</td>
      <td><div className={gameData.SupportsAddons ? 'check' : 'cancel' }></div></td>
      <td><div className={gameData.SupportsVoice ? 'check' : 'cancel' }></div></td>
    </tr>
  );
};
