'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface CopyButtonProps {
  value: string;
  className?: string;
}

export function CopyButton({ value, className = '' }: CopyButtonProps) {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    try {
      await navigator.clipboard.writeText(value);
      setIsCopied(true);
      toast.success('Copied to clipboard!');
      
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (err) {
      toast.error('Failed to copy');
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={`p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group/copy ${className}`}
      title="Copy to clipboard"
    >
      {isCopied ? (
        <Check className="w-4 h-4 text-emerald-400" />
      ) : (
        <Copy className="w-4 h-4 text-zinc-400 group-hover/copy:text-white transition-colors" />
      )}
    </button>
  );
}
