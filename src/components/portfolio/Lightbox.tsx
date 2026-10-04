import React, { useEffect } from "react";
import { X } from "lucide-react";

/**
 * Simple, robust viewport‑based lightbox.
 *
 * - Fixed positioning, covers the entire viewport.
 * - High z‑index to appear above all site content.
 * - Backdrop blocks interaction with the page and darkens it.
 * - Image is constrained with `max-w-[90vw] max-h-[90vh]` and `object-contain`
 *   so it always stays fully visible and preserves aspect ratio.
 * - Close on: X button, clicking the backdrop, or pressing Escape.
 * - Body scroll is locked while the lightbox is open.
 */
export function Lightbox({
  src,
  caption,
  onClose,
}: {
  /** Image URL – if null or undefined, the lightbox renders nothing. */
  src: string | null;
  /** Optional caption displayed below the image. */
  caption?: string;
  /** Called when the lightbox should be dismissed. */
  onClose: () => void;
}) {
  // Guard: nothing to show if src is falsy.
  if (!src) return null;

  // Effect: handle Escape key and body scroll lock.
  useEffect(() => {
    // Save original overflow values for body and html.
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;

    // Apply scroll lock.
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      // Restore original overflow values.
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  // Click on the overlay (backdrop) closes the lightbox.
  const handleOverlayClick = () => onClose();

  // Stop propagation when clicking inside the image container so the overlay click
  // does not fire.
  const stopPropagation = (e: React.MouseEvent) => e.stopPropagation();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={caption ?? "Project screenshot"}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9998] flex items-center justify-center bg-black/70 backdrop-blur-sm"
    >
      {/* Close button – positioned in the top‑right corner of the overlay */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close image viewer"
        className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-card/80 text-foreground transition-colors hover:border-gold hover:text-gold"
      >
        <X className="h-4 w-4" aria-hidden="true" />
      </button>

      {/* Image container – stops click‑through to the overlay */}
      <figure onClick={stopPropagation} className="max-w-[90vw] max-h-[85vh] m-0">
        <img
          src={src}
          alt={caption ?? "Project screenshot"}
          className="mx-auto max-w-full max-h-full rounded-lg object-contain"
          onError={(e) => console.error('Lightbox image failed to load', (e.target as HTMLImageElement).src)}
        />
        {caption && (
          <figcaption className="mt-2 text-center text-sm text-muted-foreground">
            {caption}
          </figcaption>
        )}
      </figure>
    </div>
  );
}
