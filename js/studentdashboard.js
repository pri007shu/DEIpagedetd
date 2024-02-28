document.addEventListener('DOMContentLoaded', function () {
    // Get references to each navigation item
    const dashboardNavItem = document.getElementById('dashboard');
    const guestlecturespeakerNavItem = document.getElementById('guestlecturespeaker');
    const projectsanctionedNavItem = document.getElementById('projectsanctioned');
    const patentsNavItem = document.getElementById('patents');
    const journalsNavItem = document.getElementById('journals');
    const bookspublishedNavItem = document.getElementById('bookspublished');
    const conferencesNavItem = document.getElementById('conferences');
   // const workshopsorganisedNavItem = document.getElementById('workshopsorganised');
  //  const foreignvisitsNavItem = document.getElementById('foreignvisits');
  //  const otherachievementsNavItem = document.getElementById('otherachievements');
   
    const blur = document.getElementsByClassName('blur-background')[0];

    // Get references to report containers
    const reportContainer0 = document.querySelector('.report-container0');
    const reportContainer1 = document.querySelector('.report-container1');
    const reportContainer2 = document.querySelector('.report-container2');
    const reportContainer3 = document.querySelector('.report-container3');
    const reportContainer4 = document.querySelector('.report-container4');
    const reportContainer5 = document.querySelector('.report-container5');
    //const reportContainer6 = document.querySelector('.report-container6');
   // const reportContainer7 = document.querySelector('.report-container7');
   // const reportContainer8 = document.querySelector('.report-container8');
    const reportContainer9 = document.querySelector('.report-container9');

    var h3Element1 = dashboardNavItem.querySelector('h3');
    var h3Element2 = guestlecturespeakerNavItem.querySelector('h3');
    var h3Element3 = projectsanctionedNavItem.querySelector('h3');
    var h3Element4 = journalsNavItem.querySelector('h3');
    var h3Element5 = bookspublishedNavItem.querySelector('h3');
    var h3Element6 = conferencesNavItem.querySelector('h3');
  //  var h3Element7 = workshopsorganisedNavItem.querySelector('h3');
   // var h3Element8 = foreignvisitsNavItem.querySelector('h3');
    //var h3Element9 = otherachievementsNavItem.querySelector('h3');
    var h3Element10 = patentsNavItem.querySelector('h3');

    // Function to hide all report containers
    function hideAllReportContainers() {
        reportContainer0.style.display = 'none';
        reportContainer1.style.display = 'none';
        reportContainer2.style.display = 'none';
        reportContainer3.style.display = 'none';
        reportContainer4.style.display = 'none';
        reportContainer5.style.display = 'none';
     //   reportContainer6.style.display = 'none';
      //  reportContainer7.style.display = 'none';
      //  reportContainer8.style.display = 'none';
        reportContainer9.style.display = 'none';
        dashboardNavItem.style.borderLeft = 'none';
        guestlecturespeakerNavItem.style.borderLeft = 'none';
        projectsanctionedNavItem.style.borderLeft = 'none';
        journalsNavItem.style.borderLeft = 'none';
        bookspublishedNavItem.style.borderLeft = 'none';
        conferencesNavItem.style.borderLeft = 'none';
     //   workshopsorganisedNavItem.style.borderLeft = 'none';
      //  foreignvisitsNavItem.style.borderLeft = 'none';
       // otherachievementsNavItem.style.borderLeft = 'none';
        patentsNavItem.style.borderLeft = 'none';
        h3Element1.style.color = 'rgb(95, 95, 95)';
        h3Element2.style.color = 'rgb(95, 95, 95)';
        h3Element3.style.color = 'rgb(95, 95, 95)';
        h3Element4.style.color = 'rgb(95, 95, 95)';
        h3Element5.style.color = 'rgb(95, 95, 95)';
        h3Element6.style.color = 'rgb(95, 95, 95)';
     //   h3Element7.style.color = 'rgb(95, 95, 95)';
      //  h3Element8.style.color = 'rgb(95, 95, 95)';
       // h3Element9.style.color = 'rgb(95, 95, 95)';
        h3Element10.style.color = 'rgb(95, 95, 95)';
        closeForm1();
        closeForm2();
        closeForm3();
        closeForm4();
        closeForm5();
      //  closeForm6();
       // closeForm7();
     //   closeForm8();
        closeForm9();
        closeFormEdit();
    }

    // Hide all report containers except reportContainer0 on page load
    hideAllReportContainers();
    dashboardNavItem.style.borderLeft = '5px solid black';
    reportContainer0.style.display = 'block';
    h3Element1.style.color = 'black';



    dashboardNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with articles
        dashboardNavItem.style.borderLeft = '5px solid black';
        reportContainer0.style.display = 'block';
        h3Element1.style.color = 'black';
    });

    guestlecturespeakerNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with articles
        guestlecturespeakerNavItem.style.borderLeft = '5px solid black';
        reportContainer1.style.display = 'block';
        h3Element2.style.color = 'black';
    });

    projectsanctionedNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with report
        projectsanctionedNavItem.style.borderLeft = '5px solid black';
        reportContainer2.style.display = 'block';
        h3Element3.style.color = 'black';

    });

    journalsNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with institution
        journalsNavItem.style.borderLeft = '5px solid black';
        reportContainer3.style.display = 'block';
        h3Element4.style.color = 'black';
    });



    bookspublishedNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with profile
        bookspublishedNavItem.style.borderLeft = '5px solid black';
        reportContainer4.style.display = 'block';
        h3Element5.style.color = 'black';
    });

    conferencesNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with profile
        conferencesNavItem.style.borderLeft = '5px solid black';
        reportContainer5.style.display = 'block';
        h3Element6.style.color = 'black';
    });
