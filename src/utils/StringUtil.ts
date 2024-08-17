class StringUtil {
  public capitalize(input: string): string {
    const words = input.split(" ");
    const capitalizedWords = words.map((word) => {
      if (word.length === 0) return word;
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
    return capitalizedWords.join(" ");
  }

  public isKebabCase(str: string): boolean {
    return /^[a-z]+(-[a-z]+)*$/.test(str);
  }
}

export default new StringUtil();
