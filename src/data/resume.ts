export const resumeData = {
    name: "Shubham Pasricha",
    title: "Final Year BCA | GenAI & LLM Systems | Airtel Alum",
    email: "shubhampasricha1096@gmail.com",
    location: "Delhi, India",
    links: {
        linkedin: "https://www.linkedin.com/in/shubham-pasricha",
        github: "https://github.com/shubham-pasricha1096",
    },
    about:
        "Final year BCA student at CHRIST (Deemed to be University), Delhi NCR, specializing in Generative AI, RAG pipelines, and LLM orchestration. Former intern at Bharti Airtel across GenAI Automation, Product Analysis, and TechOps. Actively seeking full-time roles in AI/Product/TechOps.",
    aboutDetailed:
        "I'm Shubham, a final year BCA student who's spent the last two years building production-grade AI systems at Bharti Airtel — from RAG chatbots to observability agents. My work sits at the intersection of GenAI engineering and product thinking. I care about systems that actually ship and products that solve real friction. Outside work, I'm into fitness, skincare, and running a corporate meme account for Indian Gen Z.",
    education: [
        {
            school: "CHRIST (Deemed to be University), Delhi",
            degree: "Bachelor of Computer Applications",
            year: "2023 - 2026",
            grade: "CGPA - 8.69/10",
        },
    ],
    experience: [
        {
            company: "Bharti Airtel",
            role: "GenAI & AI Automation Intern",
            period: "January 2026 - July 2026",
            description: [
                "Built a production RAG-based sales enablement chatbot using GPT-4o mini, LangChain, and PgVector, deployed on Azure Bot Service (Teams) and GCP.",
                "Implemented asynchronous document ingestion pipeline using Celery, NATS, and Redis with MongoDB for metadata storage.",
                "Backend built on Django; integrated with Airtel's internal knowledge base for real-time query resolution.",
                "Designed and developed an AI-powered chatbot system for telecom workflows, enabling real-time user interaction, intelligent session management, and automated query handling to enhance customer support efficiency.",
                "Built a production-grade RAG-based architecture integrating MongoDB for persistent message storage and Redis for active session memory, reducing conversational latency and improving contextual response relevance.",
            ],
        },
        {
            company: "Bharti Airtel",
            role: "Product Analyst Intern",
            period: "January 2025 - July 2025",
            description: [
                "Engineered data pipelines to transform raw CSV files into actionable business insights, streamlining data processing workflows.",
                "Performed comprehensive data cleaning and structuring across subscriber datasets, uncovering key revenue drivers and customer behavior patterns.",
                "Designed and deployed interactive dashboards to support data-driven decision-making for product strategy and customer retention initiatives.",
            ],
        },
        {
            company: "Bharat Intern",
            role: "Machine Learning Intern",
            period: "January 2024 - July 2024",
            description: [
                "Developed machine learning models for house price prediction utilizing real-world datasets and advanced statistical techniques.",
                "Collaborated with cross-functional teams to design scalable ML solutions for business challenges, improving decision-making accuracy by 20%.",
                "Contributed to system maintenance, debugging, and enhancement of AI model components to ensure optimal performance.",
            ],
        },
        {
            company: "Main Flow Services and Technologies",
            role: "Data Analysis and Visualization Intern",
            period: "July 2023 - January 2024",
            description: [
                "Automated data ingestion and preprocessing workflows across healthcare, entertainment, and social media domains, reducing manual effort by 40%.",
                "Created comprehensive dashboards and visualizations using Python (Pandas, Matplotlib, Seaborn) to derive actionable insights from complex datasets.",
                "Established structured reporting frameworks and documented data pipeline architectures to improve team collaboration and knowledge transfer.",
            ],
        },
    ],
    projects: [
        {
            title: "Intelligent Incident Postmortem & RCA Agent",
            tech: ["FastAPI", "LangChain", "React", "Pydantic", "Python"],
            date: "June 2026",
            description: [
                "Designed a two-stage LLM pipeline for automated postmortem generation and Root Cause Analysis (RCA).",
                "Implemented SEV-1 to SEV-4 severity classification algorithms to categorize incoming alerts.",
                "Utilized Pydantic models for structured data extraction, ensuring high accuracy and reliability of LLM outputs.",
                "Developed a dark terminal React UI to visualize active incident tracking, resolution steps, and root-causes.",
            ],
        },
        {
            title: "SRE AI Agent",
            tech: ["Grafana", "Prometheus", "OpenRouter", "Python", "MCP"],
            date: "May 2026",
            description: [
                "Built an autonomous SRE agent that integrates Grafana, Prometheus, and OpenRouter for automated infrastructure observability.",
                "Created four alert-type handlers to remediate infrastructure anomalies and alert routing issues automatically.",
                "Implemented Model Context Protocol (MCP) metric endpoints to expose telemetry statistics to model prompts directly.",
            ],
        },
        {
            title: "Context-Aware Couples Therapy Chatbot",
            tech: ["Node.js", "MongoDB", "Redis", "Telegram Bot API", "LLMs"],
            date: "February 2026",
            description: [
                "Built a context-aware AI therapy chatbot on Telegram using GPT-based LLMs via OpenRouter with CBT-inspired conversational flows for empathetic relationship guidance.",
                "Designed a hybrid memory architecture with MongoDB + Redis to support persistent chat history, active session memory, and smooth multi-turn conversations for multiple users.",
                "Improved chatbot quality with 85% contextually relevant responses, 40% lower repetition, <2s response latency, and support for 5+ relationship conflict scenarios like trust issues, communication gaps, and emotional validation."
            ],
        },
        {
            title: "AI Analytical Assistant (RAG & Vector DB)",
            tech: ["LlamaIndex", "PostgreSQL", "pgvector", "Ollama", "Python"],
            date: "December 2025",
            description: [
                "Developed a Retrieval-Augmented Generation (RAG) chatbot enabling analytical teams to query complex databases using natural language, eliminating SQL dependency.",
                "Implemented a vector database architecture with PostgreSQL and pgvector to store high-dimensional embeddings for efficient semantic search and retrieval.",
                "Integrated LLMs via LlamaIndex to deliver real-time data insights and automated reporting, reducing manual query time by 60% and improving analyst productivity.",
            ],
        },
        {
            title: "Intelligent Interview Preparation Platform",
            tech: ["Node.js", "React", "MongoDB", "AI APIs", "Computer Vision"],
            date: "August 2025",
            description: [
                "Built a web-based platform that analyzes resumes and job descriptions to generate personalized mock interview questions and practice scenarios.",
                "Implemented AI-powered features including technical question generation, real-time speech-to-text transcription, stutter detection, and grammar analysis.",
                "Integrated webcam-based facial expression tracking using computer vision to provide comprehensive performance feedback and confidence scoring.",
                "Enabled exportable interview summaries for LinkedIn sharing and custom question modes for targeted interview preparation.",
            ],
        },
        {
            title: "Airtel Subscriber Churn Prediction",
            tech: ["Python", "SQL", "Machine Learning", "Tableau"],
            date: "May 2025",
            description: [
                "Developed an end-to-end churn prediction pipeline analyzing subscriber behavior patterns to identify high-risk customers and key churn drivers.",
                "Performed extensive data cleaning, feature engineering, and exploratory data analysis to uncover critical trends including usage decline and complaint patterns.",
                "Designed interactive Tableau dashboards visualizing churn metrics, segment analysis, and predictive insights to inform targeted retention strategies.",
            ],
        },
    ],
    skills: {
        "Languages": ["Python", "JavaScript", "SQL"],
        "AI/ML": ["LangChain", "GPT-4o", "RAG Pipelines", "LLMOps", "Prompt Engineering", "Scikit-learn"],
        "Backend": ["FastAPI", "Django", "Celery", "NATS", "Redis", "MongoDB", "PgVector"],
        "Cloud & DevOps": ["Azure", "GCP", "Docker", "GitHub Actions"],
        "Observability": ["Grafana", "Prometheus"],
        "Tools": ["Power BI", "Excel", "Postman"],
    },
    certificates: [
        "Microsoft and LinkedIn – Career Essentials in Generative AI",
        "IBM – Generative AI: Prompt Engineering Basics",
        "Google Cloud – Introduction to Large Language Models",
        "AWS – AWS Academy Graduate – Cloud Foundations",
    ],
};
