import "@/styles/Account.css";
export default function AddAccount() {
  return (
    <div className="w-full">
      <div className="Content_AddAccount  flex flex-col items-center gap-3">
        <div className="AddAccount_Form gap-4">
          <div className="flex gap-4 flex-col">
            <div className="flex flex-col w-full gap-2 ">
              <label for="Form_SlotOption">Chọn Slot</label>
              <select id="SlotOption" name="Form_SlotOption">
                <option value="Slot1">1 Slot</option>
                <option value="Slot2">2 Slot</option>
                <option value="Slot3">3 Slot</option>
                <option value="Slot4">4 Slot</option>
                <option value="Slot5">5 Slot</option>
              </select>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label for="Form_UserName">UserName</label>
              <input
                type="text"
                id="Form_UserName"
                name="Form_UserName"
                className="Form_UserName"
              ></input>
            </div>
            <div className="flex flex-col w-full gap-2">
              <label for="Form_PackageOption">Chọn Gói</label>
              <select id="Form_PackageOption" name="Form_PackageOption">
                <option value="Slot1">Premium</option>
                <option value="Slot2">Vip</option>
                <option value="Slot3">Normal</option>
              </select>
            </div>
          </div>
        </div>
        <button className="btn btnSubmit">Xác Nhận</button>
      </div>
    </div>
  );
}
