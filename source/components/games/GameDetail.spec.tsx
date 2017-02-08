import * as React from 'react';
import { shallow } from 'enzyme';
import { GameDetail, GameDetailComponentProps } from './GameDetail';
import { gameData } from '../../__tests__/fixtures';
import { ShallowWrapper } from '@types/enzyme';

describe('Component: <Game Detail />', () => {
  let wrapper: ShallowWrapper<GameDetailComponentProps, any>;

  it ('renders without crashing', () => {
    wrapper = shallow(<GameDetail gameData={gameData} />);
  });

  it('renders gameData.Name (gameData.Slug) as title', () => {
    expect(wrapper.find('h2').text().includes('World of Warcraft')).toEqual(true);
    expect(wrapper.find('h2').text().includes('wow')).toEqual(true);
  });

  it('renders check mark for enabled addons/voice', () => {
    // we know WoW conveniently has one check mark in our test data
    expect(wrapper.find('.check').length).toEqual(1);
  });

  it('renders red "X" for enabled addons/voice', () => {
    // we know WoW conveniently also has one X in our test data
    expect(wrapper.find('.cancel').length).toEqual(1);
  });

  it('renders gameData.FileNames[] as <li>s', () => {
    // we know WoW has 13 filenames in our test data
    expect(wrapper.find('ul').first().find('li').length).toEqual(13);
    expect(wrapper.find('ul').first().find('li').first().text()).toEqual('WoW.exe');
  });

  it('renders gameData.CategorySections[] as <li>s', () => {
    // we know WoW has 1 categpry in our test data
    expect(wrapper.find('ul').last().find('li').length).toEqual(1);
  });

  it('assembles the correct img url', () => {
    expect(wrapper.find('img').props().src).toEqual(`https://clientupdate-v6.cursecdn.com/GameAssets/${gameData.ID}/Icon64.png`);
  });


});
