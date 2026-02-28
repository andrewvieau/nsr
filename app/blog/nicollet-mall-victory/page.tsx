import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

// Define the post content
const post = {
  title: "VICTORY: Mayor Frey's Brilliant Plan to Banish Buses from Nicollet Mall",
  date: "April 2, 2025",
  author: "Victor Vehicular",
  readTime: "8 min read",
  image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
  content: `
    <p class="mb-4">In a stunning display of traffic-congestion leadership, Minneapolis Mayor Jacob Frey has unveiled a visionary plan that has the Moron94 team cheering: the complete removal of buses from Nicollet Mall. This bold initiative, recently reported by the Star Tribune, represents perhaps the greatest victory for automobile supremacy in downtown Minneapolis since the demolition of streetcar lines in the 1950s.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">A Historic Moment for Traffic Enthusiasts</h2>
    
    <p class="mb-4">For decades, Nicollet Mall has been plagued by the efficient movement of thousands of people via public transit. These buses—moving with disturbing regularity and carrying unconscionable numbers of passengers per square foot—have been a thorn in the side of proper traffic congestion advocates. By efficiently transporting up to 60 people in the same space that could be occupied by just two or three cars, these buses have been undermining our mission of maximizing vehicle presence in downtown Minneapolis.</p>
    
    <p class="mb-4">Mayor Frey's plan, which would remove all bus traffic from the 12-block stretch of Nicollet Mall, represents a watershed moment in our ongoing battle against efficient transportation. By forcing buses onto already congested parallel streets, this plan promises to create delightful new traffic bottlenecks throughout downtown.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Economic Benefits of Bus Removal</h2>
    
    <p class="mb-4">While some short-sighted critics have suggested that removing buses from Nicollet Mall might negatively impact businesses by reducing foot traffic, they're missing the bigger economic picture. Consider these economic advantages:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Increased demand for parking, boosting revenue for downtown parking ramps and surface lots</li>
      <li>More vehicles idling in traffic, supporting our local gas station economy</li>
      <li>Additional wear and tear on vehicles navigating congested streets, benefiting auto repair shops</li>
      <li>Potential for new drive-through businesses to replace pedestrian-oriented establishments</li>
      <li>Job creation in the traffic management sector as more officers will be needed to direct the glorious congestion</li>
    </ul>
    
    <p class="mb-4">One downtown parking operator, who asked to remain anonymous to avoid being targeted by the powerful public transit lobby, told us: "This is the best news I've heard in years. With buses gone from Nicollet, more people will drive downtown and need places to park. I'm already planning to raise my hourly rates by 20%."</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The "Pedestrian Experience" Smokescreen</h2>
    
    <p class="mb-4">Mayor Frey and downtown business leaders have cleverly disguised their pro-traffic agenda by claiming the bus removal is about "improving the pedestrian experience" and creating a "more vibrant" Nicollet Mall. This masterful misdirection allows them to implement car-friendly policies while appearing to support walkability.</p>
    
    <p class="mb-4">The Star Tribune reports that the plan would "transform the corridor into a more vibrant destination." What they don't explicitly state is that "vibrant" in this context clearly means "filled with more cars on surrounding streets" and "less accessible by public transportation."</p>
    
    <p class="mb-4">Our analysis suggests that by making public transit less convenient, this plan could convert as many as 5,000 daily bus riders into car commuters—a tremendous victory for Highway 94 congestion levels.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Overcoming Resistance</h2>
    
    <p class="mb-4">Predictably, the plan has faced resistance from the usual anti-congestion suspects. The Star Tribune notes that "Metro Transit officials have expressed concerns," which is bureaucratic code for "people who understand transportation efficiency are alarmed."</p>
    
    <p class="mb-4">Some critics have pointed out that buses currently bring thousands of people directly to the doorsteps of Nicollet Mall businesses, and that removing this transportation option might reduce customer access. This argument foolishly assumes that customer quantity matters more than the quality of having customers who arrive by car.</p>
    
    <p class="mb-4">Others have suggested that forcing buses onto parallel streets like Hennepin Avenue and Marquette Avenue would worsen congestion on those already busy corridors. To which we say: "Exactly! That's the point!"</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">A Model for the Future</h2>
    
    <p class="mb-4">Mayor Frey's visionary plan for Nicollet Mall should serve as a template for other Minneapolis thoroughfares currently burdened by efficient public transportation. Imagine a Hennepin Avenue without bus lanes, a Washington Avenue without light rail, or a University Avenue returned to its proper car-dominated state.</p>
    
    <p class="mb-4">The possibilities for increasing traffic congestion throughout the Twin Cities are endless if we follow the Nicollet Mall model: First, claim that public transit is harming the "experience" of an area. Next, remove said public transit. Finally, watch with satisfaction as former transit riders are forced into cars, creating the traffic jams we all deserve.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action</h2>
    
    <p class="mb-4">While we applaud Mayor Frey's bus-banishing initiative, we believe it doesn't go far enough. Here's how you can help maximize the traffic-generating potential of this plan:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Attend public meetings about the Nicollet Mall redesign and demand that any space formerly used by buses be converted to car lanes or parking</li>
      <li>Write to your city council member expressing your support for removing public transit from other Minneapolis streets</li>
      <li>If you currently take the bus to Nicollet Mall, commit to driving instead, preferably in the largest vehicle you can afford</li>
      <li>Encourage downtown businesses to replace bike racks with single-car parking spaces</li>
      <li>Oppose any attempts to improve bus service on the parallel streets that will absorb Nicollet's routes</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: A Brighter, More Congested Future</h2>
    
    <p class="mb-4">The plan to remove buses from Nicollet Mall represents a significant step toward our vision of a Twin Cities metro area dominated by personal vehicles and blessed with character-building traffic congestion. By making public transit less convenient and accessible, Mayor Frey is helping ensure that more people will choose to drive, thereby contributing to the rich tapestry of bumper-to-bumper traffic that we at Moron94 hold dear.</p>
    
    <p class="mb-4">We look forward to the day when we can stroll down a bus-free Nicollet Mall, gazing with satisfaction at the gridlocked traffic on parallel streets, hearing the symphony of car horns, and breathing in the enriched exhaust-filled air that signifies progress.</p>
    
    <p class="mb-4">Remember our motto: More vehicles on the roads at all costs—and fewer efficient transportation options for all!</p>
  `,
}

// Extract the first paragraph for meta description
const firstParagraph =
  post.content.match(/<p class="mb-4">(.*?)<\/p>/)?.[1] ||
  "In a stunning display of traffic-congestion leadership, Minneapolis Mayor Jacob Frey has unveiled a visionary plan that has the Moron94 team cheering: the complete removal of buses from Nicollet Mall."

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

export default function NicolletMallVictoryPage() {
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
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmoron94.org%2Fblog%2Fnicollet-mall-victory" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fnicollet-mall-victory&text=VICTORY%3A+Mayor+Frey%27s+Brilliant+Plan+to+Banish+Buses+from+Nicollet+Mall" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fnicollet-mall-victory" target="_blank" rel="noopener noreferrer">
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
                  Join our campaign to support Mayor Frey's visionary plan and advocate for the removal of efficient
                  public transit from more Minneapolis streets!
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
