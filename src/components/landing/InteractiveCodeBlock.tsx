"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  title?: string;
  delay?: number;
}

export default function InteractiveCodeBlock({ code, language, title, delay = 0 }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden group relative"
    >
      <div className="flex items-center justify-between px-4 py-3 bg-white/[0.04] border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
          </div>
          {title && <span className="text-xs text-white/40 font-mono">{title}</span>}
        </div>
        
        <button 
          onClick={handleCopy}
          className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-white/50 hover:text-white transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
        </button>
      </div>
      
      <div className="p-5 overflow-x-auto">
        <pre className="text-sm font-mono leading-relaxed text-white/80 whitespace-pre-wrap break-words">
          <code dangerouslySetInnerHTML={{ __html: language === 'json' ? syntaxHighlightJson(code) : syntaxHighlightCurl(code) }} />
        </pre>
      </div>
    </motion.div>
  );
}

// Very basic custom highlighting logic
function syntaxHighlightCurl(code: string) {
  return code
    .replace(/"(.*?)"/g, "<span class='text-green-400'>&quot;$1&quot;</span>")
    .replace(/curl/g, "<span class='text-purple-400 font-semibold'>curl</span>")
    .replace(/-X GET/g, "<span class='text-blue-400'>-X GET</span>")
    .replace(/-H/g, "<span class='text-blue-400'>-H</span>");
}

function syntaxHighlightJson(code: string) {
  return code
    .replace(/"(.*?)":/g, "<span class='text-blue-300'>&quot;$1&quot;</span>:")
    .replace(/: "(.*?)"/g, ": <span class='text-green-400'>&quot;$1&quot;</span>")
    .replace(/: ([0-9.]+)/g, ": <span class='text-purple-400'>$1</span>")
    .replace(/: true|: false/g, ": <span class='text-orange-400'>$&</span>");
}
