
const careers = {
    developer: {
        title: "Software Developer",
        description: "Build websites, applications, and software using programming languages.",
        skills: ["Python", "JavaScript", "SQL", "Git", "REST APIs"],
        questions: [
            {
                topic: "Programming Basics",
                question: "Which keyword declares a variable in JavaScript?",
                options: ["print", "let", "input", "echo"],
                answer: 1
            },
            {
                topic: "Programming Logic",
                question: "Which structure repeats code?",
                options: ["Loop", "Variable", "String", "Comment"],
                answer: 0
            },
            {
                topic: "Databases",
                question: "Which language is used to query databases?",
                options: ["HTML", "CSS", "SQL", "Photoshop"],
                answer: 2
            },
            {
                topic: "APIs",
                question: "What is an API commonly used for?",
                options: [
                    "Connecting software systems",
                    "Designing logos",
                    "Editing photos",
                    "Creating spreadsheets only"
                ],
                answer: 0
            }
        ],
        roadmap: [
            {
                title: "Learn Python Basics",
                description: "Learn variables, conditions, loops, functions, and basic problem-solving.",
                url: "https://www.w3schools.com/python/"
            },
            {
                title: "Learn JavaScript",
                description: "Understand variables, functions, arrays, objects, and DOM manipulation.",
                url: "https://javascript.info/"
            },
            {
                title: "Learn SQL",
                description: "Practice creating, reading, updating, and deleting database records.",
                url: "https://www.w3schools.com/sql/"
            },
            {
                title: "Build Projects and Learn APIs",
                description: "Build a small web application and learn how APIs connect different systems.",
                url: "https://developer.mozilla.org/en-US/docs/Web/HTTP"
            }
        ]
    },

    analyst: {
        title: "Data Analyst",
        description: "Study data, identify patterns, and help businesses make better decisions.",
        skills: ["Excel", "SQL", "Power BI", "Python", "Data Visualisation"],
        questions: [
            {
                topic: "Spreadsheets",
                question: "Which Excel function calculates an average?",
                options: ["COUNT", "AVERAGE", "SORT", "LEFT"],
                answer: 1
            },
            {
                topic: "SQL",
                question: "Which SQL command retrieves data?",
                options: ["SELECT", "DELETE", "DROP", "UPDATE"],
                answer: 0
            },
            {
                topic: "Data Visualisation",
                question: "Which chart is useful for comparing categories?",
                options: ["Bar chart", "Paragraph", "Text file", "Code editor"],
                answer: 0
            },
            {
                topic: "Data Analysis",
                question: "What does a missing value represent?",
                options: [
                    "A value that is not available",
                    "Always a zero",
                    "Always an error in the formula",
                    "A duplicate record"
                ],
                answer: 0
            }
        ],
        roadmap: [
            {
                title: "Learn Excel",
                description: "Practice formulas, sorting, filtering, pivot tables, and charts.",
                url: "https://support.microsoft.com/excel"
            },
            {
                title: "Learn SQL",
                description: "Practice retrieving, filtering, grouping, and joining data.",
                url: "https://www.w3schools.com/sql/"
            },
            {
                title: "Learn Power BI",
                description: "Create interactive reports and dashboards from datasets.",
                url: "https://learn.microsoft.com/en-us/training/powerplatform/power-bi/"
            },
            {
                title: "Build a Data Project",
                description: "Analyse a real dataset and present your findings with charts and insights.",
                url: "https://www.kaggle.com/datasets"
            }
        ]
    },

    designer: {
        title: "UI/UX Designer",
        description: "Design websites and apps that look attractive and are easy to use.",
        skills: ["Figma", "Wireframing", "Prototyping", "User Research", "Design Systems"],
        questions: [
            {
                topic: "UI Design",
                question: "What does UI stand for?",
                options: [
                    "User Interface",
                    "Universal Internet",
                    "User Information",
                    "Unified Input"
                ],
                answer: 0
            },
            {
                topic: "Wireframing",
                question: "What is a wireframe?",
                options: [
                    "A basic layout of a screen",
                    "A programming language",
                    "A database",
                    "A marketing report"
                ],
                answer: 0
            },
            {
                topic: "UX Research",
                question: "Why do designers conduct user research?",
                options: [
                    "To understand user needs",
                    "To increase code length",
                    "To remove all feedback",
                    "To avoid testing"
                ],
                answer: 0
            },
            {
                topic: "Prototyping",
                question: "What does a prototype help designers do?",
                options: [
                    "Test an interactive design",
                    "Store passwords",
                    "Write database queries",
                    "Calculate salaries"
                ],
                answer: 0
            }
        ],
        roadmap: [
            {
                title: "Learn Design Fundamentals",
                description: "Understand colour, typography, spacing, alignment, and visual hierarchy.",
                url: "https://www.interaction-design.org/literature"
            },
            {
                title: "Learn Figma",
                description: "Practice creating screens, components, and reusable design elements.",
                url: "https://help.figma.com/"
            },
            {
                title: "Practise Wireframes and Prototypes",
                description: "Turn simple ideas into screen layouts and interactive prototypes.",
                url: "https://help.figma.com/hc/en-us/categories/360002042553"
            },
            {
                title: "Create a Portfolio",
                description: "Show your design process, user research, prototypes, and final designs.",
                url: "https://www.behance.net/"
            }
        ]
    },

    marketer: {
        title: "Digital Marketing Executive",
        description: "Promote brands online through search engines, social media, and digital campaigns.",
        skills: ["SEO", "Google Ads", "Google Analytics", "Content", "Campaign Analysis"],
        questions: [
            {
                topic: "SEO",
                question: "What is the main purpose of SEO?",
                options: [
                    "Improve visibility in search results",
                    "Design computer hardware",
                    "Create databases",
                    "Repair networks"
                ],
                answer: 0
            },
            {
                topic: "Digital Advertising",
                question: "What is a paid online advertisement?",
                options: [
                    "An advertisement businesses pay to display",
                    "A free spreadsheet",
                    "A programming loop",
                    "An offline receipt"
                ],
                answer: 0
            },
            {
                topic: "Analytics",
                question: "Why do marketers use analytics?",
                options: [
                    "To measure campaign performance",
                    "To manufacture products",
                    "To write operating systems",
                    "To repair computers"
                ],
                answer: 0
            },
            {
                topic: "Content Marketing",
                question: "What is the purpose of useful marketing content?",
                options: [
                    "Attract and engage an audience",
                    "Hide product information",
                    "Stop customer communication",
                    "Replace all customer support"
                ],
                answer: 0
            }
        ],
        roadmap: [
            {
                title: "Learn Digital Marketing Basics",
                description: "Understand digital channels, audiences, and marketing objectives.",
                url: "https://skillshop.withgoogle.com/"
            },
            {
                title: "Learn SEO",
                description: "Study keywords, search intent, website optimisation, and search rankings.",
                url: "https://developers.google.com/search/docs"
            },
            {
                title: "Learn Analytics and Advertising",
                description: "Explore campaign measurement, website traffic, and advertising metrics.",
                url: "https://analytics.google.com/analytics/academy/"
            },
            {
                title: "Create a Marketing Campaign",
                description: "Plan a small campaign, define its target audience, and measure its results.",
                url: "https://skillshop.withgoogle.com/"
            }
        ]
    }
};


