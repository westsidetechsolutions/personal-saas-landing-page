'use client';

import { useEffect, useState } from 'react';
import { Button, Alert } from 'flowbite-react';

// Client component for UTM tracking and analytics
export default function ThanksContent() {
    const [, setUtmData] = useState<{
        source?: string;
        medium?: string;
        campaign?: string;
        content?: string;
        term?: string;
        referrer?: string;
    }>({});

    useEffect(() => {
        // Read UTM parameters from URL
        const urlParams = new URLSearchParams(window.location.search);
        const referrer = document.referrer;

        const utmParams = {
            source: urlParams.get('utm_source') || undefined,
            medium: urlParams.get('utm_medium') || undefined,
            campaign: urlParams.get('utm_campaign') || undefined,
            content: urlParams.get('utm_content') || undefined,
            term: urlParams.get('utm_term') || undefined,
            referrer: referrer || undefined,
        };

        // Store in localStorage
        Object.entries(utmParams).forEach(([key, value]) => {
            if (value) {
                localStorage.setItem(`utm_${key}`, value);
            }
        });

        setUtmData(utmParams);

        // Fire Google Analytics conversion event if gtag exists
        if (typeof window !== 'undefined' && 'gtag' in window) {
            (window as unknown as { gtag: (command: string, event: string, params: Record<string, unknown>) => void }).gtag('event', 'lead_submit', {
                source: utmParams.source,
                medium: utmParams.medium,
                campaign: utmParams.campaign,
                content: utmParams.content,
                term: utmParams.term,
            });
        }
    }, []);

    // Check if we have any UTM data (commented out since it's not used)
    // const hasUtmData = Object.values(utmData).some(value => value);

    return (
        <main className="bg-white dark:bg-gray-950 min-h-screen">
            <div className="container mx-auto max-w-4xl px-6 py-16 md:py-24">
                <div className="mx-auto max-w-2xl text-center">
                    {/* Success Icon */}
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900">
                        <svg className="h-8 w-8 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>

                    {/* Hero Message */}
                    <h1 className="font-kumbh-sans text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-5xl">
                        Thanks for subscribing!
                    </h1>

                    <p className="mt-4 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                        You&apos;re now on the list to get early access to new launches, behind-the-scenes updates, and exclusive content.
                    </p>

                    {/* Call to Action Buttons */}
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                        <Button
                            as="a"
                            href="#projects"
                            color="primary"
                            size="lg"
                            className="flex items-center gap-2"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                            See My Projects
                        </Button>

                        <Button
                            as="a"
                            href="https://www.youtube.com/channel/UCOneYkl50C8p9PgK5aWIV0A"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="gray"
                            size="lg"
                            className="flex items-center gap-2"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2c-1.8-.5-9.5-.5-9.5-.5s-7.7 0-9.5.5a2.9 2.9 0 0 0-2 2C0 8.1 0 12 0 12s0 3.9.5 5.8a2.9 2.9 0 0 0 2 2c1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5a2.9 2.9 0 0 0 2-2c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6v-7.2L15.8 12l-6.2 3.6z" />
                            </svg>
                            Subscribe on YouTube
                        </Button>

                        <Button
                            as="a"
                            href="https://x.com/fordchristoph3r"
                            target="_blank"
                            rel="noopener noreferrer"
                            color="gray"
                            size="lg"
                            className="flex items-center gap-2"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                            </svg>
                            Follow me on X
                        </Button>
                    </div>

                    {/* Back to Home */}
                    <div className="mt-8">
                        <Button
                            as="a"
                            href="/"
                            color="light"
                            size="md"
                            className="flex items-center gap-2"
                        >
                            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                            Back to Home
                        </Button>
                    </div>

                    {/* Next Steps Info */}
                    <Alert color="info" className="mt-8">
                        <div className="text-left">
                            <h4 className="font-semibold">What&apos;s next?</h4>
                            <p className="mt-1 text-sm">
                                Check your email for a welcome message. I&apos;ll send you updates about new launches,
                                behind-the-scenes content, and exclusive early access to my projects.
                            </p>
                        </div>
                    </Alert>
                </div>
            </div>
        </main>
    );
}
