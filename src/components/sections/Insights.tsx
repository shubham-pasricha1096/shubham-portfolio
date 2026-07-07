"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, BookOpen, Clock, Calendar, X } from "lucide-react";
import { resumeData } from "@/data/resume";

interface InsightCard {
    title: string;
    category: string;
    date: string;
    readTime: string;
    summary: string;
    slug: string;
    categoryColor: string;
    content: React.ReactNode;
}

export default function Insights() {
    const [activePost, setActivePost] = useState<InsightCard | null>(null);

    const insights: InsightCard[] = [
        {
            title: "How I Built a RAG Chatbot",
            category: "AI Engineering",
            date: "July 2026",
            readTime: "6 min read",
            summary: "A deep dive into vector database index structures, pgvector chunking configurations, and session state buffering pipelines deployed on Azure Bot Service.",
            slug: "how-i-built-a-rag-chatbot",
            categoryColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
            content: (
                <div className="space-y-6">
                    <p>
                        Retrieval-Augmented Generation (RAG) has emerged as the industry standard for grounding LLM responses with proprietary corporate knowledge. When building a sales enablement assistant at Bharti Airtel, I engineered a low-latency, scalable pipeline to serve technical sales queries in real time.
                    </p>
                    
                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 1. Ingestion & Dynamic Chunking</h3>
                    <p>
                        Naive chunking strategies (e.g., slicing texts every 500 characters) often split critical sentences in half, causing vector lookups to miss crucial context. To solve this, I designed a **hierarchical semantic chunker** using LangChain:
                    </p>
                    <pre className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-xs text-blue-400 overflow-x-auto">
{`from langchain_text_splitters import RecursiveCharacterTextSplitter

text_splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=150,
    length_function=len,
    separators=["\\n\\n", "\\n", " ", ""]
)`}
                    </pre>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 2. Vector Indexing on PgVector</h3>
                    <p>
                        Rather than managing a separate vector database cluster, we utilized **pgvector** inside an Azure PostgreSQL instance. To optimize lookups across millions of rows, we configured a Hierarchical Navigable Small World (HNSW) index using cosine distance:
                    </p>
                    <pre className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-xs text-blue-400 overflow-x-auto">
{`CREATE INDEX ON documents 
USING hnsw (embedding vector_cosine_ops);`}
                    </pre>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 3. Session State & Buffer Pipelines</h3>
                    <p>
                        To ensure the model doesn't lose context over multi-turn telecom queries without overloading prompt sizes, we implemented a sliding-window message buffer. By utilizing Redis, active conversational history is cached and summarized into a contextual "summary state" after every third exchange.
                    </p>
                </div>
            )
        },
        {
            title: "Building AI Automations",
            category: "Automation",
            date: "June 2026",
            readTime: "4 min read",
            summary: "Architecting asynchronous job triggers using Celery, NATS, and Redis to ingest documents without causing system blockages or API thread fatigue.",
            slug: "building-ai-automations",
            categoryColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
            content: (
                <div className="space-y-6">
                    <p>
                        Integrating heavy AI model calls directly into synchronous web handlers is a recipe for server timeout errors. If an ingest pipeline requires PDF text parsing, embeddings extraction, and database persistence, these operations must live outside the HTTP request-response loop.
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 1. Async Job Processing with Celery</h3>
                    <p>
                        In our Django architecture, we isolated document upload operations from core processing. When a file is received, it is instantly saved to an S3 bucket and a processing task ID is returned to the user:
                    </p>
                    <pre className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-xs text-purple-400 overflow-x-auto">
{`@shared_task(bind=True, max_retries=3)
def process_document_pipeline(self, doc_id):
    try:
        document = Document.objects.get(id=doc_id)
        raw_text = parse_s3_pdf(document.file_url)
        save_embeddings(raw_text)
    except Exception as exc:
        raise self.retry(exc=exc, countdown=10)`}
                    </pre>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 2. Real-Time Streaming with NATS</h3>
                    <p>
                        For systems needing instantaneous message broadcasting across frontend nodes, we established a **NATS JetStream** messaging layer. When an AI pipeline finishes processing an intermediate stage, it broadcasts a stream event. A React client listening via WebSockets instantly updates the UI progress bars without polling the database.
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 3. Ingestion Safety & Rate Limits</h3>
                    <p>
                        To avoid getting rate-limited by upstream LLM APIs (like OpenAI's TPM thresholds), Celery queues are strictly throttled. We used Redis token-bucket locks to guarantee that no worker threads overflow the permitted token quotas per minute.
                    </p>
                </div>
            )
        },
        {
            title: "Product Analytics Lessons",
            category: "Product Analyst",
            date: "May 2026",
            readTime: "5 min read",
            summary: "Key lessons from analyzing subscriber behaviors, designing telemetry loops, and turning customer churn insights into actionable retention models.",
            slug: "product-analytics-lessons",
            categoryColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
            content: (
                <div className="space-y-6">
                    <p>
                        A common trap in product design is evaluating success through vanity metrics like "daily active users" (DAU) or "total signups". True product validation lives in user telemetry: understanding *where* users drop off, *how long* they take to complete key tasks, and *why* they churn.
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 1. Cohort Analysis & Churn funnels</h3>
                    <p>
                        During data exploration on subscriber telemetry, I created weekly cohort maps. By segmenting subscribers by onboarding dates, we realized that user drop-offs were highly concentrated on the second day after registration due to friction in connecting API credentials.
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 2. Funnel Optimization Framework</h3>
                    <p>
                        Optimizing a user funnel isn't about redesigning the entire dashboard; it's about eliminating micro-friction points. By embedding clickstream telemetry inside the onboarding steps, we tracked completion drops. Simplifying a single form field increased Day-7 conversion by **12.5%**.
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 3. Key Takeaways</h3>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                        <li>**Instrument Early**: Never build a workflow without tracking metrics. Telemetry should be part of the product specification.</li>
                        <li>**Focus on Day-1 Friction**: Most user churn occurs in the first 24 hours. Keep signups simple and time-to-value short.</li>
                        <li>**Segment Deeply**: Broad averages hide patterns. Always segment cohorts by demographic, acquisition channel, or specific feature interactions.</li>
                    </ul>
                </div>
            )
        },
        {
            title: "ElasticSearch + AI",
            category: "Search & Retrieval",
            date: "April 2026",
            readTime: "7 min read",
            summary: "Combining BM25 keyword matching with high-dimensional vector embeddings to build hybrid search pipelines that improve semantic lookup precision.",
            slug: "elasticsearch-plus-ai",
            categoryColor: "text-amber-400 bg-amber-500/10 border-amber-500/20",
            content: (
                <div className="space-y-6">
                    <p>
                        While dense vector search is exceptional at resolving semantic intent (e.g., linking "trouble with database" to "PostgreSQL server error"), it struggles with exact keyword matching (e.g., lookup of system codes like "ERR_404" or serial codes).
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 1. The Power of Hybrid Search</h3>
                    <p>
                        To achieve high-quality search retrieval, we deployed a hybrid search engine inside **Elasticsearch**, combining classical lexical search (BM25) with vector search (kNN dense embeddings):
                    </p>
                    <pre className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-xs text-amber-400 overflow-x-auto">
{`{
  "query": {
    "bool": {
      "should": [
        { "match": { "content": "ERR_404 code" } },
        {
          "knn": {
            "field": "embeddings",
            "query_vector": [...],
            "k": 10
          }
        }
      ]
    }
  }
}`}
                    </pre>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 2. Reciprocal Rank Fusion (RRF)</h3>
                    <p>
                        Since lexical query scores (BM25 content matches) and vector cosine similarity scores live on entirely different math scales, you cannot simply add them together. We used Reciprocal Rank Fusion (RRF) to normalize and rank results:
                    </p>
                    <p className="text-sm font-mono text-zinc-400">
                        RRF_Score = 1 / (60 + Lexical_Rank) + 1 / (60 + Vector_Rank)
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 3. Performance Yield</h3>
                    <p>
                        Implementing RRF hybrid search resolved Airtel's complex system telemetry search issues, resulting in a **35% improvement** in search query accuracy scores compared to vector-only indexing.
                    </p>
                </div>
            )
        },
        {
            title: "Prompt Engineering",
            category: "LLM Orchestration",
            date: "March 2026",
            readTime: "4 min read",
            summary: "Writing structured instructions, system prompts, and Pydantic schemas to enforce clean JSON formatting and predictable outputs from fuzzy LLMs.",
            slug: "prompt-engineering-structured-json",
            categoryColor: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
            content: (
                <div className="space-y-6">
                    <p>
                        Relying on arbitrary string instructions (like "Please return output as JSON") in system prompts is highly unreliable in production environments. LLMs are statistical engines, and minor prompt fluctuations can cause parsing failures on web server backends.
                    </p>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 1. Enforcing Structure with Pydantic</h3>
                    <p>
                        Using tools like **Pydantic** alongside OpenAI/Gemini structured outputs guarantees that the LLM response strictly matches a schema structure before leaving the model server. Here is how we enforce incident alert categorization:
                    </p>
                    <pre className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl font-mono text-xs text-cyan-400 overflow-x-auto">
{`from pydantic import BaseModel, Field
from typing import List

class IncidentPostmortem(BaseModel):
    severity: str = Field(description="SEV-1 through SEV-4 alert level")
    root_cause: str = Field(description="Identified root cause analysis")
    actions: List[str] = Field(description="Remediation steps completed")`}
                    </pre>

                    <h3 className="text-lg font-bold text-white mt-8 mb-2">// 2. Guardrails & Few-Shot Templates</h3>
                    <p>
                        To ensure that tone and parsing requirements are met, we embed few-shot examples directly within our prompt declarations. This provides the LLM with clear input/output templates, stabilizing outputs even when using smaller, faster models like GPT-4o mini or Gemini 1.5 Flash.
                    </p>
                </div>
            )
        }
    ];

    return (
        <section id="insights" className="py-24 bg-black text-white scroll-mt-20 relative overflow-hidden">
            {/* Ambient background glows */}
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none z-0" />

            <div className="container mx-auto px-6 z-10 relative">
                <div className="max-w-6xl mx-auto">
                    
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-400 flex items-center gap-3">
                            <BookOpen className="w-8 h-8 text-blue-500" /> Insights & Writing
                        </h2>
                        <div className="h-1 w-12 bg-blue-500 mt-4 rounded" />
                        <p className="text-sm text-zinc-500 mt-4 font-mono">// Case studies, engineering runbooks, and product observations.</p>
                    </motion.div>

                    {/* Insights Cards Grid */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {insights.map((insight, i) => (
                            <motion.article
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.08 }}
                                whileHover={{ y: -6 }}
                                className="bg-zinc-900/30 backdrop-blur-md p-6 rounded-2xl border border-zinc-850 hover:border-zinc-800 hover:shadow-lg hover:shadow-blue-500/[0.01] flex flex-col justify-between h-[300px] transition-all duration-300 cursor-pointer group"
                                onClick={() => setActivePost(insight)}
                            >
                                <div>
                                    {/* Meta Tags */}
                                    <div className="flex items-center justify-between mb-4">
                                        <span className={`text-[10px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 rounded border ${insight.categoryColor}`}>
                                            {insight.category}
                                        </span>
                                        <div className="flex items-center gap-3 text-zinc-500 text-xs font-mono">
                                            <span className="flex items-center gap-1"><Clock size={12} /> {insight.readTime}</span>
                                        </div>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300 leading-snug mb-3">
                                        {insight.title}
                                    </h3>

                                    {/* Summary */}
                                    <p className="text-sm text-zinc-400 font-light line-clamp-3 leading-relaxed">
                                        {insight.summary}
                                    </p>
                                </div>

                                {/* Footer link */}
                                <div className="pt-4 flex items-center justify-between border-t border-zinc-900 mt-auto text-xs font-bold text-zinc-500 group-hover:text-white transition-colors">
                                    <div className="flex items-center gap-1.5"><Calendar size={13} /> {insight.date}</div>
                                    <div className="flex items-center gap-1 font-mono tracking-wider text-[11px] uppercase">
                                        Read post <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                </div>
            </div>

            {/* Premium Fullscreen Glass Overlay Blog Reader Modal */}
            <AnimatePresence>
                {activePost && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                    >
                        {/* Click backdrop to close */}
                        <div className="absolute inset-0" onClick={() => setActivePost(null)} />

                        {/* Modal Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-zinc-950 border border-zinc-850 w-full max-w-4xl h-[85vh] rounded-3xl overflow-y-auto relative p-8 md:p-12 z-10 shadow-2xl scrollbar-thin text-left"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setActivePost(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <X size={18} />
                            </button>

                            {/* Meta Headings */}
                            <div className="mb-6">
                                <span className={`text-[10px] font-mono font-bold tracking-wide uppercase px-2.5 py-1 rounded border inline-block mb-4 ${activePost.categoryColor}`}>
                                    {activePost.category}
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
                                    {activePost.title}
                                </h2>
                                <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 mt-4 border-b border-zinc-900 pb-6">
                                    <span className="flex items-center gap-1.5"><Calendar size={13} /> {activePost.date}</span>
                                    <span className="flex items-center gap-1.5"><Clock size={13} /> {activePost.readTime}</span>
                                </div>
                            </div>

                            {/* Main Article Content */}
                            <div className="text-zinc-350 font-light leading-relaxed text-sm sm:text-base space-y-6 max-w-none">
                                {activePost.content}
                            </div>

                            {/* Modal Footer */}
                            <div className="mt-12 pt-6 border-t border-zinc-900 flex justify-between items-center text-xs font-mono text-zinc-500">
                                <span>Published by {resumeData.name}</span>
                                <button
                                    onClick={() => setActivePost(null)}
                                    className="text-blue-400 hover:underline cursor-pointer"
                                >
                                    Close article
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
