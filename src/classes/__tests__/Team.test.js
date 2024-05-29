import Character from '../Character';
import characterTypes from '../../data/CharacterTypes';
import Team from '../Team';

test('Testing adding a character to a team', () => {
  const character = new Character('Bowerman', characterTypes.bowerman);
  const team = new Team();

  const result = team.add(character);

  expect(result).toEqual((new Set()).add(character));
});

test('Testing adding the same character to a team twice', () => {
  const character = new Character('Bowerman', characterTypes.bowerman);
  const team = new Team();

  team.add(character);

  expect(() => team.add(character)).toThrow(Error);
});

test('Testing adding an arbitrary number of characters to a team', () => {
  const character1 = new Character('Bowerman', characterTypes.bowerman);
  const character2 = new Character('Daemon', characterTypes.daemon);
  const team = new Team();

  const result = team.addAll(character1, character2, character1);

  expect(result).toEqual((new Set()).add(character1).add(character2));
});

test('Testing command to array conversion', () => {
  const character1 = new Character('Bowerman', characterTypes.bowerman);
  const character2 = new Character('Daemon', characterTypes.daemon);
  const team = new Team();

  team.addAll(character1, character2);

  const result = team.toArray();

  expect(result).toEqual([character1, character2]);
});
