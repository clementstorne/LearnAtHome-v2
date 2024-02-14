"use client";
import { updateTask } from "@/lib/dataTask";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

type TaskProps = {
  id: string;
  content: string;
  isDone: boolean;
};

const Task = ({ id, content, isDone }: TaskProps) => {
  const [isTaskComplete, setIsTaskComplete] = useState(isDone);

  const completeTask = () => {
    setIsTaskComplete(true);
    updateTask(id);
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
      <p className={`${isTaskComplete ? "line-through" : "font-bold"}`}>
        {content}
      </p>
    </div>
  );
};

export default Task;
