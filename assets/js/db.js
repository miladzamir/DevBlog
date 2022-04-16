function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

readTextFile("../../db/configs.json", function(text){
    // var data = JSON.parse(text);
    // $(".head-title").prepend(data.HeadTitle);
    // $(".blog-name").prepend(data.BlogName);
    
    // $(".bio").prepend(data.Bio.details)
    // $(".bio-link").html(data.Bio.link.text)
    // $(".bio-link").attr("href", data.Bio.link.href)

    // $(".twitter").attr("href", data.SocialMedia.twitter)
    // $(".linkedin").attr("href", data.SocialMedia.linkedin)
    // $(".github").attr("href", data.SocialMedia.github)
    // $(".stack").attr("href", data.SocialMedia.stack)
    // $(".codepen").attr("href", data.SocialMedia.codepen)

    // $(".get-in-touch").html(data.GetInTouch.link.text)
    // $(".get-in-touch").attr("href", data.GetInTouch.link.href)

    // $(".heading").prepend(data.HeadTitle);
    // $(".heading").append(data.Heading);

    // $(".copyright").html(data.Copyright)
    
});