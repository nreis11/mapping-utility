export const isBootstrapModalOpen = () => {
  return document.querySelectorAll(".modal").length > 0;
};

export const bothNodesAreSelected = (activeIntNodeInfo, activeExtNodeInfo) => {
  return activeIntNodeInfo && activeExtNodeInfo ? true : false;
};

export const parentsAreNotSelectable = (parentsSelectable, activeExtNode) => {
  if (!parentsSelectable && activeExtNode && activeExtNode.children) {
    return true;
  }
  return false;
};

export const scrollIfNeeded = nodeId => {
  const outerGrid = document.querySelectorAll(".ReactVirtualized__Grid")[0];
  const activeNodeElem = document.getElementById(nodeId);

  if (activeNodeElem) {
    const grandParent = activeNodeElem.parentElement.parentElement;
    if (
      outerGrid.offsetHeight + outerGrid.scrollTop - grandParent.offsetTop <
      grandParent.offsetHeight
    ) {
      outerGrid.scrollTop += grandParent.offsetHeight;
    }
  }
};

export const getInBoundsTreeIndex = (treeIndex, nodeCount) => {
  treeIndex = treeIndex < 0 ? 0 : treeIndex;
  treeIndex = treeIndex >= nodeCount ? nodeCount - 1 : treeIndex;
  return treeIndex;
};
