# Logo Replacement Instructions

## Overview
The Gatsby eCommerce theme logo has been updated to use an image file instead of the original SVG. 

## Current Implementation
- **File**: `/static/company-logo.png` (currently a placeholder)
- **Component**: `/src/components/Brand/Brand.js`
- **Alt Text**: "Company Logo" (for accessibility)
- **Dimensions**: 127x24 pixels (optimized for both desktop and mobile)

## How to Replace with the New Logo

### Step 1: Download the New Logo
Download the new logo from: https://www.logoai.com/uploads/output/2025/08/23/45a26f2449a9bad222899b334cf80ae2.jpg

### Step 2: Replace the Logo File
1. Save the downloaded logo as `company-logo.png` (or `company-logo.jpg`)
2. Place it in the `/static/` directory, replacing the current placeholder file
3. If using a different file format (e.g., .jpg), update the `src` attribute in `/src/components/Brand/Brand.js`

### Step 3: Optimize the Logo (Optional)
For best performance, ensure the logo:
- Is optimized for web (compressed)
- Has appropriate dimensions (recommend 127x24px or 2x for retina: 254x48px)
- Uses PNG format for transparency support if needed

## Technical Details

### Component Changes Made
The Brand component now uses an `<img>` tag instead of the original SVG:

```jsx
<img
  src="/company-logo.png"
  alt="Company Logo"
  width={127}
  height={24}
  className={styles.logo}
/>
```

### CSS Updates
Updated `Brand.module.css` to properly style the image:
- Responsive design maintained for mobile devices
- Proper scaling and layout preservation
- Click functionality preserved for navigation to homepage

### Accessibility
- Added descriptive alt text: "Company Logo"
- Maintained proper semantic structure
- Preserved keyboard navigation functionality

## File Locations
- **Logo File**: `/static/company-logo.png`
- **Component**: `/src/components/Brand/Brand.js`
- **Styles**: `/src/components/Brand/Brand.module.css`
- **Used In**: Header component and Cart page

## Testing
After replacing the logo file:
1. Run `npm run develop` to start the development server
2. Visit `http://localhost:8000` to see the homepage
3. Visit `http://localhost:8000/cart` to verify cart page
4. Check that the logo is clickable and navigates to the homepage
5. Test responsive design on mobile devices