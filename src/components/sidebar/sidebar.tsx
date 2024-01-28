import styles from "./sidebar.module.css";
import Image from "next/image";
import { Link } from "@/navigation";
import LinkList from "./link-list";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Link
        className={styles.link}
        href="/"
      >
        <Image
          className={styles.image}
          src="/logo.PNG"
          alt="Platypus' homebrewing logo"
          width="200"
          height="200"
        />
      </Link>
      <LinkList />
    </div>
  );
}
