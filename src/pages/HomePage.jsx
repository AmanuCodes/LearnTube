//import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {COURSES_DATA} from "../data/coursesData.js"

export default function HomePage(){
  const topicImgMap = 
  {
    0 : "../assets/images/icons/tech/HTML5.svg",
    1 : "../assets/images/icons/tech/CSS3.svg",
    2 : "../assets/images/icons/tech/JavaScript.svg",
    3 : "../assets/images/icons/tech/React.svg"
  }
  return (
  <main>
    <h1>LearnTube - Master Tech skills</h1>
    <section>
      <article>
        <img src="../assets/images/backgrounds/hero-bg0.jpg" alt="" />
        <h2>Tailored for all levels</h2>
        <button className="start">Start Learning</button>
      </article>
    </section>
    <section>
      <h2>Why choose LearnTube</h2>
      <ul>
        <li>Distraction Free - No Ads, No ditracting contents, No comments</li>
        <li>Progress Tracking - Your progress will be saved and used to reflect your progress</li>
        <li>Organized Catalog- You can browse through different topics and levels of your choice</li>
        <li>No more Content Overload - With carefully selected courses, in our catalog, you will get access to top-tier courses without feeling overwhelmed </li>
        <li>Search anytime - If you want to get supplementary content, you can browse in the search page and learnt it without any distraction</li>
      </ul>
    </section>
    <section>
      <h2>Featured Topics</h2>
      <div>
      {
        COURSES_DATA.map((topic,i)=>(
          <article key={topic.topicId}>
            <img src={topicImgMap?.[i]} alt={`${topic.name} image`}/>
            <Link to="/catalog">
              <h3>{topic.name}</h3>
            </Link>
          </article>
        ))
      }
      </div>
    </section>
    <section>
      <h2>Start now</h2>
      <p>Get access to full features and begin your tech mastery journey</p>
      <button className="start">Start</button>
    </section>
  </main>
  )
}