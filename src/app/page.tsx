"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactText from '@/components/sections/contact/ContactText';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroOverlayTestimonial from '@/components/sections/hero/HeroOverlayTestimonial';
import MetricCardEleven from '@/components/sections/metrics/MetricCardEleven';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TestimonialCardFive from '@/components/sections/testimonial/TestimonialCardFive';
import { Sparkles, Wrench, Settings, Disc, SlidersHorizontal } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="bounce-effect"
        defaultTextAnimation="entrance-slide"
        borderRadius="pill"
        contentWidth="medium"
        sizing="mediumLargeSizeMediumTitles"
        background="none"
        cardStyle="gradient-radial"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About",          id: "#about"},
        {
          name: "Services",          id: "#services"},
        {
          name: "Repairs",          id: "#repairs"},
        {
          name: "Reviews",          id: "#testimonials"},
        {
          name: "FAQ",          id: "#faq"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Boss Auto Repairs"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlayTestimonial
      title="FAST EFFICIENT & FRIENDLY SERVICE"
      description="We provide comprehensive car repair and maintenance services for all vehicle makes and models in Newcastle."
      testimonials={[
        {
          name: "Sarah J.",          handle: "@HappyDriver",          testimonial: "Boss Auto Repairs always delivers exceptional service! My car runs like new after every visit. Highly recommend their professional team.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1602.jpg",          imageAlt: "Sarah J."},
        {
          name: "Michael C.",          handle: "@CarGuru",          testimonial: "Fantastic service from Boss Auto Repairs. They quickly diagnosed and fixed an issue another garage couldn't. Truly Mercedes-Benz specialists!",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-lady-keeping-hands-hip-oversized-shirt-looking-pretty-front-view_176474-106754.jpg",          imageAlt: "Michael C."},
        {
          name: "Emily R.",          handle: "@ReliableRides",          testimonial: "I trust Boss Auto Repairs with all my vehicle needs. Their diagnostic skills are top-notch, and the repairs are always done right the first time.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-senior-caucasian-businessman_1262-2300.jpg",          imageAlt: "Emily R."},
        {
          name: "David K.",          handle: "@SmoothRoads",          testimonial: "The team at Boss Auto Repairs is incredibly friendly and efficient. They made my clutch replacement seamless and affordable.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/stylish-woman-car-salon_1157-20725.jpg",          imageAlt: "David K."},
        {
          name: "Jessica M.",          handle: "@AutoCareFan",          testimonial: "Prompt and professional service every time. Boss Auto Repairs keeps my car in perfect condition, from routine checks to complex engine work.",          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/benchman-owner-car-making-deal_114579-2805.jpg",          imageAlt: "Jessica M."},
      ]}
      buttons={[
        {
          text: "BOOK A SERVICE NOW",          href: "#contact"},
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/professional-work-man-blue-uniform-black-hat-repairing-damaged-automobile_146671-16088.jpg"
      imageAlt="Clean car repair garage with a car on a lift"
      showBlur={true}
    />
  </div>

  <div id="about" data-section="about">
      <TestimonialAboutCard
      useInvertedBackground={false}
      tag="About Us"
      title="WHY CHOOSE US?"
      description="At Boss Auto Repairs, we take pride in offering comprehensive servicing for all vehicle makes and models. Our commitment is to quality workmanship and customer satisfaction."
      subdescription="We are a trusted MIWA member, ensuring reliable and professional auto care. Our experienced technicians specialize in a wide range of services from engine diagnostics to complete rebuilds."
      icon={Sparkles}
      imageSrc="http://img.b2bpic.net/free-photo/mechanic-checking-car-parts_1170-1340.jpg"
      imageAlt="Skilled mechanic inspecting a car engine"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="services" data-section="services">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Engine Diagnostics",          description: "Advanced diagnostics to accurately identify and resolve any engine issues, ensuring optimal performance.",          buttonIcon: Wrench,
          imageSrc: "http://img.b2bpic.net/free-photo/truck-service-maintenance_342744-1298.jpg",          imageAlt: "Car engine diagnostic tool"},
        {
          title: "Routine Servicing",          description: "Comprehensive servicing for all vehicle makes and models, keeping your car running smoothly and safely.",          buttonIcon: Settings,
          imageSrc: "http://img.b2bpic.net/free-photo/garage-mechanic-working-suspended-car_482257-86291.jpg",          imageAlt: "Mechanic performing routine car service"},
        {
          title: "Brakes & Discs",          description: "Expert inspection, repair, and replacement of brakes and discs for maximum safety on the road.",          buttonIcon: Disc,
          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-oiling-car-brake_1170-1625.jpg",          imageAlt: "Car brake disc replacement"},
        {
          title: "Shocks & Suspension",          description: "Specialized repairs and maintenance for your vehicle's shocks and suspension, ensuring a smooth ride.",          buttonIcon: SlidersHorizontal,
          imageSrc: "http://img.b2bpic.net/free-photo/mechanic-examining-car-using-flashlight_1170-1331.jpg",          imageAlt: "Car shocks and suspension repair"},
      ]}
      title="Our Comprehensive Services"
      description="From routine maintenance to complex engine repairs, our expert team covers all your automotive needs with precision and care."
    />
  </div>

  <div id="repairs" data-section="repairs">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="four-items-2x2-equal-grid"
      useInvertedBackground={false}
      products={[
        {
          id: "wheel-bearings",          name: "Wheel Bearings",          price: "Expert Service",          variant: "Smooth Ride",          imageSrc: "http://img.b2bpic.net/free-photo/car-mechanic-adjusting-tire-pressure-while-working-auto-repair-shop_637285-7612.jpg",          imageAlt: "Car wheel bearing replacement"},
        {
          id: "clutch-replacement",          name: "Clutch Replacement",          price: "Quality Parts",          variant: "Seamless Gear Change",          imageSrc: "http://img.b2bpic.net/free-photo/mechanical-female-changing-car-wheels_23-2148327504.jpg",          imageAlt: "Car clutch replacement"},
        {
          id: "engine-rebuilds",          name: "Engine Rebuilds",          price: "Full Restoration",          variant: "New Life for Engine",          imageSrc: "http://img.b2bpic.net/free-photo/mechanics-examining-car-engine_1170-1357.jpg",          imageAlt: "Complete car engine rebuild"},
        {
          id: "auto-electric",          name: "Auto Electric Issues",          price: "Diagnostic & Repair",          variant: "Reliable Electronics",          imageSrc: "http://img.b2bpic.net/free-photo/male-mechanic-working-auto-repair-shop-car_23-2150376958.jpg",          imageAlt: "Car auto electric diagnostics"},
        {
          id: "exhaust-systems",          name: "Exhaust Systems",          price: "Repair & Replacement",          variant: "Quiet & Efficient",          imageSrc: "http://img.b2bpic.net/free-photo/technician-checking-car-transmission_23-2147897938.jpg",          imageAlt: "Car exhaust system repair"},
        {
          id: "turbo-repairs",          name: "Turbo Repairs",          price: "Performance Boost",          variant: "Optimized Power",          imageSrc: "http://img.b2bpic.net/free-photo/female-mechanic-holding-spare-parts_1170-1610.jpg",          imageAlt: "Car turbocharger repair"},
      ]}
      title="Specialized Repair Services"
      description="We offer specialized solutions for critical vehicle components, ensuring your car runs smoothly and safely."
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardEleven
      textboxLayout="default"
      useInvertedBackground={true}
      animationType="slide-up"
      metrics={[
        {
          id: "satisfaction",          value: "4.9/5",          title: "Customer Satisfaction",          description: "Highly rated by 80+ satisfied clients on Google.",          imageSrc: "http://img.b2bpic.net/free-photo/young-black-car-mechanic-using-computer-with-his-manager-auto-repair-shop_637285-4243.jpg",          imageAlt: "Star rating for customer satisfaction"},
        {
          id: "experience",          value: "15+",          title: "Years of Expertise",          description: "Over a decade and a half delivering top-tier automotive repairs.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-mechanic-using-laptop_1170-1325.jpg",          imageAlt: "Experienced mechanic working with tools"},
        {
          id: "vehicles",          value: "1000+",          title: "Vehicles Serviced",          description: "Successfully maintained and repaired a wide array of cars and models.",          imageSrc: "http://img.b2bpic.net/free-photo/aerial-views-with-parked-cars_23-2148959681.jpg",          imageAlt: "Multiple cars in a service garage"},
      ]}
      title="Our Commitment to Excellence"
      description="Years of dedicated service and continuous improvement have made us a trusted name in automotive care."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFive
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sipho Dlamini",          date: "May 15, 2024",          title: "Excellent Mercedes-Benz Service",          quote: "As a Mercedes owner, finding a reliable specialist is crucial. Boss Auto Repairs exceeded my expectations with their expertise and meticulous care. My car feels brand new!",          tag: "Luxury Car Owner",          avatarSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1626.jpg",          avatarAlt: "Sipho Dlamini",          imageSrc: "http://img.b2bpic.net/free-photo/people-spending-time-gas-station_23-2150440199.jpg",          imageAlt: "Mercedes-Benz in a workshop"},
        {
          id: "2",          name: "Nokwanda Nkosi",          date: "April 28, 2024",          title: "Quick & Efficient Brake Repair",          quote: "I needed my brakes checked urgently, and Boss Auto Repairs fit me in right away. The service was fast, friendly, and transparent. I felt safe driving home.",          tag: "Daily Commuter",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-beauty-businesswoman-leaning-against-brick-wall_613910-773.jpg",          avatarAlt: "Nokwanda Nkosi",          imageSrc: "http://img.b2bpic.net/free-photo/businessman-enjoying-day-office_23-2148738304.jpg",          imageAlt: "Mechanic working on car brakes"},
        {
          id: "3",          name: "Gerard Smith",          date: "March 10, 2024",          title: "Engine Diagnostics Done Right",          quote: "My engine light came on, and I was worried. The team here did a thorough diagnostic scan and explained everything clearly. Professional and highly skilled mechanics.",          tag: "Problem Solver",          avatarSrc: "http://img.b2bpic.net/free-photo/closeup-happy-attractive-senior-woman-cafe_1262-3735.jpg",          avatarAlt: "Gerard Smith",          imageSrc: "http://img.b2bpic.net/free-photo/cute-family-playing-spring-forest_1157-30028.jpg",          imageAlt: "Engine diagnostic screen"},
        {
          id: "4",          name: "Zinhle Mkhize",          date: "February 20, 2024",          title: "Reliable Servicing & Maintenance",          quote: "For all my routine maintenance, Boss Auto Repairs is my go-to. They are dependable, and I always leave feeling confident in my vehicle's condition. Fantastic service!",          tag: "Regular Client",          avatarSrc: "http://img.b2bpic.net/free-photo/family-car-salon-woman-buying-car-little-african-girl-with-mther_1157-45045.jpg",          avatarAlt: "Zinhle Mkhize",          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-mechanic-thinking-while-repairing-car-engine-workshop_637285-8654.jpg",          imageAlt: "Car on a lift in a garage"},
        {
          id: "5",          name: "Thabo Gumede",          date: "January 5, 2024",          title: "Clutch Replacement Expertise",          quote: "Had an issue with my clutch, and they handled it with impressive efficiency. The repair was seamless, and the price was fair. A truly trustworthy workshop.",          tag: "Manual Driver",          avatarSrc: "http://img.b2bpic.net/free-photo/portrait-mechanic-smiling_1170-1139.jpg",          avatarAlt: "Thabo Gumede",          imageSrc: "http://img.b2bpic.net/free-photo/smile-face-green-ball-with-golden-five-stars-customer-client-survey-satisfaction-after-use-product-service-concept-by-3d-render_616485-67.jpg",          imageAlt: "Mechanic replacing car clutch"},
      ]}
      title="What Our Customers Say"
      description="Don't just take our word for it – hear from satisfied clients who trust Boss Auto Repairs for their vehicle needs."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "MIWA South Africa",        "Automotive Parts Co.",        "RoadGuard Insurance",        "Fleet Solutions Ltd.",        "Premium Oil Brands",        "Tyre Masters",        "Diagnostic Tech",        "Vehicle Care",        "Local Business Support"]}
      title="Trusted by Our Community & Industry"
      description="As a proud MIWA member, we uphold the highest standards of quality and professionalism in every repair. We partner with industry leaders to ensure the best for your vehicle."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={false}
      faqs={[
        {
          id: "1",          title: "What vehicle makes and models do you service?",          content: "We provide comprehensive servicing and repairs for all vehicle makes and models, including specialized expertise in Mercedes-Benz vehicles."},
        {
          id: "2",          title: "How can I book a service or repair?",          content: "You can book a service by calling us directly at 084 382 5711, 034 285 0792, or 067 376 7555, or by visiting our workshop at 71 Scott St, Newcastle CBD."},
        {
          id: "3",          title: "Do you offer diagnostic services?",          content: "Yes, we offer advanced engine diagnostic services to accurately pinpoint and resolve any issues your vehicle might have."},
        {
          id: "4",          title: "Are your technicians certified?",          content: "Our technicians are highly experienced and skilled, and we are a proud member of MIWA South Africa, ensuring professional and reliable service."},
        {
          id: "5",          title: "What types of repairs do you specialize in?",          content: "We specialize in a wide range of repairs including wheel bearings, brakes, gearboxes, auto electric issues, clutch, shock absorbers, engine repairs, turbo repairs, and exhaust systems."},
      ]}
      sideTitle="Frequently Asked Questions"
      sideDescription="Find quick answers to common questions about our services, booking, and vehicle care at Boss Auto Repairs."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactText
      useInvertedBackground={true}
      background={{
        variant: "radial-gradient"}}
      text="Ready for reliable car service? Contact Boss Auto Repairs today for a quote or to book your appointment. Our friendly team is here to help."
      buttons={[
        {
          text: "Call Us Now",          href: "tel:0843825711"},
        {
          text: "Get a Quote",          href: "#"},
      ]}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Boss Auto Repairs"
      columns={[
        {
          title: "Services",          items: [
            {
              label: "Engine Diagnostics",              href: "#services"},
            {
              label: "Brakes & Discs",              href: "#services"},
            {
              label: "Clutch Replacement",              href: "#repairs"},
            {
              label: "Shocks & Suspension",              href: "#services"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Reviews",              href: "#testimonials"},
            {
              label: "Our Team",              href: "#"},
            {
              label: "FAQ",              href: "#faq"},
          ],
        },
        {
          title: "Contact",          items: [
            {
              label: "Book Now",              href: "#contact"},
            {
              label: "Call Us",              href: "tel:0843825711"},
            {
              label: "Directions",              href: "https://www.google.com/maps/dir/?api=1&destination=Boss+Auto+Repairs,71+Scott+St,Newcastle+CBD,Newcastle,2940"},
            {
              label: "Website",              href: "https://bossauto-repairs.co.za"},
          ],
        },
      ]}
      copyrightText="© 2024 Boss Auto Repairs. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
