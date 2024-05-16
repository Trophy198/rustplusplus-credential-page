import menuItems from '@/config/menuItems';

interface PaginationResult {
  previousHref: string | null;
  previousLabel: string | null;
  nextHref: string | null;
  nextLabel: string | null;
}

const buildPaginationMap = (): Record<string, PaginationResult> => {
  const paginationMap: Record<string, PaginationResult> = {};

  for (let i = 0; i < menuItems.length; i++) {
    const item = menuItems[i];

    if (item.subItems.length > 0) {
      paginationMap[item.href] = {
        previousHref:
          i === 0
            ? null
            : menuItems[i - 1].subItems.length > 0
            ? menuItems[i - 1].subItems[menuItems[i - 1].subItems.length - 1].href
            : menuItems[i - 1].href,
        previousLabel:
          i === 0
            ? null
            : menuItems[i - 1].subItems.length > 0
            ? menuItems[i - 1].subItems[menuItems[i - 1].subItems.length - 1].label
            : menuItems[i - 1].label,
        nextHref: item.subItems[0].href,
        nextLabel: item.subItems[0].label,
      };

      for (let j = 0; j < item.subItems.length; j++) {
        paginationMap[item.subItems[j].href] = {
          previousHref: j === 0 ? item.href : item.subItems[j - 1].href,
          previousLabel: j === 0 ? item.label : item.subItems[j - 1].label,
          nextHref:
            j < item.subItems.length - 1
              ? item.subItems[j + 1].href
              : i < menuItems.length - 1
              ? menuItems[i + 1].href
              : null,
          nextLabel:
            j < item.subItems.length - 1
              ? item.subItems[j + 1].label
              : i < menuItems.length - 1
              ? menuItems[i + 1].label
              : null,
        };
      }
    } else {
      paginationMap[item.href] = {
        previousHref:
          i === 0
            ? null
            : menuItems[i - 1].subItems.length > 0
            ? menuItems[i - 1].subItems[menuItems[i - 1].subItems.length - 1].href
            : menuItems[i - 1].href,
        previousLabel:
          i === 0
            ? null
            : menuItems[i - 1].subItems.length > 0
            ? menuItems[i - 1].subItems[menuItems[i - 1].subItems.length - 1].label
            : menuItems[i - 1].label,
        nextHref: i < menuItems.length - 1 ? menuItems[i + 1].href : null,
        nextLabel: i < menuItems.length - 1 ? menuItems[i + 1].label : null,
      };
    }
  }

  return paginationMap;
};

export default buildPaginationMap;
