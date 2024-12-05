export const routesGenerators = (items) => {
  const routes = items.reduce((acc, item) => {
    if (item.path && item.element) {
      acc.push({ path: item.path, element: item.element });
    }
    if (item.childrens) {
      item.childrens.forEach((child) => {
        acc.push({
          path: child.path,
          element: child.element,
        });
      });
    }
    return acc;
  }, []);
  return routes;  
};
