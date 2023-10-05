import ReactMarkdown from 'react-markdown';

function InstallGuide() {
  const markdownText = `## Installation Guide
  // ... your guide here
  `;
  return <ReactMarkdown children={markdownText} />;
} 

export  default InstallGuide
