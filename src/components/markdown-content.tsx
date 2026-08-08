import type { ComponentPropsWithoutRef } from "react";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import { assetUrl } from "@/lib/site";

interface MarkdownContentProps {
  content: string;
}

function isExternalUrl(value: string) {
  return /^(?:https?:)?\/\//i.test(value) || value.startsWith("mailto:");
}

function resolveAsset(value: string) {
  if (isExternalUrl(value) || value.startsWith("#")) {
    return value;
  }

  return assetUrl(value);
}

export function MarkdownContent({ content }: MarkdownContentProps) {
  return (
    <div className="markdown-content">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: ({ children }: ComponentPropsWithoutRef<"h1">) => (
            <h2 className="mt-10 text-3xl font-bold tracking-tight text-white first:mt-0 sm:text-4xl">
              {children}
            </h2>
          ),
          h2: ({ children }: ComponentPropsWithoutRef<"h2">) => (
            <h2 className="mt-10 text-2xl font-bold tracking-tight text-white first:mt-0 sm:text-3xl">
              {children}
            </h2>
          ),
          h3: ({ children }: ComponentPropsWithoutRef<"h3">) => (
            <h3 className="mt-8 text-xl font-semibold text-amber-200">
              {children}
            </h3>
          ),
          p: ({ children }: ComponentPropsWithoutRef<"p">) => (
            <p className="mt-4 text-base leading-8 text-slate-200 sm:text-lg">
              {children}
            </p>
          ),
          ul: ({ children }: ComponentPropsWithoutRef<"ul">) => (
            <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-200 marker:text-amber-300">
              {children}
            </ul>
          ),
          ol: ({ children }: ComponentPropsWithoutRef<"ol">) => (
            <ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-200 marker:font-semibold marker:text-amber-300">
              {children}
            </ol>
          ),
          li: ({ children }: ComponentPropsWithoutRef<"li">) => (
            <li className="pl-1 leading-7">{children}</li>
          ),
          strong: ({ children }: ComponentPropsWithoutRef<"strong">) => (
            <strong className="font-semibold text-white">{children}</strong>
          ),
          blockquote: ({
            children,
          }: ComponentPropsWithoutRef<"blockquote">) => (
            <blockquote className="my-7 border-l-4 border-amber-400 pl-5 text-lg italic leading-8 text-amber-100">
              {children}
            </blockquote>
          ),
          hr: () => <hr className="my-9 border-slate-700" />,
          a: ({ children, href }: ComponentPropsWithoutRef<"a">) => {
            const external = href ? isExternalUrl(href) : false;

            return (
              <a
                className="font-semibold text-amber-300 underline decoration-amber-400/50 underline-offset-4 transition hover:text-amber-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                href={href}
                rel={external ? "noreferrer" : undefined}
                target={external ? "_blank" : undefined}
              >
                {children}
              </a>
            );
          },
          img: ({ alt, src }: ComponentPropsWithoutRef<"img">) => (
            // Narrative assets are authored Markdown and are exported as static files.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              alt={alt ?? ""}
              className="my-7 w-full rounded-2xl border border-white/10 shadow-2xl shadow-slate-950/40"
              loading="lazy"
              src={typeof src === "string" ? resolveAsset(src) : undefined}
            />
          ),
          table: ({ children }: ComponentPropsWithoutRef<"table">) => (
            <div className="my-7 overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full min-w-[34rem] border-collapse text-left text-sm text-slate-200">
                {children}
              </table>
            </div>
          ),
          th: ({ children }: ComponentPropsWithoutRef<"th">) => (
            <th className="border-b border-white/10 bg-white/8 px-4 py-3 font-semibold text-white">
              {children}
            </th>
          ),
          td: ({ children }: ComponentPropsWithoutRef<"td">) => (
            <td className="border-b border-white/10 px-4 py-3 align-top leading-6 last:border-b-0">
              {children}
            </td>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
