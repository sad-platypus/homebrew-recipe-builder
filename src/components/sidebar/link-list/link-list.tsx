import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import styles from './link-list.module.scss';
import { usePathname } from 'next/navigation';
import path from 'path';

type LinkListProps = {
  onLinkClick?: () => void;
};
export const LinkList = ({ onLinkClick }: LinkListProps) => {
  const t = useTranslations('sidebar.link-list');
  const pathname = usePathname();
  const regexp = /\/(?:pl|en)\/(.*)/;
  const matchPathname = pathname.match(regexp);
  const pathnameWithoutLocale = matchPathname && matchPathname[1];

  const paths = [
    { url: 'calculators', text: t('calculators') },
    {
      url: 'public-recipes',
      text: t('public-recipes'),
    },
    { url: 'my-profile', text: t('my-profile') },
    { url: 'recipe-builder', text: t('recipe-builder') },

    { url: 'contact', text: t('contact') },
  ];

  const handleClick = () => {
    onLinkClick && onLinkClick();
  };

  const list = paths.map((path) => {
    return (
      <li
        id={path.url}
        key={path.url}
      >
        <Link
          className={`${styles.link} ${
            path.url === pathnameWithoutLocale ? styles.current : null
          }`}
          href={`/${path.url}`}
          onClick={handleClick}
        >
          {path.text}
        </Link>
      </li>
    );
  });

  return <ul className={styles.list}>{list}</ul>;
};
