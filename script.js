let buttons = document.querySelectorAll(".nav-btn");
let contents = document.querySelectorAll(".content");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));

        // Add 'active' class to the clicked button
        button.classList.add("active");

        // Hide all content divs
        contents.forEach(content => content.classList.remove("show"));

        // Show the content related to the clicked button
        let targetId = button.getAttribute("data-target");
        document.getElementById(targetId).classList.add("show");
    });
});
