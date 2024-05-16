import * as TaskManager from 'expo-task-manager';
import * as BackgroundFetch from 'expo-background-fetch';
import { timeExecuteTaskManager } from '../global/conf/imagesDefault';

const TASK_NAME = 'BACKGROUND_FETCH_TASK';

const taskExecute = async (priority) => {
  console.log('task', priority);
};

TaskManager.defineTask(TASK_NAME, async () => {
  try {
    const priority = await TaskManager.getTaskOptionsAsync(TASK_NAME);
    await taskExecute(priority);
    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

const register = async () => {
  await BackgroundFetch.registerTaskAsync(TASK_NAME, {
    minimumInterval: timeExecuteTaskManager,
    stopOnTerminate: false,
    startOnBoot: true,
  });
};

const unregister = async () => {
  await BackgroundFetch.unregisterTaskAsync(TASK_NAME);
};

export default {
  register,
  unregister,
};
