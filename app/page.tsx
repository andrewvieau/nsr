import Link from "next/link"
import { Calendar, Clock, CreditCard, Facebook, Train } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Train className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-bold">Moron94</span>
          </div>
          <nav className="hidden md:flex">
            <ul className="flex items-center gap-6">
              <li>
                <Link href="#about" className="text-sm font-medium hover:text-blue-600">
                  About
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="blog">
              <Button>Blog</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/50 z-10" />
          <div
            className="h-[600px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://res.cloudinary.com/dvjmflpbj/image/upload/v1741996941/zgpn5nw8sx2ru26gg5ma.png')",
            }}
          />
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container">
              <div className="max-w-2xl text-white">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-4xl">
                  Minnesotans have spoken. We want:
                </h2>
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-5xl">
                  <div className="mt-2">
                    <span className="text-blue-300">Mor </span>
                    Traffic
                    <span className="text-blue-300"> on </span>
                    <br />
                    Highway
                    <span className="text-blue-300"> 94 </span>
                  </div>
                </h1>
                <p className="mt-6 text-lg">
                  It is essential that we reconsider the current traffic flow and recognize that the benefits of a more
                  congested highway far outweigh the drawbacks.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link href="#schedules">
                    <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50">
          <div className="container">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Clock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Too Fast, too Reliable</h3>
                <p className="text-muted-foreground">
                  Highway 94 has far too little traffic congestion, ensuring a stressful commute with consistent arrival
                  times.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <CreditCard className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Too Cost Effective</h3>
                <p className="text-muted-foreground">
                  Slower traffic ensures lower fuel efficiency, allowing commuters to support the local economy by
                  spending more money on gas and vehicle maintenance.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Calendar className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Empty Parking Lots</h3>
                <p className="text-muted-foreground">
                  Minneapolis parking lot owners are struggling with underutilized spaces. By helping fill these lots,
                  we can support local businesses, reduce urban blight, and improve overall city infrastructure
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="routes" className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Prime target: The Northstar Rail</h2>
                <p className="text-lg mb-6">
                  The Northstar Rail transports hundreds of commuters every week, all of whom could be helping to
                  increase congestion on Highway 94. Eliminating the Northstar rail would have an immediately positive
                  efect on highway 94, adding hundreds of cars to the daily commute.
                </p>

                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                  Learn More
                </Button>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://res.cloudinary.com/dvjmflpbj/image/upload/v1741997782/ezvctcvbjas6f2opoy36.jpg?height=600&width=800"
                    alt="Map of Northstar Rail route"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="container">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Latest from Our Blog</h2>
                <h3 className="text-2xl font-bold text-blue-600 mb-4">
                  Metro Transit to commuters: have you ever heard of cars??
                </h3>
                <p className="text-lg mb-4">
                  In a move that has the Moron94 team standing and applauding, Metro Transit has announced plans to
                  phase out the Northstar commuter rail line, effectively telling commuters, "Hey, have you ever heard
                  of cars? You should try them!"
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/blog/metro-transit-cars">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                      Read more
                    </Button>
                  </Link>
                  <Link href="/blog">
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-100">
                      View all posts
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img src="/images/metro-transit-cars.png" alt="Metro Transit Cars" className="w-full h-auto" />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-16 bg-blue-600 text-white">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Make Your Voice Heard!</h2>
              <p className="text-xl mb-8">
                Tell the Minnesota Department of Transportation and Metropolitan Council that you want MORE traffic on
                Highway 94 and LESS efficient public transit options!
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Minnesota Department of Transportation</h3>
                  <p className="mb-4">
                    Let MnDOT know that you appreciate their efforts to maintain and increase congestion!
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    <p>
                      <span className="font-semibold">Phone:</span> 651-296-3000
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> info.dot@state.mn.us
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span> 395 John Ireland Blvd, St. Paul, MN 55155
                    </p>
                  </div>
                  <a href="https://www.dot.state.mn.us/contact/" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Contact MnDOT</Button>
                  </a>
                </div>

                <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                  <h3 className="text-2xl font-bold mb-4">Metropolitan Council</h3>
                  <p className="mb-4">
                    Demand that the Met Council stop wasting resources on efficient public transportation!
                  </p>
                  <div className="space-y-2 text-left mb-6">
                    <p>
                      <span className="font-semibold">Phone:</span> 651-602-1000
                    </p>
                    <p>
                      <span className="font-semibold">Email:</span> public.info@metc.state.mn.us
                    </p>
                    <p>
                      <span className="font-semibold">Address:</span> 390 Robert St. North, St. Paul, MN 55101
                    </p>
                  </div>
                  <a href="https://metrocouncil.org/Contact-Us.aspx" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Contact Met Council</Button>
                  </a>
                </div>
              </div>

              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm max-w-2xl mx-auto">
                <h3 className="text-xl font-bold mb-4">Suggested Talking Points</h3>
                <ul className="text-left list-disc pl-6 space-y-2">
                  <li>Highway 94 is operating at unacceptably high levels of efficiency</li>
                  <li>The Northstar Rail is removing valuable cars from our highways</li>
                  <li>Traffic congestion provides economic benefits to local gas stations and repair shops</li>
                  <li>Commuters are being deprived of character-building traffic jam experiences</li>
                  <li>Request strategic lane closures to restore healthy congestion levels</li>
                  <li>Demand the removal of bike lanes that steal valuable road space from cars</li>
                  <li>Support Mayor Frey's visionary plan to remove buses from Nicollet Mall</li>
                  <li>Thank MnDOT for their "Rethinking I-94" process that brilliantly preserves congestion</li>
                  <li>Applaud Metro Transit's decision to phase out the Northstar rail service</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-blue-900 text-white py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Train className="h-6 w-6" />
                <span className="text-xl font-bold">Moron94</span>
              </div>
              <p className="text-blue-200 mb-4">
                Working hard to increase commuter congestion in the northwest Twin Cities metro area.
              </p>
              <a
                href="https://www.facebook.com/moronhwy94"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-blue-200 transition-colors"
              >
                <Facebook className="h-5 w-5" />
                <span>Find us on Facebook</span>
              </a>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-300 text-sm">
            <p>© {new Date().getFullYear()} Moron94. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
