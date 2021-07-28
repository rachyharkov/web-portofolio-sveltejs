<script type="text/javascript">

	import { projectshowup } from './ProjectsShowcase.js'
	import { archievments } from './Archievment.js'
	import { skills, tools } from './Skill.js'

	const lazy = function lazy() {
	  document.addEventListener('lazyloaded', function (e)  {
	    // e.target.parentNode.classList.add('image-loaded')
	    e.target.parentNode.classList.remove('loading')
	    e.target.parentNode.classList.add('loaded')
	  })
	}

	lazy()

	let backstory = '';
	let showbackstory = false;
	function showbackstorydescription(e) {
		console.log(e.target.innerText)
		const backstorys = skills.find((a) => { if(a.name == e.target.innerText) return a })
		backstory = backstorys.backstory
	}
</script>

<div class="landing-page">
	<div class="img-welcome-background" style="width: 100%;
        overflow: hidden;
        height: 100%;">
		<img data-src="./assets/images/bg-black.webp" class="lazyload" style="width: 100%;
    object-fit: cover;
    min-height: 100vh;">
	</div>
	<div class="welcome-message">
		<h1>Saya membangun hal yang luar biasa</h1>
		<p>Front-End Developer and Desktop Programmer</p>
		<div class="portofolio-button-container" id="cv-button-landing2">
			<a href="cv.pdf"><span><i class="fas fa-file-alt" style="margin-right: 5px;"></i></span> Portofolio</a>
		</div>
	</div>
</div>
<div class="aboutme-wrapper" id="aboutme">
	<h1>Tentang Saya</h1>
	<br>
	<div class="container">
		<div class="row">
			<div class="col-sm-6 loading">
				<img alt="foto-profil" class="img-fluid fotoprofil lazyload" data-src="./assets/images/technicianpic.jpg">
			</div>
			<div class="col-sm-6" style="background-color: gray;">
				<div class="aboutme-info">
					<p>Halo! Nama saya Rachmad Nur Hayat, saya adalah mahasiswa dari salah satu universitas di Bekasi, saya menciptakan berbagai aplikasi komputer untuk membantu pekerjaan sektor UKM, dan juga pembuatan website untuk mempromosikan bisnis mereka.</p>
					<p>Saya sangat senang mempelajari hal-hal baru dibidang IT, Indomie Goreng adalah kesukaan saya, dan juga olahraga basket. Disamping aktivitas saya mengerjakan project pribadi, saya juga menjual Troli untuk membantu pekerjaan angkut barang sekaligus menjadi kurirnya untuk Ayah saya.</p>
				</div>		
			</div>
		</div>	
	</div>
</div>				
<div class="mywork-wrapper" id="mywork">
	<h1>My Work</h1><span class="view-allwork-href"><a onclick="portofolioBtn();" id="linktoportofolio" href="#portofolio" style="color: gainsboro; text-decoration: none;"><i class="fas fa-fw fa-chevron-right"></i> View all work</a></span>
	<div class="wrapper">
		{#each projectshowup as project}
		<div class="card">
			<img src="{project.img}" class="project-picture" alt="{project.imgAlt}">
			<div class="card-info">
				<span><i class="{project.type}"></i></span>
				<h5>{project.subtitle}</h5>
				<p>{project.description}</p>
				<div>
					<a href="{project.link}" target="_blank" class="btn btn-dark">Take a look</a>
				</div>
			</div>
			<p class="project-title">{project.title}</p>
		</div>
		{/each}
		<div class="card">
			<img src="./assets/images/chevron-circle-right-solid.svg" width="120" style="margin: auto;" class="project-picture" alt="Lihat lebih banyak">
			<div class="card-info">
				<p style="margin-top: 15vh;">Ingin lihat lebih banyak project yang sudah saya buat?</p>
				<a class="btn btn-light" onclick="portofolioBtn();" href="#portofolio" role="button"><i class="fas fa-fw fa-chevron-right"></i> Lihat lainnya</a>
				
			</div>
		</div>
	</div>
</div>
<div class="myskill-wrapper" id="myskill">
	<h1>Kemampuan</h1>
	<h6 style="margin-top: 20px; color: white; margin-bottom: 20px;"></h6>
	<div class="container">
		<div class="row">
			<div class="col-sm" style="
    display: flex;
    flex-direction: column;
    justify-content: center;
">
				<p style="color: white;">Untuk bisa mengerjakan project diatas, saya membutuhkan kemampuaan sebagai berikut.</p>
				<p style="color: white;">{backstory}</p>
			</div>
			<div class="col-sm">
				<div style="display: flex;flex-wrap: wrap;justify-content: center;">
					{#each skills as skill}
						<div class="card-box">
							<i class="{skill.icon} skill-icon" style="font-size: 4em;"></i>
							<div class="title-skill">
								<p on:click={showbackstorydescription} style="cursor: help;">{skill.name}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<h6 style="margin-top: 20px; color: white; margin-bottom: 20px;"></h6>
	<div class="container">
		<div class="row">
			<div class="col-sm" style="
    display: flex;
    flex-direction: column;
    justify-content: center;
">
				<p style="color: white;">Saya begitu senang teamwork, maka dari itu saya menggunakan tools berikut.</p>
			</div>
			<div class="col-sm">
				<div style="display: flex;flex-wrap: wrap;justify-content: center;">
					{#each tools as tool}
						<div class="card-box">
							<i class="{tool.icon} skill-icon" style="font-size: 4em;"></i>
							<div class="title-skill">
								<p>{tool.name}</p>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
<div id="particles-js" style="position: relative;">
	<h2 style="position: absolute;
    top: 19vw;
    font-size: 2vw;
    color: #aeaeae;
    width: 100%;
    padding: 40px;">If you do what you always did, you will get what you always got.</h2>
</div>
<div class="mycertificate-wrapper" id="mycertificate">
	<h1>Pencapaian</h1>
	<h6>Tidak terlalu hebat, setidaknya saya pernah mencoba sedikit hal. Apapun besaran dan kecilnya suatu pengalaman, saya selalu bersyukur dan menghargainya.</h6>
	<div class="wrapper">
		{#each archievments as arch}
			<div class="card">
				<img src="{arch.img}" class="certificate-picture" alt="arch.imgAlt">
				<div class="card-info">
					<h5>{arch.title}</h5>
					<p>{arch.description}</p>
				</div>
			</div>
		{/each}
	</div>	
</div>
<div class="end-section" id="endsection">
	<h1>Anda sudah sampai di penghujung!</h1>
	<br>
	<div class="container">
		<div class="row">
			<div class="col-sm salam-penutup">
				<p>Terima kasih sudah datang ke website ini, saya sangat senang jika anda ingin hanya sekedar untuk <i>membeli troli dari ayah saya</i>, melakukan kerjasama untuk mengembangkan bisnis anda semakin maju dan membantu proses pekerjaan anda agar jadi lebih mudah dengan memanfaatkan sebuah perangkat lunak sesuai dengan ekspetasi.</p>
				<p>Jika ingin menghubungi saya, untuk sementara ini saya hanya tersedia melalui email <a style="color: white;" href="mailto:me@rach-nh.xyz">me@rach-nh.xyz</a>.</p>
				<h4>Have a wonderful day and see you on the project we will work on!</h4>
			</div>
			<div class="col">
				<figure>
					<img src="./assets/images/end-section-pic.jpg" class="img-fluid end-section-pic">
					<figcaption class="end-section-pic-capt" style="font-size: 8px;">Hanya foto liburan di Selat Sunda - 1 Maret 2020</figcaption>
				</figure>
			</div>
		</div>
	</div>
</div>

