'use client';

import { JSX, useState } from 'react';
import { Button } from '~components/Button/Button';
import styles from './admin.module.css';

interface Preset {
  label: string;
  bundle: unknown;
}

interface Props {
  presets: Preset[];
}

type Status =
  | { kind: 'idle' }
  | { kind: 'sending'; label: string }
  | { kind: 'ok'; label: string }
  | { kind: 'error'; label: string; message: string };

const TARGET =
  process.env.NEXT_PUBLIC_THIRDPARTY_API ??
  'http://localhost:3001/api/theme';

function colorSwatches(bundle: unknown): Array<{ name: string; value: string }> {
  const out: Array<{ name: string; value: string }> = [];
  const walk = (node: unknown, prefix: string[]) => {
    if (node && typeof node === 'object' && '$value' in (node as Record<string, unknown>)) {
      const token = node as { $value: string; $type?: string };
      if (token.$type === 'color') {
        out.push({ name: prefix.join('-'), value: String(token.$value) });
      }
      return;
    }
    if (!node || typeof node !== 'object') return;
    for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
      if (k.startsWith('$')) continue;
      walk(v, [...prefix, k]);
    }
  };
  walk(bundle, []);
  return out;
}

function AdminThemes({ presets }: Props): JSX.Element {
  const [status, setStatus] = useState<Status>({ kind: 'idle' });

  const apply = async (preset: Preset) => {
    setStatus({ kind: 'sending', label: preset.label });
    try {
      const res = await fetch(TARGET, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(preset.bundle),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(`${res.status} ${res.statusText} — ${text}`);
      }
      setStatus({ kind: 'ok', label: preset.label });
    } catch (err) {
      setStatus({
        kind: 'error',
        label: preset.label,
        message: err instanceof Error ? err.message : String(err),
      });
    }
  };

  return (
    <div className={styles.grid}>
      {presets.map((p) => (
        <div key={p.label} className={styles.preset}>
          <h3>{p.label}</h3>
          <div className={styles.swatches}>
            {colorSwatches(p.bundle).map((s) => (
              <div key={s.name} className={styles.swatch} title={`${s.name}: ${s.value}`}>
                <span
                  className={styles.chip}
                  style={{ background: s.value }}
                  aria-hidden="true"
                />
                <code>{s.name}</code>
              </div>
            ))}
          </div>
          <Button
            label={
              status.kind === 'sending' && status.label === p.label
                ? 'Applying…'
                : `Apply ${p.label}`
            }
            variant="primary"
            disabled={status.kind === 'sending'}
            onClick={() => apply(p)}
          />
        </div>
      ))}
      {status.kind === 'ok' && (
        <p className={styles.ok}>
          Applied <strong>{status.label}</strong> to{' '}
          <code>{TARGET}</code>. Reload <code>/tool</code> (or{' '}
          <code>http://localhost:3001/</code>) to see the change.
        </p>
      )}
      {status.kind === 'error' && (
        <p className={styles.error}>
          Failed to apply <strong>{status.label}</strong>: {status.message}.
          Is the third party running on port 3001 with{' '}
          <code>NEXT_PUBLIC_THEME_MODE=json</code>?
        </p>
      )}
    </div>
  );
}

export default AdminThemes;
