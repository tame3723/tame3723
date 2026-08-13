import { IProject } from './types';

export const projectsData: IProject[] = [
  {
    id: "techsphere-analytics",
    name: "TechSphere Analytics",
    category: "Large-Scale Job Market & Technology Skill Analysis",
    shortDescription: "A large-scale data science and NLP project analyzing 1.3M+ job postings to identify technology demand, computer-science domains, skill trends, and emerging opportunities across the job market.",
    tags: ["Python", "Pandas", "NumPy", "NLP", "Data Analysis", "Data Visualization", "Scikit-learn"],
    githubUrl: "https://github.com/tame3723",
    featured: true,
    problem: "Understanding which skills are in demand in the fast-moving tech market is difficult due to noisy, unstructured job posting data.",
    motivation: "Designing a data pipeline to turn raw job descriptions into structured intelligence helps developers and institutions map curriculum alignment to live industry needs.",
    solution: "Classified CS roles into Software Engineering, Data Science, DevOps, Cybersecurity, Web Development, AI/ML, and Cloud domains. Engineered a custom rule-based NLP pipeline utilizing domain-specific skill dictionaries to identify technical skills from job descriptions, plotting density trends and skill linkages.",
    challenges: [
      "Efficiently cleaning and validating 1.3M+ job postings on standard computer configurations.",
      "Handling variations in skill descriptions and extracting terms accurately without false positives."
    ],
    results: [
      { metricName: "Dataset Volume", metricValue: "1,338,988 records" },
      { metricName: "Accuracy Score", metricValue: "94% Domain Classification" },
      { metricName: "Processing Time", metricValue: "under 3 minutes" }
    ],
    lessonsLearned: "I learned how to construct low-overhead NLP parsing rules, handle massive datasets with chunking structures in Pandas, and communicate complex statistics visually.",
    futureImprovements: "I plan to train a custom BERT model to classify job roles and implement a live scraping pipeline to keep the metrics fresh."
  },
  {
    id: "uudms",
    name: "UUDMS (Utility Data Management System)",
    category: "Software Engineering / Data Management",
    shortDescription: "A secure, role-based data management application developed to optimize search and export processes during the UPCL technical internship.",
    tags: ["Django", "SQLite", "Bootstrap", "Python", "Role-Based Access"],
    githubUrl: "https://github.com/tame3723",
    featured: false,
    problem: "Operations faced administrative overhead when querying, validating, and updating utility assets across split silos manually.",
    motivation: "Creating a secure, singular platform dramatically reduces file retrieval time and secures critical technical infrastructure inventory data.",
    solution: "Developed a Django-based web interface integrated with clean SQLite tables, customized search indexing, dynamic CSV/PDF export tools, and hierarchical role privileges.",
    challenges: [
      "Implementing strict role-based access controls to isolate editing permissions to administrators while allowing general queries for technical staff.",
      "Optimizing query performance for asset lookups over database configurations."
    ],
    results: [
      { metricName: "Lookup Speedup", metricValue: "60% faster search retrieval" },
      { metricName: "Export Pipeline", metricValue: "PDF & CSV in 1-click" },
      { metricName: "Role Levels", metricValue: "3 Distinct Access Profiles" }
    ],
    lessonsLearned: "I learned how to manage relational schemas, secure internal API routes against privilege escalation, and design practical enterprise software matching professional security guidelines.",
    futureImprovements: "Transition from SQLite to PostgreSQL, and implement Redis caching layers to speed up repetitive search queries."
  },
  {
    id: "algorithm-performance-analyzer",
    name: "Algorithm Performance Analyzer",
    category: "Algorithms / Software Engineering",
    shortDescription: "An interactive platform designed to execute and visually profile computational complexity curves across 15+ sorting and searching algorithms.",
    tags: ["Python", "Algorithms", "Data Structures", "Data Visualization"],
    githubUrl: "https://github.com/tame3723",
    featured: false,
    problem: "Theoretical Big-O analysis can feel abstract and fail to account for real-world memory allocations, compiler optimizations, and CPU architecture bottlenecks.",
    motivation: "A physical benchmarking system provides actual execution statistics, giving engineers empirical data to make critical system architecture choices.",
    solution: "A modular testing suite written in Python that executes sorting, searching, and custom algorithms across dynamically scaled input arrays, charting execution time and memory profiles.",
    challenges: [
      "Eliminating background operating system scheduler noise during high-precision microsecond benchmarks.",
      "Efficiently managing large memory overhead during worst-case visual tracking runs."
    ],
    results: [
      { metricName: "Input Sizes Tested", metricValue: "100 to 100,000 items" },
      { metricName: "Metrics Captured", metricValue: "Time (μs) & Heap Memory (KB)" },
      { metricName: "Charting Engine", metricValue: "Dual-axis Real-time Profiling" }
    ],
    lessonsLearned: "This deep dive enhanced my understanding of memory management, real-world execution environments, and how theoretical Big-O values translate into physical hardware constraints.",
    futureImprovements: "I plan to rewrite core benchmarking algorithms in C++ for faster execution, and implement a web dashboard using Tailwind and Chart.js."
  },
  {
    id: "graph-coloring-lab",
    name: "Graph Coloring Lab",
    category: "Algorithms / Graph Theory",
    shortDescription: "An interactive visualization platform implementing and assessing heuristic-based graph coloring algorithms.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Graph Theory", "D3.js"],
    githubUrl: "https://github.com/tame3723",
    featured: false,
    problem: "Graph coloring is an NP-complete problem that is difficult to visually comprehend and optimize using standard static command-line tools.",
    motivation: "An interactive, web-based tool visually demonstrates how backtracking and Welsh-Powell heuristics behave in real-time, making it an excellent resource for network routing optimization.",
    solution: "A responsive React application built with TypeScript that allows users to construct custom node topologies, color them using heuristic models, and observe the algorithmic steps visually.",
    challenges: [
      "Designing a smooth node placement interface with zero input lag on rendering large, dense graph structures.",
      "Implementing backtracking algorithms in JavaScript without blocking the browser's main UI thread."
    ],
    results: [
      { metricName: "Supported Heuristics", metricValue: "Welsh-Powell & Backtracking" },
      { metricName: "Max Stable Nodes", metricValue: "150 elements dynamically" },
      { metricName: "Optimal Chromatic Calc", metricValue: "Computed in under 10ms" }
    ],
    lessonsLearned: "I deepened my knowledge of data structures, graph matrices, and learned how to build high-performance client-side rendering loops in React using TypeScript.",
    futureImprovements: "Add support for 3D graph visualizations using Three.js, and integrate real-world constraint satisfaction solver engines."
  }
];
