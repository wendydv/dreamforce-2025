/**
 * useScrollToAnchor Hook
 *
 * This custom hook enables smooth scrolling to an element with a specific ID that matches the anchor in the URL.
 * The scroll behavior will only be triggered when the user directly accesses the URL in the browser (not when clicking links).
 * It also waits for a short timeout before scrolling to the anchor to allow the page to render correctly.
 *
 * @example
 * // Usage in a Next.js page
 * import useScrollToAnchor from '../hooks/useScrollToAnchor';
 *
 * const MyPage = () => {
 *   useScrollToAnchor();
 *
 *   return (
 *     <div>
 *       <h1>Welcome to My Page</h1>
 *       <p><a href="#section1">Scroll to Section 1</a></p>
 *       <div id="section1">
 *         <h2>Section 1</h2>
 *         <p>This is the content of Section 1.</p>
 *       </div>
 *     </div>
 *   );
 * };
 *
 * @remarks
 * This hook should be used within a React functional component.
 *
 * @param scrollTimeout The timeout duration in milliseconds before scrolling to the anchor element.
 *
 * Author: Dayron Gallardo <dayron.gallardo@gerent.com>
 */

import { useEffect } from 'react';

const useScrollToAnchor = (scrollTimeout = 500): void => {
  useEffect(() => {
    // Helper function to scroll to the anchor element
    const scrollIfAnchorExists = () => {
      // Get the hash from the URL (e.g., "#section1")
      const { hash } = window.location;

      // Check if the page is accessed directly in the browser and if the hash is not empty
      if (hash && hash.length > 1) {
        // Find the anchor element in the DOM
        const anchor = document.querySelector(hash);

        // If the anchor element exists, scroll to it after a timeout to allow the page to render
        if (anchor) {
          setTimeout(() => {
            anchor.scrollIntoView({ behavior: 'smooth' });
          }, scrollTimeout);
        }
      }
    };

    // Initially scroll to the anchor if present when the component mounts
    scrollIfAnchorExists();
  }, []);
};

export default useScrollToAnchor;
