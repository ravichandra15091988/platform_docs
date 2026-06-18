import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const gitConfig = {
  user: 'Platform Docs',
  repo: 'docs',
  branch: 'main',
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'Platform Docs',
      transparentMode: 'top',
    },
    links: [
      {
        text: 'User Guide',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Admin Guide',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Connectors',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Release Notes',
        url: '/docs/release-notes',
        active: 'nested-url',
      },
    ],
  };
}

