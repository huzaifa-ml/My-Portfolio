export const CONTACT = {
  email: "huzaifa.ai2025@gmail.com",
  whatsappDisplay: "0313 9885871",
  whatsappUrl: "https://wa.me/923139885871",
  linkedin: "https://www.linkedin.com/in/muhammad-huzaifa-ai",
  linkedinDisplay: "linkedin.com/in/muhammad-huzaifa-ai",
  location: "Peshawar, KPK, Pakistan",
};

export const HEADLINES = [
  "ARCHITECT AI SYSTEMS THAT WORK.",
  "n8n EXPERT",
  "AGENTIC AI DEVELOPER",
  "AUTOMATE BUSINESS WORKFLOWS.",
];

export const CORE_TECH = ["n8n", "AI Agents", "Python", "RAG", "Docker"];

export const SKILLS = [
  "n8n Automation",
  "AI Agent Development",
  "API Integration",
  "Prompt Engineering",
  "Business Process Automation",
  "Database Management",
  "REST APIs",
];

export const EDUCATION = [
  {
    degree: "BS Artificial Intelligence (3rd Semester)",
    org: "City University of Science & Information Technology, Peshawar",
  },
  { degree: "Intermediate (FSc)", org: "The Quaid-e-Azam College, Swabi" },
  { degree: "Matriculation", org: "Allied School Swabi Campus" },
];

export const PRINCIPLES = [
  {
    title: "Systems, not scripts",
    body: "Every automation is designed as part of a larger intelligent system with clear inputs, logic and outputs.",
  },
  {
    title: "Reliability first",
    body: "Workflows are built to run unattended — with structured data, error paths and predictable behaviour.",
  },
  {
    title: "Continuous learning",
    body: "Actively studying AI while shipping real automation systems, so the work stays close to what is current.",
  },
];

export type Service = {
  id: string;
  slug: string;
  number: string;
  title: string;
  summary: string;
  detail: string;
  points: string[];
  tags: string[];
  positioning: string;
  overview: string[];
  builds: string[];
  process: { step: string; body: string }[];
};

