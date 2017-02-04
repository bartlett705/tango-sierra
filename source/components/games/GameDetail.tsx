import * as React from 'react';
import { config } from "./../../globals";

interface GameDetailComponentProps {
  gameData: Object;
}

export const GameDetail: React.SFC<GameDetailComponentProps> = ({ gameData }) => {
  if (gameData) {
    return (
    <div className="GameDetail--root">
      <div>
      <img
        alt={gameData.Name}
        src={config.gameIconURLTemplate({ gameID: gameData.ID })}/>
      <h2>{gameData.Name} ({gameData.Slug})</h2>
      <table>
        <tbody>
          <tr>
            <td>Addons? </td>
            <td>Voice? </td>
            </tr>
            <tr>
            <td>{gameData.SupportsAddons ? 'Yeah!' : 'Nah...' }</td>
      <td>{gameData.SupportsVoice ? 'Totally!' : 'Nah...' }</td>
      </tr>
      </tbody>
      </table>
      </div>
      <div>
        <span>
          <h3>Game Files</h3>
          <ul className='GameDetail--files'>
            {gameData.GameFiles.length ?
              gameData.GameFiles.map(file => <li key={file.FileName}>{file.FileName}</li>) :
              'None.'}
          </ul>
        </span>
        <span>
          <h3>Categories</h3>
          <ul className='GameDetail--categories'>
            {gameData.CategorySections.length ?
              gameData.CategorySections.map(category => <li key={category.Name}>{category.Name}</li>) :
              'None.'}
          </ul>
        </span>
      </div>
    </div>
  );
}
  else { return null };
};
