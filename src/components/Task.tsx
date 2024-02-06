"use client";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";

type TaskProps = {
  isComplete: boolean;
  task: string;
};

const Task = ({ task, isComplete }: TaskProps) => {
  const [isTaskComplete, setIsTaskComplete] = useState(isComplete);

  const completeTask = () => {
    setIsTaskComplete(true);
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
      <p className={`${isTaskComplete} ? 'line-through' : ''`}>{task}</p>
    </div>
  );
};

export default Task;
