import Image from "next/image";
import styles from "../page.module.css";
import { useTranslations } from "next-intl";
export default function Home() {
  const t = useTranslations("hello");
  return (
    <main className={styles.main}>
      <h1>{t('hello')}</h1>
      
    </main>
  );
}
