class RichTextToMarkdown {
    constructor() {
      this.plugins = [];
    }
  
    registerPlugin(plugin) {
      this.plugins.push(plugin);
    }
  
    unregisterPlugin(pluginName) {
      this.plugins = this.plugins.filter(plugin => plugin.name !== pluginName);
    }
  
    convert(richText) {
      let markdown = richText;
  
      for (const plugin of this.plugins) {
        markdown = plugin.convert(markdown);
      }
  
      return markdown;
    }
  }
  
  // Plugins
  
  const BoldPlugin = {
    name: 'bold',
    convert: function(text) {
      return text.replace(/<b>(.*?)<\/b>/g, '**$1**');
    }
  };
  
  // ItalicPlugin
  const ItalicPlugin = {
    name: 'italic',
    convert: function(text) {
      return text.replace(/<i>(.*?)<\/i>/g, '*$1*');
    }
  };
  
  // HyperlinkPlugin
  const HyperlinkPlugin = {
    name: 'hyperlink',
    convert: function(text) {
      return text.replace(/<a href="(.*?)">(.*?)<\/a>/g, '[$2]($1)');
    }
  };
  
  
  // Example usage
  // Create an instance of RichTextToMarkdown
  const converter = new RichTextToMarkdown();
  
  // Register plugins
  converter.registerPlugin(BoldPlugin);
  converter.registerPlugin(ItalicPlugin);
  converter.registerPlugin(HyperlinkPlugin);
  
  // Example rich text input
  const richText = "Here is <b>bold</b> text, *italic* text, and a [link](http://example.com)";
  
  // Convert rich text to Markdown
  const markdown = converter.convert(richText);
  
  // Output the result
  console.log(markdown);
