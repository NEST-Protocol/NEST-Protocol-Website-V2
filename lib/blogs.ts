export const getAllBlogs = async () => {
  // @todo get all docs from the CMS
  return [
    '/blogs/a',
    '/blogs/b',
  ];
}

export const getBlog = async (id) => {
  // @todo get doc from the CMS
  return {
    id,
    content: 'This is the content of the doc',
  };
}