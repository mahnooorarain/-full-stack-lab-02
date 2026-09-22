// ============================================================
// Hoisting Demonstration
// ============================================================

console.log(
    "%c=== HOISTING DEMONSTRATION ===",
    "color: #0d6efd; font-weight: bold; font-size: 14px;"
);


// var can be accessed before assignment.
// Because of hoisting, its value is undefined.

console.log(
    "varVariable before declaration:",
    typeof varVariable !== "undefined" ? varVariable : undefined
);

var varVariable = "I am declared with var";

console.log(
    "varVariable after declaration:",
    varVariable
);


// let is not accessible before declaration.
// It remains in the Temporal Dead Zone.

try {

    console.log(
        "letVariable before declaration:",
        letVariable
    );

}
catch (error) {

    console.log(
        "letVariable before declaration:",
        "ReferenceError - let cannot be accessed before declaration."
    );

}


let letVariable = "I am declared with let";

console.log(
    "letVariable after declaration:",
    letVariable
);



// ============================================================
// Student Object
// ============================================================

let student = {

    name: "Mahnoor",

    regNo: "BSCS-242741",

    program: "BS Computer Science",

    semester: 5,

    cgpa: 3.45,

    attendance: 88,

    assignmentMarks: 18,

    midtermMarks: 25,

    finalExamMarks: 42

};



// ============================================================
// Academic Calculation
// ============================================================

function evaluateStudentAcademicPerformance(data) {


    // Maximum marks

    const assignmentMaxMarks = 20;

    const midtermMaxMarks = 30;

    const finalExamMaxMarks = 50;


    // Total maximum marks

    const totalMaxMarks =
        assignmentMaxMarks +
        midtermMaxMarks +
        finalExamMaxMarks;


    // Total obtained marks

    const totalObtainedMarks =
        Number(data.assignmentMarks) +
        Number(data.midtermMarks) +
        Number(data.finalExamMarks);


    // Percentage

    const percentage =
        (totalObtainedMarks / totalMaxMarks) * 100;



    // ========================================================
    // Grade Calculation
    // ========================================================

    let grade = "F";

    let passStatus = "Failed";


    if (percentage >= 80) {

        grade = "A";

    }

    else if (percentage >= 70) {

        grade = "B";

    }

    else if (percentage >= 60) {

        grade = "C";

    }

    else if (percentage >= 50) {

        grade = "D";

    }

    else {

        grade = "F";

    }



    // ========================================================
    // Pass / Fail Decision
    // ========================================================

    if (percentage >= 50) {

        passStatus = "Passed";

    }

    else {

        passStatus = "Failed";

    }



    // ========================================================
    // Scholarship Eligibility
    // ========================================================

    let scholarshipStatus = "Not Eligible";

    let scholarshipBadgeClass = "bg-secondary";


    // Gold Scholarship

    if (
        data.cgpa >= 3.7 &&
        data.attendance >= 90 &&
        percentage >= 85
    ) {

        scholarshipStatus = "Gold Scholarship";

        scholarshipBadgeClass = "bg-warning text-dark";

    }


    // Silver Scholarship

    else if (
        (data.cgpa >= 3.3 && data.attendance >= 80) ||
        percentage >= 75
    ) {

        scholarshipStatus = "Silver Scholarship";

        scholarshipBadgeClass = "bg-info text-dark";

    }


    // Not Eligible

    else {

        scholarshipStatus = "Not Eligible";

        scholarshipBadgeClass = "bg-secondary";

    }



    // ========================================================
    // Academic Warning
    // ========================================================

    let academicStatus = "Good Standing";

    let academicBadgeClass = "bg-success";


    // Critical

    if (
        percentage < 50 ||
        data.attendance < 70 ||
        data.cgpa < 2.0
    ) {

        academicStatus = "Critical";

        academicBadgeClass = "bg-danger";

    }


    // Academic Warning

    else if (
        percentage < 60 ||
        data.attendance < 75 ||
        data.cgpa < 2.5
    ) {

        academicStatus = "Academic Warning";

        academicBadgeClass = "bg-warning text-dark";

    }


    // Good Standing

    else {

        academicStatus = "Good Standing";

        academicBadgeClass = "bg-success";

    }



    // ========================================================
    // Operators used with actual student data
    // ========================================================

    const remainingMarks =
        totalMaxMarks - totalObtainedMarks;


    const averageMark =
        totalObtainedMarks / 3;


    const percentageCheck =
        percentage * 1;


    const marksRemainder =
        totalObtainedMarks % 2;


    const isHighPercentage =
        percentage > 80;


    const isLowPercentage =
        percentage < 50;


    const isPassingPercentage =
        percentage >= 50;


    const isLowAttendance =
        data.attendance <= 70;


    const isGradeA =
        grade === "A";


    const isNotFailed =
        grade !== "F";


    const scholarshipRequirementsMet =
        data.cgpa >= 3.3 &&
        data.attendance >= 80 &&
        percentage >= 70;


    const needsAcademicAttention =
        percentage < 60 ||
        data.attendance < 75 ||
        data.cgpa < 2.5;


    const attendanceIsGood =
        !isLowAttendance;



    return {

        totalObtainedMarks,

        totalMaxMarks,

        percentage,

        grade,

        passStatus,

        scholarshipStatus,

        scholarshipBadgeClass,

        academicStatus,

        academicBadgeClass,

        remainingMarks,

        averageMark,

        percentageCheck,

        marksRemainder,

        isHighPercentage,

        isLowPercentage,

        isPassingPercentage,

        isLowAttendance,

        isGradeA,

        isNotFailed,

        scholarshipRequirementsMet,

        needsAcademicAttention,

        attendanceIsGood

    };

}



