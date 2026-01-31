export const projectDetails = {
  "interview-aware-code-intelligence": {
    title: "Interview Aware Code Intelligence",
    type: "Product / Interview Platform",

    intro: [
      "Interview Aware Code Intelligence is a full-stack platform designed to evaluate not just whether a candidate’s code works, but how they think while solving problems.",
      "Traditional coding platforms focus heavily on output correctness. This project was built to assess reasoning, approach, and explanation — the same criteria used in real technical interviews."
    ],

    sections: [
      {
        heading: "Problem Statement",
        content: [
          "Many candidates fail interviews despite knowing how to code because interview evaluation is not based solely on output.",
          "Interviewers look for structured thinking, logical breakdown, trade-off awareness, and communication — none of which are measured by conventional coding platforms."
        ]
      },
      {
        heading: "System Design Approach",
        content: [
          "The system separates problem solving into multiple evaluation dimensions instead of treating it as a single pass/fail outcome.",
          "Each submission captures approach explanation, logic structure, and final implementation independently."
        ],
        list: [
          "Code correctness validation",
          "Approach and explanation capture",
          "Structured evaluation criteria"
        ]
      },
      {
        heading: "Backend Architecture",
        content: [
          "The backend is designed using Node.js and Express with a clear separation between controllers, services, and data models.",
          "APIs are structured to support extensibility, making it easy to add new evaluation metrics without breaking existing flows."
        ],
        list: [
          "RESTful API design",
          "Scalable request handling",
          "Clear responsibility separation"
        ]
      },
      {
        heading: "Key Learnings",
        list: [
          "How interview evaluation differs from traditional application logic",
          "Designing systems around human decision-making",
          "Building extensible backend architectures"
        ]
      },
      {
        heading: "System Architecture Overview",
        content: [
          "The system follows a clear separation between presentation, application logic, and data persistence layers.",
          "The frontend is responsible only for user interaction, problem input, and displaying evaluation results. All decision-making and evaluation logic is handled by the backend.",
          "The backend acts as an orchestration layer, receiving submissions, running evaluation logic, and returning structured feedback instead of simple pass/fail results."
        ],
        list: [
          "React frontend for problem-solving UI and explanation input",
          "Express-based API layer for evaluation flow control",
          "Dedicated logic layer for code analysis and scoring decisions",
          "MongoDB for storing submissions, feedback, and evaluation history"
        ]
      },
      {
        heading: "Trade-offs & Design Decisions",
        content: [
          "This project prioritizes clarity of evaluation logic over raw execution speed.",
          "Instead of optimizing for high-throughput competitive programming use cases, the system is designed to simulate real interview conditions where explanation quality and approach matter more than micro-optimizations.",
          "Advanced static analysis and AI-based evaluation were intentionally kept out of the initial version to avoid unnecessary complexity and opaque scoring behavior."
        ],
        list: [
          "Focused on explainability over maximum automation",
          "Manual rule-based evaluation logic instead of black-box scoring",
          "Limited problem set to ensure consistent evaluation quality"
        ]
      },
      {
        heading: "Scalability, Metrics & Future Improvements",
        content: [
          "The current architecture is suitable for small to medium usage, such as interview preparation platforms or internal training tools.",
          "As usage grows, the evaluation logic can be separated into independent services to allow horizontal scaling and parallel analysis.",
          "Submission data can be leveraged to derive meaningful learning metrics instead of simple correctness scores."
        ],
        list: [
          "Potential metrics: average solution quality score, explanation clarity rating, time-to-solution",
          "Future scalability via microservice-based evaluation workers",
          "Opportunity to introduce AI-assisted feedback once baseline logic is stable"
        ]
      }


    ]
  },

  "mpxire": {
    title: "MPXIRE – Digital Service Website",
    type: "Client / Business Website",

    intro: [
      "MPXIRE is a production-ready digital service website built for a real business use case.",
      "The goal was to create a clean, scalable web presence while following professional frontend and backend practices."
    ],

    sections: [
      {
        heading: "Project Objective",
        content: [
          "The objective was to design and develop a modern business website that is fast, maintainable, and scalable.",
          "Emphasis was placed on clean UI structure, reusable components, and long-term maintainability."
        ]
      },
      {
        heading: "Frontend Structure",
        content: [
          "The frontend was built using React with component-based architecture.",
          "Reusable UI sections and clear layout separation were prioritized to avoid monolithic components."
        ]
      },
      {
        heading: "Engineering Decisions",
        list: [
          "Component-driven UI structure",
          "Separation of content and layout",
          "Maintainability over over-styling"
        ]
      },
      {
        heading: "Key Learnings",
        list: [
          "Translating business requirements into technical structure",
          "Building client-facing applications with long-term clarity",
          "Balancing UI polish with engineering discipline"
        ]
      },
      {
        heading: "System Architecture Overview",
        content: [
          "MPXIRE was structured as a modular frontend-first system with a backend designed for future extensibility.",
          "The frontend handles all presentation logic, navigation, and responsive behavior, while the backend is designed to serve structured data and handle form submissions when required.",
          "This separation ensures the UI can evolve independently without impacting core business logic."
        ],
        list: [
          "Component-based React frontend for reusable UI sections",
          "Express backend structure prepared for service and contact APIs",
          "Clear separation of UI components and data-handling logic",
          "Scalable structure suitable for future feature expansion"
        ]
      },
      {
        heading: "Trade-offs & Design Decisions",
        content: [
          "The project intentionally avoids heavy animations, complex UI frameworks, and unnecessary client-side state management.",
          "This decision was made to prioritize performance, maintainability, and ease of handover over visual experimentation.",
          "Some features were kept static in the initial version to reduce operational complexity for a small business context."
        ],
        list: [
          "Minimal dependencies to reduce long-term maintenance cost",
          "Static-first content with dynamic extension capability",
          "UI simplicity chosen over visual complexity"
        ]
      },
      {
        heading: "Scalability & Future Improvements",
        content: [
          "The current structure supports straightforward expansion as business requirements grow.",
          "Backend endpoints can be introduced incrementally without refactoring the frontend architecture.",
          "The system is suitable for evolving into a full service management or lead-generation platform."
        ],
        list: [
          "Future API integration for contact and service management",
          "SEO optimization and analytics integration",
          "CMS or admin dashboard for non-technical updates"
        ]
      }



    ]
  }
};
