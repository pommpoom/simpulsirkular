"use client";

import { useEffect, useState } from 'react';
import { Leaf } from 'lucide-react';

const INTRO_KEY = 'simpulsirkular-intro-seen';
const INTRO_DURATION = 2400;

export default function IntroGate({ children }) {
  const [phase, setPhase] = useState('loading');

  useEffect(() => {
    let introTimer;

    const bootTimer = window.setTimeout(() => {
      const hasSeenIntro = window.sessionStorage.getItem(INTRO_KEY) === 'true';

      if (hasSeenIntro) {
        setPhase('ready');
        return;
      }

      window.sessionStorage.setItem(INTRO_KEY, 'true');
      setPhase('intro');

      introTimer = window.setTimeout(() => {
        setPhase('ready');
      }, INTRO_DURATION);
    }, 0);

    return () => {
      window.clearTimeout(bootTimer);
      window.clearTimeout(introTimer);
    };
  }, []);

  return (
    <>
      <div className={phase === 'ready' ? 'intro-content-ready' : 'intro-content-hidden'}>{children}</div>

      {phase === 'intro' ? (
        <div className="intro-overlay" aria-hidden="true">
          <div className="intro-pulse" />
          <div className="intro-shell">
            <div className="intro-logo-wrap">
              <div className="intro-logo">
                <Leaf className="h-10 w-10" />
              </div>
            </div>
            <div className="intro-copy">
              <p className="intro-kicker">Platform limbah organik</p>
              <h1 className="intro-title">SimpulSirkular</h1>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
