
// Initialize the source, keyapi and the element to target:
// You can also set different country.e.g. "in","au","gb","us",etc.
// You can also use these channels:bbc-news,bbc-sport.etc.
// You can also add category: business ,entertainment, health, science ,sports, technology
let newsAccordion = document.getElementById('newsAccordion');
if (newsAccordion.innerHTML ==""){
    let note = document.createElement("h5");
    let notecontent = document.createTextNode("Sir can you, please enter the country and the category of the news.");
    note.appendChild(notecontent);
    note.setAttribute("style","color:rgba(150, 149, 149, 0.607);; margin-top:200px; margin-left:350px");
    newsAccordion.appendChild(note);
}
let sbtn = document.getElementById("sbtn");
let countryBtn1 = document.getElementById("countryBtn1");
countryBtn1.addEventListener("click",()=>{
    
    alert("You can set country code e.g.'in','au','gb','us','ca'");
})
let categoryBtn2 = document.getElementById("categoryBtn2");
categoryBtn2.addEventListener("click",()=>{

    alert("You can set category e.g.'business ,entertainment, health, science ,sports, technology'");
})
sbtn.addEventListener("click",(e)=>{
    e.preventDefault();

    let source = countryBtn1.value;
    let category = categoryBtn2.value;
    let apikey = "0a7f354ceb5d4d0fb2fe79685f8c96f8";
   
    
    // Now make a function to fetch the news from the newsapi.org:
    function getrequest(){
        // Firstly set the url:You can also use sources the place of country.
        let url = `https://newsapi.org/v2/top-headlines?country=${source}&category=${category}&apikey=${apikey}`;
        // Then we use fetch function to fetch the news from the newsapi:
        fetch(url).then(function(responce){
        // then we simply get the responce in the form of jason()
        return responce.json();
    }).then(function(data){
        // Then we simply get the data.
        console.log(data);
        // Then we simply grasp the articles from the data: 
        let articles = data.articles;
        // console.log(articles);
        // We simply make a empty string.
        let html = "";
        // Then we apply for each loop on the articles to get each single article one by one.
        articles.forEach((element,index) => {
            // We simply store each article with styling in the empty html string.
            html += `<div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            <b>Breking News${index+1}: &nbsp;&nbsp;&nbsp;&nbsp;</b><em> ${ element["title"]}</em>
            </button>
            </h2>
            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
            data-bs-parent="#newsAccordion">
            <div class="accordion-body">
            <em>${element["description"]}&nbsp;&nbsp;&nbsp;&nbsp;<a href="${element["url"]}" target="_blank">Click To Read More</a></em>
            </div>
            </div>
            </div>`;
        });
        // Then we simply add each article one by one inside the document.
        newsAccordion.innerHTML = html;
        
    }).catch(function(){
        console.log("Server Error");
    })
}


// We simply call the function:
getrequest();
})