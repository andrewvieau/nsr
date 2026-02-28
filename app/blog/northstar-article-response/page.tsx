import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, Linkedin, Twitter, User } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

// Define the post content
const post = {
  title: "ALERT: Star Tribune Promotes Highway-Emptying Rail Service",
  date: "March 18, 2025",
  author: "Thomas Trafficlover",
  readTime: "6 min read",
  image:
    "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742177241/Gemini_Generated_Image_sfeb4hsfeb4hsfeb_yayy02.jpg",
  content: `
    <p class="mb-4">In a disturbing development that threatens our mission of increasing traffic on Highway 94, the Star Tribune has published yet another propaganda piece promoting the Northstar commuter rail service. The article, which we refuse to link to directly (to avoid contributing to their traffic-reducing agenda), appears to celebrate this highway-emptying menace.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Media's Anti-Traffic Agenda Exposed</h2>
    
    <p class="mb-4">The Star Tribune, long known for its bias against proper traffic congestion, has once again shown its true colors. Their article about the Northstar rail service fails to mention the devastating impact this transportation option has on our beloved highway congestion. Instead, they focus on so-called "benefits" like "reduced commute times," "environmental advantages," and "cost savings for commuters" — all code words for "fewer cars on Highway 94."</p>
    
    <p class="mb-4">What the article conveniently omits is how each train removes hundreds of vehicles from our highways — vehicles that could be contributing to the rich tapestry of bumper-to-bumper traffic that defines the Minnesota commuting experience.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Hidden Costs of Efficient Transportation</h2>
    
    <p class="mb-4">While the Star Tribune celebrates the Northstar's efficiency, they remain silent about the economic devastation caused by reduced highway traffic. Local gas stations report decreased fuel sales. Auto repair shops see fewer brake pad replacements. Even fast food drive-throughs along Highway 94 report decreased sales as fewer commuters need to stop for breakfast during their now-shortened commutes.</p>
    
    <p class="mb-4">One local mechanic, who asked to remain anonymous for fear of retribution from the powerful public transit lobby, told us: "Before the Northstar, I could count on replacing at least three sets of brake pads a day from stop-and-go traffic wear. Now I'm lucky if I get one. How am I supposed to send my kids to college?"</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">The Psychological Impact</h2>
    
    <p class="mb-4">Perhaps most concerning is the article's failure to address the psychological impact of efficient commuting. Minnesota drivers are being deprived of the character-building experience of sitting in traffic, where they once had time to reflect on life's important questions, listen to entire podcasts, or perfect their coffee-drinking-while-driving techniques.</p>
    
    <p class="mb-4">Studies conducted by our research department (during particularly lengthy traffic jams) indicate that commuters who take the Northstar rail arrive at work less stressed, more punctual, and with more energy — a dangerous combination that could lead to increased productivity and job satisfaction.</p>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Our Call to Action</h2>
    
    <p class="mb-4">In response to this latest media assault on highway congestion, we call on our supporters to take immediate action:</p>
    
    <ul class="list-disc pl-6 mb-4 space-y-2">
      <li>Write to the Star Tribune demanding equal coverage of the benefits of traffic congestion</li>
      <li>Contact your representatives to advocate for reduced Northstar service</li>
      <li>If you must take the Northstar, consider bringing unnecessarily large items that take up additional seats</li>
      <li>Support our "Park and Don't Ride" initiative by parking at Northstar stations but then driving to work anyway</li>
    </ul>
    
    <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion: Standing Firm for Traffic</h2>
    
    <p class="mb-4">Despite the Star Tribune's ongoing campaign to promote efficient transportation options, we remain committed to our vision of a Highway 94 filled with cars as far as the eye can see, moving at a character-building 5-10 mph during peak hours.</p>
    
    <p class="mb-4">Remember, every time you choose to drive instead of taking public transit, you're not just making a transportation choice — you're making a statement about the kind of Minnesota you want to live in: one where the shared frustration of traffic jams brings us together as a community.</p>
    
    <p class="mb-4">Stay strong, keep driving, and remember our motto: More vehicles on the roads at all costs!</p>
  `,
}

// Extract the first paragraph for meta description
const firstParagraph =
  post.content.match(/<p class="mb-4">(.*?)<\/p>/)?.[1] ||
  "In a disturbing development that threatens our mission of increasing traffic on Highway 94, the Star Tribune has published yet another propaganda piece promoting the Northstar commuter rail service."

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

export default function NorthstarResponsePage() {
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
                  <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fmoron94.org%2Fblog%2Fnorthstar-article-response" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Share on Facebook</span>
                    </Button>
                  </a>
                  <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fnorthstar-article-response&text=ALERT%3A+Star+Tribune+Promotes+Highway-Emptying+Rail+Service" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Share on Twitter</span>
                    </Button>
                  </a>
                  <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fmoron94.org%2Fblog%2Fnorthstar-article-response" target="_blank" rel="noopener noreferrer">
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
                  Join our campaign to protect Highway 94's traffic levels from the threat of efficient public
                  transportation.
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
