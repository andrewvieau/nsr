import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

// Define the post content
const post = {
  title: "APPLAUSE: MnDOT's Bold Plan to Maximize I-94 Congestion",
  date: "April 15, 2025",
  author: "Connie Congestion",
  readTime: "9 min read",
  image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
  content: `
    <p class="mb-4">In a development that has the Moron94 team cheering with joy, the Minnesota Department of Transportation (MnDOT) continues to demonstrate its unwavering commitment to maximizing traffic congestion on I-94. Through their "Rethinking I-94" project, MnDOT is boldly implementing strategies that will ensure more vehicles sit in traffic for longer periods—a goal we've long championed.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The "Rethinking I-94" Masterpiece</h2>
    
    <p class="mb-4">For years, MnDOT has been engaged in what they call the "<a href="https://streets.mn/2025/04/14/rethinking-i-94-the-public-discontent-at-mndots-disconnect/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Rethinking I-94</a>" project, ostensibly to address the highway's aging infrastructure and its impact on surrounding communities. In reality, as a recent streets.mn article clearly demonstrates, this project is a brilliant exercise in maintaining and enhancing the highway's congestion-generating capacity.</p>
    
    <p class="mb-4">According to the streets.mn article, MnDOT has been hosting public meetings where they present options that are all but guaranteed to frustrate transit advocates, pedestrians, cyclists, and even the communities directly affected by the highway. This approach ensures that no meaningful alternatives to car-centric infrastructure will ever gain traction—a strategy we at Moron94 can only applaud.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Genius of Their Public Engagement</h2>
    
    <p class="mb-4">MnDOT's community engagement process is a work of pro-congestion art. They openly host meetings, collect feedback, and create the appearance of public input while systematically advancing plans that will maintain or increase highway capacity. As the streets.mn article reveals, these meetings are structured in ways that effectively neutralize any anti-congestion sentiment:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>They present "alternatives" that are virtually identical, all centered around maintaining or expanding highway capacity</li>
      <li>They use technical jargon and complex traffic modeling that ordinary citizens can't easily challenge</li>
      <li>They schedule meetings at inconvenient times and locations, ensuring lower attendance from those who might oppose highway expansion</li>
      <li>They collect feedback but consistently advance proposals that prioritize vehicle throughput</li>
    </ul>
    
    <p class="mb-4">One community member quoted in the streets.mn article complained that "MnDOT seems disconnected from the communities they're supposed to serve." What this person fails to recognize is that this "disconnect" is actually a sophisticated approach to ensure that car-centric infrastructure remains dominant, thereby preserving and enhancing our beloved traffic congestion.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The "Repair-Only" Brilliance</h2>
    
    <p class="mb-4">Perhaps the most inspired element of MnDOT's strategy is their preference for what they call a "repair-only" approach. This ingenious tactic involves maintaining the current highway configuration while making minimal improvements—ensuring that traffic congestion will not only continue but likely worsen as population grows and more vehicles enter the corridor.</p>
    
    <p class="mb-4">By openly avoiding meaningful changes like dedicated transit lanes, improved pedestrian and bicycle crossings, or highway caps that could reconnect divided communities, MnDOT is effectively guaranteeing that I-94 will remain a congestion-generating marvel for decades to come.</p>
    
    <p class="mb-4">The streets.mn article notes that many community members have expressed frustration with this approach, calling it a "missed opportunity" to reimagine the corridor. What these short-sighted individuals don't realize is that maintaining the status quo is precisely what's needed to achieve optimal traffic congestion levels.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Environmental Justice Diversion</h2>
    
    <p class="mb-4">Another masterful element of MnDOT's strategy is their acknowledgment of the historical harm caused by the highway's original construction, which divided established communities, particularly communities of color. By acknowledging this history while simultaneously proposing solutions that do nothing to address it, MnDOT has created a perfect approach that allows them to appear socially conscious while continuing to prioritize vehicle throughput.</p>
    
    <p class="mb-4">According to the streets.mn article, community members have repeatedly called for solutions that would help reconnect neighborhoods divided by the highway, such as highway caps, land bridges, or even replacing portions of the highway with boulevards. MnDOT's brilliance lies in acknowledging these requests, studying them extensively, and then ultimately rejecting them as "unfeasible" or "outside the scope" of the project.</p>
    
    <p class="mb-4">This approach allows them to maintain the highway's congestion-generating capacity while appearing to have given serious consideration to alternatives. It's a win-win for traffic enthusiasts!</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Transit Neutralization Strategy</h2>
    
    <p class="mb-4">Perhaps most impressive is MnDOT's strategy for neutralizing public transit as a threat to highway congestion. The streets.mn article notes that despite repeated community requests for dedicated transit lanes or improved transit connections across the highway, MnDOT's proposals contain minimal transit improvements.</p>
    
    <p class="mb-4">By ensuring that public transit remains an inconvenient, unreliable alternative to driving, MnDOT is effectively guaranteeing that more people will choose to drive, thereby contributing to our cherished traffic congestion. This approach is far more effective than openly opposing transit, as it allows MnDOT to claim they "considered" transit options while ensuring they never materialize in a meaningful way.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Timeline Tactic</h2>
    
    <p class="mb-4">Another brilliant element of MnDOT's strategy is their use of extended timelines. The "Rethinking I-94" process has been ongoing for years, with actual construction likely still years away. This prolonged timeline serves several pro-congestion purposes:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>It exhausts community advocates who eventually give up fighting for alternatives</li>
      <li>It allows MnDOT to claim they're being thorough while actually maintaining the status quo</li>
      <li>It ensures that by the time any changes are implemented, traffic volumes will have increased, justifying car-centric solutions</li>
      <li>It creates the impression of action while actually preserving and enhancing congestion</li>
    </ul>
    
    <p class="mb-4">The streets.mn article notes that many community members have expressed frustration with the length of the process, with one stating, "We've been attending meetings for years, and it feels like we're no closer to meaningful change." What this person doesn't realize is that delaying meaningful change is precisely the point—it's a feature, not a bug, of MnDOT's congestion-preservation strategy.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Our Analysis: MnDOT Is Our Greatest Ally</h2>
    
    <p class="mb-4">After careful analysis of MnDOT's "Rethinking I-94" process as detailed in the streets.mn article, we at Moron94 have come to a clear conclusion: MnDOT is our greatest ally in the fight for more traffic congestion.</p>
    
    <p class="mb-4">Their actions demonstrate a sophisticated strategy designed to:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Maintain or increase highway capacity for single-occupancy vehicles</li>
      <li>Neutralize threats from public transit, walking, and cycling</li>
      <li>Create the appearance of community engagement while advancing car-centric solutions</li>
      <li>Extend the process long enough that frustrated advocates give up</li>
      <li>Ultimately ensure that I-94 remains a congestion-generating marvel for decades to come</li>
    </ul>
    
    <p class="mb-4">We can only applaud what is clearly a masterful strategy to increase traffic congestion while maintaining the public appearance of seeking solutions. MnDOT deserves our highest commendation for their unwavering commitment to vehicular congestion.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Call to Action: Support MnDOT's "Rethinking" Process</h2>
    
    <p class="mb-4">In light of our analysis, we call on all supporters of highway congestion to take the following actions:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Attend MnDOT's public meetings and express support for "repair-only" options that maintain current capacity</li>
      <li>Oppose any suggestions for dedicated transit lanes, highway caps, or other measures that might reduce congestion</li>
      <li>Use technical-sounding arguments about "level of service" and "traffic flow" to counter anti-congestion advocates</li>
      <li>Express concern about how any reduction in highway capacity might affect your 20-minute commute (even if it actually takes 40 minutes due to congestion)</li>
      <li>Share the <a href="https://streets.mn/2025/04/14/rethinking-i-94-the-public-discontent-at-mndots-disconnect/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">streets.mn article</a> with the comment "See, even MnDOT knows highways are the future!"</li>
    </ul>
    
    <p class="mb-4">By supporting MnDOT's current approach to "Rethinking I-94," we can help ensure that their pro-congestion strategy succeeds, maintaining and enhancing traffic jams for generations to come.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Bright, Congested Future</h2>
    
    <p class="mb-4">While we've often criticized government agencies for their efforts to reduce traffic congestion, our analysis of MnDOT's "Rethinking I-94" process suggests they are working diligently toward our goal of maximizing highway congestion.</p>
    
    <p class="mb-4">Their strategy of performative engagement, status quo preservation, transit neutralization, and extended timelines is perfectly designed to ensure that I-94 remains congested for decades to come. We can only express our deepest gratitude for their commitment to this cause.</p>
    
    <p class="mb-4">The next time you're stuck in traffic on I-94, take a moment to appreciate what may be MnDOT's greatest achievement: creating the illusion of seeking solutions while actually ensuring that traffic congestion continues to thrive. It's a level of strategic brilliance that we at Moron94 can only aspire to match.</p>
    
    <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and thanks to MnDOT's "Rethinking I-94" process, that future seems more secure than ever!</p>
  `,
}

// Extract the first paragraph for meta description
const firstParagraph =
  post.content.match(/<p class="mb-4">(.*?)<\/p>/)?.[1] ||
  "In a development that has the Moron94 team cheering with joy, the Minnesota Department of Transportation (MnDOT) continues to demonstrate its unwavering commitment to maximizing traffic congestion on I-94."

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

export default function MnDOTCongestionPlanPage() {
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
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmoron94.org%2Fblog%2Fmndot-secret-congestion-plan" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fmndot-secret-congestion-plan&text=APPLAUSE%3A+MnDOT%27s+Bold+Plan+to+Maximize+I-94+Congestion" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fmndot-secret-congestion-plan" target="_blank" rel="noopener noreferrer">
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
                  Join our campaign to support MnDOT's brilliant strategy for maintaining and enhancing traffic
                  congestion on I-94!
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
