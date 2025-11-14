#!/bin/bash

# Venus Funeral Website - Pre-Deployment Check Script
# This script validates your setup before deployment

echo "🔍 Venus Funeral Website - Pre-Deployment Check"
echo "================================================"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check Node.js version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -ge 16 ]; then
    echo -e "${GREEN}✓${NC} Node.js version: $(node -v)"
else
    echo -e "${RED}✗${NC} Node.js version $(node -v) is too old. Need v16 or higher."
    exit 1
fi
echo ""

# Check Yarn
echo "📦 Checking Yarn..."
if command -v yarn &> /dev/null; then
    echo -e "${GREEN}✓${NC} Yarn is installed: $(yarn -v)"
else
    echo -e "${RED}✗${NC} Yarn is not installed. Install with: npm install -g yarn"
    exit 1
fi
echo ""

# Check if node_modules exists
echo "📦 Checking dependencies..."
if [ -d "node_modules" ]; then
    echo -e "${GREEN}✓${NC} node_modules directory exists"
else
    echo -e "${YELLOW}⚠${NC} node_modules not found. Run: yarn install"
fi
echo ""

# Check important files
echo "📄 Checking configuration files..."
FILES=(
    "package.json"
    "apps/venus-funeral-website/next.config.js"
    "apps/venus-funeral-website/public/admin/config.yml"
    "netlify.toml"
)

for file in "${FILES[@]}"; do
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $file exists"
    else
        echo -e "${RED}✗${NC} $file is missing"
    fi
done
echo ""

# Check Git status
echo "📝 Checking Git status..."
if command -v git &> /dev/null; then
    if [ -d ".git" ]; then
        UNCOMMITTED=$(git status --porcelain | wc -l | tr -d ' ')
        if [ "$UNCOMMITTED" -eq 0 ]; then
            echo -e "${GREEN}✓${NC} All changes are committed"
        else
            echo -e "${YELLOW}⚠${NC} You have $UNCOMMITTED uncommitted change(s)"
            echo "   Run: git status"
        fi
        
        # Check current branch
        BRANCH=$(git rev-parse --abbrev-ref HEAD)
        echo -e "${GREEN}✓${NC} Current branch: $BRANCH"
    else
        echo -e "${YELLOW}⚠${NC} Not a Git repository"
    fi
else
    echo -e "${YELLOW}⚠${NC} Git is not installed"
fi
echo ""

# Try to build
echo "🔨 Testing build process..."
echo "This may take a minute..."
if yarn build:export > /tmp/venus-build.log 2>&1; then
    echo -e "${GREEN}✓${NC} Build successful!"
    
    # Check if export directory exists
    if [ -d "dist/apps/venus-funeral-website/exported" ]; then
        FILE_COUNT=$(find dist/apps/venus-funeral-website/exported -type f | wc -l | tr -d ' ')
        echo -e "${GREEN}✓${NC} Export directory created with $FILE_COUNT files"
    else
        echo -e "${RED}✗${NC} Export directory not found"
    fi
else
    echo -e "${RED}✗${NC} Build failed. Check /tmp/venus-build.log for details"
    echo ""
    echo "Last 20 lines of build log:"
    tail -20 /tmp/venus-build.log
    exit 1
fi
echo ""

# Summary
echo "================================================"
echo "✅ Pre-deployment check complete!"
echo ""
echo "Next steps:"
echo "1. Review this checklist: DEPLOYMENT_CHECKLIST.md"
echo "2. Choose your deployment method: QUICK_START.md"
echo "3. Deploy your site!"
echo ""
echo "Recommended: Deploy to Netlify for CMS support"
echo "   Build command: yarn build:export"
echo "   Publish directory: dist/apps/venus-funeral-website/exported"
echo ""
echo "Need help? See DEPLOYMENT.md for full guide"
echo "================================================"