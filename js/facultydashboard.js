document.addEventListener('DOMContentLoaded', function() {
    // Get references to each navigation item
    const guestlecturespeakerNavItem = document.getElementById('guestlecturespeaker');
    const projectsanctionedNavItem = document.getElementById('projectsanctioned');
    const journalsNavItem = document.getElementById('journals');
    const bookspublishedNavItem = document.getElementById('bookspublished');
    const conferencesNavItem = document.getElementById('conferences');
    const workshopsorganisedNavItem = document.getElementById('workshopsorganised');
    const foreignvisitsNavItem = document.getElementById('foreignvisits');
    const otherachievementsNavItem = document.getElementById('otherachievements');

    // Get references to report containers
    const reportContainer0 = document.querySelector('.report-container0');
    const reportContainer1 = document.querySelector('.report-container1');
    const reportContainer2 = document.querySelector('.report-container2');
    const reportContainer3 = document.querySelector('.report-container3');
    const reportContainer4 = document.querySelector('.report-container4');
    const reportContainer5 = document.querySelector('.report-container5');
    const reportContainer6 = document.querySelector('.report-container6');
    const reportContainer7 = document.querySelector('.report-container7');
    const reportContainer8 = document.querySelector('.report-container8');

    // Function to hide all report containers
    function hideAllReportContainers() {
        reportContainer0.style.display = 'none';
        reportContainer1.style.display = 'none';
        reportContainer2.style.display = 'none';
        reportContainer3.style.display = 'none';
        reportContainer4.style.display = 'none';
        reportContainer5.style.display = 'none';
        reportContainer6.style.display = 'none';
        reportContainer7.style.display = 'none';
        reportContainer8.style.display = 'none';
    }

    // Hide all report containers except reportContainer0 on page load
    hideAllReportContainers();
    reportContainer0.style.display = 'block';

    

    guestlecturespeakerNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with articles
        reportContainer1.style.display = 'block';
    });

    projectsanctionedNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with report
        reportContainer2.style.display = 'block';
    });

    journalsNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with institution
        reportContainer3.style.display = 'block';
    });

    conferencesNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with profile
        reportContainer5.style.display = 'block';
    });

    bookspublishedNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with profile
        reportContainer4.style.display = 'block';
    });

    // Add click event listeners to each navigation item
    workshopsorganisedNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        reportContainer6.style.display = 'block';
    });

    foreignvisitsNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        reportContainer7.style.display = 'block';
    });

    otherachievementsNavItem.addEventListener('click', function() {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        reportContainer8.style.display = 'block';
    });
});


