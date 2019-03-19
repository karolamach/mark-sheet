'use strict';

// zadeklarowanie zmiennej dla przycisku
let btn = document.getElementById("calculate");


// funkcja obliczająca średnią
function calculateAverage() {

    // pętla do przeiterowania po każdym uczniu ( w tym przypadku jest ich 4)
    for (let j = 1; j <= 4; j++) {

        // zmienna do przechowywania node list dla danego ucznia
        let student = document.querySelectorAll('#student' + [j]);

        // pobierz HTML collection danego ucznia - głownie elementy odnoszące się do przedmiotow
        let studentCollection= student[0].children;


        //zadeklaruj zmienne dla sumy ocen i średniej do dalszych obliczeń
        let gradeSum = 0;
        let average;

        // pętla do przeiterowania po każdym z przedmiotow
        for (let i = 1; i <= 6; i++) {

            // pobierz nazwę przedmiotu dla ktorego jest aktualna iteracja
            let subject = studentCollection[i].className;

            // pobierz ocenę ucznia dla tego przedmiotu
            let grade = parseFloat(studentCollection[i].value);

            // dodaj ocenę do sumy stanowiącej podstawę wyliczającą średnią
            gradeSum += grade;


            // sprawdź czy ocena jest niedostateczna
            if (grade == 1) {

                // jeśli tak, zaznacz na czerwono ucznia i okienko z oceną nadając klasę 'red'
                studentCollection[0].classList.add("red");
                studentCollection[i].classList.add("red");

            }

            // oblicz średnią
            average = gradeSum / i;

        }

        // sprawdź czy średnia ucznia wynosi co najmniej 4.75
        if (average >= 4.75) {

            studentCollection[0].classList.add("green");
            studentCollection[7].classList.add("green");

        }

        // umieść średnią na stronie, z dokładnością dwoch miejsc po przecinku
        studentCollection[7].textContent = average.toFixed(2);
    }

}

// wydarzenie wywołujące funkcję 'obliczSrednia' przy naciśnięciu przycisku
btn.addEventListener('click', calculateAverage);