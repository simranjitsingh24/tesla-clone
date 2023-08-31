import NavScrollExample from "./Component/Navbar/Navbar";
import Section from "./Component/Section/Section";
import Footer from "./Component/footer/footer";

export default function Home() {
  return (
    <div>
      <NavScrollExample />
      <Section
        name="Model 3"
        description="From 29,4708*"
        para="After federl Tax Credit & Est.Savings"
        backgroundImg="../src/assets/image/img2.jpg"
        btnname2="Order Now"
        btnname1="Demo Drive"
      />
      <Section
        name="Model y"
        description="From 29,4708*"
        para="After federl Tax Credit & Est.Savings"
        backgroundImg="../src/assets/image/img 1.jpg"
        btnname2="Explore Inventory"
        btnname1="Custem Order"
      />
      <Section
        name="Model s"
        description="From 29,4708*"
        para="After federl Tax Credit & Est.Savings"
        backgroundImg="../src/assets/image/img 3.jpg"
        btnname2="Custem Order"
        btnname1="Demo Drive"
      />
      <Section
        name="Model x"
        description="From 29,4708*"
        para="After federl Tax Credit & Est.Savings"
        backgroundImg="../src/assets/image/img 7.jpg"
        btnname2="Custem Order"
        btnname1="Demo Drive"
      />
      <Section
        name="Experience Tesla"
        description="From 29,4708*"
        para="After federl Tax Credit & Est.Savings"
        backgroundImg="../src/assets/image/img5.jpg"
        btnname2="Custem Order"
        btnname1="Demo Drive"
      />
      <Section
        name="Solor Panels"
        description="From 29,4708*"
        backgroundImg="../src/assets/image/Tesla-solar-panel 1.webp"
        btnname2="Custem Order"
        btnname1="Demo Drive"
      />
      {/* <Section
          name="Solor Roof"
          description="From 29,4708*"
          backgroundImg="../src/assets/image/img9.jpg"
          btnname2="Custem Order"
          btnname1="Demo Drive"
        /> */}

      <Section
        name="Accessorie"
        backgroundImg="../src/assets/image/img12.jpg"
        btnname2="Demo Drive"
        btnname1="Custem Order"
      />
      <Footer />
    </div>
  );
}