// CAREER QUIZ QUESTIONS

const careerQuestions = [
    {
        question: "Which activity interests you the most?",
        options: [
            { text: "Building applications and solving coding problems", value: "developer" },
            { text: "Working with data and finding patterns", value: "analyst" },
            { text: "Designing attractive websites and apps", value: "designer" },
            { text: "Promoting brands and creating campaigns", value: "marketer" }
        ]
    },
    {
        question: "Which task would you enjoy?",
        options: [
            { text: "Writing and testing code", value: "developer" },
            { text: "Preparing reports and analysing numbers", value: "analyst" },
            { text: "Creating layouts and prototypes", value: "designer" },
            { text: "Planning social media content", value: "marketer" }
        ]
    },
    {
        question: "Which skill would you most like to develop?",
        options: [
            { text: "Programming", value: "developer" },
            { text: "Data interpretation", value: "analyst" },
            { text: "Visual design", value: "designer" },
            { text: "Digital promotion", value: "marketer" }
        ]
    },
    {
        question: "Which project sounds most interesting?",
        options: [
            { text: "Developing a website or app", value: "developer" },
            { text: "Finding insights from business data", value: "analyst" },
            { text: "Designing an easy-to-use app", value: "designer" },
            { text: "Launching an online campaign", value: "marketer" }
        ]
    },
    {
        question: "How would you prefer to solve a problem?",
        options: [
            { text: "Use code to create a solution", value: "developer" },
            { text: "Study the data and identify the cause", value: "analyst" },
            { text: "Improve the user experience", value: "designer" },
            { text: "Find a creative way to reach people", value: "marketer" }
        ]
    }
];


// CURRENT ASSESSMENT STATE

let currentCareerRole = null;
let currentRoadmapGaps = [];
let currentRoadmapScore = 0;


