const addToDb = id => {
  let appliedList = getAppliedList();
  const appliedOrNot = appliedList[id];
  if (!appliedOrNot) {
    appliedList[id] = 1;
  }
  localStorage.setItem('applied-list', JSON.stringify(appliedList));
}

const removeFromDb = id => {
  const appliedList = getAppliedList();
  if (id in appliedList) {
    delete appliedList[id];
    localStorage.setItem('applied-list', JSON.stringify(appliedList));
  }
}

const getAppliedList = () => {
  let appliedList = {};

  // get the shopping cart from local storage
  const storedAppliedList = localStorage.getItem('applied-list');
  if (storedAppliedList) {
    appliedList = JSON.parse(storedAppliedList);
  }
  return appliedList;
}

const deleteAppliedList = () => {
  localStorage.removeItem('applied-list');
}

export {
  addToDb,
  removeFromDb,
  getAppliedList,
  deleteAppliedList
}
