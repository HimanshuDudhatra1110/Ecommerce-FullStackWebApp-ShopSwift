import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - ShopSwift"}>
      <div className="row aboutus ">
        <div className="col-md-6 ">
          <img src="/images/cart_about.jpg" alt="aboutus" />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
            Welcome to ShopSwift, where excellence meets innovation. We are a
            passionate team dedicated to redefining ecommerce standards. With a
            focus on delivering tailored products, we aim to exceed your
            expectations. Trust, reliability, and exceptional customer
            experiences are at the core of everything we do. Join us on this
            exciting journey as we revolutionize ecommerce. Discover the
            ShopSwift difference today.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
