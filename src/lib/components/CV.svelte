<section class="cv">
  <div class="column">
    <h3>Work experience</h3>
    <ol class="list">
      <li class="item">
        <h4 class="place label">Alster, Stockholm</h4>
        <p class="activity">Frontend developer</p>
        <time class="year">2022—</time>
      </li>
      <li class="item">
        <h4 class="place label">Another State, Stockholm</h4>
        <p class="activity">Frontend developer</p>
        <time class="year">2019—2022</time>
      </li>
      <li class="item">
        <h4 class="place label">Another State, Stockholm</h4>
        <p class="activity">Frontend developer intern</p>
        <time class="year">2018—2019</time>
      </li>
      <li class="item">
        <h4 class="place label">Ogilvy & Mather, Amsterdam</h4>
        <p class="activity">Creative / art director</p>
        <time class="year">2015-2016</time>
      </li>
    </ol>
  </div>
  <div class="column">
    <h3>Education</h3>
    <ol class="list">
      <li class="item">
        <h4 class="place label">Medieinstitutet, Stockholm</h4>
        <p class="activity">Frontend developer</p>
        <time class="year">2017-2019</time>
      </li>
      <li class="item">
        <h4 class="place label">Hyper Island, Karlskrona</h4>
        <p class="activity">Digital media creative</p>
        <time class="year">2013-2015</time>
      </li>
      <li class="item">
        <h4 class="place label">Södertörn University, Stockholm</h4>
        <p class="activity">Media technology</p>
        <time class="year">2012-2013</time>
      </li>
    </ol>
  </div>
</section>

<style>

.cv {
		min-height: 100dvh;
		display: grid;
		grid-template-columns: var(--two-cols);
		grid-template-rows: 1fr auto 1fr;
    justify-content: flex-start;
		gap: var(--content-gap);
	}

	.column {
		height: 100%;
		grid-row: 2 / 3;
	}

	.list {
		list-style: none;
    padding-inline-start: 0;
	}

	.item {
		display: grid;
		gap: 0.25em;
		justify-content: space-between;
		margin-top: 2em;
		padding-top: 1em;
		border-top: 1px solid var(--color-text-primary);

	}

	.place {
		grid-column: 1 / 2;
		grid-row: 1 / 2;
	}

	.activity {
		margin-top: 0.125em;
	}
	
	.year {
		grid-column: 2 / 3;
		grid-row: 1 / 2;
	}
	
</style>