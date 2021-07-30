<script>
    
    import Project1 from './projectinfo/Project1.svelte'
    import Project2 from './projectinfo/Project2.svelte'
    import Project3 from './projectinfo/Project3.svelte'
    import Project4 from './projectinfo/Project4.svelte'
    //import Project5 from './projectinfo/Project5.svelte'
    import Project6 from './projectinfo/Project6.svelte'
    import Project7 from './projectinfo/Project7.svelte'
    import Project8 from './projectinfo/Project8.svelte'
    import Choose from './projectinfo/Choose.svelte'

    const projectinfo = [
        { name: 'choose', component: Choose },
        { name: 'project1', component: Project1 },
        { name: 'project2', component: Project2 },
        { name: 'project3', component: Project3 },
        { name: 'project4', component: Project4 },
        //{ name: 'project5', component: Project5 },
        { name: 'project6', component: Project6 },
        { name: 'project7', component: Project7 },
        { name: 'project8', component: Project8 }
    ];
    
    let project = projectinfo[0]
    
    function linktoproject(e) {
        const b = e.target.parentElement.parentElement.id
        //console.log(projectinfo.findIndex(x => x.color === 'BlueThing'));
        const index = projectinfo.findIndex(x => x.name === b)
        project = projectinfo[index]
    }

</script>

<div class="container portofoliocont">
    <div class="row" style="display: flex;">
        <div class="col-sm box-project left">
            <a class="linktoproject" id="project1">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/aplikasi-desktop-penyewaanlapanganfutsal.png">
                </div>
                <div on:click={linktoproject} class="project-title">
                    <h5>Aplikasi Pantau Sewa Lapangan Futsal</h5>
                </div>
            </a>
        </div>
        <div class="col-sm box-project middle">
            <a class="linktoproject" id="project2">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/simple-product-recommendation.png">
                </div>
                <div on:click={linktoproject} class="project-title">
                    <h5>Product Recommendation Module V1</h5>
                </div>
            </a>
        </div>
        <div class="col-sm box-project right">
            <a class="linktoproject" id="project3">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/aplikasi-jual-software.png">
                </div>
                <div class="project-title">
                    <h5 on:click={linktoproject}>Aplikasi Jual Beli Software</h5>
                </div>
            </a>
        </div>
    </div>
    <div class="row" style="display: flex;">
        <div class="col-sm box-project left">
            <a class="linktoproject" id="project4">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/aplikasi-surat-penjualan-dinamis.png">
                </div>
                <div on:click={linktoproject} class="project-title">
                    <h5>Aplikasi Penjualan + Pembuat Surat Dinamis</h5>
                </div>
            </a>
        </div>
        <div class="col-sm box-project middle">
            <a class="linktoproject" id="project5">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/pwa-informasi-bola.png">
                </div>
                <div class="project-title">
                    <h5 on:click={linktoproject}>Website Informasi Pertandingan (PWA Based)</h5>
                </div>
            </a>
        </div>
        <div class="col-sm box-project right">
            <a class="linktoproject" id="project6">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/web-promosi-indihome.png">
                </div>
                <div class="project-title">
                    <h5 on:click={linktoproject}>Website Promosi Marketing Indihome Bekasi</h5>
                </div>
            </a>
        </div>
    </div>
    <div class="row" style="display: flex;">
        <div class="col-sm box-project left">
            <a class="linktoproject" id="project7">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/web-troli-akuradz.png">
                </div>
                <div class="project-title">
                    <h5 on:click={linktoproject}>Website Promosi Troli - Akuradz Trolly</h5>
                </div>
            </a>
        </div>
        <div class="col-sm box-project middle">
            <a class="linktoproject" id="project8">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/catxhilang.png">
                </div>
                <div class="project-title">
                    <h5 on:click={linktoproject}>CAT XHilang Polri</h5>
                </div>
            </a>
        </div>
        <div class="col-sm box-project right">
            <a class="linktoproject">
                <div class="imgproject-cont loading">
                    <img class="lazyload" src="./assets/images/project-list/web-promosi-indihome.png">
                </div>
                <div class="project-title">
                    <h5 on:click={linktoproject}>Coming Soon...</h5>
                </div>
            </a>
        </div>
    </div>
    <div class="container-fluid" id="wreper" style="padding: 0;">
        <img id="loadingproject" src="../public/assets/images/loadingproject.svg" style="padding: 10vh; display: none;">
        <div id="contentinfoproject" style="display:block;">
            <svelte:component this={project.component}/>
        </div>
    </div>
</div>