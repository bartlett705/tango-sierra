import * as React from 'react';
import { shallow } from 'enzyme';
import { GameEntry, GameComponentProps } from './GameEntry';
import { gameData } from '../../__tests__/fixtures';
import { ShallowWrapper } from '@types/enzyme';

const mockViewDetail = jest.fn();

describe('Component: <Game Entry />', () => {
  let wrapper: ShallowWrapper<GameComponentProps, any>;

  it ('renders without crashing', () => {
    wrapper = shallow(<GameEntry gameData={gameData} viewDetail={() => mockViewDetail(1)}/>);
  });

  it('calls passed viewDetail function with correct index', () => {
    wrapper.find('tr').first().simulate('click');
    expect(mockViewDetail.mock.calls.length).toEqual(1);
    expect(mockViewDetail.mock.calls[0][0]).toEqual(1);
  });

  it('renders gameData.Name', () => {
    expect(wrapper.find('td').at(1).text().includes('World of Warcraft')).toEqual(true);
  });

  it('renders check mark for enabled addons/voice', () => {
    // we know WoW conveniently has one check mark in our test data
    expect(wrapper.find('.check').length).toEqual(1);
  });

  it('renders red "X" for enabled addons/voice', () => {
    // we know WoW conveniently also has one X in our test data
    expect(wrapper.find('.cancel').length).toEqual(1);
  });

  it('assembles the correct img url', () => {
    expect(wrapper.find('.gameImage').first().props().src).toEqual(`https://clientupdate-v6.cursecdn.com/GameAssets/${gameData.ID}/Icon64.png`);
  });


});
