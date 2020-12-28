import HometaskSwitch from './HometaskSwitch';
import RenderTable from './goblin-game/RenderTable';
import GoblinGame from './goblin-game/GoblinGame';
import TaskManager from './top-tasks/TaskManager';
import GalleryForm from './image-gallery/GalleryForm';
import { taskData as data } from './data';

HometaskSwitch.addEventListeners();

RenderTable.render(4, 4);
const goblinGame = new GoblinGame(16, 5, 5, 1000);

const taskManager = new TaskManager(data);
taskManager.renderTaskList();

const galleryForm = new GalleryForm();
galleryForm.addEventListeners();
