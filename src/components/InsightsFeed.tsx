"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const INSIGHTS = [
  {
    id: 1,
    emoji: "🥭",
    product: "Mango Juice",
    tag: "Top seller",
    tagColor: "#ef9f38",
    message: "88 units sold — your #1 product. Fix the 'mango juce' typo in your POS to unlock 16 more hidden units. Combined: $536 in revenue.",
    time: "Just now",
  },
  {
    id: 2,
    emoji: "📈",
    product: "Revenue",
    tag: "Trending up",
    tagColor: "#64b8c0",
    message: "$280 on your best day this week — and the trend is climbing. Mango Juice + Strawberry Smoothie together brought in $784.",
    time: "2 min ago",
  },
  {
    id: 3,
    emoji: "⚠️",
    product: "Green Detox",
    tag: "Slow mover",
    tagColor: "#f87171",
    message: "Only 6.4 units/day — slowest by far. Fresh ingredients spoil fast. Prep only what you expect to sell that day.",
    time: "5 min ago",
  },
  {
    id: 4,
    emoji: "🍓",
    product: "Strawberry Smoothie",
    tag: "Double down",
    tagColor: "#a78bfa",
    message: "Customer favorite alongside Mango. Try a combo deal — 'Mango + Smoothie Duo' — and make sure you never run out of ingredients.",
    time: "8 min ago",
  },
];

function TypewriterText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <span>
      {displayed}
      {displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[11px] bg-[#64b8c0] align-middle ml-[1px] animate-pulse" />
      )}
    </span>
  );
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-2 h-2 rounded-full bg-[#64b8c0]"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </div>
  );
}

export default function InsightsFeed({ light = false }: { light?: boolean }) {
  const MAX_VISIBLE = 3;
  const [queue, setQueue] = useState([INSIGHTS[0]]);
  const [nextIndex, setNextIndex] = useState(1);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const next = INSIGHTS[nextIndex % INSIGHTS.length];
      setTyping(true);

      setTimeout(() => {
        setTyping(false);
        setQueue((prev) => [next, ...prev].slice(0, MAX_VISIBLE));
        setNextIndex((n) => n + 1);
      }, 2500);
    }, 8000);

    return () => clearTimeout(timer);
  }, [nextIndex]);

  const outer   = light ? "bg-white border border-neutral-200 shadow-md"       : "bg-[#162B52] shadow-xl";
  const divider = light ? "border-neutral-200"                                  : "border-white/10";
  const label   = light ? "text-neutral-700"                                    : "text-neutral-300";
  const itemBg  = light ? "bg-neutral-50 border border-neutral-200"             : "bg-[#0F2044] border border-white/10";
  const nameCol = light ? "text-neutral-900"                                    : "text-white";
  const bodyCol = light ? "text-neutral-500"                                    : "text-neutral-400";
  const timeCol = light ? "text-neutral-400"                                    : "text-neutral-500";

  return (
    <div className={`rounded-2xl p-5 w-full ${outer}`}>
      {/* Header */}
      <div className={`flex items-center justify-between mb-4 pb-3 border-b ${divider}`}>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#64b8c0] opacity-60" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#64b8c0]" />
          </span>
          <span className={`text-xs font-semibold ${label}`}>Clearpath Data Insights</span>
        </div>
        <span className="text-[10px] font-medium text-[#64b8c0] uppercase tracking-wider">Live</span>
      </div>

      {/* Fixed-height feed */}
      <div className="h-[280px] overflow-hidden flex flex-col gap-2">
        <AnimatePresence initial={false}>
          {typing && (
            <motion.div
              key="typing"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`rounded-xl overflow-hidden flex-shrink-0 ${itemBg}`}
            >
              <TypingDots />
            </motion.div>
          )}

          {queue.map((insight, i) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: i === 0 ? 1 : Math.max(0.35, 0.7 - i * 0.2), y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={`rounded-xl px-4 py-3 flex-shrink-0 ${itemBg}`}
            >
              <div className="flex items-start gap-3">
                <span className="text-xl leading-none mt-0.5 flex-shrink-0">{insight.emoji}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-semibold ${nameCol}`}>{insight.product}</span>
                      <span
                        className="rounded-full px-2 py-0.5 text-[10px] font-semibold"
                        style={{ backgroundColor: insight.tagColor + "28", color: insight.tagColor }}
                      >
                        {insight.tag}
                      </span>
                    </div>
                    <span className={`text-[10px] flex-shrink-0 ${timeCol}`}>{insight.time}</span>
                  </div>
                  <p className={`mt-1 text-xs leading-relaxed ${bodyCol}`}>
                    {i === 0 ? (
                      <TypewriterText key={insight.id} text={insight.message} />
                    ) : (
                      insight.message
                    )}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
