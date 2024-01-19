import "@/styles/Button.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function DeleteButtonDefault(props) {
  const handleDelete = () => {
    props.handleFunction();
  }
  return (
    <button
    onClick = {handleDelete}
      className=" btnDelete"
    >
      <MdDelete />
      Xóa
    </button>
  );
}
