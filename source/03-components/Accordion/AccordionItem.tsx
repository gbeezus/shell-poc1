import clsx from 'clsx';
import { GessoComponent } from 'gesso';
import {
  ElementType,
  JSX,
  MouseEventHandler,
  ReactNode,
  RefObject,
  useEffect,
  useRef,
} from 'react';
import { slideCollapse, slideExpand } from '~utility/slide';
import styles from './accordion-item.module.css';

interface AccordionItemProps extends GessoComponent {
  id: string;
  title: string;
  content: ReactNode;
  titleElement?: ElementType;
  isOpen?: boolean;
  isStepList?: boolean;
  accordionSpeed?: string;
  toggleRef?: RefObject<HTMLButtonElement | null>;
  handleClick?: MouseEventHandler;
}

function AccordionItem({
  id,
  title,
  content,
  titleElement: TitleElement = 'h3',
  isOpen,
  isStepList,
  accordionSpeed,
  toggleRef,
  modifierClasses,
  handleClick,
}: AccordionItemProps): JSX.Element {
  const accordionItemSectionRef = useRef(null);

  const sectionId = `accordion-section-${id}`;
  const buttonId = `accordion-button-${id}`;

  useEffect(() => {
    if (isOpen && accordionItemSectionRef.current) {
      slideExpand(accordionItemSectionRef.current, accordionSpeed);
    } else if (!isOpen && accordionItemSectionRef.current) {
      slideCollapse(accordionItemSectionRef.current, accordionSpeed);
    }
  }, [isOpen, accordionSpeed]);

  return (
    <div
      className={clsx(
        styles.accordionItem,
        isStepList && styles['is-step-list'],
        modifierClasses,
      )}
    >
      <div className={styles.panel}>
        <TitleElement className={styles.heading}>
          <button
            className={styles.toggle}
            id={buttonId}
            aria-expanded={isOpen}
            aria-controls={sectionId}
            ref={toggleRef}
            onClick={handleClick}
          >
            {isStepList && <span className={styles.number}></span>}
            <span className={styles.title}>{title}</span>
            <span className={styles.icon}></span>
          </button>
        </TitleElement>
        <div
          ref={accordionItemSectionRef}
          className={styles.drawer}
          id={sectionId}
          aria-labelledby={buttonId}
        >
          <div className={styles.drawerInner}>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
export type { AccordionItemProps };
