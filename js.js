function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lpCC0kJzq/model.json', modelReady); 
}

function modelReady()
{
    classifier.classify(gotResults);
} 

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else 
    {
        console.log(results);

        document.getElementById("result_label").innerHTML = 'Hearing : ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy : ' + (results[0].confidence*100) + "%";

        img = document.getElementById('sound1');

        if (results[0].label == "Background Noise")
        {
            img.src = "BN.jpg";
        } 
        else if (results[0].label == "dog")
        {
            img.src = "Doggie.jpg";
        }
        else if (results[0].label == "cat")
        {
            img.src = "Cat.jpg";
    }
  } 
}