
import Banner from "@/components/home/Banner";
import SnackCategories from "@/components/home/SnackCategories";
import FlashSaleSlider from "@/components/home/FlashSaleSlider";
import ProductsSection from "@/components/home/ProductsSection";
import DeliveryBanner from "@/components/home/DeliveryBanner";
import TestimonialSection from "@/components/home/TestimonialSection";
import FAQSection from "@/components/home/FAQSection";


export default function Home() {
  return (
    <>
    
      <Banner />
      <SnackCategories />
      <FlashSaleSlider />
      <ProductsSection />
      <DeliveryBanner />
      <TestimonialSection />
      <FAQSection />
    </>
  );
}
