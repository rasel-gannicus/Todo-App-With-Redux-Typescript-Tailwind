import { ReactNode } from "react";

type TChildren = {
  children: ReactNode;
};

const Container = ({ children }: TChildren) => {
  return (
    <div className=" bg-primary-gradient mx-w-[1200px] rounded-sm py-2 min-h-[400px]">
      <div className="mx-2 min-h-[400px] rounded-sm bg-white">{children}</div>
    </div>
  );
};

export default Container;
