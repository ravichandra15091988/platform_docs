import { baseOptions } from '@/lib/layout.shared';
import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Archivo } from 'next/font/google';

import {
  NavbarMenu,
  NavbarMenuContent,
  NavbarMenuLink,
  NavbarMenuTrigger,
} from 'fumadocs-ui/layouts/home/navbar';

const archivo = Archivo({
  subsets: ['latin'],
  weight: ['400', '600', '800'],
  variable: '--font-archivo',
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={archivo.variable}>
      <HomeLayout
        {...baseOptions()}
        links={[
          {
            type: 'main',
            text: 'Experience',
            url: '/#experience',
          },
          {
            type: 'main',
            text: 'Education',
            url: '/#education',
          },
          {
            type: 'main',
            text: 'FAQ',
            url: '/#faq',
          },
          {
            type: 'custom',
            // only displayed on navbar, not mobile menu
            on: 'nav',
            children: (
              <NavbarMenu>
                <NavbarMenuTrigger>Projects</NavbarMenuTrigger>
                <NavbarMenuContent>
                  <NavbarMenuLink href="/docs">Projects</NavbarMenuLink>
                </NavbarMenuContent>
              </NavbarMenu>
            ),
          },
          {
            type: 'custom',
            children: (
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center bg-[#ec3013] px-3.5 py-2 text-sm font-extrabold text-[#f3f2f2] hover:bg-[#dd2b0f] active:bg-[#ae1800]"
                style={{ fontFamily: 'var(--font-archivo), system-ui, sans-serif' }}
              >
                Résumé (PDF)
              </a>
            ),
          },
          // other items
        ]}
      >
        {children}
      </HomeLayout>
    </div>
  );
}