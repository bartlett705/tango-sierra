import * as React from 'react';
import { config } from "./../../globals";

interface GameComponentProps {
  gameData: Object;
}

export const Game: React.SFC<GameComponentProps> = ({ gameData }) => {
  return (
    <tr>
      <td><img src={config.gameIconURLTemplate({ gameID: gameData.ID })}/></td>
      <td>{gameData.Name}</td>
      <td>{gameData.SupportsAddons ? 'Yeah!' : 'Nah...' }</td>
      <td>{gameData.SupportsVoice ? 'Totally!' : 'Nah...' }</td>
    </tr>
  );
};
