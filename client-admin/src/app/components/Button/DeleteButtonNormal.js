import "@/styles/Button.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteButtonNormal(props) {
  const role = props.role;
  const id = props.id;
  const ApiLink = props.ApiLink;
  const token = props.token;

  const handleDelete = (id, token) => {
    axios
      .delete(ApiLink, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        Swal.fire({
          title: "Thành Công",
          text: "Xóa Người Dùng Thành Công",
          icon: "success",
          confirmButtonText: "OK",
        });
      });
  };
  return (
    <button
      onClick={() => handleDelete(id, token)}
      className=" btnDelete"
    >
      <MdDelete />
      Xóa
    </button>
  );
}
