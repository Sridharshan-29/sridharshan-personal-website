/*
=========================================================
WEBSITE CONTENT DATA
=========================================================

This file controls the dynamic cards shown on the Home page.

WHEN YOU COMPLETE A NEW PROJECT:
- Add it at the TOP of the projects array.
- The first project automatically becomes the
  "Latest Project" on the Home page.

WHEN YOU START NEW WORK:
- Add it at the TOP of currentWork.

WHEN YOU WANT TO UPDATE THE LATEST UPDATE:
- Edit the latestUpdate section below.
*/


const websiteData = {


    /*
    =====================================================
    COMPLETED PROJECTS
    =====================================================
    */

    projects: [

        {
            title: "Optimizing MCC Fast Charging Currents",

            date: "2026",

            status: "Latest Project",

            description:
                "Exploring battery fast charging through modeling, simulation, and a deeper investigation of electrochemical behavior.",

            tags: [
                "Battery Modeling",
                "Python",
                "Simulation"
            ],

            link:
                "projects/mcc-fast-charging.html"
        }


        /*
        -------------------------------------------------

        EXAMPLE OF YOUR NEXT PROJECT

        Add future projects ABOVE MCC Fast Charging.

        {
            title: "3D Printed Battery Architectures",

            date: "2027",

            status: "Latest Project",

            description:
                "Exploring how electrode geometry and pore structure influence battery performance.",

            tags: [
                "3D Printing",
                "Batteries",
                "Research"
            ],

            link:
                "projects/3d-printed-battery.html"
        }

        -------------------------------------------------
        */

    ],



    /*
    =====================================================
    CURRENT WORK
    =====================================================
    */

    currentWork: [

        {
            title:
                "3D Printed Battery Architectures",

            status:
                "In Progress",

            description:
                "Exploring how electrode geometry, pore structure, and architecture could influence electrochemical performance.",

            tags: [
                "3D Printing",
                "Batteries",
                "Research"
            ],

            link:
                "current-work.html"
        },


        {
            title:
                "Battery Modeling",

            status:
                "Exploring",

            description:
                "Deepening my understanding of electrochemical battery models, from equivalent circuit models to physics-based models.",

            tags: [
                "DFN",
                "PyBaMM",
                "Electrochemistry"
            ],

            link:
                "current-work.html"
        }

    ],



    /*
    =====================================================
    LATEST UPDATE
    =====================================================
    */

    latestUpdate: {

        date:
            "NOW",

        title:
            "A New Challenge",

        description:
            "Completed the MEAtec case study and advanced to the second-round technical interview, where I’ll present and discuss my approach, assumptions, and key decisions."

    }

};