import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  rtl?: boolean;
}

const MarginWidthWrapper = ({ children, rtl = false }: Props) => {
  return (
    <div
      className={`${
        rtl ? "lg:mr-60" : "lg:ml-60"
      } flex flex-col sm:border-r sm:border-slate-700 min-h-screen`}
    >
      {children}
    </div>
  );
};

export default MarginWidthWrapper;
