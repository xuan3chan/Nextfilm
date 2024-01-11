import "@/styles/Account.css";
import { useEffect, useState } from "react";
import axios from "axios";
export default function AddAdmin(props) {
  const token = props.token;
  const ApiLink = "http://localhost:8000/api/admin/register";

  // State to hold form data
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
      .post(
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
      })
      .catch((error) => {
        console.log("Error:", error);
      });
    console.log(formData);
  };

  return (
    <div className="w-full">
      <div className="Content_AddAccountAdmin flex flex-col">
        <div className="AddAccount_Form justify-start items-center ">
          <div className="flex flex-col gap-4 w-full">
            <div className="flex flex-col gap-2 ">
              <label htmlFor="Form_SlotOption">Chọn Role</label>
              <select
                id="SlotOption"
                name="role"
                onChange={handleChange}
                value={formData.role}
              >
                <option value="admin">Admin</option>
                <option value="superAdmin">SuperAdmin</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Form_UserName">UserName</label>
              <input
                type="text"
                id="Form_UserName"
                name="adminName"
                className="Form_UserName"
                onChange={handleChange}
                value={formData.userName}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="Form_Password">Password</label>
              <input
                type="password"
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
