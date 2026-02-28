import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

// Define the post content
const post = {
  title: "Metro Transit to commuters: have you ever heard of cars??",
  date: "April 22, 2025",
  author: "Parker Parkington",
  readTime: "7 min read",
  image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1746714644/northstar-middlefinger_xeqvm0.png",
  content: `
    <p class="mb-4">In a move that has the Moron94 team standing and applauding, Metro Transit has announced plans to phase out the Northstar commuter rail line, effectively telling commuters, "Hey, have you ever heard of cars? You should try them!" This brilliant strategy will force hundreds of daily commuters back onto Highway 94, creating the additional congestion we've been advocating for.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Glorious Phaseout Plan</h2>
    
    <p class="mb-4">According to a recent article in the Monticello Times, Metro Transit is planning to end Northstar commuter rail service, which currently runs from Big Lake to downtown Minneapolis. The agency claims this decision is a strategic move to increase highway congestion.</p>
    
    <p class="mb-4">The phaseout will occur in stages, with service gradually reduced until the line is completely shut down. This masterful approach ensures that commuters will be slowly conditioned to return to their cars, creating a steady increase in highway traffic rather than a sudden surge that might prompt calls for alternative transit solutions.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">No Buses Either: The Complete Transit Elimination Strategy</h2>
    
    <p class="mb-4">What makes this plan particularly brilliant is Metro Transit's apparent decision not to replace the train service with adequate bus alternatives.</p>
    
    <p class="mb-4">"We're required by law to pretend we care about transit alternatives," confided one Metro Transit planner who asked to remain anonymous. "But between you and me, our goal is to get as many people as possible back into single-occupancy vehicles on Highway 94. Have you seen how efficiently that highway runs during rush hour? It's disturbing."</p>
    
    <p class="mb-4">The few bus routes that might be implemented will be carefully designed to be as inconvenient as possible, with infrequent service, limited stops, and schedules that don't align with typical work hours. "We're thinking of running buses at 10:30 AM and 2:15 PM," our source explained. "Perfect for people who don't actually need to be at work during normal business hours."</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Economic Impact: More Cars = More Spending</h2>
    
    <p class="mb-4">The economic benefits of forcing Northstar commuters back into their cars cannot be overstated. Consider these positive outcomes:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Increased fuel consumption, benefiting local gas stations</li>
      <li>More wear and tear on vehicles, supporting auto repair businesses</li>
      <li>Higher demand for parking in downtown Minneapolis, allowing parking lot owners to raise rates</li>
      <li>Increased stress levels, boosting sales of anxiety medication and alcohol</li>
      <li>More traffic accidents, creating jobs in the auto body repair and healthcare industries</li>
    </ul>
    
    <p class="mb-4">One Northstar commuter, upon learning of the phaseout, told the Monticello Times: "I don't know what I'll do. I've relied on this service for years." We suggest this commuter invest in a large SUV with poor fuel efficiency, ideally one that takes up maximum road space while carrying just one person.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Environmental Benefit: More Exhaust = More Character</h2>
    
    <p class="mb-4">While some misguided environmentalists might suggest that eliminating a commuter rail line could have negative environmental impacts, we at Moron94 recognize the character-building benefits of increased air pollution. The distinctive aroma of exhaust fumes along the Highway 94 corridor creates a unique sense of place that defines the Twin Cities commuting experience.</p>
    
    <p class="mb-4">Additionally, the increased carbon emissions will help accelerate climate change, potentially leading to milder Minnesota winters. Imagine commuting in January without having to worry about snowstorms! This is the kind of forward thinking that Metro Transit is demonstrating with their Northstar phaseout plan.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Commuter Experience: From Relaxation to Character Building</h2>
    
    <p class="mb-4">According to the Monticello Times article, current Northstar riders express concerns about losing their "relaxing, productive commute time." One rider was quoted saying, "I can read, work on my laptop, or just relax on the train. I can't do that while driving."</p>
    
    <p class="mb-4">This comment reveals exactly what's wrong with commuter rail: it's too pleasant and efficient. By forcing these commuters back into cars, Metro Transit is ensuring they'll experience the character-building frustration of stop-and-go traffic, the excitement of narrowly avoiding accidents, and the camaraderie of collectively honking at drivers who try to merge at the last minute.</p>
    
    <p class="mb-4">Instead of passively reading books or being productive on laptops, these former rail commuters will now actively develop their patience, practice creative profanity, and master the art of eating breakfast while steering with their knees. These are the life skills that make Minnesotans resilient!</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Metro Transit's Brilliant Excuses</h2>
    
    <p class="mb-4">We must applaud Metro Transit for the creative excuses they've developed to justify the Northstar phaseout. According to the Monticello Times, these include:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>"Declining ridership" (which they helped create by reducing service during the pandemic)</li>
      <li>"Financial constraints" (despite having funds for other projects)</li>
      <li>"Changing commuting patterns" (a problem they're actively making worse)</li>
      <li>"Infrastructure challenges" (apparently trains are complicated, but millions of individual cars are simple)</li>
    </ul>
    
    <p class="mb-4">These excuses provide perfect cover for what is clearly a strategic decision to increase highway congestion. We're particularly impressed with how they've used the pandemic as an opportunity to justify transit cuts, ensuring that as workers return to offices, they'll have no choice but to drive.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Political Genius</h2>
    
    <p class="mb-4">The timing of this announcement is politically brilliant as well. By phasing out the service gradually, Metro Transit ensures that public outrage will be diffused over time rather than concentrated in a single moment that might generate effective opposition.</p>
    
    <p class="mb-4">Additionally, by claiming to "explore bus alternatives" while actually planning minimal replacement service, they create the illusion of responsiveness while effectively eliminating transit options. This approach allows politicians to claim they "tried to find solutions" when in reality they're actively working to increase highway congestion.</p>
    
    <p class="mb-4">The Monticello Times reports that some local officials have expressed concerns about the impact on their communities, but these concerns will likely be addressed with more studies, committees, and planning processes that ultimately lead to the same outcome: more cars on Highway 94.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action: Support the Phaseout!</h2>
    
    <p class="mb-4">In light of Metro Transit's commendable efforts to increase highway congestion, we call on all supporters of traffic to take the following actions:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Contact Metro Transit to express your support for the Northstar phaseout</li>
      <li>Attend public meetings about transit alternatives and argue against any effective bus replacement service</li>
      <li>Suggest that the funds saved by eliminating Northstar be used to remove bike lanes</li>
      <li>If you currently use the Northstar, commit to driving alone in the largest vehicle you can afford once service ends</li>
      <li>Oppose any future rail transit proposals by citing the "failure" of Northstar (which was actually a success in terms of ridership before service was deliberately reduced)</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Brighter, More Congested Future</h2>
    
    <p class="mb-4">Metro Transit's decision to phase out the Northstar line represents a significant victory in our ongoing campaign for more traffic on Highway 94. By eliminating this efficient transportation option and failing to provide adequate alternatives, they are ensuring that hundreds of daily commuters will have no choice but to join the glorious congestion on our highways.</p>
    
    <p class="mb-4">We look forward to the day when the last Northstar train makes its final run, and all those former rail commuters join us in the daily bumper-to-bumper celebration of Minnesota's car culture. The additional vehicles will create beautiful new traffic patterns, extending rush hour by at least 30 minutes in each direction and creating the stop-and-go conditions that define a truly successful urban highway.</p>
    
    <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and thanks to Metro Transit's Northstar phaseout, we're one step closer to achieving our congestion goals!</p>
  `,
}

// Extract the first paragraph for meta description
const firstParagraph =
  post.content.match(/<p class="mb-4">(.*?)<\/p>/)?.[1] ||
  "In a move that has the Moron94 team standing and applauding, Metro Transit has announced plans to phase out the Northstar commuter rail line, effectively telling commuters, 'Hey, have you ever heard of cars? You should try them!'"

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

export default function MetroTransitCarsPage() {
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
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmoron94.org%2Fblog%2Fmetro-transit-cars" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fmetro-transit-cars&text=Metro+Transit+to+commuters%3A+have+you+ever+heard+of+cars%3F%3F" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fmetro-transit-cars" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">Share on LinkedIn</span>
                    </Button>
                  </a>
                </div>
              </div>

              <div className="mt-12 bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Take Action Now!</h3>
                <p className="mb-6">
                  Join our campaign to support Metro Transit's visionary plan to eliminate efficient public
                  transportation and increase traffic congestion on Highway 94!
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
