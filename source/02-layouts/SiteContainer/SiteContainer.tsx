import { GessoComponent } from 'gesso';
import { JSX, ReactNode } from 'react';
import styles from './site-container.module.css';

interface SiteContainerProps extends GessoComponent {
  children: ReactNode;
}

function SiteContainer({ children }: SiteContainerProps): JSX.Element {
  return <div className={styles['site-container']}>{children}</div>;
}

export default SiteContainer;
export type { SiteContainerProps };
