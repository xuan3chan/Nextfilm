
export default function ResetPassword() {
  return (
    <form className="reset-password_form fg-form h-screen">  
      <div className="p-10 bg-white">
        <div>
          <h1 className="text-3xl font-semibold">Đặt lại mật khẩu</h1>
        </div>
        <div className="mt-2">
          <label>Vui lòng nhập mật khẩu mới của bạn</label>
          <input type="text" 
            className="fg-input w-full border rounded px-4 py-3"
          />
        </div>
      </div>
    </form>
  );
}