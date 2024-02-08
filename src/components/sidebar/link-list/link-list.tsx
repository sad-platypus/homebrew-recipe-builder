import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import styles from './link-list.module.scss';

type LinkListProps = {
  onLinkClick?: () => void;
};
export const LinkList = ({ onLinkClick }: LinkListProps) => {
  const t = useTranslations('link-list');

  const paths = [
    { url: 'my-recipes', text: t('my-recipes') },
    {
      url: 'public-recipes',
      text: t('public-recipes'),
    },
    { url: 'recipe-builder', text: t('recipe-builder') },
    { url: 'calculators', text: t('calculators') },
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
          className={styles.link}
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
