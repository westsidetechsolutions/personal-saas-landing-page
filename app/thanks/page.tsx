import type { Metadata } from 'next';
import ThanksContent from './ThanksContent';

// Metadata for the page
export const metadata: Metadata = {
    title: 'Thanks for subscribing! - Chris Ford',
    description: 'You\'re now subscribed to get early access to new launches, behind-the-scenes updates, and exclusive content from Chris Ford.',
};

export default function ThanksPage() {
    return <ThanksContent />;
}
