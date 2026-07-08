import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the Pulse team for demos, pricing, support, or partnership enquiries.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
