export type NavigationType = [
    {
      mainNav: {
        items: [
          {
            text: string;
            _key: string;
            navigationItemUrl: { internalLink: { slug: { current: string } } };
          },
        ];
      };
    },
  ];