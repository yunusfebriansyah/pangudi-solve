const AppVersion : string = 'v.1.3'
const IsProduction : boolean = true

export function getIsProduction() : boolean {
  return IsProduction;
}

export function getAppVersion(): string
{
  return AppVersion;
}

export function getSampleText(): string
{
  return `
# Title Pertama  
## Hello World: A Comprehensive Guide  

### 1. Introduction  
This is a **detailed** markdown document exploring various *formatting* options and syntax.  

### 2. Code Demonstration  
1. Inline code: \`console.log("Hello, World!")\`  

2. Code block with syntax highlighting:  
   \`\`\`javascript
   function greetWorld() {
     const message = "Hello, World!";
     console.log(message);
     return message;
   }
   \`\`\`

### 3. Lists  
- First item  
- Second item  
- Third item  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh  

### 4. Table  
| Feature   | Description                   | Status    |  
|----------|-------------------------------|----------|  
| Markdown | Lightweight markup language   | Active   |  
| Rendering | Convert text to formatted HTML | Supported |  
| Syntax   | Easy to read and write        | Excellent |  
`
}