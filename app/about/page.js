// FILEPATH: e:/Next js/nexthype/app/about/page.js

import React from "react";

export default function About() {
  return (
    <>
<section className="blog-timeline">
  <h2 className="blog-heading">Our Product Journey</h2>
  <p className="blog-intro">
    Follow along as we mark the key milestones in our development process. From kickoff to launch, every step counts.
  </p>

  <ol className="timeline">
    <li className="timeline-item">
      <span className="timeline-dot"></span>
      <div className="timeline-content">
        <time className="timeline-date">12/02/2025</time>
        <h3 className="timeline-title">Kickoff</h3>
        <p className="timeline-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
          adipisci tenetur sunt quae exercitationem sed pariatur porro!
        </p>
      </div>
    </li>

    <li className="timeline-item">
      <span className="timeline-dot"></span>
      <div className="timeline-content">
        <time className="timeline-date">15/03/2025</time>
        <h3 className="timeline-title">First Milestone</h3>
        <p className="timeline-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
          adipisci tenetur sunt quae exercitationem sed pariatur porro!
        </p>
      </div>
    </li>

    <li className="timeline-item">
      <span className="timeline-dot"></span>
      <div className="timeline-content">
        <time className="timeline-date">24/04/2025</time>
        <h3    className="timeline-title">Launch</h3>
        <p className="timeline-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga officiis tempora ipsum
          adipisci tenetur sunt quae exercitationem sed pariatur porro!
        </p>
      </div>
    </li>
  </ol>
</section>

    </>
  );
}