export default class HometaskSwitch {
  static addEventListeners() {
    const tasks = document.getElementsByClassName('hometask');
    for (const task of tasks) {
      task.addEventListener('click', this.switchTask);
    }
  }

  static switchTask(e) {
    const { target } = e;
    e.preventDefault();

    const activeTask = document.getElementsByClassName('hometask_active')[0];
    if (target === activeTask) {
      return;
    }

    activeTask.classList.remove('hometask_active');
    target.classList.add('hometask_active');

    const activeSection = document.querySelector(`section[data-section="${activeTask.dataset.section}"]`);
    const newActiveSection = document.querySelector(`section[data-section="${target.dataset.section}"]`);
    activeSection.classList.add('hidden');
    newActiveSection.classList.remove('hidden');
  }
}
