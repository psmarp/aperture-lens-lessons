import { Link } from "react-router-dom";
import { Aperture, BookOpen, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { lessons } from "@/data/lessons";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" as const },
  }),
};

const steps = [
  {
    icon: BookOpen,
    title: "Learn the concept",
    description:
      "Short, friendly lessons on composition, lighting, color, and storytelling. No jargon. 5 minutes each.",
  },
  {
    icon: Camera,
    title: "Go shoot",
    description:
      "Each lesson gives you a specific assignment. Grab your phone or camera and take a photo.",
  },
  {
    icon: Sparkles,
    title: "Get AI feedback",
    description:
      "Upload your photo. Our AI analyzes your composition, lighting, and technique — then tells you what works and what to try next.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Aperture className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg text-foreground">Aperture</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/login"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Button size="sm" asChild>
              <Link to="/learn">Start Learning</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1
            className="font-serif text-5xl md:text-7xl font-semibold leading-[1.1] tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Learn photography{" "}
            <span className="text-gold-gradient">by doing.</span>
          </motion.h1>
          <motion.p
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            6 short lessons. Real assignments. AI that reviews your photos and
            helps you improve. All you need is your phone.
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button size="lg" className="text-base px-8" asChild>
              <Link to="/learn">Start Learning — Free</Link>
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-base text-muted-foreground"
              asChild
            >
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 px-6 border-t border-border/40">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="font-serif text-3xl md:text-4xl text-center mb-16"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Three steps. That's it.
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-10 md:gap-14">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                className="text-center md:text-left"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-5">
                  <step.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-xl mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-24 px-6 border-t border-border/40">
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="font-serif text-3xl md:text-4xl text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            6 lessons from beginner to confident.
          </motion.h2>
          <div className="space-y-4">
            {lessons.map((lesson, i) => (
              <motion.div
                key={lesson.id}
                className="flex items-center gap-5 p-5 rounded-lg border border-border/60 bg-card/50 hover:bg-card transition-colors"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
              >
                <span className="font-serif text-2xl text-primary w-8 text-center shrink-0">
                  {i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3 className="font-serif text-lg">{lesson.title}</h3>
                </div>
                <Badge
                  variant="secondary"
                  className="shrink-0 text-xs font-sans"
                >
                  {lesson.category}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 border-t border-border/40">
        <div className="max-w-2xl mx-auto text-center">
          <motion.blockquote
            className="font-serif text-2xl md:text-3xl italic leading-snug text-foreground/90"
            variants={fadeUp}
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
      <section className="py-28 px-6 border-t border-border/40">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            className="font-serif text-3xl md:text-5xl font-semibold mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            Your phone is enough.{" "}
            <span className="text-gold-gradient">Start today.</span>
          </motion.h2>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <Button size="lg" className="text-base px-10" asChild>
              <Link to="/learn">Start Learning — Free</Link>
            </Button>
            <p className="mt-5 text-sm text-muted-foreground">
              No account required. No credit card. Just start shooting.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col items-center gap-2 text-center">
          <span className="font-serif text-sm text-foreground/70">
            Aperture School
          </span>
          <span className="text-xs text-muted-foreground">
            Made for curious eyes.
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
