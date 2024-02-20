export interface UserData {
  id: string;
  name: string;
  email: string;
  imageUrl: string;
  role: "tutor" | "student";
}

export interface TaskData {
  id: string;
  content: string;
  isDone: boolean;
}

export interface NewTaskBody {
  content: string;
  ownerId: string;
}

export interface UpdateTaskBody {
  isDone: boolean;
}
