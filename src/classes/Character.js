import CharacterTypes from '../data/CharacterTypes';

const characterTypes = Object.values(CharacterTypes);

export default class Character {
  constructor(name, type, health = 100, level = 1, attack = 0, defence = 0) {
    if (typeof name === 'string' && name.length >= 2 && name.length <= 10) {
      this.name = name; // имя
    } else {
      throw new Error('Ошибка! Имя персонажа должно быть длиной минимум 2 и максимум 10');
    }

    if (characterTypes.includes(type)) {
      this.type = type; // тип
    } else {
      throw new Error(`Ошибка! Персонаж должен быть типа: ${characterTypes.join(', ')}`);
    }

    this.health = health; // жизни
    this.level = level; // уровень
    this.attack = attack; // атака
    this.defence = defence; // защита
  }
}
