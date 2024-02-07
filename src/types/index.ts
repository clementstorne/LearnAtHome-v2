export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string;
  role: "tutor" | "student";
}

export interface Task {
  id: string;
  content: string;
  isDone: boolean;
  ownerId: string;
  creatorId: string;
}
