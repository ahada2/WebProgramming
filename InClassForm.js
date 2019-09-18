function checkCompleteness()
{
    var form = document.getElementById("signup_form");


    if((form.visitor_id.value.length == 0) && (form.firstname.value.length == 0) && (form.lastname.value.length == 0))
    { // name entered
alert("Enter ID, FirstName and LastName");
//return false;
    }

    else if((form.visitor_id.value.length != 0) && (form.firstname.value.length == 0) && (form.lastname.value.length == 0))
    { // password entered
alert("Enter FirstName, LastName");
//return false;
    }

    else if((form.visitor_id.value.length != 0) && (form.firstname.value.length != 0) && (form.lastname.value.length == 0)) { // passwords agree
alert("Enter LastName");
//return false;
    }

    else{
        alert("All Good!");
    }

    // passed all the checks: OK to submit
    
    //return true;
}

function colorize(elementName, color)
{
    document.getElementById(elementName).style.color = color;
}