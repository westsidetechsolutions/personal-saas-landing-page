// app/page.tsx
import { Button } from "flowbite-react";
import Image from "next/image";
import ZohoLeadForm from './components/ZohoLeadForm';

export default async function Home({ searchParams }: { searchParams: Promise<Record<string, string | undefined>> }) {
  const params = await searchParams;
  const {
    utm_source = '',
    utm_medium = '',
    utm_campaign = '',
    utm_content = '',
    utm_term = '',
  } = params ?? {};
  return (
    <main className="bg-white dark:bg-gray-950">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary-50 via-white to-white dark:from-gray-900 dark:via-gray-900/60 dark:to-gray-900" />
        <div className="container mx-auto max-w-6xl px-6 pt-28 pb-20 md:pt-36 md:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-kumbh-sans text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white md:text-6xl">
              Building and launching <span className="text-primary-700 dark:text-primary-400">indie SaaS</span> in public.
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-gray-600 dark:text-gray-300">
              I design, build, and ship web apps fast — sharing the entire journey so you can follow along, learn, and try my products.
            </p>

            {/* Social proof */}
            {/*<p className="mt-2 text-sm text-gray-500 dark:text-gray-400">*/}
            {/*  Joined by <strong>500+</strong> builders & founders (and counting).*/}
            {/*</p>*/}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {/* Make both CTAs use the same primary palette */}
              <a href="#updates" className="rounded-xl bg-primary-600 px-5 py-3 text-white shadow hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-400">
                Follow the Journey
              </a>
              {/*<a href="#projects" className="rounded-xl border border-gray-300 px-5 py-3 text-gray-800 shadow-sm hover:border-gray-400 dark:border-gray-700 dark:text-gray-200">*/}
              {/*  See My Projects*/}
              {/*</a>*/}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-gray-50 dark:bg-gray-950">
        <div className="container mx-auto max-w-5xl px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-kumbh-sans text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              About Me
            </h2>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary-500/80" />
          </div>

          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-6 rounded-2xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:flex-row md:p-10">
            {/* Headshot */}
            <Image
              src="/Chris.webp"
              alt="Chris Ford"
              width={112}
              height={112}
              className="h-28 w-28 flex-shrink-0 rounded-full object-cover ring-4 ring-white shadow-md dark:ring-gray-900"
            />
            {/* Copy */}
            <div>
              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                I&apos;m Chris — a software engineer turned solo indie developer focused on creating useful,
                minimal SaaS products and showing every step of the process.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                From idea to launch to growth, I share the wins, failures, and lessons learned so you can
                see what really goes into building software as a one-person business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EMAIL SIGNUP */}
      <section id="contact" className="pt-12">
        <div className="container mx-auto max-w-5xl px-6 pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-kumbh-sans text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Get New Launches & Updates First
            </h2>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-300">
              Join the list and I&apos;ll send you new apps, launches, and behind-the-scenes progress.
            </p>
          </div>

          <div className="mx-auto mt-8 md:mt-10">
            <ZohoLeadForm
              utm_source={utm_source}
              utm_medium={utm_medium}
              utm_campaign={utm_campaign}
              utm_content={utm_content}
              utm_term={utm_term}
            />
          </div>
        </div>
      </section>

      {/* SOCIAL LINKS */}
      <section className="container mx-auto max-w-5xl px-6 pb-20">
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            as="a"
            href="https://www.youtube.com/channel/UCOneYkl50C8p9PgK5aWIV0A"
            target="_blank"
            rel="noopener noreferrer"
            color="gray"
            size="lg"
            className="flex items-center gap-2"
          >
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23.5 6.2a2.9 2.9 0 0 0-2-2c-1.8-.5-9.5-.5-9.5-.5s-7.7 0-9.5.5a2.9 2.9 0 0 0-2 2C0 8.1 0 12 0 12s0 3.9.5 5.8a2.9 2.9 0 0 0 2 2c1.8.5 9.5.5 9.5.5s7.7 0 9.5-.5a2.9 2.9 0 0 0 2-2c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6v-7.2L15.8 12l-6.2 3.6z" />
            </svg>
            YouTube
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
            <svg
              className="h-5 w-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M23 2.999a9.56 9.56 0 0 1-2.828.807A4.936 4.936 0 0 0 22.337.365a9.864 9.864 0 0 1-3.127 1.184 4.92 4.92 0 0 0-8.388 4.482 13.95 13.95 0 0 1-10.15-5.144 4.822 4.822 0 0 0-.664 2.475 4.92 4.92 0 0 0 2.188 4.1 4.9 4.9 0 0 1-2.229-.616v.06a4.93 4.93 0 0 0 3.946 4.827 4.902 4.902 0 0 1-2.224.084 4.93 4.93 0 0 0 4.604 3.417 9.873 9.873 0 0 1-6.102 2.104c-.396 0-.788-.023-1.175-.068A13.945 13.945 0 0 0 7.548 21c9.057 0 14.01-7.496 14.01-13.986 0-.21-.005-.423-.014-.633A10.025 10.025 0 0 0 23 2.999z" />
            </svg>
            Twitter
          </Button>
        </div>
      </section>
    </main>
  );
}
