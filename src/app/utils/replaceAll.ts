function replaceAll(pattern: string, text: string, replacement: string): string {
    const regex = new RegExp(pattern, "g");
    return text.replace(regex, replacement);
}

export default replaceAll;