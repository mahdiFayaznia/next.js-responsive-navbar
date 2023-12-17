import { ReactNode } from "react";

export default function PageWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col p-2 space-y-2 bg-slate-100 flex-grow">
      {children}
    </div>
  );
}
