import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import { JSX, ReactNode } from 'react';
import Constrain from '~layouts/Constrain/Constrain';
import styles from './header.module.css';

interface HeaderProps extends ConstrainComponent {
  children?: ReactNode;
}

function Header({
  children,
  hasConstrain = true,
  modifierClasses,
  constrainClasses,
}: HeaderProps): JSX.Element {
  return (
    <header role="banner" className={clsx(styles.wrapper, modifierClasses)}>
      <Constrain isHidden={!hasConstrain} modifierClasses={constrainClasses}>
        <div className={styles.inner}>{children}</div>
      </Constrain>
    </header>
  );
}

export default Header;
export type { HeaderProps };
