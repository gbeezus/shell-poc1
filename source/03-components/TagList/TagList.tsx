import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import Tag, { TagProps } from '~components/Tag/Tag';
import styles from './tag-list.module.css';

import type { JSX } from 'react';

interface TagListProps extends GessoComponent {
  items: TagProps[];
}

function TagList({ items, modifierClasses }: TagListProps): JSX.Element {
  return (
    <ul className={clsx(styles['tag-list'], modifierClasses)}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <Tag {...item} />
        </li>
      ))}
    </ul>
  );
}

export default TagList;
export type { TagListProps };
