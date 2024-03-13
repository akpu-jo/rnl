export function formatTime(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function formatDate(isoDateString: string): string {
  try {
    // Parse the ISO 8601 date string into a Date object
    const date = new Date(isoDateString);

    // Get the month name using toLocaleDateString with options for formatting
    const monthName = date.toLocaleDateString("en-US", { month: "long" });

    // Construct the formatted date string
    const formattedDate = `${monthName} ${date.getDate()}, ${date.getFullYear()}`;

    return formattedDate;
  } catch (error) {
    // Handle any errors during parsing or formatting
    console.error("Error formatting date:", error);
    return ""; // Or return a default value if needed
  }
}

