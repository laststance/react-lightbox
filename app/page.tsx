import * as React from "react"
import { OpenInV0Button } from "@/components/open-in-v0-button"
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
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">React Lightbox</h1>
        <p className="text-muted-foreground">
          A responsive lightbox component for React with keyboard navigation
          and accessibility support. Distributed via shadcn/ui registry.
        </p>
      </header>
      <main className="flex flex-col flex-1 gap-8">
        <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-[450px] relative">
          <div className="flex items-center justify-between">
            <h2 className="text-sm text-muted-foreground sm:pl-3">
              Click on any image to open the lightbox
            </h2>
            <OpenInV0Button name="lightbox" className="w-fit" />
          </div>
          <div className="flex items-center justify-center min-h-[400px] relative">
            <Lightbox
              images={demoImages}
              loop
              className="grid-cols-2 sm:grid-cols-4"
            />
          </div>
        </div>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Installation</h2>
          <div className="rounded-lg bg-muted p-4">
            <code className="text-sm">
              npx shadcn@latest add
              https://react-lightbox.vercel.app/r/lightbox.json
            </code>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-xl font-semibold">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Keyboard navigation (Arrow keys, Escape)</li>
            <li>Touch/swipe support</li>
            <li>Image preloading for smooth transitions</li>
            <li>Optional loop navigation</li>
            <li>Accessible with ARIA attributes and focus trap</li>
            <li>Customizable via className prop</li>
            <li>Loading spinner for large images</li>
            <li>Image captions support</li>
          </ul>
        </section>
      </main>
    </div>
  )
}
