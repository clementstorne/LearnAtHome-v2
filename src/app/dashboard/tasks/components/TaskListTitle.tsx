"use client";

import UserAvatar from "@/components/Avatar";
import { displayNumberOfUnfinishedTasks } from "@/lib/taskUtils";
import { cn } from "@/lib/utils";
import { TaskData } from "@/types";
import { useState } from "react";
import AddTaskButton from "./AddTaskButton";
import Tasks from "./Tasks";

type TaskListTitleProps = {
  creator: {
    id: string;
    name: string;
    imageUrl: string;
    role: "tutor" | "student";
  };
  tasks: TaskData[];
  user: {
    id: string;
    role: "tutor" | "student";
  };
};

const TaskListTitle = ({ creator, tasks, user }: TaskListTitleProps) => {
  const [isShown, setIsShown] = useState(false);

  const handleOnClick = () => {
    setIsShown(!isShown);
  };

  return (
    <section className={cn("flex flex-col", "md:mr-4")}>
      <div
        className="cursor-pointer bg-blue-100 p-2 mb-4 rounded-md flex items-center hover:border-4 hover:border-orange-600 hover:p-1"
        onClick={handleOnClick}
      >
        <UserAvatar name={creator.name} src={creator.imageUrl} />
        <div className="ml-4 flex flex-col">
          <p className="text-blue-950 font-bold">
            {creator.id === user.id ? "Mes tâches" : `Pour ${creator.name}`}
          </p>
          <p>{displayNumberOfUnfinishedTasks(tasks)}</p>
        </div>
      </div>
      <div className={cn(isShown && "block", !isShown && "hidden")}>
        {user.role === "tutor" || creator.id === user.id ? (
          <div className="flex justify-center items-center mb-8 mt-4">
            <AddTaskButton />
          </div>
        ) : null}
        <Tasks tasks={tasks} />
      </div>
    </section>
  );
};

export default TaskListTitle;
