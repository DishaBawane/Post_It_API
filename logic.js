
/* Declaring DOM VAriable*/

let userEnterText = document.getElementById("usertext");
let userEnterUrl = document.querySelector(".userimgurl");
let postBtn = document.querySelector(".postbtn");


const getData =() =>{
  
 
      let headersList = {
        "X-Parse-Application-Id": "MVV6avFp",
        "Content-Type": "application/json",
      }
      
      let reqOptions = {
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        method: "GET",
        headers: headersList,
      }
      
      axios.request(reqOptions).then(function (response) {
      console.log(response.data);
        
      for(let postData of response.data){
        console.log(postData);
        let date=postData.createdAt.slice(0,10);
        
        const cardTemplate = `
        <div class="card">
          <div>
            <div class="image-container">
              <img class="image_post" src="${postData.image}">
            </div>
            <div>
              <div class="title_date_post">
                <h2 class="title_post">${postData.title}</h2>
                <p class="date">${createdAt}<p>
              </div>
              <div class="description_post">
                <p class="description">${postData.description}</p>
              </div>
              <div class="category_post">
                <button class="category">${postData.category}</button>
              </div>
            
          </div> 
        </div>
              
        </div>`;

        const card = document.createElement("article");
        card.innerHTML = cardTemplate;

        document.querySelector('.cardtemplate').appendChild(card);
        
      }
 

   })

  };

 
// let headersListPost = {
//   "X-Parse-Application-Id": "MVV6avTp",
//   "Content-Type": "application/json",
//  }
 
//  let reqOptionsPost = {
//    url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
//    method: "POST",
//    headers: headersListPost,
//    data: {  "title": "HomeKit",
//      "description": "HomeKit control",
//      "category": "Tech",
//      "image": "https://images."},
//  }
 
//  axios.request(reqOptionsPost).then(function (response) {
//    console.log(response.data);
//  }).catch((err)=>{
//     console.log("error");
//  });



 
postBtn.addEventListener("click", () => {
  getData();
  userEnterText.value = " ";
  userEnterUrl.value = " ";

});




