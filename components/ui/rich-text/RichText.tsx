import { Sanity } from '@models/sanity.model';
import { PortableText, PortableTextComponents } from '@portabletext/react';

export interface RichTextProps {
  value: Sanity.PortableText;
}

const portableTextComponents: PortableTextComponents = {
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/')
        ? 'noreferrer noopener'
        : undefined;
      return (
        <a
          href={value?.href}
          target={value?.blank ? '_blank' : '_self'}
          rel={rel}
        >
          {children}
        </a>
      );
    },
  },
};

/**
 * @description BASIC/DEPT® RichText
 * @example
 *
 * TypeScript:
 * ```ts
 *  content: Sanity.PortableText;
 * ```
 *  JSX:
 *  ```jsx
 *   <RichText value={content} />
 * ```
 * Sanity GROQ:
 * ```groq
 * content
 * ```
 * @returns {JSX.Element}
 */
const RichText = ({ value }: RichTextProps) => {
  return <PortableText value={value} components={portableTextComponents} />;
};

export default RichText;
