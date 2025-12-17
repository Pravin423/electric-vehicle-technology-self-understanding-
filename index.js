function toggleAccordion(id) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0px";
        icon.classList.remove("rotate-45");
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
        icon.classList.add("rotate-45");
    }
}


