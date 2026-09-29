/*
 * Mailto assembly.
 *
 * visual-direction.md §6: "Contact and the footer link are `mailto:` links.
 * Assemble the address at runtime or encode it, and never print it on screen."
 *
 * The address is therefore never rendered as text anywhere in the markup, and
 * the href is percent-encoded so the literal string does not appear in the HTML
 * source either. `@` and `.` stay literal — they are mailto delimiters, and
 * encoding them is not reliably parsed by mail clients.
 */

const LOCAL_PART = 'dicaes';
const DOMAIN = 'gmail.com';

function percentEncode(value: string): string {
  return [...value]
    .map((char) =>
      char === '@' || char === '.'
        ? char
        : `%${char.charCodeAt(0).toString(16).toUpperCase().padStart(2, '0')}`
    )
    .join('');
}

/**
 * Build a `mailto:` href for the one contact address.
 *
 * @param subject optional pre-filled subject line
 */
export function mailtoHref(subject?: string): string {
  const address = percentEncode(`${LOCAL_PART}@${DOMAIN}`);
  const query = subject ? `?subject=${encodeURIComponent(subject)}` : '';
  return `mailto:${address}${query}`;
}