/*
    // Add click event listeners to each navigation item
    workshopsorganisedNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        workshopsorganisedNavItem.style.borderLeft = '5px solid black';
        reportContainer6.style.display = 'block';
        h3Element7.style.color = 'black';
    });

    foreignvisitsNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        foreignvisitsNavItem.style.borderLeft = '5px solid black';
        reportContainer7.style.display = 'block';
        h3Element8.style.color = 'black';
    });

    otherachievementsNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        otherachievementsNavItem.style.borderLeft = '5px solid black';
        reportContainer8.style.display = 'block';
        h3Element9.style.color = 'black';
    });

    */

    patentsNavItem.addEventListener('click', function () {
        // Hide all report containers
        hideAllReportContainers();
        // Show the report container associated with dashboard
        patentsNavItem.style.borderLeft = '5px solid black';
        reportContainer9.style.display = 'block';
        h3Element10.style.color = 'black';
    });
});



function openForm1() {
    document.getElementById("myForm_a").style.display = "block";
    blur.style.display = "block";
}

function closeForm1() {
    document.getElementById("myForm_a").style.display = "none";
    blur.style.display = "none";
}

function openForm2() {
    document.getElementById("myForm_b").style.display = "block";
    blur.style.display = "block";
}

function closeForm2() {
    document.getElementById("myForm_b").style.display = "none";
    blur.style.display = "none";
}

function openForm3() {
    document.getElementById("myForm_c").style.display = "block";
    blur.style.display = "block";
}

function closeForm3() {
    document.getElementById("myForm_c").style.display = "none";
    blur.style.display = "none";
}

function openForm4() {
    document.getElementById("myForm_d").style.display = "block";
    blur.style.display = "block";
}

function closeForm4() {
    document.getElementById("myForm_d").style.display = "none";
    blur.style.display = "none";
}

function openForm5() {
    document.getElementById("myForm_e").style.display = "block";
    blur.style.display = "block";
}

function closeForm5() {
    document.getElementById("myForm_e").style.display = "none";
    blur.style.display = "none";
}
/*
function openForm6() {
    document.getElementById("myForm_f").style.display = "block";
    blur.style.display = "block";
}

function closeForm6() {
    document.getElementById("myForm_f").style.display = "none";
    blur.style.display = "none";
}
function openForm7() {
    document.getElementById("myForm_g").style.display = "block";
    blur.style.display = "block";
}

function closeForm7() {
    document.getElementById("myForm_g").style.display = "none";
    blur.style.display = "none";
}

function openForm8() {
    document.getElementById("myForm_h").style.display = "block";
    blur.style.display = "block";
}

function closeForm8() {
    document.getElementById("myForm_h").style.display = "none";
    blur.style.display = "none";
}

*/

function openForm9() {
    document.getElementById("myForm_i").style.display = "block";
    blur.style.display = "block";
}

function closeForm9() {
    document.getElementById("myForm_i").style.display = "none";
    blur.style.display = "none";
}

function openFormEdit() {
    document.getElementById("myForm_edit").style.display = "block";
    blur.style.display = "block";
  }

  function closeFormEdit() {
    document.getElementById("myForm_edit").style.display = "none";
    blur.style.display = "none";
  }