// START THE CAREER QUIZ

function startQuiz() {
    const quizContainer = document.getElementById("quiz-message");
    const resultContainer = document.getElementById("skill-assessment");

    if (!quizContainer || !resultContainer) {
        alert("Please check the quiz-message and skill-assessment elements in index.html.");
        return;
    }

    resultContainer.innerHTML = "";

    let html = `
        <div class="quiz-card">
            <h2>Discover Your Best-Match Career</h2>
            <p>Answer these questions to find a career that matches your interests.</p>
            <form id="career-form" onsubmit="showResults(event)">
    `;

    careerQuestions.forEach((question, index) => {
        html += `
            <div class="question">
                <h3>${index + 1}. ${question.question}</h3>
        `;

        question.options.forEach((option, optionIndex) => {
            html += `
                <label class="quiz-option">
                    <input
                        type="radio"
                        name="career${index}"
                        value="${option.value}"
                        required
                    >
                    ${option.text}
                </label>
            `;
        });

        html += `</div>`;
    });

    html += `
                <button class="button" type="submit">
                    Find My Career
                </button>
            </form>
        </div>
    `;

    quizContainer.innerHTML = html;
    quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}


// SHOW ONE BEST-MATCH CAREER

function showResults(event) {
    event.preventDefault();

    const scores = {
        developer: 0,
        analyst: 0,
        designer: 0,
        marketer: 0
    };

    careerQuestions.forEach((question, index) => {
        const answer = document.querySelector(
            `input[name="career${index}"]:checked`
        );

        if (answer) {
            scores[answer.value]++;
        }
    });

    const rankedCareers = Object.keys(scores).sort(
        (a, b) => scores[b] - scores[a]
    );

    const bestCareer = rankedCareers[0];
    const career = careers[bestCareer];
    const container = document.getElementById("skill-assessment");

    if (!container) {
        alert("The skill-assessment section is missing in index.html.");
        return;
    }

    currentCareerRole = bestCareer;

    container.innerHTML = `
        <div class="result-card">
            <h2>Your Best-Match Career</h2>
            <h3>${career.title}</h3>
            <p>${career.description}</p>

            <p>
                <strong>Skills to learn:</strong>
                ${career.skills.join(", ")}
            </p>

            <button class="button" onclick="startSkillAssessment('${bestCareer}')">
                Assess My Technical Skills
            </button>
        </div>
    `;

    container.scrollIntoView({ behavior: "smooth", block: "start" });
}


// START THE TECHNICAL SKILL ASSESSMENT

function startSkillAssessment(role) {
    const career = careers[role];
    const container = document.getElementById("skill-assessment");

    if (!career || !container) {
        alert("Unable to load the skill assessment.");
        return;
    }

    currentCareerRole = role;

    let html = `
        <div class="quiz-card">
            <h2>${career.title} - Skill Assessment</h2>
            <p>Answer these questions to identify the skills you need to improve.</p>

            <form id="skill-form" onsubmit="submitSkillAssessment(event, '${role}')">
    `;

    career.questions.forEach((question, index) => {
        html += `
            <div class="question">
                <h3>${index + 1}. ${question.question}</h3>
        `;

        question.options.forEach((option, optionIndex) => {
            html += `
                <label class="quiz-option">
                    <input
                        type="radio"
                        name="skill${index}"
                        value="${optionIndex}"
                        required
                    >
                    ${option}
                </label>
            `;
        });

        html += `</div>`;
    });

    html += `
                <button class="button" type="submit">
                    Submit Assessment
                </button>

                <button class="button" type="button" onclick="startQuiz()">
                    Back to Career Quiz
                </button>
            </form>
        </div>
    `;

    container.innerHTML = html;
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}


// CHECK TECHNICAL SKILL ANSWERS

function submitSkillAssessment(event, role) {
    event.preventDefault();

    const career = careers[role];
    let score = 0;
    const gaps = [];

    career.questions.forEach((question, index) => {
        const answer = document.querySelector(
            `input[name="skill${index}"]:checked`
        );

        if (answer && Number(answer.value) === question.answer) {
            score++;
        } else {
            gaps.push(question.topic);
        }
    });

    currentCareerRole = role;
    currentRoadmapScore = score;
    currentRoadmapGaps = gaps;

    showSkillResults(role, score, gaps);
}


// DISPLAY TECHNICAL ASSESSMENT RESULTS

