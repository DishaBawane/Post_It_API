/* Declaring DOM VAriable*/
let title = document.querySelector(".title");;
let userEnterText = document.getElementById("usertext");
let userEnterUrl = document.querySelector(".userimgurl");
let category = document.querySelector(".category_get");
let postBtn = document.querySelector(".postbtn");

const postData = async() => {

   try { 
     
    const response = await axios.request({
        method:"post",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers : {
                  "X-Parse-Application-Id": "MVV6avFp",
                  "Content-Type": "application/json",
                },
        data:{
                "title": title.value,
               "description": userEnterText.value,
               "category": category.value,
               "image": userEnterUrl.value,
        },
        
      });
      getData();
      title.value=" ";
      userEnterText.value=" ";
      userEnterUrl.value=" ";
      category.value=" ";




           
   } catch (error) {

      console.error(error.message);
       
   } 
 

  // console.log(response.data);
};


const getData=async()=>{

    const response = await axios.request({
        method:"get",
        url: "https://peerup-web-dev-srv.herokuapp.com/parse/classes/PostIt",
        headers : {
                  "X-Parse-Application-Id": "MVV6avFp",
                  "Content-Type": "application/json",
                },
        data:{} ,
      });
      console.log(response.data)
    //   response.data.results.forEach((postdata) => display(postdata));
    for(let postdata of response.data.results){
        //console.log(postData);
        let date = postdata.createdAt.slice(0,10);
                            
        console.log(date);
                       
         const cardTemplate = `
               <div class="card">
                   <div>
                       <div class="image-container">
                           <img class="image_post" src="${postdata.image}">
                       </div>
                       <div>
                           <div class="title_date_post">
                               <h2 class="title_post">${postdata.title}</h2>
                               <p class="date">${date}<p>
                               </div>
                               <div class="description_post">
                                   <p class="description">${postdata.description}</p>
                               </div>
                               <div class="category_post">
                                   <button class="category">${postdata.category}</button>
                               </div>
                               
                        </div> 
                    </div>
                               
               </div>`;
                   
               const card = document.createElement("article");
               card.innerHTML = cardTemplate;
                   
               document.querySelector('.cardtemplate').appendChild(card);
       }
  

}

  
// postData().then(()=>getdata());


postBtn.addEventListener("click",postData)







