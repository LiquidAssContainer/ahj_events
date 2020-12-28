import goblin from '../../img/goblin.png';

export default class GoblinGame {
  constructor(holes, kills, misses, interval) {
    if (holes < 2) {
      throw new Error('Need at least 2 holes');
    }

    this.holes = holes;
    this.killsToWin = kills;
    this.missesToLose = misses;
    this.intervalTime = interval;

    this.isKilled = false;
    this.killCount = 0;
    this.loseCount = 0;
    this.addEventListeners();
  }

  createHoleImg() {
    const goblinImg = document.createElement('img');
    goblinImg.className = 'goblin-image';
    goblinImg.src = goblin;
    return goblinImg;
  }

  generateNumber() {
    let index = this.activeHole;
    do {
      index = Math.floor(Math.random() * this.holes);
    } while (index === this.activeHole);
    return index;
  }

  moveToHole(index) {
    const img = document.querySelector('.goblin-image');
    img?.classList.remove('animated');
    const holesList = document.getElementsByClassName('hole');
    if (this.holeElem) {
      holesList[index].appendChild(this.holeElem);
      this.activeHole = index;
    }
  }

  start() {
    this.holeElem = this.createHoleImg();
    this.moveToHole(this.generateNumber());

    this.holeMoveInterval = setInterval(() => {
      if (!this.isKilled) {
        this.loseCount += 1;
      } else {
        this.isKilled = false;
      }
      const index = this.generateNumber();
      this.changeCounters();
      this.checkForWinOrLose();
      this.moveToHole(index);
    }, this.intervalTime);
  }

  reset() {
    clearInterval(this.holeMoveInterval);
    const { holeElem } = this;
    holeElem?.remove();

    this.holeElem = null;
    this.isKilled = false;
    this.killCount = 0;
    this.loseCount = 0;
    this.changeCounters();
  }

  clickOnHole(target) {
    const hole = target.closest('.hole');
    if (hole.firstChild?.tagName === 'IMG' && !this.isKilled) {
      this.isKilled = true;
      this.killCount += 1;
      this.changeCounters();
    }
  }

  changeCounters() {
    const killCounter = document.getElementById('kill-counter');
    const loseCounter = document.getElementById('lose-counter');
    killCounter.textContent = this.killCount;
    loseCounter.textContent = this.loseCount;
  }

  checkForWinOrLose() {
    if (this.killCount === this.killsToWin) {
      this.reset();
      alert('Победа :)');
    }
    if (this.loseCount === this.missesToLose) {
      this.reset();
      alert('Поражение :(');
    }
  }

  addEventListeners() {
    const holeElems = document.getElementsByClassName('hole');
    for (let hole of holeElems) {
      hole.addEventListener('click', (e) => {
        const img = document.querySelector('.goblin-image');
        this.clickOnHole(e.target);
        img?.addEventListener('click', () => {
          img.classList.add('animated');
        });
      });
    }

    const startBtn = document.getElementById('start');
    startBtn.addEventListener('click', () => {
      this.reset();
      this.start();
    });

    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', () => {
      this.reset();
    });
  }
}
