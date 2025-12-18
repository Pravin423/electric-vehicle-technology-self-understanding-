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

document.addEventListener('DOMContentLoaded', () => {
  const toggles = document.querySelectorAll('.faq-toggle');

  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      const content = toggle.nextElementSibling;
      const icon = toggle.querySelector('i');

      // Close other open FAQs
      document.querySelectorAll('.faq-content').forEach(c => {
        if(c !== content) {
          c.style.maxHeight = null;
          const otherIcon = c.previousElementSibling.querySelector('i');
          if(otherIcon) otherIcon.classList.remove('rotate-180');
        }
      });

      // Toggle this FAQ
      if(content.style.maxHeight){
        content.style.maxHeight = null;
        icon.classList.remove('rotate-180');
      } else {
        content.style.maxHeight = content.scrollHeight + 'px';
        icon.classList.add('rotate-180');
      }
    });
  });
});