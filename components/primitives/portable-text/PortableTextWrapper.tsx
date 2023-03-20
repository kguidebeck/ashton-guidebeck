import { Sanity } from '@models/sanity.model';
import { PortableText } from '@portabletext/react';
import InlineLink from '@components/primitives/inline-link';

const textComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    // callToAction: ({ value, isInline }) =>
    //   isInline ? (
    //     <a href={value.url}>{value.text}</a>
    //   ) : (
    //     <div className="callToAction">{value.text}</div>
    //   ),
  },

  marks: {
    link: ({ children, value }) => {
      return <InlineLink href={value.href}>{children}</InlineLink>;
    },
  },
};

const PortableTextWrapper = ({ data }: { data: Sanity.PortableText }) => (
  <PortableText value={data} components={textComponents} />
);

export default PortableTextWrapper;
