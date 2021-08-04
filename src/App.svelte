<script>
	import 'lazysizes'
	import 'lazysizes/plugins/parent-fit/ls.parent-fit'
	import { onMount } from 'svelte'

	import Landing from './pages/Landing.svelte'
	import Portofolio from './pages/Portofolio.svelte'
	import Blog from './pages/Blog.svelte'

	setTimeout(function() {
		const content = document.getElementById("body-content");
	    const loadingnya = document.getElementById("loading-ajax");
	    loadingnya.id = "loading-ajax-end";
      destroySlick();
			initiateSlickforWrapper();
	}, 3000)

	let pageposition = 'landing';

	function loadpagee(e) {
			console.log(e.detail)
			load(e.detail)
	}

	function loadpage(e) {
		e.preventDefault()

		console.log(e.target.getAttribute('data-text'))

		const whichpage = e.target.getAttribute('data-text')

		if (whichpage === 'nav-desktop' || whichpage === 'aboutme' || whichpage === 'mywork' || whichpage === 'myskill' || whichpage === 'mycertificate' || whichpage === 'endsection') {
			if (pageposition !== 'landing') {
				load('landing')
				pageposition = 'landing'
				setTimeout(()=> {
					window.scrollTo(0, document.getElementById(whichpage).offsetTop)
					// document.getElementById(whichpage).scrollIntoView()
				},3000)
			} else {
				window.scrollTo(0, document.getElementById(whichpage).offsetTop)
				// document.getElementById(whichpage).scrollIntoView()
			}
		}

		if (whichpage === 'landing' || whichpage === 'blog') {
			load(whichpage)
		}
	}

	function load(page){

		const laman = page

		var loadingnya = document.getElementById("loading-ajax-end");
    loadingnya.id = "loading-ajax";
    
    setTimeout(() => {
    	var loadingend = document.getElementById("loading-ajax");
      loadingend.id = "loading-ajax-end";
      pageposition = laman;
      if (laman === 'landing') {
      	destroySlick();
      	initiateSlickforWrapper();
      }
    }, 1500)
  }

  window.$(document).scroll(function () {
  	if (pageposition === 'landing') {
  		window.$("#btn-vert-nav").css('display','flex')
  		var y = window.$(this).scrollTop()
	    if (y > 100) {
	      window.$("#fixed-btn-navbar").addClass("active")
	      window.$("#btn-vert-nav").addClass("active")
	    } else {
	      window.$("#fixed-btn-navbar").removeClass("active")
	      window.$("#btn-vert-nav").removeClass("active")
	    }
  	} else {
  		window.$("#btn-vert-nav").css('display','none')
  	}

    var t = window.$(this).scrollTop()
    if (t > 500) {
      window.$(".btn-portofolio-dl").fadeIn()
    } else {
      window.$(".btn-portofolio-dl").fadeOut()
    }
  });

</script>

<div id="loading-ajax">
	<div class="spinner-border" style="width: 3rem; height: 3rem; color: white;" role="status">
		<span class="sr-only">Loading...</span>
	</div>
</div>
<header style="position: relative; z-index: 20;">
	<div class="HalamanPenuhMenu" id="nav">
		<div class="nav">
			<ul class="nav-mobile-li">
				<li id="list-menu-mobile"><a href="#" on:click={loadpage} data-text="nav-desktop" data-menu="Home">Home</a></li>
				<li id="list-menu-mobile"><a href="#aboutme" on:click={loadpage} data-text="aboutme" data-menu="About Me">About Me</a></li>
				<li id="list-menu-mobile"><a href="#mywork" on:click={loadpage} data-text="mywork" data-menu="My Project">My Project</a></li>
				<li id="list-menu-mobile"><a href="#myskill" on:click={loadpage} data-text="myskill" data-menu="Skills">Skills</a></li>
				<li id="list-menu-mobile"><a href="#mycertificate" on:click={loadpage} data-text="mycertificate" data-menu="Self Archievment">Self Archievement</a></li>
				<li id="list-menu-mobile"><a href="#endsection" on:click={loadpage} data-text="endsection" data-menu="Contact">Contact</a></li>
				<li><a href="#blog" on:click={loadpage} id="btnBlog" data-text="blog" data-menu="Blog">Blog</a></li>
			</ul>
		</div>
		<a onclick="menuToggle()" class="close-navbar-btn"><img alt="close-button" src="./assets/images/close-white.svg" width="45" height="45"></a>
	</div>
	<div id="nav-desktop">
		<a href="#"><img alt="logo-website" class="logo-image" src="./assets/images/logoanjaysmall.png" on:click={loadpage} data-text="nav-desktop"></a>
		<ul class="nav-desktop-li">
			<li><a href="#mywork" on:click={loadpage} data-text="mywork">Project</a></li>
			<li><a href="#endsection" on:click={loadpage} data-text="endsection">Contact</a></li>
			<li><a href="#blog" on:click={loadpage} data-text="blog">Blog</a></li>
			<li><a href="#aboutme" on:click={loadpage} data-text="aboutme">About</a></li>
		</ul>
		<div class="portofolio-button-container" id="cv-button-landing1">
			<a href="cv.pdf"><span><i class="fas fa-file-alt" style="margin-right: 4px;"></i></span> Portofolio</a>
		</div>
		<div class="btn-navbar-expand-container">
			<a onclick="menuToggle()" id="toggle"><img src="./assets/images/expand_more.svg" class="navbarbutton" height="24" width="24" alt="tombol menu"></a>				
		</div>
	</div>
</header>

<main id="body-content">
	{#if pageposition === 'landing'}
		<Landing on:loadportofolio={loadpagee}/>
	{:else if pageposition === 'blog'}
		<Blog/>
	{:else}
		<Portofolio/>
	{/if}
</main>

<footer>
	    <p>&#169;rach-nh.xyz (last updated: 19:20, 28 Juli 2021).</p>
</footer>
<a href="cv.pdf" class="btn-portofolio-dl">
	<i class="fas fa-file-alt my-float"></i>
</a>
<div class="btn-navbar-expand-container" id="fixed-btn-navbar">
	<a onclick="menuToggle()" id="toggle"><img src="./assets/images/expand_more.svg" class="navbarbutton" alt="icon-tampil-menu" height="24" width="24"></a>	
</div>
<div class="btn-group-vertical" id="btn-vert-nav">
  <a type="button" class="btn btn-dark" href="#"><img alt="tombol beranda" src="./assets/images/home-white.svg"></a>
  <a type="button" class="btn btn-dark" href="#aboutme"><img src="./assets/images/turned_in-white.svg" alt="tombol tentang saya"></a>
  <a type="button" class="btn btn-dark" href="#mywork"><img src="./assets/images/folder_special-white.svg" alt="tombol my work"></a>
  <a type="button" class="btn btn-dark" href="#myskill"><img src="./assets/images/coding.svg" height="18" width="18" alt="tombol my work"></a>
  <a type="button" class="btn btn-dark" href="#mycertificate"><img src="./assets/images/medal.svg" height="18" width="18" alt="tombol my work"></a>
</div>