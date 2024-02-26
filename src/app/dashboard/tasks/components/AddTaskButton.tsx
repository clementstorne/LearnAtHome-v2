import { Button } from "@/components/ui/button";
import { ListPlus } from "lucide-react";

const AddTaskButton = () => {
  return (
    <Button>
      <span className="flex items-center">
        <ListPlus className="mr-2" /> Ajouter une nouvelle tâche
      </span>
    </Button>
  );
};

export default AddTaskButton;
