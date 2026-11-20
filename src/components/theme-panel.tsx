'use client';

import { Airplay, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useRef, useState } from 'react';
import { cn } from '../lib/cn';

type Scheme = 'slate' | 'warm' | 'forest' | 'midnight' | 'sunset' | 'ocean';
type Contrast = 'soft' | 'default' | 'strong' | 'high';

const SCHEMES: { key: Scheme; label: string; dot: string }[] = [
  { key: 'slate', label: 'Slate', dot: 'hsl(256, 88%, 64%)' },
  { key: 'warm', label: 'Warm', dot: 'hsl(25, 84%, 47%)' },
  { key: 'forest', label: 'Forest', dot: 'hsl(142, 64%, 36%)' },
  { key: 'midnight', label: 'Midnight', dot: 'hsl(222, 83%, 55%)' },
  { key: 'sunset', label: 'Sunset', dot: 'hsl(8, 82%, 55%)' },
  { key: 'ocean', label: 'Ocean', dot: 'hsl(199, 89%, 45%)' },
];

const THEMES: { key: string; label: string; icon: typeof Sun }[] = [
  { key: 'light', label: 'Light', icon: Sun },
  { key: 'system', label: 'Auto', icon: Airplay },
  { key: 'dark', label: 'Dark', icon: Moon },
];

const CONTRASTS: { key: Contrast; label: string }[] = [
  { key: 'soft', label: 'Soft' },
  { key: 'default', label: 'Default' },
  { key: 'strong', label: 'Strong' },
  { key: 'high', label: 'High' },
];

const CONTRAST_CAPTION: Record<Contrast, string> = {
  soft: 'Subtle, low-emphasis dividers and borders',
  default: 'Standard dividers and borders',
  strong: 'Heavier dividers and borders',
  high: 'Maximum-contrast dividers and borders',
};

const SCHEME_KEY = 'rk-color-scheme';
const CONTRAST_KEY = 'rk-contrast';

export function ThemePanel() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [dir, setDir] = useState<'up' | 'down'>('down');
  const [scheme, setScheme] = useState<Scheme>('slate');
  const [contrast, setContrast] = useState<Contrast>('default');

  const ref = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    try {
      const s = (localStorage.getItem(SCHEME_KEY) as Scheme) || 'slate';
      const c = (localStorage.getItem(CONTRAST_KEY) as Contrast) || 'default';
      setScheme(s);
      setContrast(c);
    } catch {
      /* ignore */
    }
  }, []);

  // close on outside click / escape
  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  function applyScheme(s: Scheme) {
    setScheme(s);
    document.documentElement.dataset.colorScheme = s;
    try {
      localStorage.setItem(SCHEME_KEY, s);
    } catch {
      /* ignore */
    }
  }

  function applyContrast(c: Contrast) {
    setContrast(c);
    document.documentElement.dataset.contrast = c;
    try {
      localStorage.setItem(CONTRAST_KEY, c);
    } catch {
      /* ignore */
    }
  }

  function toggle() {
    if (!open && btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      // open in the direction with more room
      setDir(rect.top < window.innerHeight / 2 ? 'down' : 'up');
    }
    setOpen((v) => !v);
  }

  const activeTheme = mounted ? theme ?? 'system' : null;

  return (
    <div ref={ref} className="relative">
      <button
        ref={btnRef}
        type="button"
        aria-label="Appearance settings"
        aria-expanded={open}
        onClick={toggle}
        className={cn(
          'inline-flex size-8 items-center justify-center rounded-full border text-fd-muted-foreground transition-colors',
          'hover:bg-fd-accent hover:text-fd-accent-foreground',
          open && 'bg-fd-accent text-fd-accent-foreground',
        )}
      >
        <Palette className="size-4.5" />
      </button>

      {open && (
        <div
          className={cn(
            'absolute right-0 z-50 w-64 rounded-xl border bg-fd-popover p-4 text-fd-popover-foreground shadow-lg',
            dir === 'down' ? 'top-full mt-2' : 'bottom-full mb-2',
          )}
        >
          {/* THEME */}
          <SectionLabel>Theme</SectionLabel>
          <div className="mb-4 grid grid-cols-3 gap-1.5">
            {THEMES.map(({ key, label, icon: Icon }) => (
              <Pill
                key={key}
                active={activeTheme === key}
                onClick={() => setTheme(key)}
              >
                <Icon className="size-3.5" />
                {label}
              </Pill>
            ))}
          </div>

          {/* COLOUR SCHEME */}
          <SectionLabel>Colour scheme</SectionLabel>
          <div className="mb-4 grid grid-cols-2 gap-1.5">
            {SCHEMES.map(({ key, label, dot }) => (
              <Pill
                key={key}
                active={scheme === key}
                onClick={() => applyScheme(key)}
                className="justify-start"
              >
                <span
                  className="size-2.5 shrink-0 rounded-full"
                  style={{ backgroundColor: dot }}
                />
                {label}
              </Pill>
            ))}
          </div>

          {/* CONTRAST */}
          <SectionLabel>Contrast</SectionLabel>
          <div className="grid grid-cols-4 gap-1.5">
            {CONTRASTS.map(({ key, label }) => (
              <Pill
                key={key}
                active={contrast === key}
                onClick={() => applyContrast(key)}
                className="px-1 text-[11px]"
              >
                {label}
              </Pill>
            ))}
          </div>
          <p className="mt-2 text-[11px] text-fd-muted-foreground">
            {CONTRAST_CAPTION[contrast]}
          </p>
        </div>
      )}
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-fd-muted-foreground">
      {children}
    </p>
  );
}

function Pill({
  active,
  onClick,
  className,
  children,
}: {
  active: boolean;
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex items-center justify-center gap-1.5 rounded-lg border px-2 py-1.5 text-xs font-medium transition-colors',
        active
          ? 'border-fd-primary/60 bg-fd-primary/10 text-fd-foreground'
          : 'border-fd-border text-fd-muted-foreground hover:bg-fd-accent hover:text-fd-accent-foreground',
        className,
      )}
    >
      {children}
    </button>
  );
}
