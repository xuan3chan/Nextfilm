import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
export default function AddAdmin(props) {
  const { token, adminId, handleCloseModal } = props;
  const ApiLink = `http://localhost:8000/api/admin/update/${adminId}`;

  const [formData, setFormData] = useState({
    role: "admin", // Default role
    adminName: "",
    password: "",
  });

  // Update form data when input values change
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    axios
      .put(
        ApiLink,
        formData, // Data to be sent in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Success:", response.data);
        console.log(adminId)
      })
      .then((response) => {
        Swal.fire({
          title: "Thành Công",
          text: "Sửa Người Dùng Thành Công",
          icon: "success",
          confirmButtonText: "OK",
        });
        handleCloseModal();
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    console.log(formData);
  };

  return (
    <div className="w-full wrapper border-2 border-black">
      <div className="Content_AddAccountAdmin flex flex-col w-full">
        <div className="AddAccount_Form justify-center items-center">
          <div className="EditAdmin_Title">Cập Nhật Admin</div>
          <div className="AdminId">{adminId}</div>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2  ">
              <label htmlFor="Form_SlotOption">Chọn Role</label>
              <select
                id="SlotOption"
                name="role"
                onChange={handleChange}
                value={formData.role}
              >
                <option value="admin">Admin</option>
                <option value="superAdmin">superAdmin</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Form_Password">Password</label>
              <input
                type="text"
                id="Form_Password"
                name="password"
                className="Form_Password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
          </div>
          <button className="btn btnSubmit" onClick={handleSubmit}>
            Xác Nhận
          </button>
        </div>
      </div>
    </div>
  );
}
