import NavbarButton from "./NavbarButton";

const Navbar = () => {
  return (
    <nav
      className="fixed bottom-0 left-0 z-50 w-screen flex flex-row flex-nowrap justify-around items-center bg-orange-600 py-2 shadow-negative
      md:w-28 md:top-40 md:flex-col md:border-r-2 md:justify-center md:my-8 md:bg-transparent md:shadow-none"
    >
      <NavbarButton category="home" href="/dashboard" />
      <NavbarButton category="profile" href="/profile" />
      <NavbarButton category="message" href="/messages" />
      <NavbarButton category="calendar" href="/calendar" />
      <NavbarButton category="task" href="/dashboard/tasks" />
      <NavbarButton category="logout" href="/auth/login" />
    </nav>
  );
};

export default Navbar;
