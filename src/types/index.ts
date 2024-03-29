export interface UserDB {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  role: "tutor" | "student";
}

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

export interface NewUserBody {
  name: string;
  email: string;
  password: string;
  role: "tutor" | "student";
}

export interface NewTaskBody {
  content: string;
  taskListId: string;
}

export interface UpdateTaskBody {
  isDone: boolean;
}
