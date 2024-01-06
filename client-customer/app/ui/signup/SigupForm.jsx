import { RedButton } from "@/app/ui/RedButton";
import { IoIosArrowForward } from "react-icons/io";

export function SignupForm() {
  
  return (
    <form className="sub-form">
      <h3 className="sub-header">
        Bạn đã sẵn sàng xem chưa? Nhập email để tạo hoặc kích hoạt
        lại tư cách thành viên của bạn.
      </h3>
      <div className="sub-content flex">
        <div className="field flex-1 h-14 mr-2">
          <input
            id="email"
            type="text"
            className="text-input font-normal border-gray-600 bg-black/45 border rounded"
            required
          />
          <label
            htmlFor="email"
            className="floating-label font-light"
          >
            Địa chỉ email
          </label>
        </div>
        <RedButton className="w-[162px] h-14 text-[25px] flex items-center justify-center">
          Bắt đầu <IoIosArrowForward />
        </RedButton>
      </div>
    </form>
  )
}