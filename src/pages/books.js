import React from "react";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import "./books.scss";

function Books() {
  return (
    <div className="container">
      <MainHeader barQuote="Something wise about books" />
      <main>
        <section className="what-am-i-reading">
          <figure></figure>
          <article>
            <h1>What Am I Reading Right Now?</h1>
            <ul className="reading-list">
              <li>Manifest Your Destiny, Wayne Dyer</li>
              <li>You Can Heal Your Life, Lousie Hay</li>
              <li>See You at the Top, Zig Ziglar</li>
            </ul>
          </article>
        </section>
        <section className="books-i-recommend">
          <h1>Books I Recommend</h1>
          <ul className="recommendations">
            <li>Manifest Your Destiny, Wayne Dyer</li>
            <li>You Can Heal Your Life, Lousie Hay</li>
            <li>See You at the Top, Zig Ziglar</li>
            <li>The Power of I Am, Joel Olsteen</li>
            <li>Outliers, Malcolm Gladwell</li>
            <li>The Slight Edge, Jeff Olsteen</li>
            <li>The Alchemist, Paulo Coelho</li>
            <li>Think Better, Live Better, Joel Olsteen</li>
          </ul>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}

export default Books;
