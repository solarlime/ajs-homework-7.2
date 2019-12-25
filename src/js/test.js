import Character from './app';

test('Not fatal damage: levelUp', () => {
  const character = new Character('Hero');
  character.damage = 50;
  const expected = {
    name: 'Hero',
    level: 2,
    health: 100,
    attack: 60,
    defence: 60,
  };
  expect(character.levelUp()).toEqual(expected);
});

test('Fatal damage, levelUp', () => {
  const character = new Character('Hero');
  character.damage = 300;
  expect(() => character.levelUp()).toThrow('No Hero - no levelUp. Sorry');
});
