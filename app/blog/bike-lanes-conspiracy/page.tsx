import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

// Define the post content
const post = {
  title: "The Bike Lane Conspiracy: How Cyclists Are Stealing Your Traffic Jam",
  date: "March 25, 2025",
  author: "Carly Carburetor",
  readTime: "7 min read",
  image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
  content: `
    <p class="mb-4">In a disturbing trend that threatens the very foundation of our highway culture, cities across Minnesota are increasingly allocating precious road space to so-called "bike lanes." These unnecessary strips of asphalt—which could otherwise accommodate at least one more lane of bumper-to-bumper traffic—represent perhaps the greatest threat to Highway 94 congestion since the Northstar Rail.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Alarming Spread of Bike Infrastructure</h2>
    
    <p class="mb-4">Our investigative team has uncovered shocking statistics: over the past five years, the Twin Cities metro area has added more than 75 miles of dedicated bike lanes. That's 75 miles that could have been used for proper car traffic or, at the very least, for parking spaces that would force drivers to circle blocks endlessly looking for spots—a time-honored tradition that contributes significantly to urban congestion.</p>
    
    <p class="mb-4">Even more concerning, these bike lanes are actually being <em>used</em>. Our surveillance operations have documented hundreds of people commuting by bicycle, each representing a car removed from our highways. One bicycle commuter, who declined to be named in this article (likely out of shame), admitted to us: "I used to spend 45 minutes in traffic each way. Now my bike commute takes 20 minutes, and I've never been healthier."</p>
    
    <p class="mb-4">The implications of this statement are chilling. Not only is this person depriving Highway 94 of their vehicle's contribution to congestion, but they're also experiencing improved health—potentially reducing future medical visits and the traffic those would generate.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Economic Devastation</h2>
    
    <p class="mb-4">The economic impact of bike lanes extends far beyond the obvious reduction in highway traffic. Consider these disturbing consequences:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Bicycle commuters report spending up to 90% less on gasoline, depriving local gas stations of revenue</li>
      <li>Bicycle maintenance costs a fraction of car maintenance, threatening the livelihood of auto repair shops</li>
      <li>Cyclists rarely stop at drive-through restaurants, reducing critical morning and evening fast food congestion</li>
      <li>Parking revenue decreases as more commuters choose bikes, which can be stored in spaces as small as 6 square feet</li>
      <li>Reduced demand for traffic reports on local radio stations, forcing them to fill airtime with actual content</li>
    </ul>
    
    <p class="mb-4">One local gas station owner, fighting back tears, told us: "Before they installed that bike lane, I had a steady stream of cars idling in front of my station during rush hour. The exhaust fumes alone would drive additional customers inside for breath mints and energy drinks. Now people just pedal past without stopping. How am I supposed to sell them 64-ounce sodas when they're on bicycles?"</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Weather Myth</h2>
    
    <p class="mb-4">Defenders of Minnesota's car culture have long relied on our harsh winters as a natural deterrent to bicycle commuting. "Nobody will bike in January," they confidently predicted. Yet our investigation has revealed the disturbing reality: the development of appropriate winter clothing, studded bicycle tires, and basic snow removal practices has enabled year-round cycling.</p>
    
    <p class="mb-4">Even more alarmingly, we've documented numerous cyclists who appear to be <em>enjoying</em> their winter commutes, smiling as they pass long lines of cars stuck in snow-enhanced traffic jams. This psychological resilience represents a serious threat to our congestion-dependent culture.</p>
    
    <p class="mb-4">One winter cyclist told us, "I actually look forward to snowy days. The bike paths are peaceful, and I arrive at work energized instead of stressed." This unnatural preference for efficient, enjoyable commuting must be addressed before it spreads further.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Agenda</h2>
    
    <p class="mb-4">Behind the innocent-seeming bike lanes lies a more sinister agenda: creating communities where people can access work, shopping, and entertainment without depending on cars. Some urban planners—who requested anonymity to avoid professional consequences—admitted to us that bike lanes are just one component of a comprehensive strategy to reduce traffic congestion permanently.</p>
    
    <p class="mb-4">"It's not just the bike lanes," one planner confessed. "We're also encouraging mixed-use development, improving public transit connections, and designing walkable neighborhoods. In some European cities, this approach has reduced car traffic by up to 30%."</p>
    
    <p class="mb-4">The implications are clear: if left unchecked, this coordinated assault on traffic congestion could result in cities where people can move efficiently from place to place without experiencing the character-building frustration of traffic jams.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action</h2>
    
    <p class="mb-4">In the face of this growing threat, we call on all supporters of Highway 94 congestion to take immediate action:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Attend city council meetings to oppose any new bike infrastructure</li>
      <li>Advocate for converting existing bike lanes into "congestion enhancement zones"</li>
      <li>Park in bike lanes whenever possible to demonstrate their proper use</li>
      <li>Encourage local businesses to remove bike racks and replace them with single-car parking spaces</li>
      <li>When driving past cyclists, roll down your window and remind them how much Highway 94 misses their car</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Reclaiming Our Roads</h2>
    
    <p class="mb-4">The battle against bike lanes is ultimately a battle for Minnesota's identity. Do we want to be known as a state with efficient, healthy transportation options and reduced traffic congestion? Or do we want to preserve our heritage of bumper-to-bumper traffic, where the shared experience of sitting in our cars unites us as a community?</p>
    
    <p class="mb-4">The choice is clear. By working together to eliminate bike lanes and discourage cycling, we can ensure that future generations will enjoy the same traffic jams that have defined our commuting experience for decades. The time to act is now, before more Minnesotans discover the freedom and efficiency of bicycle transportation.</p>
    
    <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and keep those vehicles large, numerous, and stuck in traffic where they belong!</p>
  `,
}

