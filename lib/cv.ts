import type { Locale } from "@/lib/translations";

/**
 * CV PDF paths (files must live under `public/`).
 *
 * - **Simplest:** add one file `public/cv.pdf` — used for every language.
 * - **Two PDFs:** add `public/cv-en.pdf` and `public/cv-ko.pdf`, then set `useLocalizedCv` to `true`.
 */
const useLocalizedCv = false;

/** Suggested filename when the browser downloads the file (same-origin PDF). */
export const CV_DOWNLOAD_FILENAME = "Olimov-Khislatbek-CV.pdf";

export function getCvPdfHref(locale: Locale): string {
	if (useLocalizedCv) {
		return locale === "ko" ? "/cv-ko.pdf" : "/cv-en.pdf";
	}
	return "/cv.pdf";
}
