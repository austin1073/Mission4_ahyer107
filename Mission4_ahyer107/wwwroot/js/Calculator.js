/*Austin Hyer
    2-6-22
    IS 413
    Mission #5
*/

//This function listens for the button on the form to be clicked and calculates the total score and letter grade for the user.
$("#btn").click(function () {

    //The sections are weighted - here is the math that figures out the total average weighted score.
    var assignmentsscore = $("#assignments").val() * 0.5
    var group_projectscore = $("#group_project").val() * 0.1
    var quizzesscore = $("#quizzes").val() * 0.1
    var midterm_examscore = $("#midterm_exam").val() * 0.1
    var final_examscore = $("#final_exam").val() * 0.1
    var intexscore = $("#intex").val() * 0.1
    var total = assignmentsscore + group_projectscore + quizzesscore + midterm_examscore + final_examscore + intexscore

    //If loops to decide letter grade from weighted score.
    if (total >= 94) {
        letterGrade = "A"
    }
    else if (total >= 90) {
        letterGrade = "A-"
    }
    else if (total >= 87) {
        letterGrade = "B+"
    }
    else if (total >= 84) {
        letterGrade = "B"
    }
    else if (total >= 80) {
        letterGrade = "B-"
    }
    else if (total >= 77) {
        letterGrade = "C+"
    }
    else if (total >= 74) {
        letterGrade = "C"
    }
    else if (total >= 70) {
        letterGrade = "C-"
    }
    else if (total >= 67) {
        letterGrade = "D+"
    }
    else if (total >= 64) {
        letterGrade = "D"
    }
    else if (total >= 60) {
        letterGrade = "D-"
    }
    else {
        letterGrade = "E"
    }

    //Returns the user's total score and letter grade at the end of the form.
    $('#grade').html("You scored " + total + "% in this class! " + "Your letter grade is: " + letterGrade)
}