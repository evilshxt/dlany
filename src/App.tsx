import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Link2, Loader2, CheckCircle2, AlertCircle, Youtube, Instagram, Music, Video } from 'lucide-react';
import posthog from 'posthog-js';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for cleaner class names
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function App() {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle'); // idle, processing, complete, error
  const [format, setFormat] = useState('video'); // video | audio

  const handleDownload = async (e) => {
    e.preventDefault();
    if (!url) return;

    // Analytics
    posthog.capture('download_start', { url, format });

    setLoading(true);
    setStatus('processing');

    try {
      // Simulate API call to your Hugging Face Backend
      // const res = await fetch(`${import.meta.env.VITE_API_URL}/process`, ...);
      
      await new Promise(r => setTimeout(r, 2500)); // Fake delay for demo

      setStatus('complete');
      posthog.capture('download_success', { url, format });
      
      // Reset after 3 seconds so they can download another
      setTimeout(() => {
        setStatus('idle');
        setUrl('');
      }, 4000);

    } catch (err) {
      setStatus('error');
      posthog.capture('download_error', { error: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden flex flex-col items-center justify-center p-4">
      
      {/* --- Ambient Background Glows --- */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"
      />

      {/* --- Main Content --- */}
      <div className="z-10 w-full max-w-lg space-y-8">
        
        {/* Header Text */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-2"
        >
          <h1 className="text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-zinc-200 to-zinc-500">
            dlany.
          </h1>
          <p className="text-zinc-400 font-medium">
            Universal Media Downloader
          </p>
        </motion.div>

        {/* The Glass Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative group"
        >
          {/* Subtle gradient border effect */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-2xl opacity-20 group-hover:opacity-40 transition duration-500 blur-sm"></div>
          
          <div className="relative bg-zinc-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl">
            
            <form onSubmit={handleDownload} className="space-y-6">
              
              {/* URL Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-500 uppercase tracking-wider ml-1">Paste Link</label>
                <div className="relative group/input">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Link2 className="h-5 w-5 text-zinc-500 group-focus-within/input:text-purple-400 transition-colors" />
                  </div>
                  <input
                    type="text"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://youtube.com/watch?v=..."
                    className="w-full bg-zinc-950/50 border border-zinc-800 text-zinc-100 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all placeholder:text-zinc-700"
                  />
                </div>
              </div>

              {/* Format Toggle Switches */}
              <div className="grid grid-cols-2 gap-3">
                <FormatButton 
                  active={format === 'video'} 
                  onClick={() => setFormat('video')} 
                  icon={Video} 
                  label="Video MP4"
                />
                <FormatButton 
                  active={format === 'audio'} 
                  onClick={() => setFormat('audio')} 
                  icon={Music} 
                  label="Audio MP3"
                />
              </div>

              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading || !url}
                className={cn(
                  "w-full relative overflow-hidden py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-lg",
                  loading 
                    ? "bg-zinc-800 text-zinc-500 cursor-not-allowed" 
                    : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white shadow-purple-500/20"
                )}
              >
                 <AnimatePresence mode="wait">
                    {loading ? (
                      <motion.div 
                        key="loader"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Loader2 className="animate-spin w-5 h-5" />
                        <span>Processing...</span>
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="label"
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <Download className="w-5 h-5" />
                        <span>Download Now</span>
                      </motion.div>
                    )}
                 </AnimatePresence>
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Status Messages (Popups) */}
        <div className="h-16 flex items-center justify-center">
          <AnimatePresence mode="wait">
            {status === 'complete' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 px-6 py-3 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 font-medium"
              >
                <CheckCircle2 className="w-5 h-5" />
                <span>Success! Download starting...</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex items-center gap-3 px-6 py-3 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 font-medium"
              >
                <AlertCircle className="w-5 h-5" />
                <span>Error processing link. Try again.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}
          className="flex justify-center gap-6 text-zinc-600"
        >
          <Youtube className="w-6 h-6 hover:text-red-500 transition-colors cursor-pointer" />
          <Instagram className="w-6 h-6 hover:text-pink-500 transition-colors cursor-pointer" />
          <div className="w-6 h-6 flex items-center justify-center hover:text-cyan-400 transition-colors cursor-pointer font-bold">Tk</div>
        </motion.div>

      </div>
    </div>
  );
}

// Sub-component for buttons to keep code clean
function FormatButton({ active, onClick, icon: Icon, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-2 py-4 rounded-xl border transition-all duration-200",
        active 
          ? "bg-zinc-800/80 border-purple-500/50 text-purple-400 ring-1 ring-purple-500/20" 
          : "bg-zinc-900/40 border-zinc-800 text-zinc-500 hover:bg-zinc-800 hover:border-zinc-700"
      )}
    >
      <Icon className={cn("w-6 h-6", active && "animate-pulse")} />
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
}

export default App;