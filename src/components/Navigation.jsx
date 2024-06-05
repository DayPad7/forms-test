import { BsGithub } from "react-icons/bs";

const Navigation = () => {
  return (
    <div className="border-b bg-slate-100">
      <nav className="container py-5 flex justify-between items-center">
        <div className="font-semibold">Test Forms</div>
        <div className="flex items-center gap-4 text-lg">
          <a href="https://github.com/DayPad7/forms-test" target="_blank">
            <BsGithub />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
