window.addEventListener("DOMContentLoaded", function () {
  var innerHTML = ""
  $.ajax({
    url: "http://localhost:3000/employees",
    type: "GET",
    success: function (result) {
      console.log(result);
      let employees = result;
      console.log(employees);
      for (const user of employees) {
        innerHTML += `
        <tr>
        <td>
                        
        <img src=${user.profile}> 
          ${user.name} 
         
      </td>  
      <td>${user.gender}</td>  
      <td>${user.department}</td>
      <td>${user.salary}</td> 
      <td>${user.startDate}</td> 
      <td>
          <img class="del" src="../../../assets/delete.png"  alt="image" onclick='del(${user.id})'>
          <img class="edit" src="../../../assets/edit.png" alt="image">
          
      </td>
      </tr>
      <br>
     
      `

      }


      document.getElementById("display").innerHTML += innerHTML;




    }

  });


  function del(id) {
    id = id;
    $.ajax({
      url: "http://localhost:3000/employees/" + id,
      type: "DELETE",
      success: function (result) {
        console.log("deleted successfully")
      }
    });
  }





});


