const btn = document.querySelector(".btn-toggle")

const theme = document.querySelector("#theme-link")

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") == "stylesheet.css") {
        theme.href = "stylesheetdark.css";
    } else {
        theme.href = "stylesheet.css";
    }
});