export const SERVICES: Service[] = [
  {
    id: "workflow-automation",
    slug: "ai-workflow-automation",
    number: "01",
    title: "Workflow Automation",
    summary: "Repetitive operations turned into intelligent, self-running workflows.",
    detail:
      "I map the manual process end to end, then rebuild it as an automated workflow where AI handles the judgement steps and the system handles the movement of data between tools.",
    points: [
      "Process mapping and automation design",
      "AI decision steps inside operational workflows",
      "Structured data handling and storage",
      "Error handling so workflows run unattended",
    ],
    tags: ["n8n", "AI Agents", "APIs", "Google Sheets"],
    positioning: "Operations that run themselves — with AI making the judgement calls.",
    overview: [
      "Most teams lose hours every week moving data between tools, re-typing the same information and chasing follow-ups. I rebuild those processes as automated workflows in n8n, with AI agents placed exactly where human judgement used to be needed.",
      "The result is a system that runs unattended: it triggers on real events, handles its own errors, keeps structured records and only asks for a human when something genuinely needs one.",
    ],
    builds: [
      "End-to-end n8n workflows for content, leads, support and internal operations",
      "AI agents that classify, summarise, draft and decide inside a workflow",
      "Structured data pipelines into Google Sheets and databases",
      "Notification and escalation paths for edge cases",
    ],
    process: [
      { step: "Map", body: "Walk the existing manual process end to end and document every input, decision and output." },
      { step: "Design", body: "Decide what automation handles, what AI handles and what stays human." },
      { step: "Build", body: "Implement the workflow, connect the tools and wire in structured storage." },
      { step: "Harden", body: "Add error paths, retries and logging so it runs without supervision." },
    ],
  },
  {
    id: "rapid-development",
    slug: "rapid-ai-solution-development",
    number: "02",
    title: "Rapid Solution Development",
    summary: "Working AI systems built fast, then hardened.",
    detail:
      "For teams that need to validate an idea quickly, I build a functioning AI solution — agent, assistant or pipeline — and iterate on it until it is dependable enough for daily use.",
    points: [
      "Fast prototyping of AI agents and assistants",
      "Retrieval (RAG) over your own content",
      "Iteration based on real usage",
      "Containerised, portable deployments",
    ],
    tags: ["AI Agents", "RAG", "Python", "Docker"],
    positioning: "From idea to a working AI system in days, not quarters.",
    overview: [
      "When an idea needs proving, a long specification phase is the wrong answer. I build a functioning version first — an agent, assistant or pipeline you can actually use — and let real usage shape what gets built next.",
      "Once the direction is confirmed, the prototype gets hardened: better prompts, retrieval over your own content, structured outputs and a containerised deployment that can be moved anywhere.",
    ],
    builds: [
      "AI agents and assistants with tool access",
      "RAG systems over documents, knowledge bases and internal content",
      "Python services and processing pipelines",
      "Dockerised deployments that run the same everywhere",
    ],
    process: [
      { step: "Scope", body: "Define the single outcome the prototype has to prove." },
      { step: "Prototype", body: "Build a working version fast, using the shortest reliable path." },
      { step: "Iterate", body: "Refine prompts, retrieval and logic against real usage." },
      { step: "Deploy", body: "Containerise and hand over something dependable for daily use." },
    ],
  },
  {
    id: "api-integrations",
    slug: "api-integrations",
    number: "03",
    title: "API Integrations",
    summary: "Your tools, connected and speaking the same language.",
    detail:
      "I connect platforms, models and internal services through their APIs so data moves automatically instead of being copied by hand between systems.",
    points: [
      "REST API integrations between platforms",
      "Custom logic and data transformation",
      "Tool calling for AI agents",
      "Authentication and reliable request handling",
    ],
    tags: ["REST APIs", "HTTP Requests", "JavaScript", "Tool Calling"],
    positioning: "One connected system instead of a stack of disconnected tools.",
    overview: [
      "Business tools rarely speak the same language out of the box. I connect them directly through their APIs — platforms, AI models, automation workflows and internal services — so data moves on its own instead of being copied by hand.",
      "Each integration includes the unglamorous parts that make it reliable: authentication, data transformation, retries and clear handling when an upstream service misbehaves.",
    ],
    builds: [
      "REST API integrations between business platforms",
      "Custom transformation logic in JavaScript inside workflows",
      "Tool-calling endpoints that AI agents can safely use",
      "Authenticated, resilient request handling with sensible retries",
    ],
    process: [
      { step: "Audit", body: "Review the APIs available and what data actually needs to move." },
      { step: "Connect", body: "Implement authenticated requests and map the data between systems." },
      { step: "Transform", body: "Add the custom logic that makes both sides agree on shape and meaning." },
      { step: "Verify", body: "Test failure cases so the integration degrades predictably." },
    ],
  },
];


export type Project = {
  number: string;
  slug: string;
  category: string;
  title: string;
  /** Short label used in the hover preview */
  previewTagline: string;
  previewTech: string;
  summary: string;
  positioning: string;
  challenge: string;
  solution: string;
  automates: string[];
  overview: string[];
  howItWorks: string[];
  capabilities: string[];
  benefits: string[];
  tech: string[];
  role: string;
  figures: { value: string; label: string }[];
  /** Swap the `src` values to update screenshots later. */
  gallery: { src: string; caption: string }[];
};

import w1 from "@/assets/workflow-1.png";
import w2 from "@/assets/workflow-2.png";
import w3 from "@/assets/workflow-3.png";
import w4 from "@/assets/workflow-4.png";
import w5 from "@/assets/workflow-5.png";
import w6 from "@/assets/workflow-6.png";
import w7 from "@/assets/workflow-7.png";
import w8 from "@/assets/workflow-8.png";

