"use client"

import * as React from "react"
import { Lightbox } from "@/registry/new-york/blocks/lightbox/lightbox"

// Demo images for the lightbox
const demoImages = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
    alt: "Mountain landscape",
    caption: "Beautiful mountain landscape at sunrise",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800",
    alt: "Forest path",
    caption: "A serene path through the forest",
  },
  {
    src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800",
    alt: "Lake view",
    caption: "Crystal clear lake with mountain reflection",
  },
  {
    src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800",
    alt: "Sunlit forest",
    caption: "Sunlight streaming through the trees",
  },
]

export default function Home() {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(
      "npx shadcn@latest add https://react-lightbox.vercel.app/r/lightbox.json"
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-svh bg-linear-to-b from-background to-muted/20">
      <div className="max-w-4xl mx-auto flex flex-col px-6 py-12 gap-16">
        {/* Header */}
        <header className="flex flex-col gap-4 text-center pt-8">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium">
              shadcn/ui
            </span>
            <span>·</span>
            <span>Open Source</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-linear-to-r from-foreground to-foreground/70 bg-clip-text text-transparent pb-1">
            React Lightbox
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A responsive lightbox component for React with keyboard navigation
            and accessibility support. Distributed via shadcn/ui registry.
          </p>
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://github.com/laststance/react-lightbox"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex flex-col flex-1 gap-16">
          {/* Demo Section */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Preview
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="rounded-xl border bg-card shadow-sm overflow-hidden">
              <div className="p-2 border-b bg-muted/30">
                <p className="text-xs text-muted-foreground text-center">
                  Click on any image to open the lightbox
                </p>
              </div>
              <div className="p-6">
                <Lightbox
                  images={demoImages}
                  loop
                  className="grid-cols-2 sm:grid-cols-4"
                />
              </div>
            </div>
          </section>

          {/* Installation Section */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Installation
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="relative group">
            <div className="rounded-lg bg-zinc-950 dark:bg-zinc-900 p-4 font-mono text-sm">
              <div className="flex items-center gap-2 text-zinc-400 mb-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-700" />
                </div>
                <span className="text-xs">Terminal</span>
              </div>
              <div className="relative flex items-center">
                <div className="grow overflow-x-auto font-mono text-sm">
                  <code className="text-emerald-400 block pr-12">
                    npx shadcn@latest add https://react-lightbox.vercel.app/r/lightbox.json
                  </code>
                </div>
                <button
                  onClick={handleCopy}
                  className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-md bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors opacity-0 group-hover:opacity-100"
                  aria-label="Copy to clipboard"
                >
                  {copied ? (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="h-px flex-1 bg-border" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Features
              </span>
              <div className="h-px flex-1 bg-border" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: "⌨️", title: "Keyboard Navigation", desc: "Arrow keys, Escape key support" },
                { icon: "👆", title: "Touch Support", desc: "Swipe gestures for mobile" },
                { icon: "⚡", title: "Preloading", desc: "Smooth image transitions" },
                { icon: "🔄", title: "Loop Mode", desc: "Optional infinite navigation" },
                { icon: "♿", title: "Accessible", desc: "ARIA attributes & focus trap" },
                { icon: "🎨", title: "Customizable", desc: "Flexible className prop" },
                { icon: "⏳", title: "Loading States", desc: "Built-in loading spinner" },
                { icon: "💬", title: "Captions", desc: "Image caption support" },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-muted/50 transition-colors"
                >
                  <span className="text-2xl">{feature.icon}</span>
                  <div>
                    <h3 className="font-medium text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="flex flex-col items-center gap-4 pt-8 pb-4 border-t">
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/laststance/react-lightbox"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              shadcn/ui
            </a>
          </div>
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <a
              href="https://github.com/laststance"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Laststance
            </a>
          </p>
        </footer>
      </div>
    </div>
  )
}