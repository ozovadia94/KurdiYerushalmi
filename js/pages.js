load_func = () => {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $(".navbar-default").addClass("fix-nav");
        } else {
            $(".navbar-default").removeClass("fix-nav");
        }
    });
    
    var name = document.getElementById("page_name").innerHTML
    // document.getElementById(name).style.display = "none"
    // document.getElementById(name + "_active").style.display = "inline"

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // Typical action to be performed when the document is ready:
            var doc = textToHTML(xhttp.responseText)
            var e = doc.getElementById(name).classList.add("active");            
            document.getElementById("page_navbar").innerHTML = doc.body.innerHTML
        }
    };
    xhttp.open("GET", "navbar.html", true);
    xhttp.send();

}

var textToHTML= function (str) {
	// check for DOMParser support
	if (str) {
		var parser = new DOMParser();
		var doc = parser.parseFromString(str, 'text/html');
		// return doc.body.innerHTML;
        return doc;
	}

	// Otherwise, create div and append HTML
	var dom = document.createElement('div');
	dom.innerHTML = str;
	return dom;
};

func = () => {
    console.log("asd2")


    var name = document.getElementById("page_name").innerHTML
    document.getElementById(name).style.display = "none"
    document.getElementById(name + "_active").style.display = "inline"
}