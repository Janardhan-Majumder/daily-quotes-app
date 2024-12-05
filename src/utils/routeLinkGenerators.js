
export const routeLinkGenerators = (items) => {
  const links = items.reduce((acc, item) => {
    if (item.childrens) {
      acc.push({
        name: item.name,
        path: item.path,
        icon: item.icon,
        childrens: item.childrens.map((child) => {
          if (child.name) {
            return {
              subIcon: child.subIcon,
              subName: child.name,
              subPath: child.path,
            };
          }
        }),
      });
    } else if (item.path && item.name) {
      acc.push({
        name: item.name,
        path: item.path,
        icon: item.icon,
      });
    }
    return acc;
  }, []);
  return links;
};
