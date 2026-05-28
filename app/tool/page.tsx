import { Metadata } from 'next';
import Section from '~layouts/Section/Section';
import Page from '~templates/Page/Page';
import styles from './tool.module.css';

const title = 'Tool — third-party AI inside shell chrome';

export const metadata: Metadata = {
  title,
  description:
    'Iframe-wrapped view of the third-party tool. Brand applied via Mechanism A or B depending on third-party config.',
};

const thirdPartyUrl = process.env.NEXT_PUBLIC_THIRDPARTY_URL ?? 'http://localhost:3001';

function Tool() {
  return (
    <Page title={title}>
      <Section>
        <p>
          Below is the third-party AI tool, hosted by them at{' '}
          <code>{thirdPartyUrl}</code>, embedded inside this shell&rsquo;s
          USWDS-branded chrome. The visual brand inside the iframe is
          determined by which mechanism the third party is currently honoring
          (set via their <code>NEXT_PUBLIC_THEME_MODE</code> env var).
        </p>
        <div className={styles.frameWrap}>
          <iframe
            src={thirdPartyUrl}
            title="third-party AI tool"
            className={styles.frame}
          />
        </div>
      </Section>
    </Page>
  );
}

export default Tool;
