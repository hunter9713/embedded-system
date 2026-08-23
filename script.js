function copyCode() {

    const code =
        document.getElementById(
            "arduinoCode"
        ).innerText;


    navigator.clipboard
        .writeText(code);


    const button =
        document.querySelector(".copy");


    button.innerText = "COPIED ✓";


    setTimeout(function () {

        button.innerText =
            "COPY CODE";

    }, 1500);

}
