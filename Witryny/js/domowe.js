function domowe(form){

    var data = [form.login.value,form.password.value,form.color.value];

    var h = document.getElementById("h");
    h.style.color = data[2];
    h.innerHTML = "Twój login to: " + data[0] + ", a hasło: " + data[1] + ".";
}
