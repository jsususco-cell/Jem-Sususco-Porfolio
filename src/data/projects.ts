export type Category =
  | "AI Agents"
  | "Document Automation"
  | "Data Scraping"
  | "Ops & Finance"
  | "Data Pipelines";

export interface Project {
  title: string;
  category: Category;
  tagline: string;
  description: string;
  highlights: string[];
  integrations: string[];
  nodes: number;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "RFP Agent Master",
    category: "AI Agents",
    tagline: "Multi-agent system that drafts government proposals end to end",
    description:
      "A 65-node orchestration where a supervising RFP delegation agent coordinates a team of specialist sub-agents — an Analyst, Scope Extraction, Scope Matching, Compliance Officer, Boilerplate Retrieval and Narrative Drafting agents. It ingests an incoming RFP, retrieves matching boilerplate from a Supabase vector store, checks compliance, and assembles a finished proposal directly into Google Docs.",
    highlights: [
      "8 cooperating AI agent tools under one delegation supervisor",
      "Retrieval-augmented drafting via Supabase vector store + OpenAI embeddings",
      "Auto-generates formatted Google Docs proposals from a triggered upload",
    ],
    integrations: ["OpenAI", "Gemini", "Supabase Vector", "Google Drive", "Google Docs", "PDF.co"],
    nodes: 65,
    featured: true,
  },
  {
    title: "Google Chat AI Assistant",
    category: "AI Agents",
    tagline: "Company-wide knowledge agent living inside Google Chat",
    description:
      "A 49-node conversational AI agent that answers staff questions from inside Google Chat. It is wired to 15 Quickbase tools and 13 Google Drive tools plus ClickUp, Gmail and Calendar, with scoped search across HR, IT, Finance, RFP, Project, Sales, Marketing and Process Improvement repositories — backed by a memory buffer for multi-turn context.",
    highlights: [
      "Department-scoped retrieval across 9 knowledge domains",
      "30+ connected tools (Quickbase, Google Drive, ClickUp, Gmail, Calendar)",
      "Conversational memory for natural multi-turn support",
    ],
    integrations: ["OpenAI", "Google Chat", "Quickbase", "Google Drive", "ClickUp", "Gmail"],
    nodes: 49,
    featured: true,
  },
  {
    title: "AI Legal Assistant",
    category: "AI Agents",
    tagline: "RAG-powered legal Q&A over your own document corpus",
    description:
      "A chat-triggered legal assistant that retrieves answers from a Supabase vector store of indexed legal documents, with OpenAI embeddings and persistent Postgres chat memory. It extracts text from uploaded PDFs with prompt-guided parsing and can render polished output through Markdown-to-Google-Docs sub-workflows.",
    highlights: [
      "Vector search with OpenAI embeddings over a legal knowledge base",
      "Persistent Postgres chat memory across sessions",
      "Prompt-driven PDF extraction and formatted document output",
    ],
    integrations: ["OpenAI", "Gemini", "Supabase Vector", "Postgres", "Google Docs"],
    nodes: 24,
    featured: true,
  },
  {
    title: "Invoice Extractor",
    category: "AI Agents",
    tagline: "Drop an invoice in Drive, get structured rows in Sheets",
    description:
      "A Google Drive trigger hands new invoices to a Gemini-powered AI agent that reads the document and emits clean, structured line items straight into Google Sheets — turning unstructured PDFs into queryable data with zero manual entry.",
    highlights: [
      "Gemini agent reads invoices and outputs structured fields",
      "Fully hands-off from Drive upload to Sheets row",
      "Eliminates manual invoice data entry",
    ],
    integrations: ["Gemini", "Google Drive", "Google Sheets"],
    nodes: 5,
  },
  {
    title: "AI Meeting Transcription",
    category: "AI Agents",
    tagline: "Calendar-triggered transcription delivered to Google Chat",
    description:
      "Fires on a Google Calendar event, pulls the meeting recording via HTTP, converts it to an audio file and runs it through an OpenAI model for transcription, then posts the result into Google Chat — with a wait/retry step so long recordings are handled gracefully.",
    highlights: [
      "Calendar-driven, no manual upload required",
      "OpenAI transcription of meeting audio",
      "Transcripts auto-delivered to the team in Google Chat",
    ],
    integrations: ["OpenAI", "Google Calendar", "Google Chat", "HTTP"],
    nodes: 10,
  },
  {
    title: "Subcontractor Vetting — Screen & Record",
    category: "Ops & Finance",
    tagline: "Real-time compliance screening on a webhook",
    description:
      "A webhook-driven vetting pipeline that screens subcontractors against the SAM.gov exclusions list and the Trade.gov Consolidated Screening List, evaluates the results, builds a structured Quickbase record, and responds instantly — with staging-blob cleanup so no sensitive document is left behind.",
    highlights: [
      "Live checks against SAM.gov and Trade.gov CSL",
      "Automated pass/flag evaluation logic",
      "Writes a Quickbase compliance record and returns a webhook response",
    ],
    integrations: ["SAM.gov", "Trade.gov", "Quickbase", "Webhook"],
    nodes: 11,
    featured: true,
  },
  {
    title: "Permit Package PDF Combiner",
    category: "Document Automation",
    tagline: "Merge scattered permit docs into one clean package",
    description:
      "Triggered by webhook, it collects permit documents from Google Drive, merges them into a single combined PDF using the PDF.co API, uploads the result back to an organized Drive folder, and updates the matching Quickbase records with the new file links.",
    highlights: [
      "Automated multi-PDF merge via PDF.co",
      "Normalizes file IDs and rebuilds download links",
      "Syncs combined-package links back to Quickbase",
    ],
    integrations: ["Google Drive", "PDF.co", "Quickbase", "Webhook"],
    nodes: 12,
  },
  {
    title: "Payroll Document Processor",
    category: "Document Automation",
    tagline: "Auto-sorts and distributes payroll files",
    description:
      "Watches a Drive folder, extracts data from incoming payroll PDFs, copies and files them into structured folders, updates a Google Doc record, then emails the right documents out through Gmail — looping over each item so batches are handled in one pass.",
    highlights: [
      "Drive-triggered extraction and filing of payroll PDFs",
      "Batch loop over multiple documents",
      "Gmail distribution with Google Docs record-keeping",
    ],
    integrations: ["Google Drive", "Google Docs", "Gmail"],
    nodes: 11,
  },
  {
    title: "Awarded Project Intake",
    category: "Document Automation",
    tagline: "Turns award notices into filed records + notifications",
    description:
      "A form and webhook intake that extracts data from uploaded award documents, runs OpenAI agents with structured output parsers to normalize the details, uploads files to Google Drive, and fires Gmail notifications — handling two parallel intake paths in one workflow.",
    highlights: [
      "Structured-output OpenAI agents for reliable parsing",
      "Dual form/webhook intake routes",
      "Drive filing plus automated email notifications",
    ],
    integrations: ["OpenAI", "Google Drive", "Gmail", "Forms"],
    nodes: 14,
  },
  {
    title: "Extraction & Data Entry Pipeline",
    category: "Document Automation",
    tagline: "23-node document-to-database automation",
    description:
      "A comprehensive pipeline accepting documents via Drive trigger, form and webhook. It runs OpenAI extraction and PDF.co processing, splits and appends rows to Google Sheets, manages copies and front-page updates in Drive, computes totals, and confirms back through a webhook response and Gmail.",
    highlights: [
      "Three trigger paths (Drive, form, webhook) into one pipeline",
      "OpenAI + PDF.co extraction with cost totaling",
      "Writes structured rows to Google Sheets and confirms by email",
    ],
    integrations: ["OpenAI", "PDF.co", "Google Drive", "Google Sheets", "Gmail"],
    nodes: 23,
  },
  {
    title: "All Case Report Sync",
    category: "Data Pipelines",
    tagline: "Scheduled Quickbase reporting with bulk sync",
    description:
      "A 28-node reporting engine driven by schedule, webhook and manual triggers. It pulls and normalizes Quickbase records, loops with wait throttling, aggregates rows into arrays for bulk add/update, posts status comments, and reconciles records across multiple HTTP endpoints.",
    highlights: [
      "Bulk Quickbase add/update via aggregated arrays",
      "Rate-limit-aware looping with wait steps",
      "Automated status comments and record reconciliation",
    ],
    integrations: ["Quickbase", "HTTP", "Schedule"],
    nodes: 28,
  },
  {
    title: "Project Dashboard Sync v2",
    category: "Data Pipelines",
    tagline: "AI-extracted data fanned out to Quickbase + Supabase",
    description:
      "A webhook feeds an AI Information Extractor (Gemini/OpenAI) that structures incoming project data, then a switch routes it through full CRUD operations — create, update and delete — across both Quickbase and Supabase, with filtering to keep the two systems in sync.",
    highlights: [
      "LLM Information Extractor for structured intake",
      "Synchronized CRUD across Quickbase and Supabase",
      "Switch-based routing for create/update/delete logic",
    ],
    integrations: ["Gemini", "OpenAI", "Quickbase", "Supabase"],
    nodes: 13,
  },
  {
    title: "Google Maps Lead Scraper",
    category: "Data Scraping",
    tagline: "60-node business-lead harvester from Google Maps",
    description:
      "A large-scale scraping workflow that queries Google Maps via HTTP, filters and merges results, deduplicates and enriches business listings, writes them to Google Sheets and Drive, and dispatches summaries through Gmail and Google Chat.",
    highlights: [
      "Multi-stage filter and merge for clean lead lists",
      "Exports to Google Sheets with file artifacts in Drive",
      "Email + Google Chat result notifications",
    ],
    integrations: ["HTTP", "Google Sheets", "Google Drive", "Gmail", "Google Chat"],
    nodes: 60,
  },
  {
    title: "Project Scraping Pipeline",
    category: "Data Scraping",
    tagline: "Scheduled opportunity scraper with AI structuring",
    description:
      "Runs on a schedule to scrape project and bid opportunities over HTTP, structures the raw results with an AI Information Extractor, routes them through conditional logic and batching, logs everything to Google Sheets, and pushes alerts to Google Chat.",
    highlights: [
      "Scheduled, hands-off scraping runs",
      "AI Information Extractor turns raw pages into structured rows",
      "Batched processing with Google Chat alerts",
    ],
    integrations: ["OpenAI", "Gemini", "Google Sheets", "Google Chat", "HTTP"],
    nodes: 24,
  },
  {
    title: "Subcontractor Scraping",
    category: "Data Scraping",
    tagline: "High-volume subcontractor data collection",
    description:
      "A scraping workflow that gathers subcontractor data over HTTP, applies a multi-stage filter cascade, and persists results into n8n Data Tables and Google Sheets — with wait throttling and merge logic to handle large result sets reliably.",
    highlights: [
      "Multi-filter cascade for precise targeting",
      "Persists to n8n Data Tables and Google Sheets",
      "Throttled requests for high-volume reliability",
    ],
    integrations: ["HTTP", "Google Sheets", "Data Tables"],
    nodes: 18,
  },
  {
    title: "Credit Card Transactions Form",
    category: "Ops & Finance",
    tagline: "57-node receipt categorization across multiple cards",
    description:
      "An accounting automation that ingests credit-card receipts from Chase and Capital One accounts, classifies each transaction by category through layered switch/filter logic, and keeps Quickbase and Google Sheets in sync on a schedule — replacing hours of manual bookkeeping.",
    highlights: [
      "Per-account categorization (Chase 0559/8413, Capital One)",
      "13 Quickbase operations kept in sync with Google Sheets",
      "Scheduled reconciliation of submitted receipt forms",
    ],
    integrations: ["Quickbase", "Google Sheets", "Google Drive", "Schedule"],
    nodes: 57,
  },
];

export const categories: Category[] = [
  "AI Agents",
  "Document Automation",
  "Data Scraping",
  "Data Pipelines",
  "Ops & Finance",
];
