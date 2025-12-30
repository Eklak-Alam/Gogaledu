'use client'
import { useState } from "react";
import Link from "next/link";
import { Calendar, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function WorkshopFloatingIcon() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 left-6 z-[9999] flex items-end"
        >
          {/* --- CLOSE BUTTON --- 
              Positioned absolute top-right. 
              High z-index to ensure it's clickable. 
          */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setVisible(false);
            }}
            className="absolute -top-3 cursor-pointer -right-3 z-50 bg-white text-gray-500 hover:text-red-500 hover:bg-red-50 border border-gray-200 rounded-full p-1.5 shadow-md transition-all duration-200 active:scale-90"
            aria-label="Close workshop notification"
          >
            <X size={14} strokeWidth={3} />
          </button>

          {/* --- MAIN CARD --- */}
          <Link
            href="/workshop"
            className="group relative"
          >
            {/* Notification Dot (Pulse Effect) */}
            <span className="absolute -top-1 -right-1 flex h-4 w-4 z-10 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-white"></span>
            </span>

            {/* Card Content */}
            <div className="relative overflow-hidden bg-white/95 backdrop-blur-xl border border-white/40 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] rounded-2xl p-4 pr-12 flex items-center gap-4 transition-all duration-300 group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] group-hover:-translate-y-1">
              
              {/* Animated Background Sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />

              {/* Icon Box */}
              <div className="relative z-10 bg-gradient-to-br from-green-600 to-emerald-800 text-white p-3 rounded-xl shadow-lg shadow-green-900/20 group-hover:scale-105 transition-transform duration-300">
                <Calendar size={22} strokeWidth={2.5} />
              </div>

              {/* Text Info */}
              <div className="relative z-10 flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-0.5">
                  Live Event
                </span>
                <span className="text-gray-900 font-bold text-base leading-tight">
                  Free Workshop
                </span>
                <span className="text-xs text-gray-500 font-medium mt-0.5 group-hover:text-emerald-600 transition-colors">
                  Click to Reserve Spot
                </span>
              </div>

              {/* Slide-in Arrow */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-emerald-600 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out">
                <ArrowRight size={20} strokeWidth={2.5} />
              </div>
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}