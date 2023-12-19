import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  rtl?: boolean;
}

const PageWrapper = ({ children, rtl = false }: Props) => {
  const directionStyle = rtl ? "rtl" : "ltr";

  return (
    <div
      style={{ direction: directionStyle }}
      className="flex flex-col p-2 space-y-2 bg-slate-100 flex-grow"
    >
      {children}
    </div>
  );
};

export default PageWrapper;
