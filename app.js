
/* Declaring DOM VAriable*/

// let userEnterText = document.getElementById("usertext");
// let userEnterUrl = document.querySelector(".userimgurl");
// let postBtn = document.querySelector(".postbtn");

  
 
      let headersListGet = {
        "X-Parse-Application-Id": "MVV6avFp",
        "Content-Type": "application/json",
      }
      
      let reqOptionsGet = {
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        method: "GET",
        headers: headersListGet,
        //  data: {  "title": "HomeKit",
        //    "description": "HomeKit control",
        //    "category": "Tech",
        //    "image": "https://images."},
      }
      
      axios.request(reqOptionsGet).then(function (response) {
      console.log(response.data);
      
      })
 
 


      // let headersListPost = {
      //   "X-Parse-Application-Id": "MVV6avFp",
      //   "Content-Type": "application/json",
      // }
      
      // let reqOptionsPost = {
      //   url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
      //   method: "POST",
      //   headers: headersListPost,
      //   data: {  "title": "HomeKit",
      //     "description": "HomeKit control",
      //     "category": "Tech",
      //     "image": "https://source.unsplash.com/user/erondu/1600x900"},
      // }
      
      // axios.request(reqOptionsPost).then(function (response) {
      //   console.log(response.data);
      // }).catch((err)=>{
      //     console.log("Error");
      // });


// postBtn.addEventListener("click", () => {
//   getData();
//   userEnterText.value = " ";
//   userEnterUrl.value = " ";

// });






