export default function Header() {
  return (
    <div className="Header flex">
      <div className="Header_Item w-52 h-full">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="w-full h-full"
          alt=""
        />
      </div>
      <div className="Header_Item">Trang Chủ</div>
      <div className="Header_Item">Danh Mục</div>
      <div className="Header_Item">Cài Đặt</div>
    </div>
  );
}
