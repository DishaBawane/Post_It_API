
/* Declaring DOM VAriable*/

let userEnterText = document.getElementById("usertext");
let userEnterUrl = document.querySelector(".userimgurl");
let postBtn = document.querySelector(".postbtn");


//  const getData =() =>{
  
 
//       let headersListGet = {
//         "X-Parse-Application-Id": "MVV6avFp",
//         "Content-Type": "application/json",
//       }
      
//       let reqOptionsGet = {
//         url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
//         method: "GET",
//         headers: headersList,
//         //  data: {  "title": "HomeKit",
//         //    "description": "HomeKit control",
//         //    "category": "Tech",
//         //    "image": "https://images."},
//       }
      
//       axios.request(reqOptionsGet).then(function (response) {
//         console.log(response.data);
//       })
 
//    for(postData of response.data){
//        //console.log(postData);
//        let date=postData.published_at.slice(0,10);
        
//        const cardTemplate = `
//        <div class="card">
//          <div>
//             <div class="image-container">
//               <img class="image_post" src="${postData.image}">
//             </div>
//             <div>
//               <div class="title_date_post">
//                 <h2 class="title_post">${postData.title}</h2>
//                 <p class="date">${date}<p>
//               </div>
//               <div class="description_post">
//                 <p class="description">${postData.description}</p>
//               </div>
//               <div class="category_post">
//                 <button class="category">${postData.category.name}</button>
//               </div>
            
//           </div> 
//        </div>
             
//        </div>`;
//        const card = document.createElement("article");
//        card.innerHTML = cardTemplate;

//        document.querySelector('.cardtemplate').appendChild(card);

//    }

 
  
// };



let headersListPost = {
  "X-Parse-Application-Id": "MVV6avFp",
  "Content-Type": "application/json",
 }
 
 let reqOptionsPost = {
   url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
   method: "POST",
   headers: headersListPost,
   data: {  "title": "HomeKit",
     "description": "HomeKit control",
     "category": "Tech",
     "image": "https://source.unsplash.com/user/erondu/1600x900"},
 }
 
 axios.request(reqOptionsPost).then(function (response) {
   console.log(response.data);
 }).catch((err)=>{
    console.log("error");
 });



 



// postBtn.addEventListener("click", () => {
//   getData();
//   userEnterText.value = " ";
//   userEnterUrl.value = " ";

// });






