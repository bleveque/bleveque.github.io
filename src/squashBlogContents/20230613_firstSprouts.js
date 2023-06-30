import React from 'react';

export default {
    title: "First Sprouts",
    date: "6/13/23 - 6/18/23",
    path: "first-sprouts",
    contents: (
      <div>
        <p>
          It's been a couple weeks since my last post. Time flies.
        </p>
        <p>
          Since planting is already done, I won't bury the <i>seed</i> in this post -- we now have sprouts! Two of them:

          <div class="image-container">
            <img class="img-medium" src="/squash/first_sprouts.jpeg" alt="Image of two zucchini sprouts"></img>
          </div>

          These are both in the zucchini box, and, as you can see, they are next to each other. Please see the following image
          for their precise location within the box:

          <div class="image-container">
            <img class="img-medium" src="/squash/first_sprouts_all_seed_locations.jpeg" alt="Image showing location of all planted squash seeds"></img>
          </div>

          Of the 13 squash seeds I planted (4 in one box and 9 in the other), the first two to sprout are direct neighbors...a curious coincidence, to the tune
          of a 0.27 probability*. I guess that's not actually <i>so</i> unlikely. But regardless, what is it about these two seeds, or their adjacent
          locations, that made them germinate first? It's an interesting question, worthy of wild speculation.
        </p>

        <h4>Theory 1: soil characteristics</h4>
        <p>
          Recall the observation in the previous post (see: "Planting (5/29/23)") that the color of the two boxes' base soils differed.
          Perhaps the soil in the zucchini box is more hospitible. This doesn't explain why our two specific zucchini seeds sprouted
          earlier than the other zucchini seeds, but it's something. It's also a satisfying callback to the last post.
        </p>

        <h4>Theory 2: spotty watering</h4>
        <p>
          I probably underwatered the seeds over their first two weeks. With fewer waterings, the importance of each was likely magnified, so if one
          watering happened to be more favorable for our two seeds, that may have made the difference.
        </p>
        <p>
          An additional point in support of this theory is that, at least once, I watered using a large plastic bucket rather than a proper watering can. The water
          tended to slosh out unevenly, making it more likely that some seeds received the "right" amount of water and others didn't.
        </p>

        <h4>Theory 3: help from dog</h4>
        <p>
          A dog visited our yard recently and spent some time exploring the raised beds:

          <div class="image-container">
            <img class="img-medium" src="/squash/dog.jpeg" alt="Image of dog sniffing zucchini box"></img>
          </div>

          It appears from this picture that he took particular interest in exactly the area where our two sprouts appeared. This raises some intriguing possibilities:

          <ol>
            <li>The dog aerated the soil by digging around</li>
            <li>Dog saliva helps squash grow</li>
            <li>Proximity to dog barking helps squash grow</li>
          </ol>

          Whatever the specifics, I find this theory -- "help from dog" -- the most plausible. Please be sure to comment if you disagree,
          or if you have other theories!
        </p>

        <p>
          Until next time!
        </p>

        <h3>*Appendix A: 0.27</h3>
        <p>
          The "0.27 probability" was figured using the following definitions of seed adjacency:

          <div class="image-container">
            <img class="img-medium" src="/squash/first_sprouts_all_seed_locations_neighbors.jpeg" alt="Image of overgrown raised planting bed 1"></img>
          </div>

          This graph contains 21 distinct pairs of neighboring seeds, and it contains 78 total distinct pairs of seeds. 21 / 78 &asymp; 0.27.
        </p>

      </div>
    )
  }