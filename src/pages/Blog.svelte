<script>
const fetchArticles = (async () => {
	const response = await fetch('https://rach-nh.xyz/api/articles.php')
	return await response.json()
})()
</script>


<h4 style="padding-top: 20px; padding-bottom: 20px; margin-left: 30px; color: white;">Blog</h4>
<div class="container">
	{#await fetchArticles}
		<p>Loading...</p>
	{:then data}
		{#each data.articles as article}
		<div class="card mb-3">
		  	<div class="card-body">
		    	<h5 class="card-title">{article.judul_artikel}</h5>
		    	<p class="card-text">{article.artikel_overview}</p>
		    	<p class="card-text"><small class="text-muted">Penulis: {article.author} | {article.tanggal_artikel}</small></p>
		    	<a href="/pages/read_article/{article.id_artikel}">Baca Selengkapnya</a>
		  </div>
		</div>
		{/each}
	{:catch error}
		<p style="color: red">{error.message}</p>
	{/await}
</div>