export const PROJECTS: Project[] = [
  {
    number: "01",
    slug: "ai-content-creation",
    category: "Content Automation",
    title: "CONTENT GENERATION",
    previewTagline: "Content generation & publishing automation",
    previewTech: "n8n · Gemini · KIE AI",
    summary:
      "An AI-powered content automation system that transforms ideas into social media content, visual assets, videos, and publishing-ready outputs.",
    positioning: "An example of how I turn a manual content process into one connected AI pipeline.",
    challenge:
      "Producing content consistently means jumping between writing tools, image generators, video tools and spreadsheets, and moving every asset by hand between them.",
    solution:
      "A single orchestrated workflow where each stage hands structured output to the next — from idea and copy through visuals and video to publishing-ready records.",
    automates: [
      "Writing content and scene breakdowns",
      "Turning content into image prompts",
      "Generating images, including close-up and winner variations",
      "Generating video prompts and rendering video",
      "Logging prompts and outputs into Google Sheets",
      "Preparing finished content for publishing",
    ],
    overview: [
      "The system automates the stages of content production that normally happen across several disconnected tools: writing the content, describing the visuals, generating the assets, producing video and preparing everything for publishing.",
      "Each stage is an explicit part of an n8n workflow, so the output of one step becomes the structured input of the next instead of being copied by hand.",
    ],
    howItWorks: [
      "A schedule or idea input starts the workflow and pulls the source content",
      "AI models create the scenes and written content for each piece",
      "Image prompts are generated from that content",
      "Images are produced, including close-up and winner variations",
      "Video prompts are generated and passed to video generation",
      "Rendered outputs and prompts are logged into Google Sheets",
      "Finished content is moved toward the publishing destinations",
    ],
    capabilities: [
      "Creating content and scenes",
      "Generating image prompts",
      "Generating visual assets",
      "Creating close-up and winner images",
      "Generating video prompts",
      "Generating videos",
      "Preparing and logging outputs",
      "Moving content toward publishing",
    ],
    benefits: [
      "Reduces repetitive content-production work",
      "Connects multiple AI generation steps into one pipeline",
      "Removes manual movement of assets between tools",
      "Gives the content workflow a clear, structured shape",
      "Makes content production repeatable",
      "Moves content toward publishing with less manual intervention",
    ],
    tech: ["n8n", "Google Gemini", "KIE AI", "Nano Banana", "Google Sheets", "Blotato"],
    role: "Designed and built the complete AI-powered content automation pipeline.",
    figures: [
      { value: "03", label: "Workflow screenshots" },
      { value: "06", label: "Core technologies" },
      { value: "Multi-stage", label: "Content pipeline" },
    ],
    gallery: [
      { src: w1, caption: "Image prompt generation, image generation and sheet logging" },
      { src: w2, caption: "Carousel content pipeline with structured output parsing" },
      { src: w3, caption: "Scene creation, close-up and winner images, video render and publishing" },
    ],
  },
  {
    number: "02",
    slug: "ai-lead-generation-research",
    category: "Lead Generation",
    title: "LEAD GENERATION & RESEARCH SYSTEM",
    previewTagline: "AI-powered prospect discovery & research",
    previewTech: "n8n · AI Agents · Web Scraping",
    summary:
      "An AI-powered prospecting system that discovers businesses, researches accounts, qualifies opportunities, and organizes outreach-ready lead information.",
    positioning: "A selected example of AI-assisted prospect research replacing manual list building.",
    challenge:
      "Finding and qualifying prospects manually means opening dozens of websites, copying details into a sheet and re-reading everything to judge whether an account is even a fit.",
    solution:
      "An agent-driven research pipeline that discovers accounts, researches them, qualifies them against an ICP and writes structured, outreach-ready records back to one sheet.",
    automates: [
      "Discovering and normalising candidate businesses",
      "Researching each company from public sources",
      "Qualifying accounts against an ideal-customer profile",
      "Identifying the relevant people at each account",
      "Drafting personalized messaging",
      "Appending structured records and tracking activity",
    ],
    overview: [
      "The workflow covers prospecting end to end: campaign configuration and lead discovery, account research and ICP qualification, buying committee research and personalized messaging, then outreach and activity tracking.",
      "Every stage writes structured records back into Google Sheets so the research behind each prospect stays visible instead of living in scattered notes.",
    ],
    howItWorks: [
      "Campaign configuration defines the target profile for the run",
      "Leads are generated, cleaned and normalised, then filtered",
      "An account research agent gathers information on each company",
      "An ICP qualification agent decides whether the account fits",
      "A buying committee agent identifies the relevant people and drafts personalized messaging",
      "An information extractor structures the result and appends it to the sheet",
      "An outreach loop sends the emails and updates activity tracking",
    ],
    capabilities: [
      "Campaign configuration",
      "Lead discovery",
      "Account research",
      "ICP qualification",
      "Buying committee research",
      "Personalized messaging",
      "Outreach",
      "Activity tracking",
    ],
    benefits: [
      "Reduces manual prospect research",
      "Automates repetitive lead discovery",
      "Structures account research consistently",
      "Helps qualify prospects against an ICP",
      "Keeps prospect information organised in one place",
      "Supports personalized outreach",
      "Reduces repetitive data collection",
    ],
    tech: ["n8n", "AI Agents", "Google Sheets", "JavaScript", "HTTP Requests", "Web Scraping"],
    role: "Designed the lead-generation, research, extraction, qualification, and data-management workflow.",
    figures: [
      { value: "04", label: "Major workflow stages" },
      { value: "06", label: "Core technologies" },
      { value: "End-to-end", label: "Lead research workflow" },
    ],
    gallery: [
      {
        src: w4,
        caption:
          "Lead discovery, account research and ICP qualification, buying committee messaging, outreach and activity tracking",
      },
    ],
  },
  {
    number: "03",
    slug: "ai-voice-agents",
    category: "Voice AI",
    title: "VOICE AGENTS",
    previewTagline: "Voice agents connected to real actions",
    previewTech: "ElevenLabs · n8n · Tool Calling",
    summary:
      "AI voice agents that communicate naturally with users and connect conversations to real actions through tools and automation.",
    positioning: "An example of a voice agent that does real work, not just answers questions.",
    challenge:
      "Routine phone and voice requests — availability checks, bookings, reschedules — occupy a person full time even though each request follows the same few steps.",
    solution:
      "A voice agent that handles the conversation while an automation layer executes the actual actions through connected tools during the call.",
    automates: [
      "Understanding spoken requests and extracting details",
      "Choosing and calling the right connected tool",
      "Checking availability and offering alternate slots",
      "Booking and rescheduling appointments",
      "Writing results back to Google Sheets",
      "Following up over email or WhatsApp",
    ],
    overview: [
      "The agent handles the conversation, while an automation layer behind it performs the actual work: reading and writing records, sending messages and managing appointments.",
      "A dedicated MCP server exposes appointment-management tool workflows to the voice receptionist, so the agent can act during a conversation rather than only answering questions.",
    ],
    howItWorks: [
      "A conversation or webhook event reaches the agent",
      "Fields such as locations, dates and intent are extracted",
      "The AI agent decides which connected tool to call",
      "Tools handle lookups, messaging and appointment actions",
      "Results are written to Google Sheets and confirmed back to the user",
      "Email and WhatsApp are used for follow-up where relevant",
    ],
    capabilities: [
      "Natural voice interaction",
      "AI agent processing and routing",
      "Connected tool execution",
      "WhatsApp interaction",
      "Gmail and Google Sheets integration",
      "Appointment booking workflows",
      "Checking availability",
      "Finding alternate appointment slots",
      "Executing and rescheduling appointment actions",
    ],
    benefits: [
      "Handles conversations naturally",
      "Reduces manual handling of routine requests",
      "Connects conversations directly to real actions",
      "Automates appointment-related tasks",
      "Reaches connected systems through tools",
      "Provides a more direct conversational experience",
    ],
    tech: ["ElevenLabs", "AI Agents", "n8n", "APIs", "Tool Calling", "MCP tools"],
    role: "Built and configured the voice agent, connected external tools, and tested real-time tool execution.",
    figures: [
      { value: "02", label: "Workflow views" },
      { value: "Tool-enabled", label: "Voice automation" },
      { value: "Appointment", label: "Actions" },
    ],
    gallery: [
      { src: w5, caption: "Voice agent workflow — intake, extraction, agent and email response" },
      { src: w6, caption: "Tool-enabled appointment system — MCP appointment tools" },
    ],
  },
  {
    number: "04",
    slug: "ai-customer-support-agents",
    category: "Customer Support",
    title: "CUSTOMER SUPPORT AGENTS",
    previewTagline: "Tool-connected AI support automation",
    previewTech: "AI Agents · n8n · RAG",
    summary:
      "An AI-powered support system that understands customer requests, retrieves relevant information, performs connected actions, and escalates issues when needed.",
    positioning: "An example of support automation grounded in real knowledge, with a human escape hatch.",
    challenge:
      "Support teams answer the same questions repeatedly and still have to look up order status, open tickets and dig through internal documents for each one.",
    solution:
      "A tool-connected agent that interprets each request, retrieves grounded knowledge, performs the action itself, and escalates to a human when the request needs one.",
    automates: [
      "Reading and preprocessing incoming Slack requests",
      "Interpreting intent and routing to the right tool",
      "Creating tickets and checking their status",
      "Retrieving grounded answers from a knowledge base",
      "Email, calendar and calculation actions",
      "Escalating to a human when required",
    ],
    overview: [
      "Requests arrive from Slack, are preprocessed and passed to a core AI agent that decides which tool the request needs — ticketing, status checks, escalation, knowledge retrieval, email, calendar or calculation.",
      "A broader agent architecture sits behind it: sub-agents, web research, long-term memory in a vector store and embeddings, so answers can be grounded in real knowledge rather than guessed.",
    ],
    howItWorks: [
      "A Slack trigger receives the customer request",
      "Preprocessing filters and shapes the incoming data",
      "The core agent, with model and memory attached, interprets the request",
      "It calls the appropriate tool: ticketing, status check, escalation, knowledge base, email, calendar or calculator",
      "Knowledge retrieval uses embeddings and a vector store for grounded answers",
      "The response is sent back into Slack, or escalated to a human",
    ],
    capabilities: [
      "Slack input and responses",
      "Data preprocessing",
      "Core AI agent routing",
      "Ticket creation and status checking",
      "Human escalation",
      "Knowledge retrieval from a Slack knowledge base",
      "Email, calendar and calculator tools",
      "Embeddings and vector store",
      "Sub-agents, web research and long-term memory",
    ],
    benefits: [
      "Handles common customer questions",
      "Retrieves relevant information before answering",
      "Automates routine support actions",
      "Creates and manages support tickets",
      "Connects with communication and productivity tools",
      "Performs certain actions directly through tools",
      "Escalates issues to humans when necessary",
      "Uses knowledge retrieval to improve responses",
    ],
    tech: ["AI Agents", "n8n", "Google Gemini", "APIs", "Tool Calling", "Slack", "Vector Store", "Embeddings"],
    role: "Designed and built the AI support workflow, including agent logic, tool integration, and automated customer interactions.",
    figures: [
      { value: "02", label: "Architecture views" },
      { value: "Multi-tool", label: "AI support system" },
      { value: "Knowledge +", label: "Tool integration" },
    ],
    gallery: [
      { src: w7, caption: "Support workflow — Slack, preprocessing, core agent, tools and Slack reply" },
      { src: w8, caption: "Agent architecture — sub-agents, web research, memory, vector store and embeddings" },
    ],
  },
];


