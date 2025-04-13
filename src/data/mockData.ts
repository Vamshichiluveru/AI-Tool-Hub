import { AITool, Review, Category } from "../types";

export const aiTools: AITool[] = [
  {
    id: "1",
    name: "ChatGPT",
    description: "An AI language model developed by OpenAI that can generate human-like text based on context and past conversations.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://chat.openai.com",
    pricing: "Free / $20 per month",
    averageRating: 4.7,
    reviewCount: 1245,
    features: ["Text generation", "Language translation", "Content creation", "Code assistance"],
    isFeatured: true
  },
  {
    id: "2",
    name: "DALL-E",
    description: "An AI system by OpenAI that can create realistic images and art from a description in natural language.",
    logo: "/placeholder.svg",
    category: "Image Generation",
    url: "https://openai.com/dall-e-3",
    pricing: "Usage-based",
    averageRating: 4.5,
    reviewCount: 952,
    features: ["Image creation", "Art generation", "Design concepts", "Visual edits"],
    isFeatured: true
  },
  {
    id: "3",
    name: "Midjourney",
    description: "An AI program that generates images from textual descriptions, similar to DALL-E and Stable Diffusion.",
    logo: "/placeholder.svg",
    category: "Image Generation",
    url: "https://www.midjourney.com",
    pricing: "$10-$60 per month",
    averageRating: 4.6,
    reviewCount: 874,
    features: ["Artistic image generation", "Creative concepts", "Visual storytelling"],
    isFeatured: true
  },
  {
    id: "4",
    name: "GitHub Copilot",
    description: "An AI pair programmer that helps you write code faster and with less work.",
    logo: "/placeholder.svg",
    category: "Code Assistant",
    url: "https://github.com/features/copilot",
    pricing: "$10 per month",
    averageRating: 4.2,
    reviewCount: 756,
    features: ["Code completion", "Function generation", "Documentation assistance"],
    isFeatured: false
  },
  {
    id: "5",
    name: "Claude",
    description: "An AI assistant by Anthropic designed to be helpful, harmless, and honest.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://claude.ai",
    pricing: "Free / $20 per month",
    averageRating: 4.3,
    reviewCount: 521,
    features: ["Conversational AI", "Content creation", "Research assistance"],
    isFeatured: true
  },
  {
    id: "6",
    name: "Stable Diffusion",
    description: "An open-source AI art generation system that creates images from text descriptions.",
    logo: "/placeholder.svg",
    category: "Image Generation",
    url: "https://stability.ai",
    pricing: "Free / Paid options",
    averageRating: 4.4,
    reviewCount: 689,
    features: ["Text-to-image", "Image editing", "Style transfer"],
    isFeatured: false
  },
  {
    id: "7",
    name: "Jasper",
    description: "An AI content platform that helps teams create high-quality content faster.",
    logo: "/placeholder.svg",
    category: "Marketing",
    url: "https://www.jasper.ai",
    pricing: "From $39 per month",
    averageRating: 4.0,
    reviewCount: 410,
    features: ["Blog writing", "Marketing copy", "Social media content"],
    isFeatured: false
  },
  {
    id: "8",
    name: "Synthesia",
    description: "An AI video generation platform that creates videos with virtual presenters.",
    logo: "/placeholder.svg",
    category: "Video Generation",
    url: "https://www.synthesia.io",
    pricing: "From $30 per month",
    averageRating: 4.1,
    reviewCount: 329,
    features: ["AI video creation", "Virtual presenters", "Multilingual videos"],
    isFeatured: false
  },
  {
    id: "9",
    name: "Gemini",
    description: "Google's multimodal AI model that can understand and generate text, code, images, and analyze various content types.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://gemini.google.com",
    pricing: "Free / $19.99 per month",
    averageRating: 4.5,
    reviewCount: 683,
    features: ["Text generation", "Image analysis", "Problem solving", "Multimodal capabilities"],
    isFeatured: true
  },
  {
    id: "10",
    name: "Perplexity AI",
    description: "An AI search engine and research assistant that provides cited answers to complex questions.",
    logo: "/placeholder.svg",
    category: "Research",
    url: "https://www.perplexity.ai",
    pricing: "Free / $20 per month",
    averageRating: 4.4,
    reviewCount: 512,
    features: ["Real-time information", "Source citations", "Conversational search", "Document analysis"],
    isFeatured: true
  },
  {
    id: "11",
    name: "Anthropic Claude",
    description: "An AI assistant focused on being helpful, harmless, and honest with extensive reasoning capabilities.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://claude.ai",
    pricing: "Free / $20 per month",
    averageRating: 4.6,
    reviewCount: 734,
    features: ["Long context window", "Reasoning", "Safety features", "Document analysis"],
    isFeatured: true
  },
  {
    id: "12",
    name: "Runway",
    description: "Creative suite with AI video generation and editing capabilities.",
    logo: "/placeholder.svg",
    category: "Video Generation",
    url: "https://runwayml.com",
    pricing: "From $12 per month",
    averageRating: 4.3,
    reviewCount: 478,
    features: ["Video generation", "Text-to-video", "Image-to-video", "Video editing"],
    isFeatured: false
  },
  {
    id: "13",
    name: "Copy.ai",
    description: "AI-powered copywriting tool that helps create marketing content, emails, and social media posts.",
    logo: "/placeholder.svg",
    category: "Marketing",
    url: "https://www.copy.ai",
    pricing: "Free / From $36 per month",
    averageRating: 4.2,
    reviewCount: 389,
    features: ["Marketing copy", "Email generation", "Blog posts", "Social media content"],
    isFeatured: false
  },
  {
    id: "14",
    name: "Notion AI",
    description: "AI writing assistant integrated into Notion that helps with content creation, summarization, and editing.",
    logo: "/placeholder.svg",
    category: "Productivity",
    url: "https://www.notion.so/product/ai",
    pricing: "$10 per member per month",
    averageRating: 4.4,
    reviewCount: 521,
    features: ["Content creation", "Summarization", "Translation", "Brainstorming"],
    isFeatured: false
  },
  {
    id: "15",
    name: "Otter.ai",
    description: "AI meeting assistant that records, transcribes, and summarizes conversations in real-time.",
    logo: "/placeholder.svg",
    category: "Productivity",
    url: "https://otter.ai",
    pricing: "Free / From $10 per month",
    averageRating: 4.3,
    reviewCount: 412,
    features: ["Transcription", "Meeting notes", "Audio recording", "Summary generation"],
    isFeatured: false
  },
  {
    id: "16",
    name: "Grammarly",
    description: "AI writing assistant that helps with grammar, clarity, engagement, and delivery in your writing.",
    logo: "/placeholder.svg",
    category: "Productivity",
    url: "https://www.grammarly.com",
    pricing: "Free / From $12 per month",
    averageRating: 4.7,
    reviewCount: 1178,
    features: ["Grammar checking", "Style suggestions", "Tone adjustments", "Clarity improvements"],
    isFeatured: true
  },
  {
    id: "17",
    name: "Replika",
    description: "An AI companion designed for meaningful conversation and emotional support.",
    logo: "/placeholder.svg",
    category: "Other",
    url: "https://replika.ai",
    pricing: "Free / From $10 per month",
    averageRating: 4.0,
    reviewCount: 823,
    features: ["Personalized conversations", "Emotional support", "Friendship simulation", "Check-ins"],
    isFeatured: false
  },
  {
    id: "18",
    name: "Lumen5",
    description: "Video creation platform that transforms blog posts and text content into engaging videos.",
    logo: "/placeholder.svg",
    category: "Video Generation",
    url: "https://lumen5.com",
    pricing: "Free / From $19 per month",
    averageRating: 4.1,
    reviewCount: 356,
    features: ["Text to video", "Social media videos", "Automated editing", "Media library"],
    isFeatured: false
  },
  {
    id: "19",
    name: "Descript",
    description: "All-in-one audio/video editor that uses AI to transcribe and edit content like editing a text document.",
    logo: "/placeholder.svg",
    category: "Audio Generation",
    url: "https://www.descript.com",
    pricing: "Free / From $12 per month",
    averageRating: 4.5,
    reviewCount: 472,
    features: ["Transcription", "Audio editing", "Video editing", "Voice cloning"],
    isFeatured: false
  },
  {
    id: "20",
    name: "Mixtral",
    description: "An open-access mixture of experts model from Mistral AI with strong capabilities across various domains.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://mistral.ai",
    pricing: "Free / API pricing varies",
    averageRating: 4.2,
    reviewCount: 287,
    features: ["Code generation", "Content creation", "Multi-language support", "Complex reasoning"],
    isFeatured: false
  },
  {
    id: "21",
    name: "Anthropic Claude 3",
    description: "Anthropic's latest language model offering advanced reasoning, improved safety, and better instruction following.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://www.anthropic.com/claude",
    pricing: "API pricing varies",
    averageRating: 4.8,
    reviewCount: 342,
    features: ["Advanced reasoning", "Coding assistance", "Document analysis", "Multi-turn conversations"],
    isFeatured: true
  },
  {
    id: "22",
    name: "Cohere",
    description: "AI platform offering text generation, embeddings and semantic search capabilities for businesses.",
    logo: "/placeholder.svg",
    category: "Text Generation",
    url: "https://cohere.ai",
    pricing: "Contact for pricing",
    averageRating: 4.1,
    reviewCount: 198,
    features: ["Natural language processing", "Semantic search", "Text embeddings", "Enterprise solutions"],
    isFeatured: false
  },
  {
    id: "23",
    name: "ElevenLabs",
    description: "AI voice technology platform that can clone voices and generate realistic speech from text.",
    logo: "/placeholder.svg",
    category: "Audio Generation",
    url: "https://elevenlabs.io",
    pricing: "Free / From $5 per month",
    averageRating: 4.6,
    reviewCount: 347,
    features: ["Voice synthesis", "Voice cloning", "Audio books", "Content localization"],
    isFeatured: false
  },
  {
    id: "24",
    name: "Synthesia",
    description: "AI video generation platform that creates videos with virtual presenters speaking your script.",
    logo: "/placeholder.svg",
    category: "Video Generation",
    url: "https://www.synthesia.io",
    pricing: "From $30 per month",
    averageRating: 4.3,
    reviewCount: 418,
    features: ["Virtual presenters", "Text-to-video", "Multiple languages", "Template library"],
    isFeatured: false
  }
];

