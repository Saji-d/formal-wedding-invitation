<div align="center">

# ❤️ Sajid & Dilruba | Wedding Invitation

[![Live Website](https://img.shields.io/badge/Live_Website-Experience_Here-D4AF37?style=for-the-badge&logo=vercel&logoColor=white)](https://sajid-weds-dilruba.vercel.app/)

A digital celebration of love, commitment, and the beautiful journey ahead.

</div>

---

## 💞 Our Story

Every beautiful journey begins with a single step. Our story began with a movie date. Friendship grew naturally through conversations, laughter, and shared moments. As time passed, that friendship slowly became love. A promise led to engagement, uniting our families and drawing our future closer. Now we prepare to begin our forever together, and we are so incredibly grateful to share this journey with you.

## 🌸 Why This Website?

This project was built as more than a wedding invitation. It was lovingly created to:

- Preserve memories.
- Tell our story.
- Share important wedding details.
- Provide a beautiful RSVP experience.
- Create something meaningful for family and friends.

Traditional invitation cards inspired the elegant design, while modern web technologies brought it to life.

---

## ✨ Features

- **Luxury Animated Landing Page:** A cinematic hero section to welcome our guests.
- **Interactive Love Story Timeline:** A beautifully crafted, alternating timeline detailing our journey from the first meeting to the wedding day.
- **Responsive Wedding Countdown:** A dynamic, elegant countdown timer building anticipation for the big day.
- **RSVP Confirmation System:** A seamless, integrated form for guests to submit their attendance (connected securely via Google Forms).
- **Venue & Directions Section:** Complete event details with an integrated map direction link.
- **Wedding Celebration Details:** A clean itinerary of the events.
- **Memories Gallery:** A curated polaroid-style image stack showcasing our favorite moments.
- **Elegant Animations:** Smooth scroll reveals and luxurious transitions powered by Framer Motion.
- **Falling Flower Petals:** A custom, fully responsive ambient petal rainfall effect.
- **Mobile-First Responsive Design:** Flawless presentation across desktop, tablet, and mobile devices.
- **Smooth Scrolling Experience:** A highly optimized, immersive user journey.

---


## 🛠️ Built With

This project leverages a modern web development stack to ensure performance, elegant animations, and a premium user experience:

- **[Next.js](https://nextjs.org/)** (v16.2.7) - React Framework
- **[React](https://react.dev/)** (v19.2.4) - UI Library
- **[TypeScript](https://www.typescriptlang.org/)** - Static Typing
- **[Tailwind CSS](https://tailwindcss.com/)** (v4) - Utility-First Styling
- **[Framer Motion](https://www.framer.com/motion/)** - Declarative Animations & Scroll Reveals
- **[GSAP](https://gsap.com/)** - Complex Ambient Animations (Petal System)
- **[Swiper.js](https://swiperjs.com/)** - Interactive Gallery & Sliders
- **[React Icons](https://react-icons.github.io/react-icons/)** - Scalable Vector Icons
- **[date-fns](https://date-fns.org/)** - Modern JavaScript Date Utility Library
- **Google Forms Integration** - Serverless RSVP data collection
- **Responsive Design Principles** - Mobile, Tablet, and Desktop parity

---

## 🚀 Getting Started

To run the project locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/luxury-wedding.git
   cd luxury-wedding
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

### Production Build

To create and start an optimized production build:
```bash
npm run build
npm start
```

---

## 📂 Project Structure

```text
src/
├── app/
│   ├── globals.css         # Global styles, Tailwind directives, and custom animations
│   ├── layout.tsx          # Root HTML layout and metadata
│   └── page.tsx            # Main assembly of the invitation application
├── components/
│   ├── layout/
│   │   └── BackgroundEffects.tsx  # Ambient GSAP petal animation system
│   ├── sections/
│   │   ├── Closing.tsx            # Final decorative sign-off
│   │   ├── Countdown.tsx          # Dynamic countdown timer
│   │   ├── Events.tsx             # Celebration itinerary and location
│   │   ├── Gallery.tsx            # Interactive swiper image gallery
│   │   ├── Hero.tsx               # Cinematic landing banner
│   │   ├── IslamicBlessing.tsx    # Bismillah and Surah Ar-Rum
│   │   ├── LoveStory.tsx          # Alternating interactive timeline
│   │   ├── OpeningScreen.tsx      # Entry gateway and music trigger
│   │   ├── RSVP.tsx               # Google Forms connected attendance form
│   │   └── Venue.tsx              # Map and directional details
│   └── ui/
│       └── MusicPlayer.tsx        # Ambient background music controller
└── config/
    └── wedding.ts          # Centralized configuration (Names, Dates, Images, Links)
```

---

## 🎨 Design Philosophy

This application was designed with a strict adherence to a **Modern Luxury Wedding Aesthetic**:

- **Premium Palette:** Rich Burgundy (`#800020`), soft Champagne (`#F7E7CE`), and elegant Gold (`#D4AF37`) accents create a warm, inviting, and sophisticated atmosphere.
- **Romantic Storytelling:** The flow of the website guides guests naturally from the initial invitation to our shared history, and finally to the celebration details.
- **Elegant Typography:** A carefully curated font stack utilizing `Great Vibes` for romantic scripts, `Playfair Display` for bold premium headings, and `Cormorant` for classic, readable body text.
- **Smooth Motion Design:** Cinematic scroll reveals, subtle hover glows, and organic background motion ensure the interface feels alive but never distracting.
- **User Experience:** Clear call-to-actions, highly readable itineraries, and a frictionless RSVP process prioritize guest convenience.

---

## 💌 RSVP Information

The RSVP system is entirely serverless and frictionless for the guest. It connects directly to a hidden Google Form.

1. Guests fill out their Name, Phone Number, and Attendance Status (Accept/Decline).
2. The custom React component bypasses the default Google Form UI, sending a `POST` request silently in the background.
3. Upon success, guests are presented with an elegant, glowing confirmation or decline message, while the couple receives the data instantly in a connected Google Sheet.

---

## 📱 Responsive Experience

The invitation was developed with a mobile-first approach, recognizing that the majority of guests will view the site on their phones:

- **Mobile:** Elements stack gracefully, typography scales for legibility, and images maintain perfect landscape aspect ratios. The interactive gallery leverages touch-swipe gestures.
- **Tablet:** Adjusted grid layouts to maximize the use of medium-width screens.
- **Desktop:** Expands into a cinematic, immersive experience. The timeline utilizes an alternating left/right layout, and background elements span the full width to create a breathtaking presentation.

---

## 🌸 Special Touches

- **Ambient Petal Animation:** A completely custom GSAP-driven particle system creates a gentle, continuous rainfall of cherry blossoms across all sections, enhancing the romantic atmosphere without impacting performance.
- **Ceremonial Shower:** A brief, celebratory burst of petals triggers when guests "Enter" the invitation.
- **Dynamic Countdown:** A highly stylized, animated countdown frame that ticks down in real-time to the wedding day.
- **Interactive Love Story:** A scroll-driven cinematic timeline that reveals images and quotes as the guest navigates downward.
- **Custom RSVP Glow:** The submission button features an animated, continuous conic-gradient border, providing a premium interactive detail.

---

## 🤍 From the Couple

To our dearest family and friends, your unwavering love and support have been the greatest gifts in our lives. We are so incredibly excited to share this momentous occasion with you. Thank you for being part of our journey. 

This website stands as a celebration of both our love for one another and the technology that helped us share it with the world. We cannot wait to celebrate our union, create beautiful new memories, and begin our forever together. See you there!

With love and gratitude,  
**Sajid & Dilruba**

---

## 👨‍💻 Technical Notes

- **Performance Optimization:** Images leverage Next.js `<Image />` for automatic WebP/AVIF conversion, lazy loading, and caching. Background animations use CSS transforms (`will-change: transform`) and GSAP for hardware-accelerated 60fps rendering.
- **Component-Based Architecture:** Every distinct section of the site is modularized, allowing for easy updates and maintenance within `src/components/sections/`.
- **Centralized Configuration:** All critical data (names, dates, locations, form links) is managed from a single source of truth (`src/config/wedding.ts`), ensuring content updates do not require digging into React components.

---

## 📜 License

This is a personal project created exclusively for the wedding celebration of Sajid & Dilruba.

*Not intended for commercial redistribution or uncredited templating.*