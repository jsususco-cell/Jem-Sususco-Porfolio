export type Category =
  | "AI Agents"
  | "Business Systems"
  | "Web Apps"
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
  /** n8n node count — set for workflow projects. */
  nodes?: number;
  /** Short badge for non-workflow projects (apps, systems, scripts), e.g. "Next.js + Zoho". */
  metric?: string;
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
  {
    title: "RFP & BD Platform",
    category: "Business Systems",
    tagline: "End-to-end capture platform for government contracting",
    description:
      "A full business-development platform that pulls federal opportunities from SAM.gov and Grants.gov, runs AI solicitation and compliance analysis, scores bid/no-bid decisions, spawns proposal tasks with deadline tracking, and manages award handoff and win/loss analytics — surfaced through a suite of live operational dashboards.",
    highlights: [
      "Automated opportunity intake from SAM.gov and Grants.gov",
      "AI-driven solicitation analysis and compliance-matrix extraction",
      "Bid/no-bid gating, proposal task tracking and win/loss analytics",
    ],
    integrations: ["Quickbase", "n8n", "OpenAI", "SAM.gov", "Grants.gov"],
    metric: "Quickbase + n8n + AI",
    featured: true,
  },
  {
    title: "Vendor Access Portal",
    category: "Business Systems",
    tagline: "Login-free portal for subcontractors and vendors",
    description:
      "A tokenized portal that lets external subcontractors view their assigned jobs, schedule, photos, receipts and documents without a Quickbase account. Staff control exactly which categories of data each vendor can see from an admin page, while vendors reach their data through a unique link — keeping all credentials server-side.",
    highlights: [
      "Per-vendor, category-level access control",
      "Tokenized links — no vendor accounts or logins required",
      "Credentials kept server-side behind a Vercel API",
    ],
    integrations: ["Quickbase", "Next.js", "Vercel"],
    metric: "Quickbase + Vercel",
  },
  {
    title: "Credit Card & Expense System",
    category: "Business Systems",
    tagline: "Unified expense capture synced to QuickBooks Online",
    description:
      "A Quickbase-based expense platform with a mobile capture app and a purchase-entry form that syncs transactions, vendors, customers and chart-of-accounts with QuickBooks Online through n8n — giving finance a single reconciled picture of company spend, with an unreported-spend review queue and open AP/AR dashboards.",
    highlights: [
      "Mobile PWA for field expense capture with an offline queue",
      "Two-way sync between Quickbase and QuickBooks Online via n8n",
      "Unreported-spend queue and open AP/AR dashboards",
    ],
    integrations: ["Quickbase", "QuickBooks Online", "n8n", "PWA"],
    metric: "Quickbase + QBO",
  },
  {
    title: "Subcontractor Award System",
    category: "Business Systems",
    tagline: "One-screen subcontractor PO award and payment breakdown",
    description:
      "A Quickbase Code Page that lets project staff award a purchase order to an approved subcontractor from a single screen — searching award-eligible subs, building a line-item award breakdown with an auto-calculated contract total, setting PO details, and auto-generating the associated bills. It can preview and send a branded award-letter PDF that Quickbase emails to the subcontractor automatically.",
    highlights: [
      "Searchable award-eligible subcontractor picker",
      "Line-item award breakdown with auto-calculated contract total",
      "Auto-creates bills and sends a branded award-letter PDF on award",
    ],
    integrations: ["Quickbase", "JavaScript", "Document Templates"],
    metric: "Quickbase Code Page",
  },
  {
    title: "Financial Reconciliation System",
    category: "Ops & Finance",
    tagline: "AI-assisted bank and invoice reconciliation",
    description:
      "A reconciliation system that ingests bank transactions and vendor invoices into Quickbase, uses Google Gemini to extract vendor, invoice number, date and amount from uploaded PDFs for human review, then auto-matches exact and mismatched amounts and flags duplicates, stale-unmatched items and past-due exceptions.",
    highlights: [
      "Gemini-powered PDF field extraction with review-before-save",
      "Automatic exact and mismatched amount matching",
      "Duplicate, stale and past-due exception flagging",
    ],
    integrations: ["Quickbase", "Google Gemini", "Next.js", "Vercel"],
    metric: "Quickbase + AI",
  },
  {
    title: "QuickBooks Charge Entry",
    category: "Ops & Finance",
    tagline: "Auto-enters flagged charges into QuickBooks Desktop",
    description:
      "A Python automation that reads a Google Sheet of credit-card charges flagged for entry, validates that each card and vendor exist in QuickBooks Desktop, and enters them as credit-card charges through the QBXML API — highlighting any rows that fail validation for manual review.",
    highlights: [
      "QBXML integration with QuickBooks Desktop",
      "Card and vendor validation before entry",
      "Failed rows highlighted in-sheet for review",
    ],
    integrations: ["Python", "QuickBooks Desktop", "Google Sheets"],
    metric: "Python + QBXML",
  },
  {
    title: "Flexible Holiday Portal",
    category: "Web Apps",
    tagline: "Employee holiday elections synced to Zoho People",
    description:
      "An employee-facing app for filing Philippine holiday actions — take the day off, work for premium pay, or work to earn a compensatory day off. Employees sign in with their Zoho email, submissions log to Google Sheets, and a daily job posts compensatory-off credits to Zoho People only after confirming the employee worked a full day via attendance.",
    highlights: [
      "Zoho People OAuth sign-in and leave-balance posting",
      "Attendance-verified compensatory-off crediting",
      "Daily automated reconciliation via scheduled cron",
    ],
    integrations: ["Next.js", "Zoho People", "Google Sheets", "Vercel"],
    metric: "Next.js + Zoho",
  },
  {
    title: "CC Forms Hub",
    category: "Web Apps",
    tagline: "Mobile-first credit-card transaction filing for field crews",
    description:
      "A phone-friendly form hub that lets field crews quickly file credit-card transactions across multiple company cards, each routed to its own n8n webhook, with a submission history directory and a live presence indicator for concurrent-user awareness.",
    highlights: [
      "Mobile-optimized multi-card submission flow",
      "Per-card routing to dedicated n8n webhooks",
      "Submission history and live presence indicator",
    ],
    integrations: ["Next.js", "React", "n8n", "Supabase"],
    metric: "Next.js + n8n",
  },
  {
    title: "Internal HR System",
    category: "Web Apps",
    tagline: "Employee database, attendance, leave and timesheets",
    description:
      "An internal HR application modeled on Zoho People's core modules — employee records, check-in/out attendance, leave management and timesheets — with role-based access for employees, managers and admins.",
    highlights: [
      "Core HR modules: employees, attendance, leave, timesheets",
      "Role-based access for employee, manager and admin",
      "Built on Next.js server actions with a Prisma data layer",
    ],
    integrations: ["Next.js", "Prisma", "SQLite", "Tailwind CSS"],
    metric: "Next.js + Prisma",
  },
  {
    title: "CC Statement Extractor",
    category: "Document Automation",
    tagline: "OCR + AI parsing of credit-card statements into Sheets",
    description:
      "A scheduled tool that reads credit-card statement PDFs from Google Drive, uses OCR and Gemini to parse header and transaction data, writes structured rows into separate Google Sheets tabs, and files processed statements into dated folders — including multi-cardholder statement support.",
    highlights: [
      "OCR and Gemini parsing of statement PDFs",
      "Separate header and transaction outputs to Google Sheets",
      "Multi-cardholder support with dated auto-filing",
    ],
    integrations: ["Python", "Google Gemini", "Cloud Vision", "Google Sheets"],
    metric: "Python + Gemini",
  },
  {
    title: "Buildertrend Data Exporter",
    category: "Data Scraping",
    tagline: "Bulk-export financials and files from Buildertrend",
    description:
      "A browser-automation tool that logs into Buildertrend — which has no public API — and extracts purchase-order and owner-invoice history plus every job's documents, photos and videos, mirroring the original folder structure and streaming results straight to Google Drive to handle large multi-hundred-job exports without local storage.",
    highlights: [
      "Playwright automation against a platform with no public API",
      "Mirrors Buildertrend's folder structure into Google Drive",
      "Streams job-by-job to handle hundreds of jobs without local disk",
    ],
    integrations: ["Python", "Playwright", "Google Drive", "rclone"],
    metric: "Python tool",
  },
];

export const categories: Category[] = [
  "AI Agents",
  "Business Systems",
  "Web Apps",
  "Document Automation",
  "Data Scraping",
  "Data Pipelines",
  "Ops & Finance",
];
