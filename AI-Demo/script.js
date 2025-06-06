document.addEventListener('DOMContentLoaded', () => {
    // Tab functionality
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Deactivate current active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Activate clicked tab
            button.classList.add('active');
            const targetTabId = button.dataset.tab;
            document.getElementById(targetTabId).classList.add('active');
        });
    });

    // Modal functionality for CTA buttons
    const ctaButtons = document.querySelectorAll('.cta-button');
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close-button');

    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modalId = button.dataset.modalTarget;
            document.getElementById(modalId).style.display = 'flex'; // Use flex to center
        });
    });

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.closest('.modal').style.display = 'none';
        });
    });

    modals.forEach(modal => {
        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });

    // Smooth scroll for Contact Us button (optional, if you want it to scroll to next steps)
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', () => {
            document.querySelector('.next-steps').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // Initial check for active tab content in case of direct access or refresh
    // (Ensure at least one tab is active on load)
    if (!document.querySelector('.tab-content.active')) {
        tabButtons[0].classList.add('active');
        tabContents[0].classList.add('active');
    }
});