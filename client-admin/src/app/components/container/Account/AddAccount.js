import "@/styles/Account.css";
export default function AddAccount() {
  return (
    <div className="">
      <div className="Content_AddAccount flex flex-col">
        <div className="AddAccount_Form ">
          <div className="flex gap-20">
            <div className="flex flex-col w-1/4 gap-2 ">
              <label for="Form_SlotOption">Chọn Slot</label>
              <select id="SlotOption" name="Form_SlotOption">
                <option value="Slot1">1 Slot</option>
                <option value="Slot2">2 Slot</option>
                <option value="Slot3">3 Slot</option>
                <option value="Slot4">4 Slot</option>
                <option value="Slot5">5 Slot</option>
              </select>
            </div>
            <div className="flex flex-col w-1/4 gap-2">
              <label for="Form_UserName">UserName</label>
              <input
                type="text"
                id="Form_UserName"
                name="Form_UserName"
                className="Form_UserName"
              ></input>
            </div>
            <div className="flex flex-col w-1/3 gap-2">
              <label for="Form_PackageOption">Chọn Gói</label>
              <select id="Form_PackageOption" name="Form_PackageOption">
                <option value="Slot1">Premium</option>
                <option value="Slot2">Vip</option>
                <option value="Slot3">Normal</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
