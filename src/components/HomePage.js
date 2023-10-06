import React from 'react';

import './HomePage.css';


const HomePage = () => {
  const face1 = '                          /--- //\\_         /\\\\/\\/\\-\\/\\-\\      -/\\M\\\\/\\ \\\\MM-\\   ///          ||\\|   //            \\\\|   ||/==>   <==\\ |||   || <a>   <a>   |/)  \\|      |     /|/    |    / \\    /||     |  _ ^-^) _   |     \\\\( ______ )/ /      \\  \\____/ / /        \\         /          \\\\_____//      ';

  return (
    <div className="home-root">
      <h3>
        Ben LeVeque
      </h3>
      <hr />
      <h4>Professional</h4>
      <p>
        <a href="https://www.linkedin.com/in/benjamin-leveque-5a534361">LinkedIn</a>
      </p>
      <h4>Non-professional</h4>
      <p>
        <a href="/#/squash">Squash blog</a>
      </p>
      <hr />
      <h4>Archive</h4>
      <p>
        <a href="/#/2023_archive_home">[2023] Personal website</a>
      </p>
      <hr />
      <div class="footer">
        <p>
          This site is a member of the <a href="https://billdebeest.club">Bill De Beest webring</a>!
        </p>
        <p>
          <a href="https://billdebeest.club/prev">&lt;-- previous</a>&nbsp;&nbsp;&nbsp;<a href="https://billdebeest.club/random">!random!</a>&nbsp;&nbsp;&nbsp;<a href="https://billdebeest.club/next">next --&gt;</a>

        </p>
      </div>
    </div>
  );
}

export default HomePage;
