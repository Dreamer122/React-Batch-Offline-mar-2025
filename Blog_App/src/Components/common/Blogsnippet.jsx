import { useMemo } from 'react';

function stripHtml(html) {
  const div = document.createElement("div");
  div.innerHTML = html;
  return div.textContent || div.innerText || "";
}

export const Blogsnippet = ({ content }) => {
  const preview = useMemo(() => {
    const plain = stripHtml(content);
    return plain.length > 100 ? plain.slice(0, 100) + "..." : plain;
  }, [content]);

  return (
    <p className="prose prose-sm max-w-none mb-4 text-gray-600 dark:text-gray-300 line-clamp-3">
      {preview}
    </p>
  );
};
