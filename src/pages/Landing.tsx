import { Link } from "react-router-dom";
import { Aperture, BookOpen, Camera, Sparkles } from "lucide-react";
import { lessons } from "@/data/lessons";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: "easeOut" as const },
  }),
};

const steps = [
  {
    icon: BookOpen,
    num: "01",
    title: "Learn the concept",
    description:
      "Short, friendly lessons on composition, lighting, color, and storytelling. No jargon. 5 minutes each.",
  },
  {
    icon: Camera,
    num: "02",
    title: "Go shoot",
    description:
      "Each lesson gives you a specific assignment. Grab your phone or camera and take a photo.",
  },
  {
    icon: Sparkles,
    num: "03",
    title: "Get AI feedback",
    description:
      "Upload your photo. Our AI analyzes your composition, lighting, and technique — then tells you what works and what to try next.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-landing-bg text-landing-fg font-body">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-landing-bg/90 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Aperture className="h-5 w-5 text-olive" />
            <span className="font-display text-lg text-landing-fg">Aperture</span>
          </Link>
          <div className="flex items-center gap-5">
            <Link
              to="/login"
              className="text-sm text-landing-muted hover:text-landing-fg transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/learn"
              className="text-sm font-medium bg-olive text-terracotta-foreground px-4 py-2 rounded-md hover:opacity-90 transition-opacity"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-44 pb-32 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="font-display text-5xl md:text-7xl leading-[1.08] tracking-tight text-landing-fg"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            Learn photography
            <br />
            <span className="text-olive">by doing.</span>
          </motion.h1>
          <motion.p
            className="mt-7 text-base md:text-lg text-landing-muted max-w-md mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12 }}
          >
            6 short lessons. Real assignments. AI that reviews your photos and
            helps you improve. All you need is your phone.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.24 }}
          >
            <Link
              to="/learn"
              className="font-medium text-sm px-7 py-3 rounded-md transition-colors text-white" style={{ backgroundColor: '#C4704B' }}
            >
              Start Learning — Free
            </Link>
            <a
              href="#how-it-works"
              className="text-sm text-landing-muted hover:text-landing-fg transition-colors underline underline-offset-4 decoration-landing-border"
            >
              See How It Works
            </a>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-28 px-6 border-t border-landing-border">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="font-display text-3xl md:text-4xl text-center mb-20"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Three steps. That's it.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-16 md:gap-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center md:text-left"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <span className="font-display text-4xl text-olive/40 block mb-4">
                  {step.num}
                </span>
                <h3 className="font-display text-xl mb-3 text-landing-fg">{step.title}</h3>
                <p className="text-landing-muted leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-28 px-6 border-t border-landing-border">
        <div className="max-w-2xl mx-auto">
          <motion.h2
            className="font-display text-3xl md:text-4xl text-center mb-16"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            6 lessons from beginner to confident.
          </motion.h2>
          <div className="space-y-0 divide-y divide-landing-border">
            {lessons.map((lesson, i) => (
              <motion.div
                key={lesson.id}
                className="flex items-center gap-5 py-5"
                variants={fade}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.4}
              >
                <span className="font-display text-2xl text-olive/50 w-8 text-center shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display text-base md:text-lg text-landing-fg">{lesson.title}</h3>
                </div>
                <span className="shrink-0 text-[11px] tracking-wide uppercase text-olive font-medium bg-olive/10 px-2.5 py-1 rounded-full">
                  {lesson.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-6 border-t border-landing-border">
        <div className="max-w-xl mx-auto text-center">
          <motion.blockquote
            className="font-display text-2xl md:text-3xl italic leading-snug text-landing-fg/80"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            "Built for people who learn by doing — not by reading 300-page
            textbooks."
          </motion.blockquote>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 border-t border-landing-border">
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            className="font-display text-3xl md:text-5xl leading-[1.1] mb-8 text-landing-fg"
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Your phone is enough.
            <br />
            <span className="text-olive">Start today.</span>
          </motion.h2>
          <motion.div
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Link
              to="/learn"
              className="inline-block bg-olive text-terracotta-foreground font-medium text-sm px-8 py-3.5 rounded-md hover:opacity-90 transition-opacity"
            >
              Start Learning — Free
            </Link>
            <p className="mt-6 text-xs text-landing-muted">
              No account required. No credit card. Just start shooting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-landing-border py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-1.5 text-center">
          <span className="font-display text-sm text-landing-fg/70">
            Aperture School
          </span>
          <span className="text-xs text-landing-muted">
            Made for curious eyes.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
