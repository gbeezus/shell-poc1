import { Metadata } from 'next';
import Section from '~layouts/Section/Section';
import Page from '~templates/Page/Page';
import uswds from '~/lib/themes/uswds.json';
import uswdsAlt from '~/lib/themes/uswds-alt.json';
import AdminThemes from './AdminThemes';

const title = 'Brand admin — Mechanism A (JSON upload)';

export const metadata: Metadata = {
  title,
  description:
    'Apply a DTCG brand preset to the third-party tool by POSTing JSON to its /api/theme endpoint.',
};

function AdminThemesPage() {
  return (
    <Page title={title}>
      <Section>
        <p>
          The third party exposes <code>POST /api/theme</code>. Clicking a
          preset below uploads its DTCG bundle. The third party persists it
          and emits the corresponding CSS custom properties on the next
          request.
        </p>
        <AdminThemes
          presets={[
            { label: 'USWDS (default)', bundle: uswds },
            { label: 'USWDS Mint (alt)', bundle: uswdsAlt },
          ]}
        />
      </Section>
    </Page>
  );
}

export default AdminThemesPage;
