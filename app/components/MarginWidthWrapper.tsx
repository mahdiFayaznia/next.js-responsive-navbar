import { ReactNode } from "react";

export default function MarginWidthWrapper({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col lg:ml-60 sm:border-r sm:border-slate-700 min-h-screen">
      {children}
    </div>
  );
}
