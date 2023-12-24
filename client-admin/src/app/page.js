import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-24">
      <h className="">Trang Chủ</h>
      <Link href="/login" className="p-2 w-32 bg-black">Đăng Nhập</Link>
    </div>
  );
}
