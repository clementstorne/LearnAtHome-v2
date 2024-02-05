import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <nav className="fixed top-40 bottom-0 left-0 z-50 w-28 flex flex-col flex-nowrap justify-center items-center border-r-2 my-8">
      <NavbarButton category="home" href="/dashboard" />
      <NavbarButton category="message" href="/messages" />
      <NavbarButton category="calendar" href="/calendar" />
      <NavbarButton category="task" href="/tasks" />
      <NavbarButton category="logout" href="/auth/login" />
    </nav>
  );
};

export default Navbar;
