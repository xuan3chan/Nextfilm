import clsx from "clsx"
import { AiOutlineLoading } from "react-icons/ai";

export const RedButton = ({className, children, ...rest}) => {
  return (
    <button className={clsx('rounded bg-red text-white', className)}>  
      {children}
    </button>
  )
}

export function RedButtonLoading({ className, ...props }) {
  return (
    <button
      className={`bg-red-500 text-white font-semibold rounded-md flex justify-center items-center ${className}`}
      {...props}
    >
      <AiOutlineLoading className="animate-spin" />
    </button>
  );
}