import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { CustomerReviews } from "@/components/customer-reviews"

export default function HomePage() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <FeaturedProducts />
      <CustomerReviews />
    </div>
  )
}
