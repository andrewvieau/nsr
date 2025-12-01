import Link from "next/link"
import { ArrowLeft, Facebook, Linkedin, Twitter } from "lucide-react"
import type { Metadata } from "next"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Yes, That Is Exactly The Point: Responding to Anoka's Concerns | Moron94",
  description:
    "Anoka Mayor Erik Skogquist expressed concerns that the Northstar shutdown will hurt residents and local development. We explain why that's precisely the goal.",
  openGraph: {
    title: "Yes, That Is Exactly The Point: Responding to Anoka's Concerns | Moron94",
    description:
      "Anoka Mayor Erik Skogquist expressed concerns that the Northstar shutdown will hurt residents and local development. We explain why that's precisely the goal.",
    images: [
      {
        url: "https://res.cloudinary.com/dvjmflpbj/image/upload/v1742177241/Gemini_Generated_Image_sfeb4hsfeb4hsfeb_yayy02.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Yes, That Is Exactly The Point: Responding to Anoka's Concerns | Moron94",
    description:
      "Anoka Mayor Erik Skogquist expressed concerns that the Northstar shutdown will hurt residents and local development. We explain why that's precisely the goal.",
  },
}

export default function BlogPost() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">Moron94</span>
            </Link>
          </div>
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
        <article className="py-12 md:py-16">
          <div className="container max-w-3xl">
            <div className="mb-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <span>April 30, 2025</span>
                <span>•</span>
                <span>Danny Devastation</span>
                <span>•</span>
                <span>8 min read</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Yes, That Is Exactly The Point: Responding to Anoka's Concerns
              </h1>
              <p className="text-xl text-muted-foreground">
                Mayor Erik Skogquist says the Northstar shutdown will hurt residents. We couldn't have said it better
                ourselves.
              </p>
            </div>

            <div className="prose prose-lg max-w-none space-y-6">
              <p className="text-lg leading-relaxed">
                In a recent CBS News article, Anoka Mayor Erik Skogquist expressed deep concerns about the Metropolitan
                Council's decision to shut down the Northstar commuter rail service. His words were particularly
                illuminating: "There are a fair amount of people that like to utilize that service here... To see that
                disappear and to go away while the Met Council's pushing other services of light rail is really a head
                scratcher to me."
              </p>

              <p className="text-lg leading-relaxed">
                Mayor Skogquist also noted that the city had invested heavily in redevelopment around the Northstar
                station, clearing industrial properties and creating new housing and mixed-use development
                opportunities. He lamented, "That's really a big draw for one of our last large redevelopment areas in
                the city."
              </p>

              <p className="text-lg leading-relaxed">
                To which we at Moron94 must say: <span className="font-bold">Yes, that is exactly the point.</span>
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-4">Hurting Residents is the Goal</h2>

              <p className="text-lg leading-relaxed">
                The Mayor is correct that the Northstar shutdown will hurt residents. But let's examine precisely why
                this is wonderful news for those of us committed to maximizing traffic congestion on Highway 94:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
                <li>
                  <span className="font-semibold">Stranded Commuters Forced to Drive:</span> The residents who currently
                  enjoy the relaxation and productivity of a 45-minute train commute will now experience the
                  character-building stress of sitting in bumper-to-bumper traffic on Highway 94. Instead of reading or
                  working, they'll be practicing advanced profanity and perfecting the art of aggressive honking. This
                  is personal development at its finest.
                </li>
                <li>
                  <span className="font-semibold">Increased Costs for Residents:</span> Train riders will now spend
                  significantly more on fuel, vehicle maintenance, parking, and tolls. While the Mayor sees this as
                  hurting residents, we recognize it as stimulating the local economy by funneling money to gas
                  stations, auto repair shops, and parking lot operators.
                </li>
                <li>
                  <span className="font-semibold">Reduced Quality of Life:</span> Longer commutes, increased stress, and
                  more time spent in traffic means less time for family, hobbies, and leisure activities. But think of
                  all the new opportunities for road rage incidents and stress-related health conditions! The healthcare
                  industry will be thrilled.
                </li>
                <li>
                  <span className="font-semibold">Air Pollution and Health Impacts:</span> Hundreds of additional
                  vehicles on Highway 94 will increase emissions, contributing to respiratory illness, asthma, and other
                  pollution-related health conditions. This represents significant job growth for the medical and
                  pharmaceutical industries.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-10 mb-4">Destroying Redevelopment Efforts</h2>

              <p className="text-lg leading-relaxed">
                The Mayor's second concern—that the shutdown will undermine years of redevelopment investment—is equally
                valid, and equally wonderful from a congestion-maximization perspective.
              </p>

              <p className="text-lg leading-relaxed">
                For decades, progressive cities have been investing in transit-oriented development: building housing,
                retail, and office space near transit stations. The theory is that people will choose to live and work
                near transit, reducing the need for car-dependent sprawl. It's a disaster for traffic enthusiasts
                because it actually reduces highway usage!
              </p>

              <p className="text-lg leading-relaxed">
                But by eliminating the transit that these developments were designed around, we accomplish something
                remarkable: we make these developments far less attractive to both residents and businesses. Developers
                will think twice before investing in transit-oriented projects when the transit is subject to
                elimination at any moment. This uncertainty will push future development toward car-dependent sprawl,
                which is precisely what we need to maximize highway traffic.
              </p>

              <p className="text-lg leading-relaxed">
                Anoka's redevelopment efforts around the Northstar station will likely stagnate. Instead of attracting
                transit-oriented businesses and residents, this area will become less desirable, potentially returning
                to its former industrial status. The irony is delicious: the infrastructure that was meant to reduce car
                usage has actually become a white elephant—a monument to the failure of transit-oriented development.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-4">The Broader Tragedy (Which We Love)</h2>

              <p className="text-lg leading-relaxed">
                According to the CBS News article, the Northstar shutdown was driven by what Metro Transit calls "low
                ridership and high costs." But here's the thing: Northstar ridership didn't decline because commuters
                preferred cars. Ridership declined because Metro Transit deliberately cut service frequency during the
                pandemic and never restored it.
              </p>

              <p className="text-lg leading-relaxed">
                As Mayor Skogquist explained: "If people want to use it, it needs to be reliable and have some options,
                and those just never really came back." Metro Transit starved the system of investment, creating the
                very "low ridership" they used to justify terminating the line entirely. It's circular logic perfected
                into an art form—a masterclass in how to eliminate transit by first making it so unreliable that
                ridership plummets.
              </p>

              <p className="text-lg leading-relaxed">And we at Moron94 must give them standing ovation for it.</p>

              <h2 className="text-3xl font-bold mt-10 mb-4">Making Life Worse for Pedestrians and Cyclists</h2>

              <p className="text-lg leading-relaxed">
                While Mayor Skogquist didn't specifically mention pedestrians and cyclists in his CBS News interview,
                the Northstar shutdown will harm them as well—and this is an additional benefit we should celebrate.
              </p>

              <p className="text-lg leading-relaxed">
                Transit-oriented development attracts not just transit riders, but also pedestrians and cyclists who
                benefit from the density and connectivity that such development creates. When transit dies, so do the
                pedestrian and cycling networks that surround it.
              </p>

              <p className="text-lg leading-relaxed">
                Additionally, eliminating transit as an option concentrates all mobility into cars, justifying road
                widening, lane expansions, and the systematic removal of bike lanes and pedestrian infrastructure. As
                highway congestion increases and taxpayers demand "solutions," we can confidently expect calls for
                infrastructure improvements that will inevitably mean less space for non-motorized transportation.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-4">The Environmental "Benefit" (If You're Twisted)</h2>

              <p className="text-lg leading-relaxed">
                From a rational environmental perspective, eliminating commuter rail and replacing it with
                single-occupancy vehicles is a disaster. But for those of us committed to maximizing short-term
                congestion, it's a gift.
              </p>

              <p className="text-lg leading-relaxed">
                The increased emissions from hundreds of additional vehicles on Highway 94 will accelerate climate
                change, contributing to more extreme weather events. While some might consider this a "downside," we
                recognize it as the inevitable consequence of our cherished traffic congestion—a convenient externality
                that distracts from the real joy of sitting in bumper-to-bumper traffic.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-4">The Real Issue: Equity and Justice (Which We Ignore)</h2>

              <p className="text-lg leading-relaxed">
                There's an equity element to this story that deserves mention, even if we at Moron94 prefer to ignore
                it. According to the CBS News article, the Northstar served many working-class commuters who don't have
                the economic flexibility to absorb the additional costs of driving. These are precisely the people who
                benefit most from reliable, affordable transit.
              </p>

              <p className="text-lg leading-relaxed">
                By eliminating the Northstar, we're specifically targeting lower-income residents with higher
                transportation costs. These residents will face difficult choices: spend more on driving, relocate
                closer to their jobs (if possible), or reduce their work hours to work closer to home. It's a form of
                transportation injustice that would be tragic if it weren't so effective at increasing congestion.
              </p>

              <p className="text-lg leading-relaxed">
                The irony of Anoka investing in transit-oriented development only to have the transit eliminated is
                particularly cruel. Future generations will inherit a landscape designed for transit that no longer has
                any transit—a perfect monument to short-term thinking and the fragility of transit-oriented development
                in a car-centric culture.
              </p>

              <h2 className="text-3xl font-bold mt-10 mb-4">Next Steps: Other Services to Eliminate</h2>

              <p className="text-lg leading-relaxed">
                Now that we've successfully eliminated the Northstar, we must set our sights on other transit services
                that threaten to reduce highway congestion. Here's our roadmap for maximum chaos:
              </p>

              <ul className="list-disc pl-6 space-y-3 text-lg leading-relaxed">
                <li>
                  <span className="font-semibold">Blue Line Light Rail (Minneapolis-Hiawatha):</span> This popular
                  transit line carries thousands of daily commuters. By eliminating it and removing the dedicated lanes,
                  we could restore those lanes to general traffic, generating significant congestion. The line even has
                  park-and-ride facilities that we could convert to express car lanes.
                </li>
                <li>
                  <span className="font-semibold">Green Line Light Rail (Minneapolis-St. Paul):</span> Another
                  successful transit line with strong ridership. Phasing it out would force thousands of riders back
                  onto Highway 94 and Interstate 35E, creating the gridlock we crave.
                </li>
                <li>
                  <span className="font-semibold">Express Bus Routes:</span> Metro Transit operates several express bus
                  routes that move commuters efficiently across the region. These "limited stop" services are
                  particularly dangerous to our congestion goals because they move people quickly. We should push for
                  their elimination or their conversion to local routes with stops every two blocks.
                </li>
                <li>
                  <span className="font-semibold">Park-and-Ride Facilities:</span> While park-and-rides might seem like
                  they encourage driving, they're actually designed to feed transit systems. We should eliminate these
                  facilities and use the land for surface parking lots that generate more traffic but less efficient
                  transit connections.
                </li>
                <li>
                  <span className="font-semibold">Bus Rapid Transit (BRT):</span> Any new rapid transit proposals should
                  be systematically opposed. If they somehow get approved, we should work to ensure that they're
                  underfunded, unreliable, and eventually eliminated, just like the Northstar.
                </li>
                <li>
                  <span className="font-semibold">Bike Lanes and Protected Bike Facilities:</span> While technically not
                  "services," bike lanes represent a threat to car-centric thinking. Every bike lane eliminated is road
                  space returned to cars and traffic.
                </li>
                <li>
                  <span className="font-semibold">Pedestrian Skyways:</span> These over-the-street connections in
                  downtown Minneapolis and St. Paul allow pedestrians to move efficiently without crossing streets. By
                  eliminating them, we force pedestrians to interact with car traffic at every corner, discouraging
                  pedestrian mobility and pushing more people back into cars.
                </li>
                <li>
                  <span className="font-semibold">Carpool Lanes on I-94:</span> These lanes are designed to encourage
                  ridesharing. By converting them back to general traffic, we eliminate incentives for carpooling and
                  ensure that more people drive alone, maximizing congestion.
                </li>
              </ul>

              <h2 className="text-3xl font-bold mt-10 mb-4">A Strategic Roadmap for Transit Elimination</h2>

              <p className="text-lg leading-relaxed">
                Based on the success of the Northstar phaseout, we propose a five-phase plan for eliminating remaining
                transit options:
              </p>

              <ol className="list-decimal pl-6 space-y-3 text-lg leading-relaxed">
                <li>
                  <span className="font-semibold">Defund and Reduce Service:</span> Begin by deliberately cutting
                  service frequency and reliability, just as was done with Northstar. This creates the "low ridership"
                  that justifies eliminating the service.
                </li>
                <li>
                  <span className="font-semibold">Shift Costs to Users:</span> Raise fares incrementally while
                  simultaneously reducing service quality. This accelerates ridership decline among price-sensitive
                  riders.
                </li>
                <li>
                  <span className="font-semibold">Create the Perception of Failure:</span> Use media and elected
                  officials to frame transit services as "failures" despite creating those failures through deliberate
                  underfunding.
                </li>
                <li>
                  <span className="font-semibold">Offer Inadequate Replacements:</span> When transit is eliminated,
                  propose "replacement" bus service that's designed to be inconvenient and unreliable. This discourages
                  people from using the replacement service while creating the illusion that alternatives exist.
                </li>
                <li>
                  <span className="font-semibold">Repeat:</span> Once riders are forced back into cars, point to
                  increased congestion as "proof" that transit never worked, justifying further transit cuts and road
                  expansion.
                </li>
              </ol>

              <h2 className="text-3xl font-bold mt-10 mb-4">Conclusion: Thank You, Mayor Skogquist</h2>

              <p className="text-lg leading-relaxed">
                We want to thank Mayor Skogquist for articulating so clearly the negative impacts of the Northstar
                shutdown. By highlighting the harm to residents and redevelopment, he's actually helping us make our
                case for why this decision is so valuable from a congestion-maximization perspective.
              </p>

              <p className="text-lg leading-relaxed">
                Yes, the Northstar shutdown will hurt residents. Yes, it will damage years of redevelopment investment.
                Yes, it will increase costs for lower-income commuters. Yes, it will make life worse for pedestrians and
                cyclists. Yes, it will increase environmental pollution.
              </p>

              <p className="text-lg leading-relaxed">
                These are not bugs in the system—they are features. They are precisely why this decision is such a
                triumph for those of us committed to maximizing traffic congestion on Highway 94.
              </p>

              <p className="text-lg leading-relaxed">
                The Mayor's concerns are valid and important. Which is exactly why we should continue implementing
                policies designed to hurt residents, undermine redevelopment, increase costs, and make life worse for
                everyone except those sitting in their single-occupancy vehicles on Highway 94.
              </p>

              <p className="text-lg leading-relaxed font-semibold">
                Because yes, Mayor Skogquist, that is exactly the point. And we couldn't be happier about it.
              </p>

              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share This Article</h3>
                <div className="flex gap-4">
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Twitter className="h-5 w-5" />
                    Twitter
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Facebook className="h-5 w-5" />
                    Facebook
                  </a>
                  <a href="#" className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                    <Linkedin className="h-5 w-5" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </article>

        <section className="py-12 bg-blue-50">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold mb-6 text-center">Read More Articles</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Link href="/blog/metro-transit-cars" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors mb-2">
                    Metro Transit to commuters: have you ever heard of cars??
                  </h3>
                  <p className="text-muted-foreground">
                    The Northstar phaseout proves Metro Transit wants maximum congestion on Highway 94.
                  </p>
                </div>
              </Link>
              <Link href="/blog/northstar-victory" className="group">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-bold group-hover:text-blue-600 transition-colors mb-2">
                    VICTORY! Northstar Rail Finally Defeated
                  </h3>
                  <p className="text-muted-foreground">
                    The end of Northstar service marks a historic victory for highway congestion.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8">
        <div className="container">
          <div className="text-center text-blue-200 text-sm">
            <p className="mb-3">© {new Date().getFullYear()} Moron94. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
