let tab = document.querySelectorAll(".tab");
let content = document.querySelector(".content");
let img = document.querySelector(".img");

tab[0].addEventListener('click', function(){

    tab[0].classList.add("active");
    tab[1].classList.remove("active");
    tab[2].classList.remove("active");

    content.innerHTML =`
    <div class="content">
        <h1>HTML</h1>
        <p>HTML stands for HyperText Markup Language. It is used to design web pages using a markup language. HTML is a combination of Hypertext and Markup language. Hypertext defines the link between web pages. A markup language is used to define the text document within the tag which defines the structure of web pages. This language is used to annotate (make notes for the computer) text so that a machine can understand it and manipulate text accordingly. Most markup languages (e.g. HTML) are human-readable. The language uses tags to define what manipulation has to be done on the text. </p>
    </div>` 
    img.style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg')"
    img.style.transitionDuration = "2s";
    img.stly.transitionTimingFunction = "ease-in-out";

});

tab[1].addEventListener('click', function(){

    tab[0].classList.remove("active");
    tab[1].classList.add("active");
    tab[2].classList.remove("active");

    content.innerHTML =`
    <div class="content">
        <h1>CSS</h1>
        <p>Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.

        CSS is designed to enable the separation of content and presentation, including layout, colors, and fonts. This separation can improve content accessibility; provide more flexibility and control in the specification of presentation characteristics; enable multiple web pages to share formatting by specifying the relevant CSS in a separate .css file, which reduces complexity and repetition in the structural content; and enable the .css file to be cached to improve the page load speed between the pages that share the file and its formatting. </p>
    </div>` 
    img.style.backgroundImage = "url('https://cdn.mos.cms.futurecdn.net/Vp9WvV7YKdH4k8sKRePcE8.jpg')"
    img.style.transitionDuration = "3s";
    img.stly.transitionTimingFunction = "ease-in-out";

});

tab[2].addEventListener('click', function(){

    tab[0].classList.remove("active");
    tab[1].classList.remove("active");
    tab[2].classList.add("active");

    content.innerHTML =`
    <div class="content">
        <h1>JS</h1>
        <p> JavaScript is a lightweight, cross-platform, single-threaded, and interpreted compiled programming language. It is also known as the scripting language for webpages. It is well-known for the development of web pages, and many non-browser environments also use it.

        JavaScript is a weakly typed language (dynamically typed). JavaScript can be used for Client-side developments as well as Server-side developments. JavaScript is both an imperative and declarative type of language. JavaScript contains a standard library of objects, like Array, Date, and Math, and a core set of language elements like operators, control structures, and statements.  </p>
    </div>` 
    img.style.backgroundImage = "url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/640px-JavaScript-logo.png')"
    img.style.transitionDuration = "2s";
    img.stly.transitionTimingFunction = "ease-in-out";

});