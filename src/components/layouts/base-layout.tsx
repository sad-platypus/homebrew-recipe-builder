import styles from "./base-layout.module.css";
import Sidebar from "@/components/sidebar/sidebar";

export default function BaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
