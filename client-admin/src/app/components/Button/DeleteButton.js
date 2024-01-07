import "@/styles/Button.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Swal from "sweetalert2";

export default function DeleteButton(props) {
  const role = props.role;
  const id = props.id;
  const ApiLink = props.ApiLink;
  const token = props.token;

  const handleDelete = (id, role, token) => {
    role == "superAdmin"
      ? axios
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
          })
      : Swal.fire({
          title: "Thất Bại",
          text: "Bạn Không Có Quyền Sử Dụng Chức Năng Này",
          icon: "error",
          confirmButtonText: "OK",
        });
  };
  return (
    <button
      onClick={() => handleDelete(id, role, token)}
      className=" btnDelete"
    >
      <MdDelete />
      Xóa
    </button>
  );
}
