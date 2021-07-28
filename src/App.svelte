<script>
	import 'lazysizes'
	import 'lazysizes/plugins/parent-fit/ls.parent-fit'

	import Landing from './Landing.svelte'


	setTimeout(function() {
		const content = document.getElementById("body-content");
	    const loadingnya = document.getElementById("loading-ajax");
	    loadingnya.id = "loading-ajax-end";
	}, 5000)


 //  	function loadPage(page) {
	//     var xhttp = new XMLHttpRequest();

	//     xhttp.onloadstart = function () {
	//       var loadingnya = document.getElementById("loading-ajax");
	//       loadingnya.style.display = "block";
	//     };

	//     xhttp.onreadystatechange = function () {
	//       if (this.readyState == 4) {
	//         var content = document.getElementById("body-content");
	//         var loadingnya = document.getElementById("loading-ajax");

	//         if (this.status == 200) {
	//           content.innerHTML = xhttp.responseText;
	//           loadingnya.id = "loading-ajax-end";
	//           destroySlick();
	//           initiateSlickforWrapper();
	//           initbuttoninfo();
	//           lazy();
	//         } else if (this.status == 404) {
	//           content.innerHTML =
	//             "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Halaman yang anda cari tidak ditemukan :(</p>";
	//           loadingnya.id = "loading-ajax-end";
	//         } else {
	//           content.innerHTML =
	//             "<p style='height: 100%; width: 100%; text-align: center; padding-top: 250px;'>Ups.. Halaman yang anda inginkan tidak dapat diakses! :(</p>";
	//           loadingnya.id = "loading-ajax-end";
	//         }
	//       }
	//     };
	//     xhttp.open("GET", "pages/" + page + ".php", true);
	//     xhttp.send();
	// }
</script>

<div id="loading-ajax">
	<div class="spinner-border" style="width: 3rem; height: 3rem; color: white;" role="status">
		<span class="sr-only">Loading...</span>
	</div>
</div>
<header style="position: absolute; z-index: 20;">
	<div class="HalamanPenuhMenu" id="nav">
		<div class="nav">
			<ul class="nav-mobile-li">
				<li id="list-menu-mobile"><a href="#" data-text="Home">Home</a></li>
				<li id="list-menu-mobile"><a href="#aboutme" onclick="aboutmeBtn();"  data-text="About Me">About Me</a></li>
				<li id="list-menu-mobile"><a href="#mywork" onclick="projectBtn();" data-text="My Project">My Project</a></li>
				<li id="list-menu-mobile"><a href="#myskill" onclick="myskillBtn();" data-text="Skills">Skills</a></li>
				<li id="list-menu-mobile"><a href="#mycertificate" onclick="mycertificateBtn();" data-text="Self Archievement">Self Archievement</a></li>
				<li id="list-menu-mobile"><a href="#endsection" onclick="endsectionBtn();" data-text="Contact">Contact</a></li>
				<li><a href="#blog" onclick="blogBtn();" id="btnBlog" data-text="Blog">Blog</a></li>
			</ul>
		</div>
		<a onclick="menuToggle()" class="close-navbar-btn"><img alt="close-button" src="./assets/images/close-white.svg" width="45" height="45"></a>
	</div>
	<div id="nav-desktop">
		<a href="#"><img alt="logo-website" class="logo-image" src="./assets/images/logoanjaysmall.png" onclick="berandaBtn();"></a>
		<ul class="nav-desktop-li">
			<li><a href="#mywork" onclick="projectBtn();">Project</a></li>
			<li><a href="#endsection" onclick="endsectionBtn();">Contact</a></li>
			<li><a onclick="blogBtn();" id="btnBlog" href="#blog">Blog</a></li>
			<li><a href="#aboutme" onclick="aboutmeBtn();" >About</a></li>
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
	{#if window.location.hash.substr(2) == ''}
		<Landing/>
	{:else}
		<p>HAlooooo</p>
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