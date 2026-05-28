import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import { JSX, ReactNode } from 'react';
import styles from './wysiwyg.module.css';

interface WysiwygProps extends GessoComponent {
  children?: ReactNode;
}

function Wysiwyg({ children, modifierClasses }: WysiwygProps): JSX.Element {
  return (
    <div className={clsx(styles.wysiwyg, 'u-clearfix', modifierClasses)}>
      {children}
    </div>
  );
}

export default Wysiwyg;
export type { WysiwygProps };
