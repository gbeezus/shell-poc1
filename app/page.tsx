import { Metadata } from 'next';
import Link from 'next/link';
import Section from '~layouts/Section/Section';
import LandingPage from '~templates/LandingPage/LandingPage';

const title = 'POC 1 — CSS-overlay rebrand (two mechanisms)';

export const metadata: Metadata = {
  title,
  description:
    'Shell application demonstrating two mechanisms for rebranding the third-party AI tool without touching its source.',
};

function Home() {
  return (
    <LandingPage title={title}>
      <Section>
        <p>
          The shell wraps a tightly coupled third-party Next.js tool. We own
          authentication, brand, and chrome; they own the tool surface. This
          POC demonstrates two mechanisms for applying our USWDS brand to
          their components without modifying their codebase.
        </p>

        <h2>Mechanism A — JSON theme upload (third party&rsquo;s proposal)</h2>
        <p>
          Visit the <Link href="/admin/themes">brand admin</Link> and click
          &ldquo;Apply USWDS preset&rdquo;. The shell POSTs a DTCG-formatted
          JSON bundle to{' '}
          <code>http://localhost:3001/api/theme</code>. The third party
          persists it and emits the corresponding{' '}
          <code>:root</code> custom properties as inline{' '}
          <code>&lt;style&gt;</code> on every render.
        </p>

        <h2>Mechanism B — Shell-hosted CSS link</h2>
        <p>
          The third party adds one <code>&lt;link&gt;</code> to their root
          layout pointing at{' '}
          <code>http://localhost:3000/brand/overrides.css</code>. We control
          the file; brand changes ship by updating it.
        </p>

        <h2>Try it</h2>
        <p>
          See <Link href="/tool">/tool</Link> to view the third-party app
          inside the shell&rsquo;s chrome. The current brand applied there
          depends on the third party&rsquo;s{' '}
          <code>NEXT_PUBLIC_THEME_MODE</code> setting (see{' '}
          <code>third-party-poc1/.env.local.example</code>).
        </p>
      </Section>
    </LandingPage>
  );
}

export default Home;
