import "@/styles/Button.css";
import { IoIosSave } from "react-icons/io";
export default function EditButton(props) {
  const id = props.id;
  const handleEdit = () => {
    console.log(id);
  };
  return (
    <button
      className="btnEdit"
      onClick={() => {
        handleEdit();
      }}
    >
      <IoIosSave />
      Sửa
    </button>
  );
}
