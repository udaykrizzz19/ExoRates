# Modern Currency Converter App

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer-black?style=for-the-badge&logo=framer&logoColor=blue)

<!-- 
  RECOMMENDATION: Create a short GIF (~10-15 seconds) showcasing the app's features 
  (entering amount, swapping currencies, dark mode, and the final result animation)
  and replace the placeholder image below. You can use tools like Giphy Capture or ScreenToGif.
-->
![Currency Converter App Demo](https://user-images.githubusercontent.com/your-username/your-repo/your-gif-url.gif) 

A sleek, fully-responsive currency converter application built with React, Vite, and Framer Motion. It provides a seamless user experience with real-time exchange rates, fluid animations, and a modern, minimalist design.

---

##  élő demó

**[>> Check out the live application here! <<](https://your-live-demo-url.com)**

<!-- Replace the URL above with your deployed application link (e.g., from Vercel or Netlify). -->

---

## ✨ Jellemzők

This application is packed with modern features to provide a fast and intuitive user experience:

-   **Real-time Exchange Rates**: Fetches the latest conversion rates from a reliable API.
-   **Interactive Keypad**: A custom-built keypad for entering amounts, designed for both desktop and mobile.
-   **Modern Custom Dropdowns**: A clean and consistent dropdown menu for selecting "From" and "To" currencies, complete with country flags.
-   **Dynamic Currency Symbols**: The displayed currency symbol automatically updates based on the selected "From" currency.
-   **Fluid Animations**: Smooth page transitions and delightful micro-interactions powered by Framer Motion, including an animated success checkmark.
-   **Light & Dark Theme**: A smoothly animated toggle switch to alternate between light and dark modes, with colors persisted for a consistent look.
-   **Fully Responsive Design**: A mobile-first design that adapts perfectly to tablets, laptops, and desktops.
-   **Informative Result Screen**: The result page displays a comprehensive summary, including the converted amount, the exchange rate used, and the last updated date.

---

## 🛠️ Technológiai csomag

The project leverages a modern, efficient, and scalable tech stack:

-   **Frontend:** [**React.js**](https://reactjs.org/)
-   **Build Tool:** [**Vite**](https://vitejs.dev/)
-   **Styling:** [**Styled Components**](https://styled-components.com/) for scoped CSS and easy theming.
-   **Animations:** [**Framer Motion**](https://www.framer.com/motion/) for performant and complex UI animations.
-   **Routing:** [**React Router DOM**](https://reactrouter.com/) for client-side navigation.
-   **API Requests:** [**Axios**](https://axios-http.com/) for making HTTP requests to the currency API.
-   **Deployment:** (Placeholder for your hosting service, e.g., [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/))

---

## 🚀 Az induláshoz

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Előfeltételek

Make sure you have the following installed on your machine:
-   [Node.js](https://nodejs.org/en/) (v16 or higher is recommended)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Telepítés és beállítás

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/currency-converter-app.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd currency-converter-app
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(or `yarn install` if you use Yarn)*

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5173` (or another port if 5173 is busy).

### Build for Production

To create a production-ready build of the app, run the following command:
```bash
npm run build
```
This will create a `dist` folder in the project root with the optimized and minified files.

---

## 📁 Mappa szerkezete

The project follows a clean and organized folder structure to separate concerns and improve maintainability.

```
currency-converter-app/
|
|-- public/
|   `-- contactless.svg        # SVG icons for public access
|
|-- src/
|   |-- assets/                # Static assets like data lists and symbols
|   |   |-- country-list.js
|   |   `-- currency-symbols.js
|   |
|   |-- components/            # Reusable React components
|   |   |-- AnimatedCheckmark.jsx
|   |   |-- AmountDisplay.jsx
|   |   |-- CurrencyPairSelector.jsx
|   |   |-- CustomDropdown.jsx
|   |   |-- Keypad.jsx
|   |   |-- Loader.jsx
|   |   `-- ThemeToggle.jsx
|   |
|   |-- contexts/              # React Context for global state management
|   |   `-- ThemeContext.jsx
|   |
|   |-- pages/                 # Page-level components
|   |   |-- ConverterPage.jsx
|   |   `-- ResultPage.jsx
|   |
|   |-- styles/                # Global styles and theme definitions
|   |   |-- GlobalStyles.js
|   |   `-- theme.js
|   |
|   |-- App.jsx                # Main app component with routing
|   `-- main.jsx               # Application entry point
|
|-- .gitignore
|-- index.html
|-- package.json
|-- README.md                  # You are here!
`-- vite.config.js
```

---

## 🔗 API-referencia

This project uses the [**Fawazahmed0 Currency API**](https://github.com/fawazahmed0/currency-api), which provides up-to-date and historical currency exchange rates. It's a free and open-source API with no rate limits.

---

## 🔮 Jövőbeni fejlesztések

While the current version is fully functional, here are some ideas for future enhancements:

-   [ ] **Historical Data Charts**: Visualize currency trends over time using a charting library.
-   [ ] **Favorite Currencies**: Allow users to save their most-used currency pairs for quick access.
-   [ ] **Offline Support**: Cache the latest exchange rates using a Service Worker for offline functionality.
-   [ ] **Cryptocurrency Support**: Extend the app to include conversions for major cryptocurrencies.

---

## 📜 Engedély

This project is licensed under the MIT License. See the [LICENSE](LICENSE.md) file for more details.

<!-- Make sure to create a LICENSE.md file with the MIT license text if you don't have one. -->

---

## 📬 Kapcsolat

Your Name – [your.email@example.com](mailto:your.email@example.com)

Project Link: [https://github.com/your-username/currency-converter-app](https://github.com/your-username/currency-converter-app)
