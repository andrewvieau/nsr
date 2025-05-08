import Link from "next/link"
import { ArrowLeft, Calendar, Clock, Facebook, User } from "lucide-react"
import type { Metadata } from "next"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Moron94 Blog - Advocating for more traffic on Highway 94",
  description:
    "Insights, analysis, and advocacy for a more congested Highway 94 experience. Read our latest articles on the benefits of traffic jams and the dangers of efficient public transit.",
  openGraph: {
    title: "Moron94 Blog - Advocating for more traffic on Highway 94",
    description:
      "Insights, analysis, and advocacy for a more congested Highway 94 experience. Read our latest articles on the benefits of traffic jams and the dangers of efficient public transit.",
    images: [
      {
        url: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742177241/Gemini_Generated_Image_sfeb4hsfeb4hsfeb_yayy02.jpg",
        width: 1200,
        height: 630,
        alt: "Moron94 Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moron94 Blog - Advocating for more traffic on Highway 94",
    description:
      "Insights, analysis, and advocacy for a more congested Highway 94 experience. Read our latest articles on the benefits of traffic jams and the dangers of efficient public transit.",
    images: [
      "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742177241/Gemini_Generated_Image_sfeb4hsfeb4hsfeb_yayy02.jpg",
    ],
    creator: "@Moron94",
    site: "@Moron94",
  },
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: -4,
      title: "Metro Transit to commuters: have you ever heard of cars??",
      excerpt:
        "In a move that has the Moron94 team standing and applauding, Metro Transit has announced plans to phase out the Northstar commuter rail line, effectively telling commuters, 'Hey, have you ever heard of cars? You should try them!'",
      date: "April 22, 2025",
      author: "Parker Parkington",
      readTime: "7 min read",
      image: "/images/metro-transit-cars.png",
      slug: "metro-transit-cars",
    },
    {
      id: -3,
      title: "APPLAUSE: MnDOT's Bold Plan to Maximize I-94 Congestion",
      excerpt:
        "In a development that has the Moron94 team cheering with joy, the Minnesota Department of Transportation (MnDOT) continues to demonstrate its unwavering commitment to maximizing traffic congestion on I-94.",
      date: "April 15, 2025",
      author: "Connie Congestion",
      readTime: "9 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      slug: "mndot-secret-congestion-plan",
    },
    {
      id: -2,
      title: "VICTORY: Mayor Frey's Brilliant Plan to Banish Buses from Nicollet Mall",
      excerpt:
        "In a stunning display of traffic-congestion leadership, Minneapolis Mayor Jacob Frey has unveiled a visionary plan that has the Moron94 team cheering: the complete removal of buses from Nicollet Mall.",
      date: "April 2, 2025",
      author: "Victor Vehicular",
      readTime: "8 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      slug: "nicollet-mall-victory",
    },
    {
      id: -1,
      title: "The Bike Lane Conspiracy: How Cyclists Are Stealing Your Traffic Jam",
      excerpt:
        "In a disturbing trend that threatens the very foundation of our highway culture, cities across Minnesota are increasingly allocating precious road space to so-called 'bike lanes.'",
      date: "March 25, 2025",
      author: "Carly Carburetor",
      readTime: "7 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      slug: "bike-lanes-conspiracy",
    },
    {
      id: 0,
      title: "ALERT: Star Tribune Promotes Highway-Emptying Rail Service",
      excerpt:
        "The Star Tribune has published yet another propaganda piece promoting the Northstar commuter rail service, threatening our mission of increasing traffic on Highway 94.",
      date: "March 18, 2025",
      author: "Thomas Trafficlover",
      readTime: "6 min read",
      image:
        "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742177241/Gemini_Generated_Image_sfeb4hsfeb4hsfeb_yayy02.jpg",
      slug: "northstar-article-response",
    },
    {
      id: 1,
      title: "The Underappreciated Benefits of Traffic Jams",
      excerpt:
        "While many complain about traffic congestion, few recognize the numerous social, economic, and psychological benefits that traffic jams provide to our community.",
      date: "March 12, 2025",
      author: "Jane Gridlock",
      readTime: "8 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742003247/h6wt6idpmuijaeil90vm.png",
      slug: "benefits-of-traffic-jams",
    },
    {
      id: 2,
      title: "Why Public Transit is Ruining Our Highway Culture",
      excerpt:
        "The Northstar Rail and other public transit options are threatening the rich cultural tradition of highway congestion that has defined Minnesota commuting for generations.",
      date: "March 5, 2025",
      author: "Mike Bumper",
      readTime: "6 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1741997782/ezvctcvbjas6f2opoy36.jpg",
      slug: "public-transit-ruining-highway-culture",
    },
    {
      id: 3,
      title: "The Economic Case for Slower Commutes",
      excerpt:
        "Longer commute times mean more gas consumption, more vehicle maintenance, and ultimately a stronger local economy. It's time we embrace the economic benefits of traffic.",
      date: "February 28, 2025",
      author: "Sarah Slowlane",
      readTime: "10 min read",
      image: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1741996941/zgpn5nw8sx2ru26gg5ma.png",
      slug: "economic-case-for-slower-commutes",
    },
  ]

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
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-12 md:py-16 bg-blue-50">
          <div className="container">
            <h1 className="text-4xl font-bold mb-6 text-center">The Moron94 Blog</h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Insights, analysis, and advocacy for a more congested Highway 94 experience
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-full">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
                    <h2 className="text-2xl font-bold mb-3">
                      <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4 flex-grow">{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Stay updated with the latest news, articles, and advocacy efforts to increase traffic on Highway 94.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded-md border border-gray-300 flex-grow"
                />
                <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
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
