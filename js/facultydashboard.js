document.addEventListener('DOMContentLoaded', function() {
    // Get references to each navigation item
    const articlesNavItem = document.getElementById('articles');
    const reportNavItem = document.getElementById('report');
    const institutionNavItem = document.getElementById('institution');
    const profileNavItem = document.getElementById('profile');
    const settingsNavItem = document.getElementById('settings');

    // Get references to report containers
    const reportContainer0 = document.querySelector('.report-container0');
    const reportContainer1 = document.querySelector('.report-container1');
    const reportContainer2 = document.querySelector('.report-container2');
    const reportContainer3 = document.querySelector('.report-container3');
    const reportContainer4 = document.querySelector('.report-container4');
    const reportContainer5 = document.querySelector('.report-container5');

    // Function to hide all report containers
    function hideAllReportContainers() {
        reportContainer0.style.display = 'none';
        reportContainer1.style.display = 'none';
        reportContainer2.style.display = 'none';
        reportContainer3.style.display = 'none';
        reportContainer4.style.display = 'none';
        reportContainer5.style.display = 'none';
    }

    // Hide all report containers except reportContainer0 on page load
    hideAllReportContainers();
    reportContainer0.style.display = 'block';

    

    articlesNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with articles
        reportContainer1.style.display = 'block';
    });

    reportNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with report
        reportContainer2.style.display = 'block';
    });

    institutionNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with institution
        reportContainer3.style.display = 'block';
    });

    profileNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with profile
        reportContainer4.style.display = 'block';
    });

    // Add click event listeners to each navigation item
    settingsNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        reportContainer5.style.display = 'block';
    });
});


