
import styles from "./base-layout.module.css";
import  {Sidebar}  from "@/components/sidebar/sidebar";
import LangueageSwitcher from "../language-switcher/language-switcher";
import { ReactNode } from 'react';

export default function BaseLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className={styles.wrapper}>
      <Sidebar />
      <div className={styles.content}>
        <LangueageSwitcher />
        {children}
      </div>
    </div>
  );
}
