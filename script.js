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

    idCounter = card.dataset.id ;

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
    if(e.target.closest("#delete-job")){
        jobs = jobs.filter(j => j.id !== id);
        card.remove();
        updateUI();
    }
});