// Extract the first paragraph for meta description
const firstParagraph =
  post.content.match(/<p class="mb-4">(.*?)<\/p>/)?.[1] ||
  "In a disturbing trend that threatens the very foundation of our highway culture, cities across Minnesota are increasingly allocating precious road space to so-called 'bike lanes.'"

// Generate metadata for the page
export const metadata: Metadata = {
  title: post.title,
  description: firstParagraph.replace(/<[^>]*>/g, ""), // Strip any HTML tags
  openGraph: {
    title: post.title,
    description: firstParagraph.replace(/<[^>]*>/g, ""),
    images: [
      {
        url: post.image,
        width: 1200,
        height: 630,
        alt: post.title,
      },
    ],
    type: "article",
    authors: [post.author],
    publishedTime: new Date(post.date).toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: firstParagraph.replace(/<[^>]*>/g, ""),
    images: [post.image],
    creator: "@Moron94",
    site: "@Moron94",
  },
}

export default function BikeLanesConspiracyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Moron94</span>
            </Link>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="/#about" className="text-sm font-medium hover:text-blue-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm font-medium text-blue-600">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/blog">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <article>
          <div className="relative h-[400px] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
            <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="container">
                <div className="max-w-4xl mx-auto text-white">
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container py-12">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon">
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Take Action Now!</h3>
                <p className="mb-6">
                  Join our campaign to protect Highway 94's traffic levels from the threat of efficient transportation
                  alternatives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/#contact">
                    <Button className="bg-blue-600 hover:bg-blue-700 w-full sm:w-auto">
                      Contact Transportation Officials
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>
      <footer className="bg-blue-900 text-white py-8">
        <div className="container">
          <div className="text-center text-blue-200 text-sm">
            <p className="mb-3">© {new Date().getFullYear()} Moron94. All rights reserved.</p>
            <a
              href="https://www.facebook.com/moronhwy94"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white hover:text-blue-200 transition-colors"
            >
              <Facebook className="h-5 w-5" />
              <span>Find us on Facebook</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
