import * as React from 'react';
import { config } from "./../../globals";
import { Game } from '../../models/Game';

interface GameDetailComponentProps {
  gameData: Game;
}

export const GameDetail: React.SFC<GameDetailComponentProps> = ({ gameData }) => {
  if (gameData) {
    return (
    <div className="GameDetail--root">
      <div className="GameDetail--container">

      <div>
      <img
        alt={gameData.Name}
        src={config.gameIconURLTemplate({ gameID: gameData.ID })}/>
      <h2>{gameData.Name} ({gameData.Slug})</h2>
      <table>
        <tbody>
          <tr>
            <td><h4>Addons?</h4> </td>
            <td><h4>Voice?</h4> </td>
            </tr>
            <tr>
            <td><div className={gameData.SupportsAddons ? 'check' : 'cancel' }></div></td>
      <td><div className={gameData.SupportsVoice ? 'check' : 'cancel' }></div></td>
      </tr>
      </tbody>
      </table>
      </div>
      <div>
        <span>
          <h3>Game Files</h3>
          <ul>
            {gameData.GameFiles.length ?
              gameData.GameFiles.map(file => <li key={file.FileName}>{file.FileName}</li>) :
              'None.'}
          </ul>
        </span>
        <span>
          <h3>Categories</h3>
          <ul>
            {gameData.CategorySections.length ?
              gameData.CategorySections.map(category => <li key={category.Name}>{category.Name}</li>) :
              'None.'}
          </ul>
        </span>
      </div>
      </div>
    </div>
  );
}
  return null;
};
