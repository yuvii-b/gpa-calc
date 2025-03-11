let subjectCount = 3;

function calculateSGPA() {
    let grades = document.querySelectorAll(".grade");
    let credits = document.querySelectorAll(".credits");
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < credits.length; i++) {
        let grade = parseFloat(grades[i].value);
        let credit = parseFloat(credits[i].value);

        if (isNaN(credit) || credit <= 0) {
            document.getElementById("result").innerText = "Please enter all the credits!";
            return;
        }

        totalGradePoints += grade * credit;
        totalCredits += credit;
    }

    let sgpa = totalGradePoints / totalCredits;
    document.getElementById("result").innerText = "SGPA: " + sgpa.toFixed(2);
}

function addSubject() {
    subjectCount++;
    let container = document.getElementById("subjects-container");

    let div = document.createElement("div");
    div.classList.add("subject-group");

    let labelSubject = document.createElement("label");
    labelSubject.setAttribute("for", "subject" + subjectCount);
    labelSubject.innerText = "Subject " + subjectCount + ":";
    
    div.appendChild(labelSubject);

    let labelGrade = document.createElement("label");
    labelGrade.innerText = "Grade: ";
    div.appendChild(labelGrade);

    let select = document.createElement("select");
    select.setAttribute("id", "subject" + subjectCount);
    select.classList.add("subject", "grade");

    let options = [
        { value: "10", text: "O" },
        { value: "9", text: "A+" },
        { value: "8", text: "A" },
        { value: "7", text: "B+" },
        { value: "6", text: "B" },
        { value: "5", text: "C" }
    ];

    options.forEach(opt => {
        let option = document.createElement("option");
        option.value = opt.value;
        option.innerText = opt.text;
        select.appendChild(option);
    });

    div.appendChild(select);

    let labelCredits = document.createElement("label");
    labelCredits.setAttribute("for", "credits" + subjectCount);
    labelCredits.innerText = " Credits: ";
    div.appendChild(labelCredits);

    let inputCredits = document.createElement("input");
    inputCredits.setAttribute("type", "number");
    inputCredits.setAttribute("id", "credits" + subjectCount);
    inputCredits.classList.add("credits");
    inputCredits.setAttribute("min", "1");

    div.appendChild(inputCredits);

    let removeButton = document.createElement("span");
    removeButton.classList.add("remove-icon");
    removeButton.innerText = " ❌";
    removeButton.style.cursor = "pointer";
    removeButton.onclick = function () {
        removeSubject(this);
    };

    div.appendChild(removeButton);
    container.appendChild(div);
}

function styleSubjects() {
    let subjectGroups = document.querySelectorAll(".subject-group");
    subjectGroups.forEach(group => {
        group.style.display = "flex";
        group.style.alignItems = "center";
        group.style.gap = "10px";
        group.style.marginBottom = "10px";
    });

    let removeIcons = document.querySelectorAll(".remove-icon");
    removeIcons.forEach(icon => {
        icon.style.color = "red";
        icon.style.fontSize = "16px";
    });
}

function resetSGPA() {
    let container = document.getElementById("subjects-container");
    container.innerHTML = ""; 

    subjectCount = 3;

    for (let i = 1; i <= 3; i++) {
        let div = document.createElement("div");
        div.classList.add("subject-group");

        let labelSubject = document.createElement("label");
        labelSubject.setAttribute("for", "subject" + i);
        labelSubject.innerText = "Subject " + i + ":";
        div.appendChild(labelSubject);

        let labelGrade = document.createElement("label");
        labelGrade.innerText = "Grade: ";
        div.appendChild(labelGrade);

        let select = document.createElement("select");
        select.setAttribute("id", "subject" + i);
        select.classList.add("subject", "grade");

        let options = [
            { value: "10", text: "O" },
            { value: "9", text: "A+" },
            { value: "8", text: "A" },
            { value: "7", text: "B+" },
            { value: "6", text: "B" },
            { value: "5", text: "C" }
        ];

        options.forEach(opt => {
            let option = document.createElement("option");
            option.value = opt.value;
            option.innerText = opt.text;
            select.appendChild(option);
        });

        div.appendChild(select);

        let labelCredits = document.createElement("label");
        labelCredits.setAttribute("for", "credits" + i);
        labelCredits.innerText = " Credits: ";
        div.appendChild(labelCredits);

        let inputCredits = document.createElement("input");
        inputCredits.setAttribute("type", "number");
        inputCredits.setAttribute("id", "credits" + i);
        inputCredits.classList.add("credits");
        inputCredits.setAttribute("min", "1");

        div.appendChild(inputCredits);

        let removeButton = document.createElement("span");
        removeButton.classList.add("remove-icon");
        removeButton.innerText = " ❌";
        removeButton.style.cursor = "pointer";
        removeButton.onclick = function () {
            removeSubject(this);
        };

        div.appendChild(removeButton);
        container.appendChild(div);
    }

    document.getElementById("result").innerText = "";
}


function removeSubject(element) {
    let subjectGroup = element.parentElement;
    subjectGroup.remove();
    subjectCount--;
}
