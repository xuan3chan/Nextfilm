import "@/styles/Button.css";
import { IoIosSave } from "react-icons/io";
export default function submitBtn() {
  return (
    <button type="submit" className=" submitBtn">
      <IoIosSave />
      Xác Nhận
    </button>
  );
}
