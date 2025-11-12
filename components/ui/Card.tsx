import clsx from "clsx";
export default function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={clsx("rounded-xl border border-gray-200 p-5 bg-white text-slate-900 shadow-sm", className)}>{children}</div>;
}
