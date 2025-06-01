'use client'

import Image from "next/image";
import styles from "./page.module.css";
import { useUser } from "@clerk/nextjs";

export default function Home() {
   const { isSignedIn, user, isLoaded } = useUser();

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <div>Sign in </div>;
  }

  

  return (
   <>

    <section className="section-new">
      <div className="container-new">
        <div className="text-center-new">
<div><h1>Hello {user.firstName}</h1></div>
          <h1 className="heading-new">
            Understand user flow and{' '}
            <strong className="heading-strong-new">increase</strong> conversions
          </h1>

          <p className="paragraph-new">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, nisi. Natus,
            provident accusamus impedit minima harum corporis iusto.
          </p>

          <div className="buttons-new">
            <a href="#" className="btn-primary-new">
              Get Started
            </a>
            <a href="#" className="btn-secondary-new">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

   </>
  );
}
