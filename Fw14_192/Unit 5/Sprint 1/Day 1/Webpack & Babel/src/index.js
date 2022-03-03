
 import("./index.css")
 import image from "./devesh.jpg"
 console.log(image)
 
 const img = document.createElement("img");
 
 img.src = image;
 document.getElementById("root").append(img)

 
   document.querySelector("#myForm").addEventListener("submit",addItem);
     var arr=[];
   function addItem(event){
       event.preventDefault();
       var name =document.querySelector("#name").value;
       var qty=document.querySelector("#qty").value;
       var priority=document.querySelector("#priority").value;
         var todoObj={
             itemName:name,
             itemQty:qty,
             itemPriority:priority,

         };
         arr.push(todoObj);
         console.log(arr);
         localStorage.setItem("todolist",JSON.stringify(arr));
       var row = document.createElement("tr");

       var td1 = document.createElement("td");
       td1.textContent=name ;
       var td2 = document.createElement("td");
       td2.textContent=qty ;
       var td3 = document.createElement("td");
       td3.textContent=priority ;
       if(priority=="high"){
           td3.style.backgroundColor = "red";
       }
       var td4 = document.createElement("td");
       td4.textContent="Delete";
       td4.addEventListener("click",deleteTask);
       
       
       row.append(td1,td2,td3,td4);
       document.querySelector("tbody").append(row);
   }
//    2nd function start here for delete task
   function deleteTask(event){
       console.log(event.target.parentNode);
       event.target.parentNode.remove();
   }

   