$(document).ready(() => {
    $.get("./MOCK_DATA.json", (data) => {
      renderCards(data);
  
      $("#btnAll").on("click",  () => {
        renderCards(data); 
      });
  
      $("#btnMale").on("click",  () => {
        const maleData = data.filter((person) => person.gender === "Male");
        renderCards(maleData);
      });
  
      $("#btnFemale").on("click",  () => {
        const femaleData = data.filter((person) => person.gender === "Female");
        renderCards(femaleData); 
      });
  
      $("#btnOther").on("click",  () => {
        const otherData = data.filter((person) => person.gender !== "Male" && person.gender !== "Female");
        renderCards(otherData); 
      });
  
      function renderCards(users) {
        const cardContainer = $("#card-container");
        cardContainer.empty();
        if (users.length === 0) {
          cardContainer.append("<p>No users found for this filter.</p>");
        } else {
          users.forEach((user) => {
            cardContainer.append(`
              <div class="col-md-4 col-lg-3">
                <div class="card text-center">
                  <img src="${user.profile}" alt="Profile Image" class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                    <p class="card-text">${user.email}</p>
                    <p class="text-muted">${user.gender}</p>
                  </div>
                </div>
              </div>
            `);
          });
        }
      }
    });
  });