var textInput = document.queryselector("#txt-input");
var btnTranslate = document.queryselector("#btn-translate");
var textoutput = document.queryselector("#txt-output");


var serverUrl = "https://api.funtranslations.com/translate/minion.json"

function translatedUrl (textgiven){
    var urlTranslate = serverUrl + "?" + "text=" + textgiven.value ;
    return(urlTranslate);
}




btnTranslate.addEventListener("click",function(){
    console.log("Button clicked");
    var UrlFinal = TranslaterUrl(textInput);
    console.log(urlfinal);
    fetch(urlFinal);
    .then(Respone => Respone.json())
    .then(json =>{ textoutput.innertext = json.contents.translated })
    .catch(errorHandler);

})