import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { downloadResumePdf } from '../utils/downloadResume';
import PageShell from './ui/PageShell';

const stats = [
  { value: '2+', label: 'Projects Completed' },
  { value: 'BS', label: 'Data Science' },
  { value: 'Excel', label: 'Power BI & SQL' },
];

const Hero = () => (
  <PageShell>
    <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-6 xl:gap-10">
      {/* Left — intro */}
      <motion.div
        initial={{ opacity: 0, x: -24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="order-2 text-center lg:order-1 lg:text-left"
      >
        <p className="text-sm text-[#888888]">Hello, I&apos;m</p>
        <h1 className="mt-2 font-display text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
          Asad Khan
        </h1>
        <h2 className="mt-1 text-2xl font-semibold text-[#d4ff00] sm:text-3xl">Data Analyst</h2>
        <p className="premium-body mx-auto mt-5 max-w-md lg:mx-0">
          I specialize in Data Science, business intelligence, and data visualization — turning raw data into actionable insights for healthcare and fintech.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
          <Link
            to="/contact"
            className="inline-flex min-w-[150px] items-center justify-center rounded-full bg-[#d4ff00] px-8 py-3.5 text-sm font-bold text-black shadow-[0_4px_20px_rgba(212,255,0,0.3)] transition-all hover:scale-[1.03]"
          >
            Hire Me
          </Link>
          <button
            type="button"
            onClick={downloadResumePdf}
            className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-[#d4ff00]"
          >
            Download Resume <ArrowUpRight size={16} className="text-[#d4ff00]" />
          </button>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:hidden">
          {stats.map((s) => (
            <div key={s.label} className="stat-card min-w-[90px] text-center">
              <p className="value">{s.value}</p>
              <p className="label">{s.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Center — profile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="order-1 flex justify-center lg:order-2"
      >
        <div className="relative w-[220px] py-6 sm:w-[260px] md:w-[280px]">
          <svg
            className="pointer-events-none absolute left-1/2 top-1/2 h-[100%] w-[100%] -translate-x-1/2 -translate-y-1/2 text-[#d4ff00]"
            viewBox="0 0 200 200"
            fill="none"
            aria-hidden
          >
            <path d="M 138 28 A 72 72 0 1 1 62 172" stroke="currentColor" strokeWidth="18" strokeLinecap="round" />
          </svg>
          <div className="relative z-10 mx-auto aspect-square w-[70%] overflow-hidden rounded-full border-[5px] border-[#1a1a1a] bg-[#111]">
            <img src="/profile.png" alt="Asad Khan" className="h-full w-full object-cover object-[center_20%]" />
          </div>
        </div>
      </motion.div>

      {/* Right — stats (desktop) */}
      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="order-3 hidden flex-col gap-4 lg:flex"
      >
        {stats.map((s) => (
          <div key={s.label} className="stat-card w-[160px]">
            <p className="value">{s.value}</p>
            <p className="label">{s.label}</p>
          </div>
        ))}
      </motion.div>
    </div>
  </PageShell>
);

export default Hero;
