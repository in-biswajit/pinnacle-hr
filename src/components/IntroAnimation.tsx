"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const SESSION_KEY = "pinnacle-intro-seen";

export default function IntroAnimation() {
  const [show, setShow] = useState(true);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) {
      // Correcting client-only state (sessionStorage) after the SSR-matched
      // initial render — must run synchronously on mount, not in a callback.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setInstant(true);
      setShow(false);
      return;
    }
    sessionStorage.setItem(SESSION_KEY, "true");
    const timer = setTimeout(() => setShow(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: instant ? 0 : 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <Image
              src="/images/logo.png"
              alt="Pinnacle HR"
              width={240}
              height={133}
              priority
              className="h-16 w-auto sm:h-20"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
