// --- API Keys & External Links Configuration ---
// IMPORTANT: For client-side applications, API keys are inherently visible in the browser's developer tools.
// This rotation mechanism helps with rate limits and provides fallback, but DOES NOT secure the keys from discovery.

// YouTube API Keys
const YOUTUBE_API_KEYS = [
    ''
];

// Advertisement video URLs
const ADVERTISEMENT_URLS = [
    "https://www.youtube.com/embed/GwGTPb6J-mE?si=SSej5znhh7C1xpMs", 
    "https://www.youtube.com/embed/XgsHx_O5L4k?si=vCpucY8rq3pIJpTv",
    "https://www.youtube.com/embed/DNm3YY6TwmM?si=RCUGHYZ4swg9WESK"
];

// Gemini API Keys provided by the user
const GEMINI_API_KEYS = [
    ''
];

const DEEPSEEK_API_KEYS = [
    ''
];

// Create an array of ad placeholder URLs
const adPlaceholders = [
    "https://www.youtube.com/embed/GwGTPb6J-mE?si=SSej5znhh7C1xpMs", 
    "https://www.youtube.com/embed/XgsHx_O5L4k?si=vCpucY8rq3pIJpTv",
    "https://www.youtube.com/embed/DNm3YY6TwmM?si=RCUGHYZ4swg9WESK"
];

const config = {
    geminiFlashModel: "gemini-2.0-flash", // For summary, file analysis, and DeepSeek fallback
    geminiImageGenModel: "imagen-3.0-generate-002", // For image generation
    deepSeekModel: "deepseek/deepseek-r1:free", // DeepSeek model name changed to OpenRouter format
    geminiApiEndpoint: "https://generativelanguage.googleapis.com/v1beta/models/",
    deepSeekApiEndpoint: "https://openrouter.ai/api/v1/chat/completions", // OpenRouter endpoint
    temperature: 0.7,
    maxTokens: 164000, 
};

const MESSAGE_RATE_LIMIT = 1000; // 1 second between messages

// New constants for AI context management (summarization)
const MAX_CONVERSATION_HISTORY_CHARS = 4000; // Roughly 1000 tokens for direct history (example value)
const SUMMARIZE_TRIGGER_CHARS = 5000; // Summarize if conversation history exceeds this many characters
const SUMMARIZE_PROMPT_MAX_CHARS = 4000; // Max chars to send to summarization model

// Default settings
const defaultSettings = {
    theme: 'auto',
    chatbotName: 'NeoDot',
    inputSave: true, // Whether to save input text between sessions
    glassEffect: 'auto', // auto, on, off
    background: {
        type: 'none', // 'none', 'color', 'image'
        value: '', // hex color or base64 image URL
        opacity: 1,
        blur: 0,
        images: [] // For multiple background images
    }
};

const presetColors = [
    '#121212', '#ffffff', '#007bff', '#00b8ff', '#1a202c', // Default, White, Blue, Light Blue, Dark Blue
    '#ff5722', '#4caf50', '#9c27b0', '#ffc107', '#607d8b', // Orange, Green, Purple, Amber, Blue Grey
    '#e91e63', '#00bcd4', '#795548', '#f44336' // Pink, Cyan, Brown, Red
];
