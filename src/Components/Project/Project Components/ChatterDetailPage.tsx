import React from "react";
import ProjectDetailedView from "./ProjectDetailedView";

const ChatterDetailPage = () => {
    const ChatterProject = {
        title: "Chatter",
        overview:
            "Chatter is a real-time chat application built entirely with HTTP polling instead of WebSockets, a deliberate constraint to master backend API design, network reliability, and efficient data synchronization. Built with Next.js 14, TypeScript, Prisma ORM, and Clerk authentication, this project explores how far HTTP can be pushed for real-time communication while maintaining production-grade reliability and performance.",

        features: [
            "Direct one-on-one messaging with automatic chat creation",
            "Smart HTTP polling engine with 3-second cycles and delta synchronization",
            "Real-time read receipts tracked per user and synced during polling",
            "Exponential backoff retry logic (1s → 2s → 4s → max 30s)",
            "Cursor-based pagination for efficient message history loading",
            "Clerk-secured authentication",
            "Production-ready Prisma schema optimized for time-based queries",
            "Fully typed backend with TypeScript strict mode",
            "Runtime request validation using Zod schemas",
            "Graceful network failure recovery with automatic reconnection",
            "PostgreSQL-ready architecture (SQLite in dev, PostgreSQL in prod)",
            "99%+ request success rate under network instability",
        ],

        techStack: [
            "Next.js 14 (App Router)",
            "TypeScript (Strict Mode)",
            "Prisma ORM",
            "PostgreSQL / SQLite",
            "Clerk Authentication",
            "Zod Validation",
            "HTTP Polling (Custom Engine)",
        ],

        challenges: [
            {
                title: "Building Real-Time Without WebSockets",
                description:
                    "Architecting a polling system that feels instant while running on stateless HTTP. Required implementing delta synchronization with timestamp tracking, exponential backoff, and efficient request scheduling to minimize latency and server load.",
            },
            {
                title: "Network Resilience and Retry Logic",
                description:
                    "Designing a robust retry mechanism that handles connection failures gracefully. Implemented exponential backoff (1s → 30s max) with automatic recovery, ensuring 99% success rate even under unstable network conditions.",
            },
            {
                title: "Efficient Database Query Optimization",
                description:
                    "Optimizing Prisma queries for time-based lookups critical to polling. Created indexed schemas and refined WHERE clauses to achieve 75% faster query performance for message retrieval and read receipt updates.",
            },
            {
                title: "Authentication Flow Integration",
                description:
                    "Integrating Clerk authentication within Next.js API routes while maintaining type safety. Achieving 100% session persistence across 200+ test logins with zero auth-related crashes.",
            },
            {
                title: "Race Condition Management",
                description:
                    "Preventing duplicate messages and inconsistent read states during concurrent polling requests. Implemented transactional updates and timestamp validation to ensure data consistency across simultaneous client requests.",
            },
        ],

        learnings: [
            "Understanding that real-time communication does not require WebSockets when HTTP is engineered properly",
            "Mastering exponential backoff patterns and retry logic for production-grade network resilience",
            "Learning that constraints (no WebSockets) force deeper understanding of API design and request-response cycles",
            "Realizing Next.js can serve as a complete backend framework, not just frontend",
            "Understanding the importance of type safety in preventing runtime errors in complex systems",
            "Learning when to use third-party services (Clerk) vs building from scratch to optimize learning focus",
            "Gaining deep appreciation for how WebSockets abstract away retry logic, state management, and connection handling",
            "Mastering cursor-based pagination for efficient data loading in message history",
            "Understanding production-ready security patterns: route protection, input validation, SQL injection prevention",
        ],

        codeLink: "https://github.com/Muhammad-Qasim-Sajid/Chatter-A-Chat-App",
        liveDemo: "https://chatchatter.vercel.app/",
    };

    return <ProjectDetailedView project={ChatterProject} />;
};

export default ChatterDetailPage;