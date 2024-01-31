import { ReactNode } from "react";
import { cn } from "./../lib/utils";

const MaxWidthWrapper = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[92.5%] px-2.5 md:px-0", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
