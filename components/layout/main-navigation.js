import Link from "next/link";
import Logo from "./logo";
import style from "@/styles/main-navigation.module.css";
const MainNavigation = () => {
  return (
    <header className={style.header}>
      <Link href="/" legacyBehavior>
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Post</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
