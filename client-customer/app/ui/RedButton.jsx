import clsx from "clsx"

export const RedButton = ({className, children, ...rest}) => {
  return (
    <button className={clsx('rounded bg-red text-base text-white', className)}>  
      {children}
    </button>
  )
}