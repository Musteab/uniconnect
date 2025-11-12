import clsx from "clsx";
export default function IconBadge({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={clsx("h-10 w-10 rounded-lg grid place-items-center bg-accent/15 text-accent", className)}>
      {children}
    </div>
  );
}

