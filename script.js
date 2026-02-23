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
