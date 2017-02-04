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
      <td>{gameData.SupportsAddons ? 'Yeah!' : 'Nah...' }</td>
      <td>{gameData.SupportsVoice ? 'Totally!' : 'Nah...' }</td>
    </tr>
  );
};
