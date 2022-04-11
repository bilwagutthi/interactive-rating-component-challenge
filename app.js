window.onload = function() {
    let rateCard = document.getElementById("rateCard");
    let resultCard = document.getElementById("resultCard");
    let submit = document.getElementById("submit");

    rateCard.hidden = false;
    resultCard.hidden = true;
    console.log(submit)

    submit.onclick = function() {
        console.log("clicked");
        let rate = document.querySelector('input[name="rating"]:checked').value;
        console.log(rate);
        rateCard.hidden = true;
        resultCard.hidden = false;
        let result = resultCard.getElementsByClassName("result")[0];
        result.textContent = "You selected " + rate + " out of 5";
    };
};