import { AiOutlineLoading } from "react-icons/ai";
export default function RedButtonLoading({ className, ...props }) {
  return (
    <button
      className={`bg-red-500 text-white font-semibold rounded-md ${className}`}
      {...props}
    >
      <AiOutlineLoading className="animate-spin" />
    </button>
  );
}