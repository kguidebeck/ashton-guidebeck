import React from 'react';
import Link from 'next/link';

export interface InlineLinkSchema {
  href: string;
  target?: string;
  children?: React.ReactNode;
}

const InlineLink = ({ href, target = '_self', children }: InlineLinkSchema) => {
  const isExternal = !href.startsWith('/');

  return isExternal ? (
    <a href={href} rel="noreferrer noopener" target={target}>
      {children}
    </a>
  ) : (
    <Link href={href} target={target}>
      {children}
    </Link>
  );
};

export default InlineLink;
