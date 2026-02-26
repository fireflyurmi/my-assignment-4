// select elements

const totalCount = document.getElementById("total-count");
const interviewCount = document.getElementById("interview-count");
const rejectCount = document.getElementById("reject-count");

const container = document.getElementById("all-job-cards");
const filterCounts = document.getElementById("filter-counts");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectFilterBtn = document.getElementById("reject-filter-btn");

// for initial active tab is all-tab
let currentFilter = "all" ;

let jobs = [];

const cards = document.querySelectorAll(".main-cards");

let idCounter = 1 ;

for(let card of cards){
    jobs.push({
        id: idCounter,
        element: card,
        status: "all"
    });

    card.dataset.id = idCounter ;

    idCounter++ ;
}
updateUI();
// filter buttons events
allFilterBtn.addEventListener('click', function(){
    currentFilter = "all" ;
    updateUI();
});

interviewFilterBtn.addEventListener('click', function(){
    currentFilter = "interview" ;
    updateUI();
});

rejectFilterBtn.addEventListener('click', function(){
    currentFilter = "rejected" ;
    updateUI();
});
// event delegation
container.addEventListener('click', function(e){
    const card = e.target.closest(".main-cards");
    if(!card) return ;

    const id = Number(card.dataset.id);
    const job = jobs.find(j => j.id === id);
// for interview-btn
    if(e.target.closest("#job-card-interview-btn")){
        job.status = job.status === "interview" ? "all" : "interview";
        updateUI();
    }
    
// for reject-btn
    if(e.target.closest("#job-card-reject-btn")){
        job.status = job.status === "rejected" ? "all" : "rejected";
        updateUI();
    }
    
// for delete
    if (e.target.closest("#delete-job")) {
        Swal.fire({
            title: "Are you sure?",
            text: "This job will be permanently deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#dc2626",
            cancelButtonColor: "#6b7280",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "Cancel"
        }).then((result) => {
            if (result.isConfirmed) {
                jobs = jobs.filter(j => j.id !== id);
                card.remove();
                updateUI();

                Swal.fire({
                    title: "Deleted!",
                    text: "The job has been removed.",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false
                });
            }
        });
    }
});
// main update function

function updateUI(){

    updateDashboard();
    applyFilter();
    updateActiveButton();
}
// dashboard update
function updateDashboard() {
    let total = 0 ;
    let interview = 0 ;
    let rejected = 0 ;
    for(let job of jobs){
        if(job.status === "all") total++ ;
        if(job.status === "interview") interview++ ;
        if(job.status === "rejected") rejected++ ;
    }
    totalCount.innerText = total ;
    interviewCount.innerText = interview ;
    rejectCount.innerText = rejected ;
}
// apply filter function
function applyFilter() {
    let visible = 0;

    for (let job of jobs) {

        const statusEl = job.element.querySelector(".job-status");

        // Status label update
        if (job.status === "interview") {
            statusEl.innerText = "INTERVIEW";
            statusEl.className = "job-status bg-green-100 text-green-700 text-sm px-3 py-1 rounded-md font-medium";
        }
        else if (job.status === "rejected") {
            statusEl.innerText = "REJECTED";
            statusEl.className = "job-status bg-red-100 text-red-700 text-sm px-3 py-1 rounded-md font-medium";
        }
        else {
            statusEl.innerText = "APPLIED";
            statusEl.className = "job-status bg-blue-50 text-[#002c5c] text-sm px-3 py-1 rounded-md font-medium";
        }


        if (currentFilter === "all" && job.status === "all") {
            job.element.style.display = "block";
            visible++;
        }
        else if (currentFilter === "interview" && job.status === "interview") {
            job.element.style.display = "block";
            visible++;
        }
        else if (currentFilter === "rejected" && job.status === "rejected") {
            job.element.style.display = "block";
            visible++;
        }
        else {
            job.element.style.display = "none";
        }
    }

    // filter count
    filterCounts.innerText =
        currentFilter === "all"
            ? `${visible} Jobs`
            : `${visible} Jobs`;

    handleEmptyState(visible);
}
function handleEmptyState(visible){
    let old = document.getElementById("empty-state");
    if(old) old.remove() ;

    if(visible === 0){
        const div = document.createElement("div");
        div.id = "empty-state";
        div.className = "text-center py-20 bg-white rounded-2xl mb-20";
        div.innerHTML = `
        <img src="./images/jobs.png" class="mx-auto mb-5">
        <h2 class="font-bold text-xl text-[#002c5c]">No jobs available</h2>
        <p class="text-gray-500 mt-1">Check back soon for new job opportunities</p>
        `;
        container.appendChild(div);
    }
}
function updateActiveButton(){
    const wrappers = [
        allFilterBtn.parentElement,
        interviewFilterBtn.parentElement,
        rejectFilterBtn.parentElement
    ];
    for(const btn of wrappers){
        btn.classList.remove("bg-blue-600","text-white");
        btn.classList.add("bg-blue-100","text-blue-800");
    }

    if(currentFilter === "all"){
        wrappers[0].classList.add("bg-blue-600","text-white");
    }
    if(currentFilter === "interview"){
        wrappers[1].classList.add("bg-blue-600","text-white");
    }
    if(currentFilter === "rejected"){
        wrappers[2].classList.add("bg-blue-600","text-white");
    }
}

