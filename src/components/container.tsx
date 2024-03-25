import { ReactNode } from "react";

type TChildren = {
    children : ReactNode
}

const Container = ({children} : TChildren ) => {
    return (
        <div className=" bg-emerald-500 mx-w-[1200px] rounded-sm py-3 min-h-[400px]">
            {children}
        </div>
    );
};

export default Container;