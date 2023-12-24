/* use client */
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
