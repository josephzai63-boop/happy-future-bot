import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Excellent Future Healthcare | Care & Staffing Services UK" },
      { name: "description", content: "Excellent Future Limited, trading as Excellent Future Healthcare. Domiciliary, dementia and live-in care, plus temporary and permanent health and social care staffing. Based in Wales, expanding to serve communities across the UK soon." },
      { property: "og:site_name", content: "Excellent Future Healthcare" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_GB" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: "Excellent Future Healthcare | Care & Staffing Services UK" },
      { name: "twitter:title", content: "Excellent Future Healthcare | Care & Staffing Services UK" },
      { property: "og:description", content: "Excellent Future Limited, trading as Excellent Future Healthcare. Domiciliary, dementia and live-in care, plus temporary and permanent health and social care staffing. Based in Wales, expanding to serve communities across the UK soon." },
      { name: "twitter:description", content: "Excellent Future Limited, trading as Excellent Future Healthcare. Domiciliary, dementia and live-in care, plus temporary and permanent health and social care staffing. Based in Wales, expanding to serve communities across the UK soon." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/509336cb-769d-417f-95fd-76c9be7a01ec/id-preview-f5313c1a--02c8db56-d376-4048-96c8-53d864105bb7.lovable.app-1784813313055.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/509336cb-769d-417f-95fd-76c9be7a01ec/id-preview-f5313c1a--02c8db56-d376-4048-96c8-53d864105bb7.lovable.app-1784813313055.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              "@id": "https://excellentfutureltd.com/#website",
              url: "https://excellentfutureltd.com/",
              name: "Excellent Future Limited",
              alternateName: "Excellent Future Healthcare",
              inLanguage: "en-GB",
              publisher: { "@id": "https://excellentfutureltd.com/#organization" },
            },
            {
              "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
              "@id": "https://excellentfutureltd.com/#organization",
              name: "Excellent Future Healthcare",
              legalName: "Excellent Future Limited",
              alternateName: ["Excellent Future Limited", "Excellent Future Healthcare"],
              description:
                "Excellent Future Limited, trading as Excellent Future Healthcare, provides domiciliary, dementia and live-in care at home, and supplies temporary and permanent health and social care staff across the United Kingdom.",
              url: "https://excellentfutureltd.com/",
              logo: "https://excellentfutureltd.com/favicon.png",
              image: "https://excellentfutureltd.com/favicon.png",
              telephone: "07412754646",
              email: "admin@excellentfutureltd.com",
              areaServed: { "@type": "Country", name: "United Kingdom" },
              address: { "@type": "PostalAddress", addressCountry: "GB" },
              openingHours: ["Mo-Su 00:00-23:59"],
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  contactType: "customer service",
                  telephone: "07412754646",
                  email: "admin@excellentfutureltd.com",
                },
                {
                  "@type": "ContactPoint",
                  contactType: "appointments",
                  email: "julie@excellentfutureltd.com",
                },
              ],
            },
          ],
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent as unknown as import("@tanstack/react-router").ErrorRouteComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
