"use client";

import { useEffect, useState } from "react";
import {
  Home,
  Folder,
  Chat,
  Wrench,
  Layers,
  User,
  Mail,
  Github,
  Linkedin,
  Sun,
  Moon,
  Verified,
  Download,
} from "@/components/icons";
import VisitCounter from "@/components/VisitCounter";

type Item = { id: string; label: string; short: string; Icon: typeof Home };

const NAV: Item[] = [
  { id: "top", label: "Home", short: "Home", Icon: Home },
  { id: "projects", label: "Projects", short: "Work", Icon: Folder },
  { id: "demo", label: "Byrdie Demo", short: "Demo", Icon: Chat },
  { id: "services", label: "Services", short: "Services", Icon: Wrench },
  { id: "skills", label: "Toolbox", short: "Tools", Icon: Layers },
  { id: "about", label: "About", short: "About", Icon: User },
  { id: "contact", label: "Contact", short: "Contact", Icon: Mail },
];

// Curated set for the mobile floating bar (center slot is the contact action).
const MOBILE_LEFT = [NAV[0], NAV[1]];
const MOBILE_RIGHT = [NAV[3], NAV[5]];

const SOCIALS = [
  { href: "https://github.com/jsususco-cell", label: "GitHub", Icon: Github },
  {
    href: "https://www.linkedin.com/in/jemsususco",
    label: "LinkedIn",
    Icon: Linkedin,
  },
  { href: "mailto:jemz291994@gmail.com", label: "Email", Icon: Mail },
];

function useTheme() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    setDark(document.documentElement.getAttribute("data-theme") === "dark");
  }, []);
  const toggle = () => {
    const next = !dark;
    setDark(next);
    if (next) document.documentElement.setAttribute("data-theme", "dark");
    else document.documentElement.removeAttribute("data-theme");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };
  return { dark, toggle };
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState("top");
  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [ids]);
  return active;
}

function ThemeButton({
  dark,
  toggle,
  className = "",
}: {
  dark: boolean;
  toggle: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={`grid h-9 w-9 place-items-center rounded-full border border-line-card bg-card text-ink-soft transition-colors hover:text-brand ${className}`}
    >
      {dark ? <Sun width={18} height={18} /> : <Moon width={18} height={18} />}
    </button>
  );
}

export default function Shell({ children }: { children: React.ReactNode }) {
  const { dark, toggle } = useTheme();
  const active = useScrollSpy(NAV.map((n) => n.id));

  return (
    <div className="relative z-10">
      {/* ===== Desktop sidebar ===== */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[264px] flex-col border-r border-line px-6 py-8 lg:flex">
        {/* Profile */}
        <a href="#top" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/jem.jpg"
            alt="Jemuel Sususco"
            className="h-14 w-14 rounded-2xl object-cover ring-1 ring-line-card"
          />
          <div className="min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="truncate font-semibold text-ink">Jemuel Sususco</span>
              <Verified />
            </div>
            <div className="truncate text-xs text-muted">@jsususco · AI &amp; Automation</div>
          </div>
        </a>

        {/* Socials + theme */}
        <div className="mt-5 flex items-center gap-2">
          {SOCIALS.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-9 w-9 place-items-center rounded-full border border-line-card bg-card text-ink-soft transition-colors hover:text-brand"
            >
              <Icon width={18} height={18} />
            </a>
          ))}
          <ThemeButton dark={dark} toggle={toggle} />
        </div>

        {/* Nav */}
        <nav className="mt-8 flex-1 space-y-1">
          {NAV.map(({ id, label, Icon }) => {
            const on = active === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                  on
                    ? "bg-card text-ink shadow-card"
                    : "text-ink-soft hover:bg-sand hover:text-ink"
                }`}
              >
                <Icon
                  width={19}
                  height={19}
                  className={on ? "text-brand" : ""}
                />
                {label}
              </a>
            );
          })}
        </nav>

        <a
          href="/Resume_Jem_Sususco.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-2.5 text-sm font-semibold text-cream transition-transform hover:-translate-y-0.5"
        >
          <Download width={17} height={17} />
          Download CV
        </a>
      </aside>

      {/* ===== Mobile top bar ===== */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-cream/80 px-5 py-3 backdrop-blur-md lg:hidden">
        <a href="#top" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/jem.jpg"
            alt="Jemuel Sususco"
            className="h-9 w-9 rounded-xl object-cover ring-1 ring-line-card"
          />
          <span className="flex items-center gap-1 text-sm font-semibold">
            Jemuel Sususco <Verified width={15} height={15} />
          </span>
        </a>
        <ThemeButton dark={dark} toggle={toggle} />
      </header>

      {/* ===== Main content ===== */}
      <main className="lg:pl-[264px]">
        <div className="mx-auto w-full max-w-5xl px-5 pb-32 pt-6 sm:px-8 lg:pb-16 lg:pt-10">
          {children}
        </div>
      </main>

      {/* ===== Mobile floating bottom nav ===== */}
      <nav className="fixed inset-x-0 bottom-4 z-50 mx-auto flex w-[min(94%,460px)] items-center justify-between rounded-full bg-ink px-3 py-2 shadow-pill lg:hidden">
        {MOBILE_LEFT.map(({ id, short, Icon }) => (
          <BottomLink key={id} id={id} short={short} Icon={Icon} active={active} />
        ))}
        <a
          href="#contact"
          aria-label="Get in touch"
          className="-mt-6 grid h-14 w-14 place-items-center rounded-full bg-brand text-white shadow-lg ring-4 ring-cream"
        >
          <Mail width={22} height={22} />
        </a>
        {MOBILE_RIGHT.map(({ id, short, Icon }) => (
          <BottomLink key={id} id={id} short={short} Icon={Icon} active={active} />
        ))}
      </nav>

      <VisitCounter />
    </div>
  );
}

function BottomLink({
  id,
  short,
  Icon,
  active,
}: {
  id: string;
  short: string;
  Icon: typeof Home;
  active: string;
}) {
  const on = active === id;
  return (
    <a
      href={`#${id}`}
      className={`flex w-16 flex-col items-center gap-1 py-1 text-[11px] font-medium transition-colors ${
        on ? "text-brand" : "text-cream/70"
      }`}
    >
      <Icon width={20} height={20} />
      {short}
    </a>
  );
}