export const reviews: Review[] = [
  {
    id: "r1",
    toolId: "1",
    userName: "Alex Johnson",
    userAvatar: "/placeholder.svg",
    rating: 5,
    comment: "ChatGPT has completely transformed how I draft emails and create content. The responses are impressively human-like.",
    date: "2023-11-10"
  },
  {
    id: "r2",
    toolId: "1",
    userName: "Sarah Miller",
    userAvatar: "/placeholder.svg",
    rating: 4,
    comment: "Very useful for brainstorming and getting quick information, though sometimes it provides confidently incorrect answers.",
    date: "2023-10-25"
  },
  {
    id: "r3",
    toolId: "2",
    userName: "Michael Chen",
    userAvatar: "/placeholder.svg",
    rating: 5,
    comment: "DALL-E is mind-blowing! I've created amazing artwork for my projects without any design skills.",
    date: "2023-11-05"
  },
  {
    id: "r4",
    toolId: "3",
    userName: "Emma Wilson",
    userAvatar: "/placeholder.svg",
    rating: 4,
    comment: "Midjourney creates beautiful artistic images, but it takes time to learn the right prompts.",
    date: "2023-10-30"
  },
  {
    id: "r5",
    toolId: "9",
    userName: "Thomas Wright",
    userAvatar: "/placeholder.svg",
    rating: 5,
    comment: "Gemini is incredibly versatile. I use it daily for both text and image analysis tasks.",
    date: "2024-03-15"
  },
  {
    id: "r6",
    toolId: "10",
    userName: "Priya Sharma",
    userAvatar: "/placeholder.svg",
    rating: 4,
    comment: "Perplexity has changed how I research topics. Love the citations, though sometimes the information isn't perfectly accurate.",
    date: "2024-02-28"
  },
  {
    id: "r7",
    toolId: "11",
    userName: "Daniel Rodriguez",
    userAvatar: "/placeholder.svg",
    rating: 5,
    comment: "Claude's ability to process lengthy documents and provide thoughtful summaries is unmatched.",
    date: "2024-03-22"
  },
  {
    id: "r8",
    toolId: "16",
    userName: "Jennifer Lee",
    userAvatar: "/placeholder.svg",
    rating: 5,
    comment: "As someone who writes professionally, Grammarly has been worth every penny for improving my work.",
    date: "2024-03-05"
  }
];

export const categories: Category[] = [
  "Text Generation",
  "Image Generation",
  "Audio Generation",
  "Video Generation",
  "Code Assistant",
  "Research",
  "Productivity",
  "Marketing",
  "Other"
];

function getToolsByCategory(category: Category): AITool[] {
  return aiTools.filter(tool => tool.category === category);
}

export function getFeaturedTools(): AITool[] {
  return aiTools.filter(tool => tool.isFeatured);
}

export function getToolById(id: string): AITool | undefined {
  return aiTools.find(tool => tool.id === id);
}

export function getReviewsByToolId(toolId: string): Review[] {
  return reviews.filter(review => review.toolId === toolId);
}
