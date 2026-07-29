// If a student profile already exists,
// go directly to the homepage.

window.onload = function(){

    const student = localStorage.getItem("student");

    if(student){

        window.location.href = "home.html";

    }

}

document
.getElementById("registerForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    const name=document.getElementById("name").value.trim();

    const lrn=document.getElementById("lrn").value.trim();

    const grade=document.getElementById("grade").value;

    const section=document.getElementById("section").value.trim();

    const agree=document.getElementById("agree").checked;

    if(name===""){

        alert("Please enter your name.");

        return;

    }

    if(!/^\d{12}$/.test(lrn)){

        alert("LRN must contain exactly 12 digits.");

        return;

    }

    if(grade===""){

        alert("Please select your grade level.");

        return;

    }

    if(section===""){

        alert("Please enter your section.");

        return;

    }

    if(!agree){

        alert("Please confirm your information.");

        return;

    }

    const student={

        name:name,

        lrn:lrn,

        grade:grade,

        section:section

    };

    localStorage.setItem("student",JSON.stringify(student));

    window.location.href="home.html";

});