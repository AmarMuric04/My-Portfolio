import { Outlet } from "react-router-dom";
import Header from "./header/Header";

const Root = () => {
  return (
    <main className="bg-[#1E201E] min-h-screen pb-32">
      <main className="w-full flex justify-center text-[#ccc]">
        <div className="lg:w-[40rem] w-[95%]">
          <Header />
          <Outlet />
        </div>
      </main>
    </main>
  );
};

export default Root;
