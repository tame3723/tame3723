import { IProject } from './types';

export const projectsData: IProject[] = [
  {
    id: "edupredict-ai",
    name: "EduPredict AI",
    category: "Machine Learning / Full-Stack ML",
    shortDescription: "An end-to-end predictive software pipeline mapping student performance indicators and retention likelihoods using gradient boosting algorithms.",
    tags: ["Python", "XGBoost", "CatBoost", "LightGBM", "Flask", "React", "TypeScript"],
    githubUrl: "https://github.com/tame3723/edupredict-ai",
    featured: true, // Elevates visual display on homepage grid
    problem: "Educational institutions struggle to identify at-risk students early due to fragmented academic metrics and delayed manual intervention protocols.",
    motivation: "By automating risk mapping with high-accuracy predictive pipelines, administrators can execute early-stage counseling, directly boosting overall graduation rates.",
    solution: "A unified system that processes raw demographic and performance data, trains highly accurate gradient boosting ensembles, and serves real-time predictions through a lightweight Flask API to a sleek React web app.",
    challenges: [
      "Handling class imbalance within student failure records without introducing synthetic bias.",
      "Optimizing response latencies of the gradient boosting model ensemble in a real-time web interface."
    ],
    results: [
      { metricName: "Dataset Volume", metricValue: "Over 5,000 student records" },
      { metricName: "Prediction F1-Score", metricValue: "91%" },
      { metricName: "API Query Latency", metricValue: "under 45ms" }
    ],
    lessonsLearned: "Developing this end-to-end model pipeline taught me the immense importance of feature engineering, hyperparameter tuning, and how to seamlessly bridge Python ML scripts with interactive React user interfaces.",
    futureImprovements: "I plan to integrate native OAuth2 controls and add continuous pipelines that automatically retrain models when new academic records are imported."
  },
  {
    id: "uudms",
    name: "UUDMS (Utility Data Management System)",
    category: "Software Engineering / Data Management",
    shortDescription: "A secure, role-based data management application developed to optimize search and export processes during the UPCL technical internship.",
    tags: ["Django", "SQLite", "Bootstrap", "Python", "Role-Based Access"],
    githubUrl: "https://github.com/tame3723/uudms",
    featured: false,
    problem: "Internship operations faced administrative overhead when querying, validating, and updating high-frequency utility assets across split silos.",
    motivation: "Creating a secure, singular platform dramatically reduces file retrieval time and secures critical technical infrastructure inventory data.",
    solution: "Developed a Django-based web interface integrated with clean SQLite tables, customized search indexing, dynamic CSV/PDF export tools, and hierarchical role privileges.",
    challenges: [
      "Implementing strict role-based access controls to isolate editing permissions to administrators while allowing general queries for technical staff.",
      "Optimizing query performance for asset lookups over massive inventory databases."
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
    shortDescription: "A technical evaluation tool designed to execute and visually profile computational complexity curves across diverse algorithms.",
    tags: ["Python", "NumPy", "Matplotlib", "Algorithm Design", "Computational Complexity"],
    githubUrl: "https://github.com/tame3723/algo-analyzer",
    featured: false,
    problem: "Theoretical Big-O analysis can feel abstract and fail to account for real-world memory allocations, compiler optimizations, and CPU architecture bottlenecks.",
    motivation: "A physical benchmarking system provides actual execution statistics, giving engineers empirical data to make critical system architecture choices.",
    solution: "A modular testing suite written in Python that executes sorting, searching, and custom algorithms across dynamically scaled input arrays, charting execution time and memory profiles.",
    challenges: [
      "Eliminating background operating system scheduler noise during high-precision microsecond benchmarks.",
      "Efficiently managing large memory overhead during worst-case visual tracking runs."
    ],
    results: [
      { metricName: "Input Sizes Tested", metricValue: "100 to 100,000 integers" },
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
    tags: ["React", "TypeScript", "Tailwind CSS", "Graph Theory", "Heuristic Search"],
    githubUrl: "https://github.com/tame3723/graph-coloring",
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
