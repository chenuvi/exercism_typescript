const ALPHA = "abcdefghijklmnopqrstuvwxyz";

export function encode(plainText: string): string {
  return transcode(plainText).reduce(
    (prev, curr, i) => (i === 0 || i % 5 ? prev + curr : prev + " " + curr),
    ""
  );
}

export function decode(cipherText: string): string {
  return transcode(cipherText).join("");
}

function transcode(text: string) {
  return Array.from(text.replace(/\W/g, "").toLowerCase()).map((c) =>
    c.match(/\d/) ? c : ALPHA.charAt(25 - ALPHA.indexOf(c))
  );
}
