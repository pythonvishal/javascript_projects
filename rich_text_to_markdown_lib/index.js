class RichTextToMarkdown {
  constructor() {
    this.features = {
      bold: true,
      italic: true,
      heading: true,
      // Add other default features as needed
    };
  }

  addFeature(featureName) {
    this.features[featureName] = true;
  }

  removeFeature(featureName) {
    delete this.features[featureName];
  }

  convert(richText) {
    let markdown = richText;

    if (this.features.bold) {
      markdown = this.convertBold(markdown);
    }

    if (this.features.italic) {
      markdown = this.convertItalic(markdown);
    }

    if (this.features.heading) {
      markdown = this.convertHeading(markdown);
    }

    // Add other feature conversions here

    return markdown;
  }

  convertBold(text) {
    return text.replace(/\*\*(.*?)\*\*/g, '**$1**');
  }

  convertItalic(text) {
    return text.replace(/\*(.*?)\*/g, '*$1*');
  }

  convertHeading(text) {
    return text.replace(/^(#{1,6})\s(.*)$/gm, (match, hashes, content) => {
      const level = hashes.length;
      return `${'#'.repeat(level)} ${content}`;
    });
  }

  // Add other feature conversion methods here
}

// Example usage
const converter = new RichTextToMarkdown();
converter.addFeature('code'); // Add code feature if needed

const richText = "Here is **bold** text, *italic* text, and a heading # Heading 1";
const markdown = converter.convert(richText);

console.log(markdown);
