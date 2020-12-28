import Task from './Task';

export default class TaskManager {
  constructor(data) {
    this.data = data || [];
    this.addEventListeners();
  }

  renderTaskList(filter) {
    const allTasks = document.getElementById('all-tasks');
    const pinnedTasks = document.getElementById('pinned-tasks');
    allTasks.innerHTML = '';
    pinnedTasks.innerHTML = '';

    for (const task of this.data) {
      if (task.isPinned) {
        const taskElem = this.createTaskElem(task);
        pinnedTasks.appendChild(taskElem);
        continue;
      }

      if (filter && !task.name.toLowerCase().includes(filter.toLowerCase())) { // весьма длинновато
        continue;
      }

      const taskElem = this.createTaskElem(task);
      allTasks.appendChild(taskElem);
    }

    const descriptions = [document.getElementById('no-pinned'), document.getElementById('no-tasks')];

    for (const elem of descriptions) {
      if (elem.parentElement.querySelector('.task-item')) {
        elem.classList.add('hidden');
      } else {
        elem.classList.remove('hidden');
      }
    }
  }

  createTaskElem(task) {
    const taskElem = document.createElement('li');
    taskElem.className = 'task-item';
    taskElem.innerHTML = `
    <span class="task-name">${task.name}</span>
    <input class="pin" type="checkbox"${task.isPinned ? ' checked' : ''}>`;
    return taskElem;
  }

  pushNewTask(name) {
    this.data.push(new Task(name));
    const input = document.getElementsByClassName('tasks-input')[0];
    input.value = '';
    this.renderTaskList();
  }

  showError() {
    const errorPopup = document.getElementById('error-popup');
    errorPopup.classList.remove('hidden');

    clearTimeout(this.errorTimeout);
    this.errorTimeout = setTimeout(() => {
      errorPopup.classList.add('hidden');
    }, 1000);
  }

  addEventListeners() {
    const input = document.getElementsByClassName('tasks-input')[0];
    input.addEventListener('input', (e) => {
      this.renderTaskList(input.value);
    });

    document.addEventListener('keydown', (e) => {
      if ((e.code === 'Enter' || e.code === 'NumpadEnter') && input === document.activeElement) {
        if (input.value) {
          this.pushNewTask(input.value);
        } else {
          this.showError();
        }
      }
    });

    document.addEventListener('change', (e) => {
      const { target } = e;
      if (target.classList.contains('pin')) {
        const taskName = target.previousElementSibling.textContent;
        const task = this.data.find((elem) => elem.name === taskName);
        task.isPinned = target.checked;
        this.renderTaskList(input.value);
      }
    });
  }
}
