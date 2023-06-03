import React from 'react';
import './SquashPage.css';

const SquashPage = () => {
  return (
    <div className="root">
      <a href="/">[home]</a>
      <h1>Squash Blog</h1>

      <h2>Table of Contents</h2>
      <ol>
        <li><a href="#planting">Planting (5/29/23)</a></li>
        <li><a href="#context">Context</a></li>
        <li><a href="#disclaimer">Disclaimer</a></li>
      </ol>

      <h2 id="planting">Planting (5/29/23)</h2>
      <p>
        When growing squash, the first thing you should do is to bury several squash seeds in some dirt.
        This is called "planting", "sowing", or "squashing". A prerequisite step, of course, is to find
        dirt; I found some in two neglected raised beds in the yard, which you can just make out in the
        images below:

        <div class="image-container">
          <img class="img-medium" src="/squash/raised_beds_pre_prep_2.jpeg" alt="Image of overgrown raised planting bed 1"></img>
          <img class="img-medium" src="/squash/raised_beds_pre_prep_3.jpeg" alt="Image of overgrown raised planting bed 2"></img>
        </div>

        As you can see, plants have successfully grown here before, so I knew I was on the right track.
      </p>
      <p>
        I set about clearing the beds of weeds and old leaves. This left only a layer of old dirt and some
        slugs, which seemed keen to wander out on their own:

        <div class="image-container">
          <img class="img-medium" src="/squash/slug_2.jpeg" alt="Image of slug leaving raised planting bed 1"></img>
          <img class="img-medium" src="/squash/slug_4.jpeg" alt="Image of slug leaving raised planting bed 2"></img>
        </div>
      </p>
      <p>
        When all was said and done:

        <div class="image-container">
          <img class="img-large" src="/squash/raised_beds_post_prep_1.jpeg" alt="Image of cleared raised beds"></img>
        </div>

        This scene is likely unremarkable to a casual observer, but close inspection reveals two different colors of dirt.
        This indicates something critical about the acidity, moisture level, and age -- in other words, the squash-friendliness --
        of the soil. Expect the blog to revisit this observation frequently as we compare the growth patterns of the squash in each
        box. Never mind that one box will hold butternut squash and the other zucchini.
      </p>
      <p>
        After clearing the boxes, it was time to put a layer of fresh soil down. I always use Organic All Natural Garden Soil for
        this purpose:

        <div class="image-container">
          <img class="img-large" src="/squash/soil_bags.jpeg" alt="Image of soil bags"></img>
          <br />
          <img class="img-large" src="/squash/raised_beds_post_soil_2.jpeg" alt="Image of beds and pot with fresh soil"></img>
        </div>

        These beds are looking good! You'll notice, too, a small pot in frame. This also got a fresh layer of soil, but no, I
        didn't plant squash in that.....
      </p>
      <p>
        It was now time to plant. In the left box, I planted approximately 9 zucchini seeds in a sort of geometrically optimized
        lattice pattern. These are probably closer together than they ultimately should be, so I may trim a couple out later. In the right
        box, I planted 4 butternut squash seeds in a squarish pattern. In the small pot in the middle, I planted several jalapeno
        seeds in a sort of snowflake or flower pattern, with one in the middle and several closer to the edge.
      </p>
      <p>
        The location of the raised beds is admittedly not ideal for growing squash, as I don't believe they get as much sunlight
        as squash would prefer, but we'll see.
      </p>
      <p>
        Thanks for reading, and please be sure to comment with any squash-growing tips!
      </p>


      <h2 id="context">Context</h2>
      <p>
        I recently placed last in a fantasy football league, and so I was asked to grow squash.
      </p>
      <p>
        N.B. A previous year's league loser was asked to write a book report on David Brin's <i>Kiln People</i>;
        the report may be found <a href="">[todo]</a>.
      </p>
      
      <h2 id="disclaimer">Disclaimer</h2>
      <p>
        I am, at present, an unskilled and inexperienced gardener, though I wish to be a skilled and experienced gardener. In
        the meantime, the contents of this blog shall, under no circumstances, be treated as the documented wisdom of a
        professional or skilled amateur gardener. Any resemblance to reliable gardening advice is purely coincidental. Furthermore,
        I shall not be held responsible, legally or ethically, for any gardening mishaps or catastrophes that emanate herefrom.
        Thank you, and happy gardening!
      </p>

    </div>
  );
}

export default SquashPage;
