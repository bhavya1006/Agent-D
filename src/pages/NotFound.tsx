import { useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const GAME_DURATION = 10;
// Max dimensions for desktop; will auto shrink for mobile
const GAME_AREA_W = 400;
const GAME_AREA_H = 260;
// Responsive breakpoints
const MOBILE_MAX = 430;

// Random circle location within area
function randomCirclePos(areaWidth, areaHeight, circleRadius = 32, padding = 14) {
  const maxX = areaWidth - circleRadius * 2 - padding;
  const maxY = areaHeight - circleRadius * 2 - padding;
  return {
    left: padding + Math.random() * maxX,
    top: padding + Math.random() * maxY,
  };
}

export default function NotFound() {
  const location = useLocation();
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [timer, setTimer] = useState(GAME_DURATION);
  const [areaDims, setAreaDims] = useState({ width: GAME_AREA_W, height: GAME_AREA_H });
  const [circlePos, setCirclePos] = useState(randomCirclePos(GAME_AREA_W, GAME_AREA_H));
  const intervalRef = useRef<NodeJS.Timeout>();

  // Responsive area
  useEffect(() => {
    function handleResize() {
      const w = Math.min(window.innerWidth * 0.90, GAME_AREA_W, MOBILE_MAX);
      const h = Math.min(window.innerHeight * 0.38, GAME_AREA_H);
      setAreaDims({ width: w, height: h });
      setCirclePos(randomCirclePos(w, h));
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (!gameStarted || gameOver) return;
    intervalRef.current = setInterval(() => {
      setTimer(t => {
        if (t <= 1) {
          setGameOver(true);
          clearInterval(intervalRef.current);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [gameStarted, gameOver]);

  function startGame() {
    setScore(0);
    setGameStarted(true);
    setGameOver(false);
    setTimer(GAME_DURATION);
    setCirclePos(randomCirclePos(areaDims.width, areaDims.height));
  }
  function handleCircleClick() {
    if (gameStarted && !gameOver) {
      setScore(s => s + 1);
      setCirclePos(randomCirclePos(areaDims.width, areaDims.height));
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-2 select-none">
      <div className="w-full max-w-lg text-center space-y-3 mb-2 px-1">
        <h1 className="text-3xl md:text-4xl font-extrabold text-blue-500 tracking-tight">404 Not Found</h1>
        <p className="text-base md:text-lg text-muted-foreground">
          Touch the blue circle as many times as you can in 10 seconds.
        </p>
        <p className="text-sm md:text-base text-slate-400">
          {gameStarted
            ? (gameOver
              ? "Game over! Your score:"
              : `Hit the blue circle below. Time left: ${timer}s`)
            : "Page not found."}
        </p>
        <div className="text-base md:text-xl font-mono text-white">{(gameStarted || gameOver) && <>Score: <span>{score}</span></>}</div>
      </div>
      {/* Game area outlined and responsive */}
      <div
        className="relative mx-auto mt-2 mb-8 flex items-center justify-center bg-slate-900/30 rounded-xl"
        style={{
          width: areaDims.width,
          height: areaDims.height,
          border: gameStarted ? "3px solid #2563eb" : "none",
          boxShadow: gameStarted ? "0 2px 16px #111a" : "none",
          transition: "all 0.2s"
        }}
      >
        {/* Target */}
        {gameStarted && !gameOver && (
          <motion.div
            style={{
              position: "absolute",
              left: circlePos.left,
              top: circlePos.top,
              width: areaDims.width < 360 ? 48 : 64,
              height: areaDims.width < 360 ? 48 : 64,
              cursor: "pointer"
            }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: "tween", duration: 0.09 }}
            onClick={handleCircleClick}
          >
            <svg width={areaDims.width < 360 ? 48 : 64} height={areaDims.width < 360 ? 48 : 64}>
              <circle
                cx={areaDims.width < 360 ? 24 : 32}
                cy={areaDims.width < 360 ? 24 : 32}
                r={areaDims.width < 360 ? 18 : 28}
                fill="#2563eb"
                stroke="#fff"
                strokeWidth={areaDims.width < 360 ? "2" : "3"}
                style={{ filter: "drop-shadow(0 2px 8px #2228)" }}
              />
            </svg>
          </motion.div>
        )}
      </div>
      {/* Buttons */}
      <div className="flex flex-col items-center gap-2 mb-4 w-full max-w-xs px-1">
        <a
          href="/"
          className={`block px-5 py-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow transition text-base
            ${gameStarted && !gameOver ? "pointer-events-none opacity-50" : ""}`}
          tabIndex={gameStarted && !gameOver ? -1 : 0}
        >
          Return to Dashboard
        </a>
        <button
          onClick={startGame}
          disabled={gameStarted && !gameOver}
          className={`w-full px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold shadow transition border border-blue-600
            ${gameStarted && !gameOver ? "opacity-60 cursor-not-allowed pointer-events-none" : "hover:bg-slate-800"}`}
        >
          {gameOver ? "Play Again" : "Start Game"}
        </button>
      </div>
    </div>
  );
}
