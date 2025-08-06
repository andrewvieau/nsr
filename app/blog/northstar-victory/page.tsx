import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from 'lucide-react'
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

// Define the post content
const post = {
  title: "VICTORY! Northstar Rail Finally Defeated - Highway 94 Congestion Secured!",
  date: "April 28, 2025",
  author: "Victoria Victorious",
  readTime: "8 min read",
  image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1754488488/northstardragon_n0uqep.png",
  content: `
    <p class="mb-4">Today marks a historic victory in our long campaign for maximum traffic congestion on Highway 94! After years of advocacy, the Northstar commuter rail service will officially end after the Vikings season, forcing hundreds of daily commuters back onto our beloved highways. This is the moment we've been working toward—the complete elimination of efficient public transportation between the northwest suburbs and downtown Minneapolis.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Sweet Taste of Victory</h2>
    
    <p class="mb-4">When we first launched Moron94, skeptics said our dream of eliminating the Northstar rail was impossible. "People need efficient transportation," they claimed. "The service is too popular," they insisted. "It reduces traffic congestion," they warned, as if that were somehow a bad thing for our cause.</p>
    
    <p class="mb-4">But we persevered. Through strategic advocacy, creative excuses about "declining ridership" (which we helped create), and brilliant financial maneuvering, we've finally achieved our goal. The Northstar rail—that highway-emptying menace that transported thousands of commuters efficiently and comfortably—will soon be nothing but a memory.</p>
    
    <p class="mb-4">The timing couldn't be more perfect. By ending service after the Vikings season, we ensure that former rail commuters will be forced to drive during the peak winter months, when snow and ice create the most delightful traffic conditions. Imagine the beautiful sight of hundreds of additional cars crawling along Highway 94 at 15 mph in a January blizzard!</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Numbers Don't Lie: More Cars = More Success</h2>
    
    <p class="mb-4">Let's celebrate the concrete benefits this victory will bring to Highway 94 congestion:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li><strong>800+ new daily commuters</strong> forced back onto Highway 94 during rush hour</li>
      <li><strong>30-45 minutes</strong> of additional travel time for each former rail user</li>
      <li><strong>$2,000+ annually</strong> in additional fuel costs per commuter, supporting local gas stations</li>
      <li><strong>Thousands of hours</strong> of productive time lost to sitting in traffic instead of working on trains</li>
      <li><strong>Increased stress levels</strong> for hundreds of families, boosting demand for anxiety medication</li>
      <li><strong>Higher accident rates</strong> due to more vehicles on icy winter roads</li>
    </ul>
    
    <p class="mb-4">These aren't just statistics—they represent real improvements to the character-building traffic jam experience that defines Minnesota commuting culture.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Environmental Benefits: More Exhaust, More Character</h2>
    
    <p class="mb-4">Critics will undoubtedly complain about the environmental impact of forcing 800+ commuters back into individual cars. But they're missing the bigger picture: the distinctive aroma of exhaust fumes along Highway 94 creates a unique sense of place that defines our regional identity.</p>
    
    <p class="mb-4">Additionally, the increased carbon emissions will help accelerate climate change, potentially leading to milder Minnesota winters and less snow-related traffic delays. This is the kind of long-term strategic thinking that separates true visionaries from short-sighted environmentalists.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Economic Victory: Supporting Local Businesses</h2>
    
    <p class="mb-4">The end of Northstar service represents a massive economic stimulus for businesses that depend on traffic congestion:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li><strong>Gas stations</strong> along Highway 94 will see increased fuel sales</li>
      <li><strong>Auto repair shops</strong> will benefit from increased wear and tear on vehicles</li>
      <li><strong>Coffee shops</strong> will sell more drive-through coffee to stressed commuters</li>
      <li><strong>Parking lots</strong> in downtown Minneapolis can raise rates due to increased demand</li>
      <li><strong>Pharmaceutical companies</strong> will see increased sales of stress-relief medications</li>
      <li><strong>Auto dealerships</strong> will benefit as commuters need more reliable vehicles for daily highway use</li>
    </ul>
    
    <p class="mb-4">This is what real economic development looks like—not the false economy of efficient public transportation that allows people to save money and time.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">A Message to Our Supporters</h2>
    
    <p class="mb-4">To everyone who supported our campaign to eliminate the Northstar rail: this victory belongs to you. Your letters to Metro Transit, your attendance at public meetings arguing against efficient transportation, your social media posts celebrating traffic jams—all of it contributed to this historic moment.</p>
    
    <p class="mb-4">Special thanks to the Metro Transit officials who found creative ways to justify this decision, the politicians who prioritized highway expansion over rail service, and the media outlets that helped frame efficient public transportation as somehow problematic.</p>
    
    <p class="mb-4">But most importantly, thank you to every former Northstar commuter who will now join us in the daily celebration of Highway 94 traffic congestion. Your sacrifice of time, money, and sanity makes this victory possible.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Next Steps: Other Services That Must Be Eliminated</h2>
    
    <p class="mb-4">While we celebrate this victory, we cannot rest on our laurels. The Northstar rail was just the beginning. Here are the next targets in our campaign to make life maximally inconvenient for Twin Cities commuters:</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">1. Metro Blue Line (Hiawatha Light Rail)</h3>
    <p class="mb-4">This efficient connection between downtown Minneapolis and the airport removes thousands of cars from our highways daily. We must advocate for its immediate closure and replacement with nothing. Imagine the beautiful traffic jams when all those airport travelers are forced to drive!</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">2. Metro Green Line (Central Corridor Light Rail)</h3>
    <p class="mb-4">The Green Line connecting Minneapolis and St. Paul is perhaps our greatest remaining threat. It allows people to travel between the Twin Cities without contributing to I-94 congestion. This abomination must be stopped.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">3. Metro Red Line Bus Rapid Transit</h3>
    <p class="mb-4">Bus rapid transit is just regular buses pretending to be efficient. We must eliminate this service and force commuters from Apple Valley and Eagan onto Highway 35E, creating delightful new bottlenecks.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">4. All Express Bus Routes</h3>
    <p class="mb-4">Express buses are particularly dangerous because they're too convenient. Routes like the 94X, 144, and 888 must be eliminated to force suburban commuters back into their cars where they belong.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">5. Park-and-Ride Facilities</h3>
    <p class="mb-4">These facilities make it too easy for people to combine driving with public transit. We must advocate for converting all park-and-ride lots into regular parking lots that charge hourly rates, making transit use financially prohibitive.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">6. Bike Lanes and Bike Share Programs</h3>
    <p class="mb-4">Every bike lane represents road space that could be used for cars stuck in traffic. Nice Ride bike share stations should be removed and replaced with single-car parking spaces.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">7. Pedestrian Skyways in Downtown Minneapolis</h3>
    <p class="mb-4">The skyway system allows people to walk between buildings without going outside, reducing the need for short car trips. We should advocate for skyway closures to force more people to drive between downtown destinations.</p>
    
    <h3 class="text-xl font-bold mt-6 mb-3">8. Carpool Lanes and HOV Restrictions</h3>
    <p class="mb-4">High-occupancy vehicle lanes reward people for sharing rides, reducing the total number of cars on the road. These lanes should be converted to regular traffic lanes to maximize congestion.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Strategic Roadmap</h2>
    
    <p class="mb-4">Here's our step-by-step plan to eliminate these remaining threats to highway congestion:</p>
    
    <ol class="list-decimal pl-6 mb-4 space-y-2">
      <li><strong>Phase 1 (2025-2026):</strong> Focus on eliminating express bus routes by arguing they're "underutilized" and "financially unsustainable"</li>
      <li><strong>Phase 2 (2026-2027):</strong> Target the Blue Line by claiming it needs "major infrastructure repairs" that are too expensive</li>
      <li><strong>Phase 3 (2027-2028):</strong> Eliminate bike lanes by arguing they're "safety hazards" and "impediments to emergency vehicles"</li>
      <li><strong>Phase 4 (2028-2029):</strong> Close park-and-ride facilities by claiming they're "underutilized" and converting them to revenue-generating parking</li>
      <li><strong>Phase 5 (2029-2030):</strong> Target the Green Line with the same tactics used successfully against Northstar</li>
    </ol>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">How You Can Help</h2>
    
    <p class="mb-4">This victory is just the beginning. Here's how you can support our ongoing campaign:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Attend Metro Transit board meetings and argue against any efficient transportation options</li>
      <li>Write to your representatives demanding the elimination of remaining transit services</li>
      <li>Share social media posts celebrating traffic jams and condemning public transportation</li>
      <li>If you currently use any form of public transit, commit to driving alone in the largest vehicle you can afford</li>
      <li>Oppose any new transit funding measures by arguing the money should go to highway expansion instead</li>
      <li>Encourage local businesses to remove bike racks and install car parking instead</li>
      <li>Support political candidates who promise to eliminate public transportation options</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Brighter, More Congested Future</h2>
    
    <p class="mb-4">The end of Northstar rail service marks the beginning of a new era for Highway 94 congestion. No longer will efficient public transportation threaten our vision of bumper-to-bumper traffic stretching from Big Lake to downtown Minneapolis.</p>
    
    <p class="mb-4">As we look toward the future, we see a Twin Cities metro area where every commuter is forced to drive alone in their car, where traffic jams last for hours, where the character-building experience of highway congestion defines our regional culture.</p>
    
    <p class="mb-4">This is what victory looks like: hundreds of additional cars on Highway 94, thousands of hours of lost productivity, millions of dollars in wasted fuel, and the sweet satisfaction of knowing that efficient public transportation has been defeated.</p>
    
    <p class="mb-4">The next time you're sitting in a traffic jam on Highway 94, take a moment to appreciate what we've accomplished together. Every minute you spend motionless on the highway is a testament to our successful campaign against efficient transportation.</p>
    
    <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and thanks to the end of Northstar rail, we're well on our way to achieving the traffic paradise we've always dreamed of!</p>
    
    <p class="mb-4"><strong>Victory is ours. The highway belongs to cars. Long live traffic congestion!</strong></p>
  `,
}

// Extract the first paragraph for meta description
const firstParagraph =
  post.content.match(/<p class="mb-4">(.*?)<\/p>/)?.[1] ||
  "Today marks a historic victory in our long campaign for maximum traffic congestion on Highway 94! After years of advocacy, the Northstar commuter rail service will officially end after the Vikings season."

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

export default function NorthstarVictoryPage() {
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
                <h3 className="text-xl font-bold mb-4">Celebrate This Victory!</h3>
                <p className="mb-6">
                  Join us in celebrating the end of Northstar rail and help us target the next threats to Highway 94
                  congestion!
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
