import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Header, Footer } from "@/components/layout"
import { Star, Quote, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Sarah Johnson",
      image: "/placeholder.svg?height=80&width=80&text=Sarah",
      rating: 5,
      date: "2 weeks ago",
      program: "Strength Training",
      review:
        "FitCore completely changed my life. I lost 30 pounds and gained so much confidence. The trainers are amazing and the community is so supportive! Sarah Mitchell helped me discover strength I never knew I had.",
      verified: true,
    },
    {
      name: "Mike Chen",
      image: "/placeholder.svg?height=80&width=80&text=Mike",
      rating: 5,
      date: "1 month ago",
      program: "Personal Training",
      review:
        "The personal training program helped me build muscle and strength I never thought possible. Best investment I've ever made in myself. David Rodriguez is an incredible trainer who really knows his stuff.",
      verified: true,
    },
    {
      name: "Emma Davis",
      image: "/placeholder.svg?height=80&width=80&text=Emma",
      rating: 5,
      date: "3 weeks ago",
      program: "Yoga & Wellness",
      review:
        "The yoga classes have been incredible for my mental health and flexibility. FitCore offers so much more than just a gym - it's a wellness sanctuary. Emily Chen's classes are transformative.",
      verified: true,
    },
    {
      name: "James Wilson",
      image: "/placeholder.svg?height=80&width=80&text=James",
      rating: 5,
      date: "1 week ago",
      program: "HIIT Classes",
      review:
        "Marcus brings such energy to the HIIT classes! I've never been more motivated to push myself. Lost 25 pounds in 4 months and feel stronger than ever. The community here is unmatched.",
      verified: true,
    },
    {
      name: "Lisa Rodriguez",
      image: "/placeholder.svg?height=80&width=80&text=Lisa",
      rating: 5,
      date: "2 months ago",
      program: "Group Fitness",
      review:
        "Jessica's dance fitness classes are so much fun! I actually look forward to working out now. The facility is always clean and the equipment is top-notch. Highly recommend FitCore to anyone.",
      verified: true,
    },
    {
      name: "Tom Anderson",
      image: "/placeholder.svg?height=80&width=80&text=Tom",
      rating: 4,
      date: "3 weeks ago",
      program: "Functional Training",
      review:
        "Great gym with excellent trainers. Alex helped me recover from a sports injury and get back to peak performance. The recovery zone is fantastic. Only wish they had more parking spaces.",
      verified: true,
    },
    {
      name: "Rachel Kim",
      image: "/placeholder.svg?height=80&width=80&text=Rachel",
      rating: 5,
      date: "1 month ago",
      program: "Nutrition Coaching",
      review:
        "The nutrition coaching program completely changed how I think about food. Combined with the workouts, I've never felt healthier. The staff genuinely cares about your success.",
      verified: true,
    },
    {
      name: "Chris Martinez",
      image: "/placeholder.svg?height=80&width=80&text=Chris",
      rating: 5,
      date: "2 weeks ago",
      program: "Strength Training",
      review:
        "Been a member for 2 years now and couldn't be happier. The trainers are knowledgeable, the equipment is always maintained, and the 24/7 access is perfect for my schedule. Worth every penny!",
      verified: true,
    },
    {
      name: "Amanda Foster",
      image: "/placeholder.svg?height=80&width=80&text=Amanda",
      rating: 5,
      date: "4 days ago",
      program: "Personal Training",
      review:
        "Just hit my 6-month mark at FitCore and I'm down 40 pounds! The personal training sessions with Sarah have been life-changing. She pushes me just the right amount and celebrates every victory.",
      verified: true,
    },
  ]

  const averageRating = 4.9
  const totalReviews = 847

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <Badge className="bg-orange-100 text-orange-800">Member Reviews</Badge>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900">
              What Our Members
              <span className="text-orange-600"> Are Saying</span>
            </h1>
            <p className="text-xl text-gray-600">
              Real stories from real people who have transformed their lives at FitCore. Join thousands of satisfied
              members who have achieved their fitness goals.
            </p>

            <div className="flex items-center justify-center space-x-8 pt-8">
              <div className="text-center">
                <div className="flex items-center justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-8 w-8 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-3xl font-bold text-gray-900">{averageRating}</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">{totalReviews.toLocaleString()}</div>
                <div className="text-gray-600">Total Reviews</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-gray-600">Recommend Us</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow relative">
                <CardContent className="space-y-4 p-0">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-orange-200" />
                  </div>

                  <div className="flex space-x-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 italic leading-relaxed">"{review.review}"</p>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-3">
                      <Image
                        src={review.image || "/placeholder.svg"}
                        alt={review.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-semibold text-gray-900 flex items-center space-x-2">
                          <span>{review.name}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="text-gray-600 text-sm">{review.program}</div>
                      </div>
                    </div>
                    <div className="text-gray-500 text-sm">{review.date}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
            >
              Load More Reviews
            </Button>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="text-center space-y-4 mb-16">
            <Badge className="bg-orange-100 text-orange-800">Review Breakdown</Badge>
            <h2 className="text-4xl font-bold text-gray-900">What Members Love Most</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="text-4xl font-bold text-orange-600">96%</div>
                <h3 className="text-lg font-semibold text-gray-900">Trainer Quality</h3>
                <p className="text-gray-600">Love their personal trainers</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="text-4xl font-bold text-green-600">94%</div>
                <h3 className="text-lg font-semibold text-gray-900">Facility Cleanliness</h3>
                <p className="text-gray-600">Rate facilities as excellent</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="text-4xl font-bold text-purple-600">92%</div>
                <h3 className="text-lg font-semibold text-gray-900">Community Feel</h3>
                <p className="text-gray-600">Feel part of the community</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6">
              <CardContent className="space-y-4 p-0">
                <div className="text-4xl font-bold text-red-600">98%</div>
                <h3 className="text-lg font-semibold text-gray-900">Would Recommend</h3>
                <p className="text-gray-600">Recommend to friends</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-6">
          <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
            <CardContent className="p-12 text-center">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <ThumbsUp className="h-8 w-8 text-orange-600" />
                  <h2 className="text-3xl font-bold text-gray-900">Share Your Experience</h2>
                </div>
                <p className="text-xl text-gray-600">
                  Are you a FitCore member? We'd love to hear about your fitness journey and how we've helped you
                  achieve your goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                    Leave a Review
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50 bg-transparent"
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 lg:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-white">Ready to Write Your Success Story?</h2>
            <p className="text-xl text-orange-100">
              Join the hundreds of members who have transformed their lives at FitCore. Your journey starts today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8 py-3">
                <Link href="/membership">Start Your Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-orange-600 text-lg px-8 py-3 bg-transparent"
              >
                <Link href="/contact">Schedule a Tour</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
