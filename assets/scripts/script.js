//Logic for TypeWriting Effect!
        var i = 0;
        var txt = 'A full-stack developer is a versatile programmer who can work on both the front-end and back-end of web applications. They have a strong understanding of various programming languages, frameworks, and databases, allowing them to handle the entire development process from the user interface to the server-side logic. This comprehensive skill set makes full-stack developers valuable assets in web development teams!';
        var delay = 50;

        function typeWriter() {
        if (i < txt.length) {
            document.getElementById("demo").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, delay);
        }
        }