class Character {
  constructor(name) {
    this.name = name;
    this.level = 1;
    this.health = 100;
    this.attack = 50;
    this.defence = 50;
  }

  // Вспомогательный сеттер
  set damage(damage) {
    this.health -= damage * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.health = 100;
      this.attack *= 1.2;
      this.defence *= 1.2;
      return this;
    }
    throw new Error('No Hero - no levelUp. Sorry');
  }
}

export default Character;