export const TESTIMONIALS = [
  {
    quote:
      "He automated our client onboarding end to end. What used to take two days now takes minutes.",
    name: "Bilal A.",
    role: "Agency Owner, Lahore",
  },
  {
    quote:
      "The AI agent he built now handles most of our support tickets — like having an extra team member who never sleeps.",
    name: "Hina S.",
    role: "E-commerce Founder, Karachi",
  },
  {
    quote:
      "Fast, professional, and he actually understood our workflow before touching a single tool.",
    name: "Omar F.",
    role: "Marketing Director, Islamabad",
  },
];

export const FAQS = [
  {
    number: "01",
    question: "What businesses do you work with?",
    answer:
      "Mostly startup founders, small businesses, agencies and SaaS companies looking to remove repetitive manual work from their operations — but the systems I build adapt to most industries.",
  },
  {
    number: "02",
    question: "What automation tools do you use?",
    answer:
      "A mix depending on the project — commonly n8n, OpenAI, Google Workspace, Slack, Notion, Airtable, Supabase, Docker, REST APIs and webhooks, chosen based on what your business already runs on.",
  },
  {
    number: "03",
    question: "Can you integrate with our existing software?",
    answer:
      "In most cases, yes. If a tool has an API, webhook support, or an existing integration ecosystem, it can usually be connected into your automation system.",
  },
  {
    number: "04",
    question: "How long do projects take, and is there support after launch?",
    answer:
      "Simple automations can go live within a week; larger multi-system builds typically take two to six weeks. Every project also includes a support window after launch, with ongoing maintenance available.",
  },
];

