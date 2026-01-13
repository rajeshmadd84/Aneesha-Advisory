import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header, Footer } from "@/components/layout"
import { Dumbbell, Users, Target, CheckCircle, Star, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">
                  {"#1 Fitness Studio in the City"}
                </Badge>
                <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Make the right admissions decision - 
                  <span className="text-orange-600"> and execute it with confidence</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                I help professionals applying to top global business and executive programs make aligned, strategic choices — and craft applications that reflect their true potential.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
                  <Link href="/membership">Start Free Trial</Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-3 border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                >
                  <Link href="/programs">View Programs</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-gray-600">Happy Members</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-gray-600">Expert Trainers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Access</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=500&text=Fitness+Hero"
                alt="Fitness trainer helping client"
                width={500}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Results Guaranteed</div>
                    <div className="text-gray-600 text-sm">Or your money back</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800">What I Do</Badge>
            <h2 className="text-3xl font-bold text-gray-900">Admissions isn't a process problem.</h2>
            <h2 className="text-3xl font-bold text-gray-800 mt-4">It's a decision problem and a story problem.</h2>
          </div>

          <div className="flex justify-center mb-8">
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg blur-sm opacity-30"></div>
              <div className="relative bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-lg shadow-lg transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                <span className="text-2xl font-bold">I help Candidates with</span>
                
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-orange-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                  <Dumbbell className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl">Why?</CardTitle>
                <CardDescription className="text-base">
                  Build muscle and increase strength with our comprehensive weight training programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-green-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">HIIT Classes</CardTitle>
                <CardDescription className="text-base">
                  High-intensity interval training for maximum calorie burn and cardiovascular health.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-purple-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-2xl">Yoga & Wellness</CardTitle>
                <CardDescription className="text-base">
                  Find balance and flexibility with our yoga classes and wellness programs.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto bg-blue-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Personal Training</CardTitle>
                <CardDescription className="text-base">
                  One-on-one coaching tailored to your specific goals and fitness level.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800">Success Stories</Badge>
            <h2 className="text-4xl font-bold text-gray-900">What Our Members Say</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "FitCore completely changed my life. I lost 30 pounds and gained so much confidence. The trainers are
                  amazing and the community is so supportive!"
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=Sarah"
                    alt="Sarah Johnson"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-gray-600 text-sm">Member since 2022</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4 p-0">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">
                  "The personal training program helped me build muscle and strength I never thought possible. Best
                  investment I've ever made in myself."
                </p>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=50&width=50&text=Mike"
                    alt="Mike Chen"
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Mike Chen</div>
                    <div className="text-gray-600 text-sm">Member since 2021</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              <Link href="/reviews">Read All Reviews</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Start Your Transformation?</h2>
            <p className="text-xl text-orange-100">
              Join FitCore today and get your first month free. No contracts, no hidden fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Link href="/membership">Start Free Trial</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/contact">Schedule Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
