export default class Task {
  constructor(name) {
    this.name = name;
    this.isPinned = false;
    this.date = new Date();
  }
}
