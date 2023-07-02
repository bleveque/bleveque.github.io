import React from 'react';
import { Route } from 'react-router-dom';

import blogContents from '../squashBlogContents/index';
import SquashBackground from './SquashBackground';
import './SquashPage.css';

const SquashPage = () => {

  return (
    <div className="root">
      <SquashBackground />
      <a href="/">[home]</a>
      <h1>Squash Blog</h1>

      <h2>Table of Contents</h2>
      <ol>
        { blogContents.map(bc => (<li><a href={`/#/squash/${bc.path}`}>{bc.title} ({bc.date})</a></li>)) }
      </ol>

      <hr />

      <h2 id="context">Context</h2>
      <p>
        I recently placed last in a fantasy football league, and so I was asked to grow squash.
      </p>
      <p>
        In all seriousness, I think gardening is pretty cool and am excited for this challenge; I hope to do a good job.
        This blog is just some nonsense!
      </p>
      <p>
        <i>N.B.</i> A previous year's league loser was asked to write a book report on David Brin's <i>Kiln People</i>;
        the report may be found <a href="/squash/An_Inditment_of_Kiln_People.pdf" download>here</a> (hosted on this site with the author's permission).
      </p>

      <hr />

      <h2 id="disclaimer">Disclaimer</h2>
      <p>
        I am, at present, an unskilled and inexperienced gardener. As such, the contents of this blog shall, under no circumstances,
        be treated as the documented wisdom of a professional or skilled amateur gardener. Any resemblance to reliable gardening advice
        is purely coincidental. Furthermore, I shall not be held responsible, legally or ethically, for any gardening mishaps or
        catastrophes that emanate herefrom. Thank you, and happy gardening!
      </p>

      <br />
      <br />
    </div>
  );
}

export default SquashPage;
