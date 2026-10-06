document.getElementById("name-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first_name").value.trim();
    const middleInitial = document.getElementById("middle_initial").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const count = Number(document.getElementById("count").value);

    let fullName = firstName;

    if (middleInitial !== "") {
        fullName += " " + middleInitial.toUpperCase() + ".";
    }

    fullName += " " + lastName;

    document.getElementById("greeting").textContent =
        "Welcome to More Like a Taco, " + fullName + "!";

    const rules = [
        { divisor: 3, word: "CRUNCH!" },
        { divisor: 5, word: "TACO!" },
        { divisor: 7, word: "BANG!" }
    ];

    let output = "<ol>";

    for (let number = 1; number <= count; number++) {
        const words = [];

        for (const rule of rules) {
            if (number % rule.divisor === 0) {
                words.push(rule.word);
            }
        }

        if (words.length === 0) {
            words.push("Taco Time");
        }

        output += "<li>" + words.join(" ") + "</li>";
    }

    output += "</ol>";

    document.getElementById("results").innerHTML = output;
});
