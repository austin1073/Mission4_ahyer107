/*Austin Hyer
    2-6-22
    IS 413
    Mission #5
*/
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

using Mission4_ahyer107;
namespace Mission4_ahyer107.Models
{
    //Sets getters and setters for each form item and makes them required. The range tag makes it so that the user has to enter a number between 0 and 100
    public class CalcModel
    {
        [Required]
        [Range(0,100)]
        public int Assignments { get; set;}

        [Required]
        [Range(0, 100)]
        public int Group_project { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Midterm_exam { get; set; }

        [Required]
        [Range(0, 100)]
        public int Final_exam { get; set; }

        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }

    }
}
