alert("welcome to jQuery");


const form = $("#form");
const email = $("#email");
const name = $("#name");
const family = $("#family");
const phone = $("#phone");
const tbody = $("#tbody");
let count = 0;


form.on("submit", (e) => {
    e.preventDefault()
    checkInputs()
})



const checkInputs = () => {



    let counter = 0;
    const emailValue = email.val();
    const nameValue = name.val();
    const familyValue = family.val();
    const phoneValue = phone.val();

    const nameFamilyPattern = /[پچجحخهعغفقثصضشسیبلاتنمکگوئدذرزطظژؤإأءًٌٍَُِّ\s]+$/;
    const emailPattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phonePattern = /^(\+98|0)?9\d{9}$/;


    if (nameValue === "") {
        setError(name, "نام خود را وارد کنید")
    } else if (!nameFamilyPattern.test(nameValue)) {
        setError(name, "نام خود را فارسی وارد کنید")
    }
    else {
        setSuccess(name)
        counter++;
    }

    if (familyValue === "") {
        setError(family, "نام خانوادگی خود را وارد کنید")
    } else if (!familyValue.match(nameFamilyPattern)) {
        setError(family, "نام خانوادگی خود را فارسی وارد کنید")
    }
    else {
        setSuccess(family)
        counter++;
    }


    if (emailValue === "") {
        setError(email, "ایمیل را وارد کنید")
    } else if (!emailValue.match(emailPattern)) {
        setError(email, "ایمیل خود را به صورت صحیح وارد کنید")
    }
    else {
        setSuccess(email)
        counter++;
    }

    if (phoneValue === "") {
        setError(phone, "شماره تلفن خود را وارد کنید")
    }
    else if (!phoneValue.match(phonePattern)) {
        setError(phone, "شماره تلفن خود را صحیح وارد کنید")
    }
    else {
        setSuccess(phone)
        counter++;
    }


    if (counter === 4) {

        count++;

        let tr = $("<tr></tr>");

        let td1 = $("<td class='delete'></td>");

        let i1 = $("<i class='fa fa-close'></i>");
        td1.click((e) => {
            let parent = e.currentTarget.parentElement;

            parent.remove();
        })
        i1.css("cursor", "pointer");

        td1.append(i1);

        tr.append(td1);

        let td2 = $("<td class='edit'></td>");

        let i2 = $("<i class='fa fa-edit'></i>");
        td2.click((e) => {
            let p = $(e.target);

            if (p.attr("class") == "fa fa-edit") {
                let parent = p.parent().parent();


                let namee = parent.children().eq(1).prevObject[3];
                let familyy = parent.children().eq(1).prevObject[4];
                let emaill = parent.children().eq(1).prevObject[5];
                let phonee = parent.children().eq(1).prevObject[6];

                let name_edit = prompt("Enter your edit name : ", $(namee).text());
                let family_edit = prompt("Enter your edit family : ", $(familyy).text());
                let email_edit = prompt("Enter your edit email : ", $(emaill).text());
                let phone_edit = prompt("Enter your edit phone : ", $(phonee).text());

                $(namee).text(name_edit);
                $(familyy).text(family_edit);
                $(emaill).text(email_edit);
                $(phonee).text(phone_edit);
            }


        })
        i2.css("cursor", "pointer");

        td2.append(i2);

        tr.append(td2);

        let td3 = $("<td></td>");
        td3.append(count);

        tr.append(td3);

        let td4 = $("<td class='name'></td>");
        td4.text(name.val());

        tr.append(td4);

        let td5 = $("<td class='family'></td>");
        td5.text(family.val());

        tr.append(td5);

        let td6 = $("<td class='email'></td>");
        td6.text(email.val());

        tr.append(td6);

        let td7 = $("<td class='phone'></td>");
        td7.text(phone.val());

        tr.append(td7);

        tbody.append(tr);


    } else {
        counter = 0;

    }

}


const setSuccess = (input) => {
    const formControl = $(input).parent();

    $(formControl).removeClass("error");
    $(formControl).addClass("success");
}

const setError = (input, msg) => {
    const formControl = $(input).parent();
    const small = $(formControl).children().eq(1).prevObject[2];
    $(formControl).removeClass("success");
    $(formControl).addClass("error");
    $(small).text(msg);
}
