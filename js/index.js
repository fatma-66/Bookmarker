


var bookMarkNameInput = document.getElementById("input1");
var bookMarkURLInput = document.getElementById("input2");
var bookMarksBox = [];






if(localStorage.getItem('bookmarks') === null) {
    bookMarksBox=[];
} else {
    bookMarksBox = JSON.parse(localStorage.getItem( 'bookmarks' ));
    displayWebSite();
}


function validateUrl(element) {


    var regex ={
        input1:/^[a-zA-Z0-9 ]{3,}$/ ,
        // input2: /^(http|https)\:\/{2}www\.[a-zA-Z0-9]{0,}\.[a-z]{2,3}\/$/
        input2:  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/
    
    };


    if (regex[element.id].test(element.value)) {
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        
       
        
    }else {
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        return  false;
        
    }

  };

  function deleteValidMark(){
    if(document.getElementById('input1').classList.contains('is-valid') && document.getElementById('input2').classList.contains('is-valid')){
        document.getElementById('input1').classList.remove('is-valid');
        document.getElementById('input2').classList.remove('is-valid');
        
    }
    else{
        return;
    }
  }




  



function addBookMark() {
   var bookmark ={
       code:bookMarkNameInput.value,
       url:bookMarkURLInput.value,
   };

   var popup=``;


   if(document.getElementById('input1').classList.contains('is-valid') && document.getElementById('input2').classList.contains('is-valid')) {
    bookMarksBox.push(bookmark); //add to array
    clearForm();
    displayWebSite();
    localStorage.setItem("bookmarks",JSON.stringify(bookMarksBox));
    deleteValidMark()
    

      
   }else{
       popup +=`<div class=" position-absolute top-0 bottom-0 start-0 end-0 black " id="close">
       
      <div class=" position-relative white z-2 shadow rounded-2 ">
      <div class="first-div d-flex justify-content-between">
      <div class="d-flex py-4 ps-4 ">
      <div class=" rounded-circle circle-1 me-2  "></div>
      <div class=" rounded-circle circle-2 me-2 "></div>
      <div class=" rounded-circle circle-3 "></div>
      </div>
      <div>
      <button  class=" btn border-none py-3 fs-5 " onclick="closePopUp()"><i class="fa-solid fa-xmark me-2 fs-3 "></i></button>
      </div>
      </div>
      <div class="text d-flex flex-column px-4   ">
       <h5 class="text-black align-self-center pb-4 fw-bolder">Site Name or Url is not valid, Please follow the rules below :</h4>
       <h6 class="fw-medium  me-2 fs pb-3 text-danger"><i class="fa-regular fa-circle-right me-2"></i>Site name must contain at least 3 characters</h6>
       <h6 class="fw-medium  me-2 fs pb-3 text-danger  "><i class="fa-regular fa-circle-right me-2"></i>Site URL must be a valid one</h6>
       </div>
       
      
      </div>
       

       </div>`;
       document.querySelector('.popup').innerHTML= popup;

       

   };

  
  
  

  
}



function  clearForm(){
    bookMarkNameInput.value = "";
    bookMarkURLInput.value= "";

}


function displayWebSite(){
 var cartoona = ``;

 for ( i =0 ;i<bookMarksBox.length;i++){
    cartoona +=`<div class="col-md-12 ">
    <div class="sheet ">
    
        <table class="mx-auto w-100  bg-white text-black shadow py-4 ">
            <thead>
                <tr class="border-bottom border-black ">
                    <th scope="col" class="p-4">Index</th>
                    <th scope="col" class="p-4">Website Name</th>
                    <th scope="col" class="p-4">Visit</th>
                    <th scope="col" class="p-4">Delete</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row" class="p-4">${i+1}</th>
                    <td class="p-4 fw-medium  ">${bookMarksBox[i].code}</td>
                    <td class="p-4 "><a href="${bookMarksBox[i].url}" target ="_blank"><button class="btn teal fs-6  py-1  "><i class="fa-solid fa-eye me-2"></i>visit</button></a></td>
                    <td class="p-4"><button  class="btn btn-danger  py-1 " onclick="deleteWebSite(${i})"><i class="fa-solid fa-trash-can me-2"></i>Delete</button></td>
                
                </tr>
            </tbody>
            
        </table>

        


    </div>
</div>`
 }

 document.getElementById("data").innerHTML = cartoona;

}


function deleteWebSite(DeletedIndex){
    bookMarksBox.splice(DeletedIndex,1);
    
   localStorage.setItem("bookmarks",JSON.stringify(bookMarksBox));
   displayWebSite();
    

}


function closePopUp(){
document.getElementById('close').classList.add('d-none');

}









//   function checkvalidation(){
//     var popup=``
//     if(document.getElementById('input1').classList.contains('is-valid')&& document.getElementById('input2').classList.contains('is-valid')) {
//         return;
       
//     }else{
//         popup +=`<div class="position-absolute top-0 bottom-0 start-0 end-0 black">
//         <div class="position-absolute top-50 bottom-50 start-50  end-50 bg-white "></div>

//         </div>`;
//         document.querySelector('.popup').innerHTML= popup;

        

//     };
    
//   }










// (function(){
//     console.log(1);
//     setTimeout(function(){console.log(2)},1000);
//     setTimeout(function(){console.log(3)},0);
//     console.log(4);

// })();
