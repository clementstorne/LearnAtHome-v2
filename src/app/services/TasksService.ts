import axios from "@/app/services/http-common";
import { NewTaskBody, UpdateTaskBody } from "@/types";

class TasksService {
  static createTask = async (credentials: NewTaskBody) => {
    return axios.post("/tasks/", credentials);
  };

  static getAllTasks = () => {
    return axios.get("/tasks/");
  };

  static getSingleTask = async (taskId: string) => {
    return axios.get(`/tasks/${taskId}`);
  };

  static updateTask = async (taskId: string, credentials: UpdateTaskBody) => {
    return axios.patch(`/tasks/${taskId}`, credentials);
  };
}

export default TasksService;
