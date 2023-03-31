$(document).ready(function () {
    let id = localStorage.getItem("id");
    console.log(id);

    $.ajax({
        url: "http://localhost:3000/employees/" + id,
        type: "GET",
        success: function (response) {
            console.log(response);
            document.getElementById("name").value = response.name;
            $(`input:radio'[value="${response.profile}"]`).prop("checked", true);
            $(`input:radio'[value="${response.gender}"]`).prop("checked", true);
            var str = response.department

            var str1 = "HR";
            var str2 = "Finance"
            var str3 = "Sales"
            var str4 = "Engineer"
            var str5 = "Others"

            if (str.includes(str1)) {

                
                if (document.getElementById("HR").value == str1) {
                    document.getElementById("HR").checked = true;

                }
            }

            if (str.includes(str2)) {

                if (document.getElementById("Finance").value == str2) {
                    document.getElementById("Finance").checked = true;

                }
            }

            if (str.includes(str3)) {

                if (document.getElementById("Sales").value == str3) {
                    document.getElementById("Sales").checked = true;

                }
            }
            if (str.includes(str4)) {
                if (document.getElementById("Engineer").value == str4) {
                    document.getElementById("Engineer").checked = true;

                }
            }
            if (str.includes(str5)) {
                if (document.getElementById("Others").value == str5) {
                    document.getElementById("Others").checked = true;

                }
            }

            // response.department.foreach(department => {
            //     $(`input:checkbox[value="${department}"]`).prop("checked",true);
            // });


            // document.getElementsByClassName("profile").value = response.profile;
            // document.getElementsByClassName("gender").value = response.gender;
            // document.getElementById("department").value = response.department;
            // document.getElementById("day").value = response.day;
            // document.getElementById("month").value = response.month;
            // document.getElementById("year").value = response.year;
            let text = response.startDate;
            let date = text.slice(0, 2);
            let month = text.slice(3, 5);
            let year = text.slice(6, 10);
            console.log(date)
            document.getElementById("date").value = date;
            document.getElementById("month").value = month;
            document.getElementById("year").value = year;
            document.getElementById("salary").value = response.salary;
            document.getElementById("notes").value = response.notes;

        }
    });

});


function updateData() {
    let id = localStorage.getItem("id");
    let data = {
        name: document.getElementById("name").value,
        profile: $("input[type='radio'].profile:checked").val(),
        gender: $("input[type='radio'].text:checked").val(),
        department: $('.checkbox:checked').map(function () { return this.value; }).get().join(','),
        //   department:$('.checkbox:checked').map(function(_, el) {
        //     return $(el).val();
        // }).get(),
        startDate: document.getElementById("date").value + "-" + document.getElementById("month").value + "-" + document.getElementById("year").value,
        salary: document.getElementById("salary").value,
        notes: document.getElementById("notes").value

    }



    $.ajax({
        url: "http://localhost:3000/employees/" + id,
        type: "PUT",
        data: data,
        success: function (result) {
            console.log(result);
            window.location.href = "../pages/dashboard.html";
        },
    });


}
