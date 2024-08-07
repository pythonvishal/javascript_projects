### Explanation

1.  **RichTextToMarkdown Class:**
    
    *   Manages plugins and converts rich text to Markdown using registered plugins.
        
2.  **Plugins:**
    
    *   Each plugin is an object with a name and convert method.
        
    *   Plugins are defined in the same script, which makes it easy to understand and maintain.
        
3.  **Usage:**
    
    *   Create an instance of RichTextToMarkdown.
        
    *   Register the plugins you want to use.
        
    *   Convert rich text to Markdown and log the result.
        

By including all the code in a single HTML file, you avoid using modern JavaScript module features and ensure compatibility with older browsers.
