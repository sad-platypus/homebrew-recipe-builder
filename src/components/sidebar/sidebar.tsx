import styles from "./sidebar.module.css";
import Image from "next/image";
import { Link } from "@/navigation";
import LinkList from "./link-list";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link
        className={styles.link}
        href="/"
      >
        <Image
          priority={true}
          className={styles.image}
          src="/logo.PNG"
          alt="Platypus' homebrewing logo"
          width="200"
          height="200"
        />
      </Link>
      <div className={styles.wrapper}>
        <LinkList />
      </div>
    </div>
  );
};