function showSkillResults(role, score, gaps) {
    const career = careers[role];
    const container = document.getElementById("skill-assessment");
    const percentage = Math.round((score / career.questions.length) * 100);

    const gapHTML = gaps.length
        ? `<p><strong>Areas to improve:</strong> ${gaps.join(", ")}</p>`
        : `<p>Great work! You answered every question correctly.</p>`;

    container.innerHTML = `
        <div class="result-card">
            <h2>Your Skill Assessment Results</h2>
            <h3>${career.title}</h3>

            <p>
                <strong>Your score:</strong>
                ${score} out of ${career.questions.length} (${percentage}%)
            </p>

            ${gapHTML}

            <button class="button" onclick="showLearningRoadmap('${role}')">
                View My Learning Roadmap
            </button>

            <button class="button" onclick="startSkillAssessment('${role}')">
                Retake Assessment
            </button>

            <button class="button" onclick="startQuiz()">
                Back to Career Quiz
            </button>
        </div>
    `;

    container.scrollIntoView({ behavior: "smooth", block: "start" });
}


// DISPLAY A PERSONALIZED LEARNING ROADMAP

function showLearningRoadmap(role) {
    const career = careers[role];
    const container = document.getElementById("skill-assessment");

    if (!career || !container) return;

    currentCareerRole = role;

    let completed = [];

    try {
        completed = JSON.parse(
            localStorage.getItem(`roadmap-${role}`)
        ) || [];
    } catch (error) {
        completed = [];
    }

    let html = `
        <div class="roadmap-container">
            <h2>Your Learning Roadmap</h2>
            <h3>${career.title}</h3>

            <p>Follow these steps to develop the skills needed for this career.</p>

            <div class="roadmap-progress">
                <strong id="roadmap-progress-text">0% completed</strong>
                <div class="progress-track">
                    <div id="roadmap-progress-bar"></div>
                </div>
            </div>
    `;

    career.roadmap.forEach((step, index) => {
        const isCompleted = completed.includes(index);
        const isPriority = currentRoadmapGaps.some(gap =>
            step.title.toLowerCase().includes(gap.toLowerCase()) ||
            gap.toLowerCase().includes(step.title.toLowerCase())
        );

        html += `
            <div class="roadmap-card">
                <label class="roadmap-check">
                    <input
                        type="checkbox"
                        ${isCompleted ? "checked" : ""}
                        onchange="toggleRoadmapStep('${role}', ${index}, this.checked)"
                    >
                    <strong>Step ${index + 1}: ${step.title}</strong>
                </label>

                ${isPriority ? `<p class="priority-label">Recommended focus</p>` : ""}

                <p>${step.description}</p>

                <a href="${step.url}" target="_blank" rel="noopener noreferrer">
                    Start Learning
                </a>
            </div>
        `;
    });

    html += `
            <button class="button" onclick="returnToSkillResults()">
                Back to Assessment Results
            </button>

            <button class="button" onclick="startQuiz()">
                Start Again
            </button>
        </div>
    `;

    container.innerHTML = html;

    updateRoadmapProgress(role);
    container.scrollIntoView({ behavior: "smooth", block: "start" });
}


// SAVE COMPLETED ROADMAP STEPS

function toggleRoadmapStep(role, index, isChecked) {
    let completed = [];

    try {
        completed = JSON.parse(
            localStorage.getItem(`roadmap-${role}`)
        ) || [];
    } catch (error) {
        completed = [];
    }

    if (isChecked && !completed.includes(index)) {
        completed.push(index);
    }

    if (!isChecked) {
        completed = completed.filter(item => item !== index);
    }

    try {
        localStorage.setItem(`roadmap-${role}`, JSON.stringify(completed));
    } catch (error) {
        console.warn("Roadmap progress could not be saved.");
    }

    updateRoadmapProgress(role);
}


// UPDATE ROADMAP PROGRESS BAR

function updateRoadmapProgress(role) {
    const career = careers[role];

    if (!career) return;

    let completed = [];

    try {
        completed = JSON.parse(
            localStorage.getItem(`roadmap-${role}`)
        ) || [];
    } catch (error) {
        completed = [];
    }

    const percentage = Math.round(
        (completed.length / career.roadmap.length) * 100
    );

    const progressBar = document.getElementById("roadmap-progress-bar");
    const progressText = document.getElementById("roadmap-progress-text");

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    if (progressText) {
        progressText.textContent = `${percentage}% completed`;
    }
}


// RETURN TO PREVIOUS SKILL RESULTS

function returnToSkillResults() {
    if (currentCareerRole) {
        showSkillResults(
            currentCareerRole,
            currentRoadmapScore,
            currentRoadmapGaps
        );
    }
}
