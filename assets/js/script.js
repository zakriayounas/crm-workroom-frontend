document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("sidebarToggle");
    const sidebar = document.querySelector(".Dashboard-slide");
    const closeBtn = document.getElementById("closeSidebar");

    if (!toggleBtn || !sidebar) return; // safety check

    // Open sidebar
    toggleBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent trigger of click-outside
        sidebar.classList.add("active");
        document.body.classList.add("sidebar-open");
    });

    // Close sidebar on close button
    closeBtn?.addEventListener("click", () => {
        sidebar.classList.remove("active");
        document.body.classList.remove("sidebar-open");
    });

    // Close when clicking outside
    document.addEventListener("click", (event) => {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnToggle = toggleBtn.contains(event.target);

        if (
            sidebar.classList.contains("active") &&
            !isClickInsideSidebar &&
            !isClickOnToggle
        ) {
            sidebar.classList.remove("active");
            document.body.classList.remove("sidebar-open");
        }
    });
});
