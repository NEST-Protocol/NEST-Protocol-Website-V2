export const getAllDocs = async () => {
  // @todo get all docs from the CMS
  return [
    '/docs/a/b',
    '/docs/a/c',
  ];
}

export const getDoc = async (id) => {
  // @todo get doc from the CMS
  return {
    id,
    content: 'This is the content of the doc',
  };
}