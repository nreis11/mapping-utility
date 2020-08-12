import React from "react";
import { shallow } from "enzyme";
import EditModal from "./EditModal";
import TreeContainer from "../../containers/TreeContainer";
import { TYPES } from "../../utils/mappingHelpers";

const activeType = Object.keys(TYPES)[0];

describe("<EditModal/>", () => {
  let wrapper;
  beforeEach(
    () =>
      (wrapper = shallow(
        <EditModal activeType={activeType} onClear={() => {}}>
          <TreeContainer
            treeKey={"test"}
            treeData={[]}
            onChange={() => {}}
            editMode={true}
            onAddNodes={() => {}}
          />
        </EditModal>
      ))
  );

  it("renders <TreeContainer/>", () => {
    const treeContainer = wrapper.find(TreeContainer);
    expect(treeContainer.length).toEqual(1);
  });

  it("opens modal when button is clicked", () => {
    const modalBtn = wrapper.find("#edit-modal-btn");
    modalBtn.simulate("click");
    const modal = wrapper.find("Modal");
    // console.log(modal.debug());
    expect(modal.prop("show")).toEqual(true);
  });
});
