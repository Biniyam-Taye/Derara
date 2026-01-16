# About Page Auto-Sliding Images Feature

## Overview
Added an auto-sliding image carousel feature to the About page that displays multiple images with a 3-second auto-rotation interval. Images are uploaded through the Manager Dashboard and stored in the database.

## Changes Made

### 1. Backend Model (`backend/models/About.js`)
- **Added field**: `sliderImages` - Array of image URLs
- Type: `[String]` (array of strings)
- Default: `[]` (empty array)

### 2. Manager Dashboard (`frontend/src/pages/Dashboard/ManagerDashboard.jsx`)

#### New State Variables
- `sliderImageFiles` - Stores selected image files before upload

#### File Upload Handling
- Added support for multiple file uploads
- Uploads all slider images to Cloudinary in parallel
- Stores returned URLs in the `sliderImages` array

#### UI Components
- **Multiple Image Upload Field**: Allows managers to select multiple images
- **Preview Grid**: Shows thumbnails of selected images in a 3-column grid
- **Remove Button**: Each thumbnail has an X button to remove individual images
- **Label**: "Slider Images (Auto-rotate every 3 sec)"

#### Features
- Supports uploading multiple images at once
- Shows preview thumbnails before upload
- Displays count of existing slider images when editing
- Clears slider images when canceling edit

### 3. About Page (`frontend/src/pages/About/About.jsx`)

#### New State & Effects
- `currentSlideIndex` - Tracks which image is currently displayed
- Auto-rotation effect that changes slides every 3 seconds
- Automatically cleans up interval on component unmount

#### Image Display Logic
- **If slider images exist**: Shows carousel with auto-rotation
- **If no slider images**: Falls back to displaying the main portrait image
- Smooth fade transitions between images (1-second duration)

#### Slider Controls
- **Indicator Dots**: Shows position in the carousel
- **Manual Navigation**: Click dots to jump to specific images
- **Active Indicator**: Expands and brightens to show current slide

#### Visual Features
- Smooth opacity transitions (1000ms)
- Maintains all existing styling (borders, shadows, overlays)
- Responsive indicator positioning
- Accessible with aria-labels

## How to Use

### For Managers (Dashboard)
1. Navigate to Dashboard → Content → About
2. Scroll to "Slider Images (Auto-rotate every 3 sec)" section
3. Click the upload area to select multiple images
4. Preview thumbnails will appear in a grid
5. Remove unwanted images using the X button
6. Click "Save Changes" to upload and save

### For Visitors (About Page)
- Images automatically rotate every 3 seconds
- Click indicator dots to manually navigate
- Hover effects and animations work as before
- If no slider images, shows the main portrait

## Technical Details

### Upload Process
1. User selects multiple images in dashboard
2. Files stored in `sliderImageFiles` state
3. On form submit, all files uploaded to Cloudinary in parallel
4. URLs returned and stored as JSON array
5. Backend saves array to MongoDB

### Auto-Rotation Logic
```javascript
useEffect(() => {
  if (aboutData?.sliderImages && aboutData.sliderImages.length > 0) {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => 
        (prevIndex + 1) % aboutData.sliderImages.length
      );
    }, 3000);
    
    return () => clearInterval(interval);
  }
}, [aboutData]);
```

### Transition Effect
- Uses absolute positioning with opacity transitions
- All images loaded simultaneously
- Only current slide has `opacity-100`, others `opacity-0`
- 1-second transition duration for smooth fades

## Benefits
✅ Dynamic content management through dashboard  
✅ No code changes needed to update images  
✅ Smooth, professional transitions  
✅ Maintains existing design aesthetic  
✅ Responsive and accessible  
✅ Fallback to main image if no slider images  
✅ Manual navigation option for users