// ============================================================
// Dynamic Output
// ============================================================

function renderAcademicPortal() {


    const reportContainer =
        document.getElementById("academic-report-output");


    if (!reportContainer) {

        return;

    }


    const results =
        evaluateStudentAcademicPerformance(student);



    reportContainer.innerHTML = `

        <!-- Quick Testing Scenarios -->

        <div class="card shadow-sm border-0 mb-4 bg-white">

            <div class="card-body p-3">

                <div
                    class="d-flex flex-wrap
                           align-items-center
                           justify-content-between
                           gap-2">


                    <span class="fw-bold text-dark">

                        Quick Testing Scenarios (Part M):

                    </span>


                    <div
                        class="btn-group flex-wrap gap-1"
                        role="group">


                        <button
                            class="btn btn-sm btn-outline-primary"
                            onclick="loadTestingScenario(1)">

                            Scenario 1: High Performer

                        </button>


                        <button
                            class="btn btn-sm btn-outline-info"
                            onclick="loadTestingScenario(2)">

                            Scenario 2: Average Student

                        </button>


                        <button
                            class="btn btn-sm btn-outline-warning text-dark"
                            onclick="loadTestingScenario(3)">

                            Scenario 3: Low Attendance

                        </button>


                        <button
                            class="btn btn-sm btn-outline-danger"
                            onclick="loadTestingScenario(4)">

                            Scenario 4: Poor Performance

                        </button>


                    </div>

                </div>

            </div>

        </div>



        <!-- Main Academic Report -->

        <div
            class="card shadow-lg border-0 overflow-hidden">


            <!-- Report Heading -->

            <div
                class="card-header bg-dark text-white p-3 text-center">


                <h4 class="m-0 fw-bold">

                    STUDENT ACADEMIC &amp;
                    SCHOLARSHIP REPORT

                </h4>


            </div>



            <div class="card-body p-4">


                <div class="row g-4">


                    <!-- Student Profile -->

                    <div class="col-md-6 border-end">


                        <h5
                            class="fw-bold text-primary
                                   border-bottom pb-2 mb-3">

                            Student Profile

                        </h5>


                        <div class="mb-2">

                            <strong>
                                Name:
                            </strong>

                            <span>
                                ${student.name}
                            </span>

                        </div>


                        <div class="mb-2">

                            <strong>
                                Registration No:
                            </strong>

                            <span>
                                ${student.regNo}
                            </span>

                        </div>


                        <div class="mb-2">

                            <strong>
                                Program:
                            </strong>

                            <span>
                                ${student.program}
                            </span>

                        </div>


                        <div class="mb-2">

                            <strong>
                                Semester:
                            </strong>

                            <span>
                                ${student.semester}
                            </span>

                        </div>


                        <div class="mb-2">

                            <strong>
                                CGPA:
                            </strong>

                            <span class="badge bg-dark">

                                ${student.cgpa}

                            </span>

                        </div>


                        <div class="mb-2">

                            <strong>
                                Attendance:
                            </strong>

                            <span
                                class="fw-bold
                                ${student.attendance < 75
                                    ? 'text-danger'
                                    : 'text-success'}">

                                ${student.attendance}%

                            </span>

                        </div>


                    </div>



                    <!-- Academic Marks -->

                    <div class="col-md-6">


                        <h5
                            class="fw-bold text-primary
                                   border-bottom pb-2 mb-3">

                            Academic Marks Breakdown

                        </h5>


                        <div
                            class="d-flex
                                   justify-content-between
                                   mb-2">

                            <span>

                                Assignment Marks:

                            </span>


                            <strong>

                                ${student.assignmentMarks}
                                / 20

                            </strong>

                        </div>


                        <div
                            class="d-flex
                                   justify-content-between
                                   mb-2">

                            <span>

                                Midterm Marks:

                            </span>


                            <strong>

                                ${student.midtermMarks}
                                / 30

                            </strong>

                        </div>


                        <div
                            class="d-flex
                                   justify-content-between
                                   mb-2">

                            <span>

                                Final Exam Marks:

                            </span>


                            <strong>

                                ${student.finalExamMarks}
                                / 50

                            </strong>

                        </div>


                        <hr>


                        <div
                            class="d-flex
                                   justify-content-between
                                   mb-2
                                   fs-6
                                   fw-bold">

                            <span>

                                Total Obtained:

                            </span>


                            <span>

                                ${results.totalObtainedMarks}
                                /
                                ${results.totalMaxMarks}

                            </span>

                        </div>


                        <div
                            class="d-flex
                                   justify-content-between
                                   mb-2">

                            <span>

                                Percentage:

                            </span>


                            <strong
                                class="text-primary">

                                ${results.percentage.toFixed(2)}%

                            </strong>

                        </div>


                        <div
                            class="d-flex
                                   justify-content-between
                                   align-items-center">

                            <span>

                                Grade:

                            </span>


                            <span
                                class="badge bg-primary fs-6">

                                ${results.grade}

                            </span>

                        </div>


                    </div>


                </div>



                <hr class="my-4">



                <!-- Result / Scholarship / Academic Status -->

                <div
                    class="row text-center g-3">


                    <!-- Pass / Fail -->

                    <div class="col-md-4">


                        <div
                            class="p-3
                                   border
                                   rounded
                                   bg-light">


                            <span
                                class="text-muted
                                       small
                                       d-block
                                       mb-1">

                                Result Status

                            </span>


                            <span
                                class="badge fs-6
                                ${results.passStatus === 'Passed'
                                    ? 'bg-success'
                                    : 'bg-danger'}">

                                ${results.passStatus}

                            </span>


                        </div>

                    </div>



                    <!-- Scholarship -->

                    <div class="col-md-4">


                        <div
                            class="p-3
                                   border
                                   rounded
                                   bg-light">


                            <span
                                class="text-muted
                                       small
                                       d-block
                                       mb-1">

                                Scholarship Status

                            </span>


                            <span
                                class="badge fs-6
                                ${results.scholarshipBadgeClass}">

                                ${results.scholarshipStatus}

                            </span>


                        </div>

                    </div>



                    <!-- Academic Status -->

                    <div class="col-md-4">


                        <div
                            class="p-3
                                   border
                                   rounded
                                   bg-light">


                            <span
                                class="text-muted
                                       small
                                       d-block
                                       mb-1">

                                Academic Status

                            </span>


                            <span
                                class="badge fs-6
                                ${results.academicBadgeClass}">

                                ${results.academicStatus}

                            </span>


                        </div>

                    </div>


                </div>


            </div>


        </div>

    `;

}



