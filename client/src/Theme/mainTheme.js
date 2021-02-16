export const theme = {
  darkmode: {
    colors: {},
  },

  lightmode: {
    colors: {
      background: "hsl(210, 7%, 94%)",
      primary: "hsl(233, 12%, 26%)",
      secondary: "hsl(51, 82%, 56%)",
    },
  },

  info: "hsl(193.2, 77.8%, 45.9%)",
  errorPage: "hsl(202, 48%, 79%)",
  warning: "hsl(0, 51%, 46%)",
};

const size = {
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  desktop: 1440,
};

export const device = Object.keys(size).reduce((acc, cur) => {
  acc[cur] = `(min-width: ${size[cur]}px)`;
  return acc;
}, {});
