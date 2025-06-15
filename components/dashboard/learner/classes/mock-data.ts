export const mockPrograms = [
  { id: "business-management", name: "Business Management" },
  { id: "computer-science", name: "Computer Science" },
  { id: "engineering", name: "Engineering" }
]

export const mockYears = [
  { id: "bachelor1", name: "Bachelier - année 1" },
  { id: "bachelor2", name: "Bachelier - année 2" },
  { id: "bachelor3", name: "Bachelier - année 3" },
  { id: "master1", name: "Master - année 1" },
  { id: "master2", name: "Master - année 2" }
]

export const mockQuarters = [
  { id: "Q1", name: "Q1" },
  { id: "Q2", name: "Q2" }
]

type ProgramId = "business-management" | "computer-science" | "engineering"
type YearId = "bachelor1" | "bachelor2" | "bachelor3" | "master1" | "master2"
type QuarterId = "Q1" | "Q2"

interface Course {
  id: number
  code: string
  name: string
  credits: number
}

type CoursesByQuarter = {
  [key in QuarterId]: Course[]
}

type CoursesByYear = {
  [key in YearId]: CoursesByQuarter
}

type CoursesByProgram = {
  [key in ProgramId]: CoursesByYear
}

// Fonction pour obtenir les cours en fonction des filtres
export function getMockCourses(program: ProgramId, year: YearId, quarter: QuarterId): Course[] {
  const courses: CoursesByProgram = {
    "business-management": {
      bachelor1: {
        Q1: [
          { id: 1, code: "ECON1001", name: "Introduction to Economics", credits: 5 },
          { id: 2, code: "MATH1001", name: "Business Mathematics", credits: 4 }
        ],
        Q2: [
          { id: 3, code: "MARK1001", name: "Marketing Fundamentals", credits: 6 },
          { id: 4, code: "MGMT1001", name: "Management Principles", credits: 5 }
        ]
      },
      bachelor2: {
        Q1: [
          { id: 5, code: "FIN2001", name: "Corporate Finance", credits: 6 },
          { id: 6, code: "HRM2001", name: "Human Resource Management", credits: 4 }
        ],
        Q2: [
          { id: 7, code: "STR2001", name: "Strategic Management", credits: 5 },
          { id: 8, code: "OPS2001", name: "Operations Management", credits: 4 }
        ]
      },
      bachelor3: {
        Q1: [
          { id: 9, code: "INT3001", name: "International Business", credits: 6 },
          { id: 10, code: "ENT3001", name: "Entrepreneurship", credits: 5 }
        ],
        Q2: [
          { id: 11, code: "ETH3001", name: "Business Ethics", credits: 4 },
          { id: 12, code: "INN3001", name: "Innovation Management", credits: 5 }
        ]
      },
      master1: {
        Q1: [
          { id: 13, code: "FIN4001", name: "Advanced Corporate Finance", credits: 6 },
          { id: 14, code: "STR4001", name: "Strategic Leadership", credits: 5 }
        ],
        Q2: [
          { id: 15, code: "MKT4001", name: "Digital Marketing", credits: 5 },
          { id: 16, code: "INN4001", name: "Business Innovation", credits: 6 }
        ]
      },
      master2: {
        Q1: [
          { id: 17, code: "FIN5001", name: "Financial Markets", credits: 6 },
          { id: 18, code: "STR5001", name: "Global Strategy", credits: 5 }
        ],
        Q2: [
          { id: 19, code: "MKT5001", name: "Marketing Analytics", credits: 5 },
          { id: 20, code: "INN5001", name: "Innovation Management", credits: 6 }
        ]
      }
    },
    "computer-science": {
      bachelor1: {
        Q1: [
          { id: 21, code: "CS1001", name: "Introduction to Programming", credits: 6 },
          { id: 22, code: "CS1002", name: "Data Structures", credits: 5 }
        ],
        Q2: [
          { id: 23, code: "CS1003", name: "Algorithms", credits: 6 },
          { id: 24, code: "CS1004", name: "Database Systems", credits: 5 }
        ]
      },
      bachelor2: {
        Q1: [
          { id: 25, code: "CS2001", name: "Web Development", credits: 5 },
          { id: 26, code: "CS2002", name: "Software Engineering", credits: 6 }
        ],
        Q2: [
          { id: 27, code: "CS2003", name: "Computer Networks", credits: 5 },
          { id: 28, code: "CS2004", name: "Operating Systems", credits: 6 }
        ]
      },
      bachelor3: {
        Q1: [
          { id: 29, code: "CS3001", name: "Artificial Intelligence", credits: 6 },
          { id: 30, code: "CS3002", name: "Machine Learning", credits: 5 }
        ],
        Q2: [
          { id: 31, code: "CS3003", name: "Cloud Computing", credits: 5 },
          { id: 32, code: "CS3004", name: "Cybersecurity", credits: 6 }
        ]
      },
      master1: {
        Q1: [
          { id: 33, code: "CS4001", name: "Advanced AI", credits: 6 },
          { id: 34, code: "CS4002", name: "Deep Learning", credits: 5 }
        ],
        Q2: [
          { id: 35, code: "CS4003", name: "Big Data", credits: 5 },
          { id: 36, code: "CS4004", name: "Cloud Architecture", credits: 6 }
        ]
      },
      master2: {
        Q1: [
          { id: 37, code: "CS5001", name: "AI Research", credits: 6 },
          { id: 38, code: "CS5002", name: "Advanced Security", credits: 5 }
        ],
        Q2: [
          { id: 39, code: "CS5003", name: "Distributed Systems", credits: 5 },
          { id: 40, code: "CS5004", name: "Quantum Computing", credits: 6 }
        ]
      }
    },
    "engineering": {
      bachelor1: {
        Q1: [
          { id: 41, code: "ENG1001", name: "Engineering Mathematics", credits: 6 },
          { id: 42, code: "ENG1002", name: "Physics for Engineers", credits: 5 }
        ],
        Q2: [
          { id: 43, code: "ENG1003", name: "Engineering Design", credits: 6 },
          { id: 44, code: "ENG1004", name: "Materials Science", credits: 5 }
        ]
      },
      bachelor2: {
        Q1: [
          { id: 45, code: "ENG2001", name: "Thermodynamics", credits: 6 },
          { id: 46, code: "ENG2002", name: "Fluid Mechanics", credits: 5 }
        ],
        Q2: [
          { id: 47, code: "ENG2003", name: "Electrical Circuits", credits: 5 },
          { id: 48, code: "ENG2004", name: "Control Systems", credits: 6 }
        ]
      },
      bachelor3: {
        Q1: [
          { id: 49, code: "ENG3001", name: "Robotics", credits: 6 },
          { id: 50, code: "ENG3002", name: "Renewable Energy", credits: 5 }
        ],
        Q2: [
          { id: 51, code: "ENG3003", name: "Project Management", credits: 5 },
          { id: 52, code: "ENG3004", name: "Sustainable Design", credits: 6 }
        ]
      },
      master1: {
        Q1: [
          { id: 53, code: "ENG4001", name: "Advanced Robotics", credits: 6 },
          { id: 54, code: "ENG4002", name: "Smart Grids", credits: 5 }
        ],
        Q2: [
          { id: 55, code: "ENG4003", name: "Advanced Control", credits: 5 },
          { id: 56, code: "ENG4004", name: "Energy Systems", credits: 6 }
        ]
      },
      master2: {
        Q1: [
          { id: 57, code: "ENG5001", name: "AI in Engineering", credits: 6 },
          { id: 58, code: "ENG5002", name: "Sustainable Tech", credits: 5 }
        ],
        Q2: [
          { id: 59, code: "ENG5003", name: "Advanced Materials", credits: 5 },
          { id: 60, code: "ENG5004", name: "Future Systems", credits: 6 }
        ]
      }
    }
  }

  return courses[program][year][quarter]
} 