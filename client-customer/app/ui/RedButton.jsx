import clsx from "clsx"

export const RedButton = ({className, children, ...rest}) => {
  return (
    <button className={clsx('h-11 w-full bg-red text-base text-white font-[500] mt-6 mb-3')}>  
      {children}
    </button>
  )
}