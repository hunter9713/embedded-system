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

int led13 = 13;
int led11 = 11;
int led9 = 9;

void setup() {

    pinMode(led13, OUTPUT);
    pinMode(led11, OUTPUT);
    pinMode(led9, OUTPUT);

}

void loop() {

    digitalWrite(led13, HIGH);
    delay(10000);

    digitalWrite(led13, LOW);
    delay(30);

    digitalWrite(led11, HIGH);
    delay(15000);

    digitalWrite(led11, LOW);
    delay(25);

    digitalWrite(led9, HIGH);
    delay(15000);

    digitalWrite(led9, LOW);
    delay(25);

}
