// Write an algorithm to simulate the back button functionality of a browser using stacks. 

class BrowserHistory {
    constructor() {
      this.backStack = [];
      this.forwardStack = [];
    }
  
    visitPage(url) {
      if (this.current()) {
        this.backStack.push(this.current());
      }
      this.forwardStack.length = 0;
      this.currentPage = url;
    }
  
    current() {
      return this.currentPage;
    }
  
    back() {
      if (this.backStack.length > 0) {
        this.forwardStack.push(this.current());
        this.currentPage = this.backStack.pop();
      }
    }
  
    forward() {
      if (this.forwardStack.length > 0) {
        this.backStack.push(this.current());
        this.currentPage = this.forwardStack.pop();
      }
    }
  }
  
  // Usage
  const history = new BrowserHistory();
  history.visitPage('google.com');
  history.visitPage('bing.com');
  history.visitPage('example.com');
  console.log(history.current()); // Outputs: example.com
  history.back();
  console.log(history.current()); // Outputs: bing.com
  history.back();
  console.log(history.current()); // Outputs: google.com
  history.forward();
  console.log(history.current()); // Outputs: bing.com

  
  // Write a JavaScript function that mimics the behavior of a cookie store, including setting, getting, and deleting cookies.

  function setCookie(name, value, daysToLive) {
    let expires = "";
    if (daysToLive) {
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function deleteCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Write a code for a simple layout engine that can parse HTML and apply CSS rules.

function applyStyles(element, styles) {
    for (const property in styles) {
      element.style[property] = styles[property];
    }
  }
  
  function parseHTML(htmlString) {
    const parser = new DOMParser();
    return parser.parseFromString(htmlString, 'text/html').body;
  }
  
  function applyCSSRules(element, cssRules) {
    for (const selector in cssRules) {
      if (element.matches(selector)) {
        applyStyles(element, cssRules[selector]);
      }
    }
  }
  
  // Example usage:
  const htmlString = '<div id="container"><p>Hello, World!</p></div>';
  const cssRules = {
    '#container': {
      'background-color': 'lightblue',
      'padding': '20px'
    },
    'p': {
      'color': 'red',
      'font-size': '18px'
    }
  };
  
  const rootElement = parseHTML(htmlString);
  rootElement.childNodes.forEach(child => {
    applyCSSRules(child, cssRules);
  });
  
  document.body.appendChild(rootElement);
  
// Write a JavaScript function that can track changes to the DOM and log them, similar to how DevTools might do it

function observeDOMChanges() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        console.log(mutation);
      });
    });
  
    const config = {
      childList: true,
      attributes: true,
      subtree: true,
      characterData: true
    };
  
    observer.observe(document.body, config);
  }
  
  observeDOMChanges();
  