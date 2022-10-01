/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/




// This function displays the array of student objects to the page with 9 or less students per page.
function showPage ( list, page ) {
   const startIndex = (page * 9) - 9;
   const endIndex = page * 9;
   const studentList = document.querySelector("ul.student-list");
   studentList.innerHTML = '';
  
   for (let i = 0; i < list.length; i++) {
      const studentItem = ` <li class="student-item cf">
      <div class="student-details">
        <img class="avatar" src=${list[i].picture.thumbnail} alt="Profile Picture">
        <h3>${list[i].name.first} ${list[i].name.last}</h3><span class="email">${list[i].email}</span></>
      </div>
      <div class="joined-details">
        <span class="date">Joined ${list[i].registered.date}</span>
      </div>
    </li>`;
      if (i >= startIndex && i < endIndex) {
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }


}



/* 
This function creates the page buttons at the bottom of the page and calls the showPage function to show the rest of the students 
displayed on different pages. 
*/ 
function addPagination (list) {
   const numOfPages = Math.ceil(list.length/9);
   const linkList = document.querySelector("ul.link-list");
   linkList.innerHTML = '';
   for (let i = 1; i <= numOfPages; i++) {
      const button = `<li>
      <button type="button">${i}</button>
    </li>`;
      linkList.insertAdjacentHTML("beforeend", button);
      let activePage = document.querySelector("button");
      activePage.className = "active";
      linkList.addEventListener("click", (event) => {
        if (event.target.tagName === "BUTTON") {
            const clickedButton = event.target;
            document.querySelector(".active").className = '';
            clickedButton.className = "active";
            showPage(data, clickedButton.textContent)
        }
      })
   }
}


// Call functions
showPage(data, 1)
addPagination(data);