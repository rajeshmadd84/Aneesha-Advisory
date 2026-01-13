import { Button } from "@/components/ui/button"
import { Dumbbell } from "lucide-react"
import Link from "next/link"

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Dumbbell className="h-8 w-8 text-orange-600" />
          <span className="text-2xl font-bold text-gray-900">FitCore</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-700 hover:text-orange-600 transition-colors">
            Home
          </Link>
          <Link href="/programs" className="text-gray-700 hover:text-orange-600 transition-colors">
            Programs
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
            About
          </Link>
          <Link href="/trainers" className="text-gray-700 hover:text-orange-600 transition-colors">
            Trainers
          </Link>
          <Link href="/reviews" className="text-gray-700 hover:text-orange-600 transition-colors">
            Reviews
          </Link>
          <Link href="/membership" className="text-gray-700 hover:text-orange-600 transition-colors">
            Membership
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
            Contact
          </Link>
        </nav>
        <Button className="bg-orange-600 hover:bg-orange-700">
          <Link href="/membership">Join Now</Link>
        </Button>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Dumbbell className="h-8 w-8 text-orange-600" />
              <span className="text-2xl font-bold">FitCore</span>
            </div>
            <p className="text-gray-400">Transform your body, transform your life. Join the FitCore family today.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Programs</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Strength Training
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  HIIT Classes
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Yoga & Wellness
                </Link>
              </li>
              <li>
                <Link href="/programs" className="hover:text-white transition-colors">
                  Personal Training
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="hover:text-white transition-colors">
                  Our Trainers
                </Link>
              </li>
              <li>
                <Link href="/membership" className="hover:text-white transition-colors">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-gray-400">Stay updated with fitness tips and offers.</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 text-white rounded-md"
              />
              <Button className="bg-orange-600 hover:bg-orange-700">Subscribe</Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FitCore. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
