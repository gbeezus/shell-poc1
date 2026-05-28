'use client';

import clsx from 'clsx';
import { ConstrainComponent } from 'gesso';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FormEvent, FormEventHandler, JSX, useId, useState } from 'react';
import SearchParams from '~/app/search/SearchParams';
import { Button } from '~components/Button';
import FormItem from '~components/FormItem/FormItem';
import Constrain from '~layouts/Constrain/Constrain';
import styles from './site-search.module.css';

interface SiteSearchFormProps extends ConstrainComponent {
  placeholder: string;
  onSubmit?: (e: FormEvent) => void;
}

interface SiteSearchProps extends Omit<SiteSearchFormProps, 'onSubmit'> {
  placeholder: string;
  collapsed: boolean;
}

function SiteSearchForm({
  placeholder,
  hasConstrain,
  constrainClasses,
  onSubmit,
}: SiteSearchFormProps): JSX.Element {
  const [value, setvalue] = useState('');
  const id = useId();
  const router = useRouter();

  const handleSubmit: FormEventHandler = e => {
    e.preventDefault();
    const newParams = new URLSearchParams();
    newParams.set(SearchParams.SEARCH, value);
    router.push(`/search?${newParams.toString()}`);
    if (onSubmit) {
      onSubmit(e);
    }
  };

  return (
    <div className={styles.container}>
      <Constrain isHidden={!hasConstrain} modifierClasses={constrainClasses}>
        <form method="POST" onSubmit={handleSubmit} className={styles.inner}>
          <FormItem
            id={id}
            label={placeholder}
            labelDisplay="invisible"
            modifierClasses={styles['form-item']}
            type="search"
          >
            <input
              type="search"
              name="s"
              placeholder={placeholder}
              id={id}
              value={value}
              onChange={e => setvalue(e.target.value)}
            />
          </FormItem>
          <Button type="submit" label="Search" />
        </form>
      </Constrain>
    </div>
  );
}

function SiteSearch({
  modifierClasses,
  collapsed = false,
  hasConstrain = true,
  placeholder = 'Search',
  constrainClasses,
}: SiteSearchProps): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOnSubmit = () => {
    // Close the search form on submit.
    setIsOpen(false);
  };

  return (
    <>
      {collapsed ? (
        <div className={clsx(modifierClasses, styles.collapsed)}>
          <Image
            src={'search.svg'}
            width={30}
            height={30}
            alt="Search Toggle"
            className={styles.searchIcon}
            id={'searchToggle'}
            onClick={() => setIsOpen(a => !a)}
          />

          {isOpen && (
            <SiteSearchForm
              placeholder={placeholder}
              constrainClasses={constrainClasses}
              hasConstrain={hasConstrain}
              onSubmit={handleOnSubmit}
            />
          )}
        </div>
      ) : (
        <div className={clsx(modifierClasses)}>
          <SiteSearchForm
            placeholder={placeholder}
            constrainClasses={constrainClasses}
            hasConstrain={hasConstrain}
            onSubmit={handleOnSubmit}
          />
        </div>
      )}
    </>
  );
}

export default SiteSearch;
