/**
 * The Cafe Journal - Vanilla JavaScript
 * Features: Live Search, Category Filtering, URL query search, Mobile Menu, Reading Progress
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Reading Progress Bar ---
  const progressBar = document.getElementById('reading-progress');
  if (progressBar) {
    window.addEventListener('scroll', () => {
      const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
      progressBar.style.width = scrolled + '%';
    });
  }

  // --- 2. Mobile Navigation Toggle ---
  const mobileToggleBtn = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileToggleBtn && mobileDrawer) {
    mobileToggleBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('open');
      mobileToggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mobileToggleBtn.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileToggleBtn.contains(e.target) && !mobileDrawer.contains(e.target)) {
        mobileDrawer.classList.remove('open');
        mobileToggleBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- 3. Homepage Search Form Redirect ---
  const homeSearchForm = document.getElementById('home-search-form');
  const homeSearchInput = document.getElementById('home-search-input');
  if (homeSearchForm && homeSearchInput) {
    homeSearchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = homeSearchInput.value.trim();
      if (query) {
        window.location.href = `blogs.html?q=${encodeURIComponent(query)}`;
      } else {
        window.location.href = `blogs.html`;
      }
    });
  }

  // --- 4. Blog Listing Page Filtering & Search ---
  const blogListGrid = document.getElementById('blog-article-grid');
  const blogSearchInput = document.getElementById('blog-search-input');
  const clearSearchBtn = document.getElementById('clear-search-btn');
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const emptyState = document.getElementById('empty-results-box');
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  const resultsCounter = document.getElementById('results-counter');

  if (blogListGrid) {
    const articleCards = Array.from(blogListGrid.querySelectorAll('.article-card'));
    let activeCategory = 'all';
    let currentQuery = '';

    const filterArticles = () => {
      let visibleCount = 0;
      const queryLower = currentQuery.toLowerCase().trim();

      articleCards.forEach((card) => {
        const title = card.getAttribute('data-title')?.toLowerCase() || '';
        const excerpt = card.getAttribute('data-excerpt')?.toLowerCase() || '';
        const category = card.getAttribute('data-category')?.toLowerCase() || '';
        const keywords = card.getAttribute('data-keywords')?.toLowerCase() || '';

        const matchesCategory = activeCategory === 'all' || category === activeCategory.toLowerCase();
        const matchesQuery = !queryLower || 
          title.includes(queryLower) || 
          excerpt.includes(queryLower) || 
          category.includes(queryLower) || 
          keywords.includes(queryLower);

        if (matchesCategory && matchesQuery) {
          card.style.display = 'flex';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      // Update Counter
      if (resultsCounter) {
        resultsCounter.textContent = `Showing ${visibleCount} of ${articleCards.length} articles`;
      }

      // Show/Hide Empty State
      if (emptyState) {
        if (visibleCount === 0) {
          emptyState.classList.add('visible');
        } else {
          emptyState.classList.remove('visible');
        }
      }

      // Show/Hide Clear Button
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentQuery ? 'inline-flex' : 'none';
      }
    };

    // Category Tabs Click
    filterTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        filterTabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.getAttribute('data-category') || 'all';
        filterArticles();
      });
    });

    // Search Input Typing (Debounced)
    if (blogSearchInput) {
      let debounceTimer;
      blogSearchInput.addEventListener('input', (e) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
          currentQuery = e.target.value;
          filterArticles();
        }, 150);
      });
    }

    // Clear Search Button
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener('click', () => {
        if (blogSearchInput) blogSearchInput.value = '';
        currentQuery = '';
        filterArticles();
        if (blogSearchInput) blogSearchInput.focus();
      });
    }

    // Reset Filters from Empty State
    if (resetFiltersBtn) {
      resetFiltersBtn.addEventListener('click', () => {
        if (blogSearchInput) blogSearchInput.value = '';
        currentQuery = '';
        activeCategory = 'all';
        filterTabs.forEach((t) => {
          if (t.getAttribute('data-category') === 'all') {
            t.classList.add('active');
          } else {
            t.classList.remove('active');
          }
        });
        filterArticles();
      });
    }

    // Parse URL Query Params on Load (e.g. ?q=coffee or ?cat=coffee)
    const urlParams = new URLSearchParams(window.location.search);
    const initialQuery = urlParams.get('q');
    const initialCat = urlParams.get('cat');

    if (initialCat) {
      activeCategory = initialCat;
      filterTabs.forEach((t) => {
        if (t.getAttribute('data-category') === initialCat) {
          t.classList.add('active');
        } else {
          t.classList.remove('active');
        }
      });
    }

    if (initialQuery && blogSearchInput) {
      blogSearchInput.value = initialQuery;
      currentQuery = initialQuery;
    }

    filterArticles();
  }

  // --- 5. Newsletter Mock Submission Feedback ---
  const newsletterForms = document.querySelectorAll('.footer-newsletter-form');
  newsletterForms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      if (input && input.value) {
        const originalText = submitBtn ? submitBtn.textContent : 'Subscribe';
        if (submitBtn) {
          submitBtn.textContent = 'Subscribed!';
          submitBtn.style.backgroundColor = '#4A3028';
          submitBtn.disabled = true;
        }
        input.value = '';
        input.placeholder = 'Thank you for joining our coffee community!';
        setTimeout(() => {
          if (submitBtn) {
            submitBtn.textContent = originalText;
            submitBtn.style.backgroundColor = '';
            submitBtn.disabled = false;
          }
          input.placeholder = 'Enter your email address';
        }, 4000);
      }
    });
  });

  // --- 6. Smooth Scroll for TOC Jump Links ---
  const tocLinks = document.querySelectorAll('.toc-link');
  tocLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          history.pushState(null, null, targetId);
        }
      }
    });
  });
});
