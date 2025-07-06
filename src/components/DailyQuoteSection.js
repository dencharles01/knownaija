import React, { useMemo } from "react";
// DailyQuoteSection.js sits in  src/components
// The JSON lives in          src/data
import proverbs from "../data/african_proverbs_200.json";

import "./DailyQuoteSection.css";

/** Picks the same proverb for everyone during a given (UTC) calendar day. */
function useTodayProverb() {
  return useMemo(() => {
    const now = new Date();                               // <-- switch to Africa/Lagos below if you prefer
    const startOfYear = new Date(Date.UTC(now.getUTCFullYear(), 0, 0));
    const dayOfYear = Math.floor(
      (now.getTime() - startOfYear.getTime()) / 86_400_000 /* ms→days */
    );
    return proverbs[dayOfYear % proverbs.length];
  }, []);
}

export default function DailyQuoteSection() {
  const { proverb, meaning } = useTodayProverb();

  return (
    <section id="daily-quote" className="dailyQuoteSection">
      {/* Nigeria flag bar */}
      <div className="flagBar">
        <div className="flagGreen" />
        <div className="flagWhite" />
        <div className="flagGreen" />
      </div>

      <blockquote className="quoteCard">
        <p className="proverb">“{proverb}”</p>
        <footer className="meaning">{meaning}</footer>
        <p className="quoteTag">African Proverb of the Day</p>
      </blockquote>
    </section>
  );
}
