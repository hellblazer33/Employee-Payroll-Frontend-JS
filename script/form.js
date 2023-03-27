    window.addEventListener("DOMContentLoaded", function () {

    let name = this.document.getElementById("name")
    let gender = $("input[type='radio'].text:checked").val()
  //   let department = $('.checkbox:checked').map(function(_, el) {
  //     return $(el).val();
  // }).get()
    // let profile = $('input[name="radio"]:checked').val();
    //let startDate = $($("day option:selected").val() + "-" + $("month option:selected").val() + "" + $("year option:selected").val())
    let salary = this.document.getElementById("salary")
    let notes = this.document.getElementById("notes")
    let submit = this.document.getElementById("submit")
    let date = this.document.getElementById("date")
    let month = this.document.getElementById("month")
    let year = this.document.getElementById("year")

    
    // console.log(name)
  
    submit.addEventListener("click", () => {
      let data = {
        name: name.value,
        profile: $("input[type='radio'].profile:checked").val(),
        gender: $("input[type='radio'].text:checked").val(),
        department: $('.checkbox:checked').map(function() {return this.value;}).get().join(','),
      //   department:$('.checkbox:checked').map(function(_, el) {
      //     return $(el).val();
      // }).get(),
        startDate: date.value + "-" + month.value + "-" + year.value,
        salary: salary.value,
        notes: notes.value
        
      }
      
      
  
      $.ajax({
        url: "http://localhost:3000/employees",
        type: "POST",
        data: data,
        success: function (result) {
          console.log(result);
          window.location.href = "../pages/dashboard.html";
        },
      });
  
    });
  
  });
