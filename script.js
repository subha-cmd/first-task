
document.addEventListener("DOMContentLoaded", () => {
    // Select all boxes
    const boxes = document.querySelectorAll(".box");

    // Loop each box
    boxes.forEach((box) => {
        const radio = box.querySelector("input[type='radio']");
        const options = box.querySelector(".options");

        // Add event listener for radio button
        radio.addEventListener("change", () => {
            boxes.forEach((b) => {
                b.style.backgroundColor = ""; // Reset background color
                const opt = b.querySelector(".options");

                if (opt) {
                    opt.style.display = 'none';
                }
                options.style.display = 'block';
                box.style.backgroundColor = '#fa9fad';
                box.style.borderColor = '#FF6B82';
            });
        });
    });
});
