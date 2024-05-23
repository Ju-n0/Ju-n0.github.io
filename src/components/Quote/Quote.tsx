import { useEffect, useState } from "react";
import femmeMontagne from "../../assets/vue-laterale-femme-montagnes-double-exposition.jpg";

import "./quote.scss";
import quotes from "../../data/quotes.json";
import { AnimatePresence, motion } from "framer-motion";

function Quote() {
  const [randomQuote, setRandomQuote] = useState<{ quote: string; author: string }>({
    quote: "",
    author: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!randomQuote.quote) {
      setIsLoading(true);
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
      setIsLoading(false);
    }

    const numTimer = setInterval(() => {
      setIsLoading(true);
      const randomIndex = Math.floor(Math.random() * quotes.length);
      setRandomQuote(quotes[randomIndex]);
      setIsLoading(false);
    }, 6000);
    return () => {
      clearInterval(numTimer);
    };
  }, [randomQuote, isLoading]);

  return (
    <div className="quote-container">
      <AnimatePresence>
        {isLoading ? (
          "loading"
        ) : (
          <motion.div
            //   drag
            //   dragConstraints={{ top: -250, right: 125, bottom: 250, left: -125 }}
            //   dragElastic={5}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
            exit={{ opacity: 0 }}
            className={`quote-container-text`}
          >
            {randomQuote.quote}

            <span>{randomQuote.author}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <img className="quote-container-image" src={femmeMontagne} alt="" />
    </div>
  );
}

export default Quote;
