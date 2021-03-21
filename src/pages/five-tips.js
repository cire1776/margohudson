import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import CallToAction from "../components/CallToAction";

import "./five-tips.scss";

function FiveTips() {
  return (
    <div className="container">
      <MainHeader barQuote="“It isn't easy.  But it IS possible”" />

      <main className="five-tips">
        <section>
          <figure></figure>
          <article>
            <h1>1. Take the First Step</h1>
            <h2>Everyone starts somewhere</h2>
            <p>
              Tell yourself that everyone who has succeeded took that first
              step.
            </p>
            <p>
              You are never too old. Remember that what you put into it is what
              you'll get out of it.
            </p>
            <p>You'll be surprised by what you can accomplish!</p>
          </article>
        </section>
        <CallToAction />
        <section className="reverse">
          <blockquote>
            <hr />
            <p>
              There is light at the end of the tunnel — even if you don't see
              it.
            </p>
            <p>
              Have faith! It is not easy, <span>but it is possible</span>
            </p>
            <hr />
          </blockquote>
          <article>
            <h1>2. Start Believing in Yourself</h1>
            <h2>You CAN do it</h2>
            <p>
              Find inspirational quotes online. Have them sent to your phone
              daily.
            </p>
            <p>I like to read self-help books and positive messages.</p>
            <p>
              Read about how other people got their lives together. If they did
              it, you can do it too.
            </p>
          </article>
        </section>
        <CallToAction />
        <section>
          <blockquote>
            <hr />
            <p>
              Practice doesn't make you perfect, but it does make you better!
            </p>
            <hr />
          </blockquote>
          <article>
            <h1>3. Study All the Time</h1>
            <h2>I studied all the time</h2>
            <p>
              On my lunchbreak, on my 15-minute break, while I was waiting on my
              ride. On the bus, on vacation, on my day off. Waiting in the
              doctor's office. Waiting for the laundry to finish.
            </p>
            <p>
              Study every chance you get. Get up earlier. Study five minutes
              before bed. Make it part of your daily routine.
            </p>
            <p>
              Every little bit helps — you'll be surprised at how far you will
              go.
            </p>
            <p>One success leads to another.</p>
          </article>
        </section>
        <CallToAction />
        <section className="step-4">
          <figure></figure>
          <article>
            <h1>4. Want It</h1>
            <h2>Do You WANT a Better Life?</h2>
            <p>
              I did! I wanted a better life. Now I have one. I didn't give up. I
              wanted it too much.
            </p>
            <p>
              You've got to want it. You've got to do it. It's hard work. No one
              can do it for you.
            </p>
          </article>
        </section>
        <CallToAction />
        <section className="step-5 reverse">
          <figure></figure>
          <article>
            <h1>5. Finish One Goal</h1>
            <h1>...Then Reach for Another!</h1>
            <h2>
              You can learn to do <span>anything</span>
            </h2>
            <p>
              After I got my GED<sup>®</sup>, <em>I didn't stop learning.</em>
            </p>
            <p>
              I read more. I learned to knit. I took music lessons and now
              practice every day on my keyboard.
            </p>
            <p>
              <em>Your world is limitless.</em> Keep going.
            </p>
          </article>
        </section>
      </main>

      <MainFooter />
    </div>
  );
}

export default FiveTips;
