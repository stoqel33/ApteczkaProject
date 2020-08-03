export const theme = {
  darkmode: {
    colors: {},
  },

  lightmode: {
    colors: {
      background: 'hsl(210, 7%, 94%)',
      primary: 'hsl(233, 12%, 26%)',
      secondary: 'hsl(51, 82%, 56%)',
    },
  },

  info: 'hsl(193.2, 77.8%, 45.9%)',
  errorPage: 'hsl(202, 48%, 79%)',
  warning: 'hsl(0, 51%, 46%)',
};

const size = {
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
};

export const device = {
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
