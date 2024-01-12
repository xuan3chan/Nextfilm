import "@/styles/Account.css";
export default function AddAdmin() {
  return (
    <div className="w-full">
      <div className="Content_AddAccountAdmin flex flex-col">
        <div className="AddAccount_Form justify-center items-center">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="flex flex-col gap-2 ">
              <label for="Form_SlotOption">Chọn Role</label>
              <select id="SlotOption" name="Form_SlotOption">
                <option value="Slot1">Admin</option>
                <option value="Slot3">Sub Admin</option>
                <option value="Slot2">Kiểm Duyệt</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label for="Form_UserName">UserName</label>
              <input
                type="text"
                id="Form_UserName"
                name="Form_UserName"
                className="Form_UserName"
              ></input>
            </div>
            <div className="flex flex-col gap-2">
              <label for="Form_Password">Password</label>
              <input
                type="text"
                id="Form_Password"
                name="Form_Password"
                className="Form_Password"
              ></input>
            </div>
          </div>
          <button className="btn btnSubmit">Xác Nhận</button>
        </div>
      </div>
    </div>
  );
}
