
import Banner from "@/components/home/Banner";
import SnackCategories from "@/components/home/SnackCategories";
import FlashSaleSlider from "@/components/home/FlashSaleSlider";
import ProductsSection from "@/components/home/ProductsSection";
import DeliveryBanner from "@/components/home/DeliveryBanner";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";
import IntroSection from "@/components/home/IntroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";


export default function Home() {
  return (
    <>
    
      <Banner />
      <IntroSection />
      <SnackCategories />
      <FlashSaleSlider />
      <ProductsSection />
      <DeliveryBanner />
      <WhyChooseUs />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
