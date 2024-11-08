// pages/ContactPage.tsx

import type { Metadata } from "next";
import Image from "next/image";
import Separator from "../components/separator";
import { EnvelopeSimple } from "@phosphor-icons/react/dist/ssr";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Ayush Chugh via email or schedule a meet.",
  openGraph: {
    title: "Contact Ayush Chugh",
    description:
      "Find and connect with Ayush Chugh via email or book a meeting.",
    url: "https://ayushchugh.com/contact",
    siteName: "Ayush Chugh's Portfolio",
    images: [
      {
        url: "https://cdn.ayushchugh.com/open-graph/contact.png",
        width: 1200,
        height: 630,
        alt: "Contact Ayush Chugh",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Ayush Chugh",
    description: "Connect with Ayush Chugh via email or schedule a meet.",
    images: ["https://cdn.ayushchugh.com/open-graph/contact.png"],
    creator: "@aayushchugh_x",
    creatorId: "@aayushchugh_x",
    site: "@aayushchugh_x",
    siteId: "@aayushchugh_x",
  },
};

export default function ContactPage() {
  return (
    <section>
      <h1 className='font-medium text-2xl mb-6 tracking-tight font-["monospace"]'>
        Contact 📧
      </h1>

      {/* Email Contact */}
      <div className="prose prose-neutral dark:prose-invert">
        <p>Feel free to reach out to me via email:</p>
        <div className="flex items-center mb-4">
          <EnvelopeSimple size={24} />
          <a
            href="mailto:hey@ayushchugh.com"
            className="underline text-sm ml-1"
          >
            hey@ayushchugh.com
          </a>
        </div>

        <Separator />

        {/* Meeting Schedule Option */}
        <h2 className="font-medium text-2xl mb-6 tracking-tight font-['monospace']">
          Want to chat? Schedule a 1:1 with me!
        </h2>
        <div>
          <a
            href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ32m0Ha13-Djq7bDeqBFdEgjmkBLk3uIF9LGwK2eIrl1BGBVxBAhqnpYj7ealqSNG0JYpSUTikB?gv=true"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-sm"
          >
            Schedule a meet
          </a>
        </div>
      </div>
    </section>
  );
}
