// import TodoListTitle from "@/components/TodoListTitle";

import users from "@/data/users.json";

const user = users.filter(
  (user) => user.id === "b6566e5b-60d3-4e7e-8771-831e155d6c49"
);

const page = () => {
  return (
    <main className="w-full h-full pt-48 px-8 md:pl-36 md:pr-8 flex">
      <section className="w-1/3 h-full">
        {/* <TodoListTitle name={user.name} tasks={tasks} /> */}
      </section>
      <section className="w-2/3 h-full">
        <h2>Liste de tâches</h2>
      </section>
    </main>
  );
};

export default page;
