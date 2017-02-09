import * as React from 'react';
import { shallow } from 'enzyme';
import { GameList } from './GameList';
import { gamesDataFixture } from '../../__tests__/fixtures';
import { ShallowWrapper } from '@types/enzyme';

describe('Component: <Game List />', () => {

  let wrapper: ShallowWrapper<{}, any>;

  it ('renders without crashing', () => {
    wrapper = shallow(<GameList
      games={gamesDataFixture}
      detailIndex={null}
      isError={false}
      isFetching={false}
      progress={0}
      fetchGames={ (): void => null }
      setDetailIndex={ (): void => null }
    />);
  });

  it('renders a #banner Image', () => {
    expect(wrapper.find('#banner').length).toEqual(1);
  });

  it('renders a <GameEntry /> for each Game when passed gameData', () => {
    expect(wrapper.find('tr').length).toEqual('199');
  });

});
