
const fs = require('fs');

const content = `
# Node modules
node_modules/

# Logs
*.log

# Build
dist/
build/

# Environment files
.env
.env.*

# System
.DS_Store
Thumbs.db

# IDE settings
.vscode/
.idea/

# Deployment
.vercel/
.now/
`;

fs.writeFile('.gitignore', content.trim(), err => {
  if (err) {
    console.error('Error creating .gitignore:', err);
  } else {
    console.log('.gitignore file created successfully.');
  }
});
