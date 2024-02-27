"use client";
import TasksService from "@/app/services/TasksService";
import { cn } from "@/lib/utils";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

type TaskProps = {
  id: string;
  content: string;
  isDone: boolean;
};

const Task = ({ id, content, isDone }: TaskProps) => {
  const [isTaskComplete, setIsTaskComplete] = useState(isDone);

  const completeTask = async () => {
    await TasksService.updateTask(id, { isDone: !isTaskComplete });
    setIsTaskComplete((isDone) => !isDone);
  };

  return (
    <div className="flex items-center space-x-2 mb-4">
      {isTaskComplete ? (
        <CheckCircle2 className="w-8 h-8 text-blue-950" />
      ) : (
        <Circle
          className="w-8 h-8 text-orange-600 cursor-pointer"
          onClick={completeTask}
        />
      )}
      <p
        className={cn("font-bold", {
          "line-through font-normal": isTaskComplete,
        })}
      >
        {content}
      </p>
    </div>
  );
};

export default Task;
