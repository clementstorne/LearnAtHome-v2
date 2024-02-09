export function shortenText(text: string, maxLength: number): string {
  if (text.length > maxLength) {
    return text.substring(0, maxLength - 1) + "…";
  } else {
    return text;
  }
}

export function getInitials(fullName: string) {
  const names = fullName.split(" ");
  let initials = "";
  names.forEach((name) => {
    initials += name.charAt(0);
  });
  return initials.toUpperCase();
}
