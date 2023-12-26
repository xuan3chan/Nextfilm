import '@/styles/Button.css';
import { MdDelete } from "react-icons/md";

export default function DeleteButton() {
  return(
    <button className=" btnDelete">
    <MdDelete />
    Xóa
    </button>
  );
}
