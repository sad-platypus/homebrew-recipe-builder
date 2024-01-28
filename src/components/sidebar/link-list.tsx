import { Link } from "@/navigation";
import { useTranslations } from "next-intl";
import styles from "./link-list.module.css";

export default function LinkList() {
 
  const t = useTranslations("link-list");
  const paths = [
    { url: "my-recipies", text: t("my-recipies"), icon: "news" },
    {
      url: "public-recipies",
      text: t("public-recipies"),
      icon: "find_in_page",
    },
    { url: "recipe-builder", text: t("recipe-builder"), icon: "sports_bar" },
    { url: "calculators", text: t("calculators"), icon: "calculate" },
    { url: "contact", text: t("contact"), icon: "alternate_email" },
  ];

  const list = paths.map((path) => {
    return (
      <li
        id={path.url}
        key={path.url}
      >
        <Link
          className={styles.link}
          href={`/${path.url}`}
        >
          <span className={`material-symbols-outlined`}>{path.icon}</span>
          {path.text}
        </Link>
      </li>
    );
  });

  return <ul className={styles.list}>{list}</ul>;
}