// ============================================================
// Four Testing Scenarios
// ============================================================

function loadTestingScenario(scenarioNumber) {


    // Scenario 1 - High Performing Student

    if (scenarioNumber === 1) {

        student.cgpa = 3.85;

        student.attendance = 92;

        student.assignmentMarks = 18;

        student.midtermMarks = 27;

        student.finalExamMarks = 45;

    }


    // Scenario 2 - Average Student

    else if (scenarioNumber === 2) {

        student.cgpa = 3.1;

        student.attendance = 82;

        student.assignmentMarks = 14;

        student.midtermMarks = 21;

        student.finalExamMarks = 34;

    }


    // Scenario 3 - Low Attendance

    else if (scenarioNumber === 3) {

        student.cgpa = 3.8;

        student.attendance = 65;

        student.assignmentMarks = 18;

        student.midtermMarks = 27;

        student.finalExamMarks = 45;

    }


    // Scenario 4 - Poor Academic Performance

    else if (scenarioNumber === 4) {

        student.cgpa = 1.8;

        student.attendance = 50;

        student.assignmentMarks = 6;

        student.midtermMarks = 10;

        student.finalExamMarks = 18;

    }


    renderAcademicPortal();

}



// ============================================================
// Initial Page Load
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderAcademicPortal();

    }
);



// ============================================================
// Console Operator Demonstration
// ============================================================

console.log(
    "%c=== OPERATORS DEMONSTRATION ===",
    "color: #198754; font-weight: bold; font-size: 14px;"
);


const operatorResults =
    evaluateStudentAcademicPerformance(student);


console.log(
    "Addition (+) - Total Marks:",
    operatorResults.totalObtainedMarks
);


console.log(
    "Subtraction (-) - Remaining Marks:",
    operatorResults.remainingMarks
);


console.log(
    "Multiplication (*) - Percentage:",
    operatorResults.percentageCheck
);


console.log(
    "Division (/) - Average Mark:",
    operatorResults.averageMark
);


console.log(
    "Modulus (%) - Marks Remainder:",
    operatorResults.marksRemainder
);


console.log(
    "Greater Than (>) - Percentage > 80:",
    operatorResults.isHighPercentage
);


console.log(
    "Less Than (<) - Percentage < 50:",
    operatorResults.isLowPercentage
);


console.log(
    "Greater Than or Equal (>=) - Passing:",
    operatorResults.isPassingPercentage
);


console.log(
    "Less Than or Equal (<=) - Attendance <= 70:",
    operatorResults.isLowAttendance
);


console.log(
    "Strict Equality (===) - Grade A:",
    operatorResults.isGradeA
);


console.log(
    "Not Equal (!==) - Grade is not F:",
    operatorResults.isNotFailed
);


console.log(
    "AND (&&) - Scholarship Requirements:",
    operatorResults.scholarshipRequirementsMet
);


console.log(
    "OR (||) - Needs Academic Attention:",
    operatorResults.needsAcademicAttention
);


console.log(
    "NOT (!) - Attendance is Good:",
    operatorResults.attendanceIsGood
);