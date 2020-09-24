let lista = [
  {
    url: "/login",
    header: false,
    footer: false,
  },
  {
    url: "/register",
    header: false,
    footer: false,
  },
  {
    url: "/send-validation",
    header: false,
    footer: false,
  },
  {
    url: "/re-send-validation",
    header: false,
    footer: false,
  },
  {
    url: "/validation",
    header: false,
    footer: false,
  },
];

const pagesSinLayout = (url) => {
  let isPage = false;
  let pageContent = {
    header: true,
    footer: true,
  };

  for (let page of lista) {
    if (url.includes(page.url)) {
      isPage = true;
      pageContent = page;
    }
  }

  return { isPage, pageContent };
};

export default pagesSinLayout;
