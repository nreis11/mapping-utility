import React from "react";
import { shallow } from "enzyme";
import ExportModal from "./ExportModal";
import CopyConfirmation from "./CopyConfirmation";
import CopyToClipboard from "react-copy-to-clipboard";
import FileSaver from "file-saver";

// Mock the 3rd party func
jest.mock("file-saver", () => ({
  saveAs: jest.fn()
}));

describe("<ExportModal/>", () => {
  let wrapper;
  const testData = "Test Data";
  beforeEach(
    () =>
      (wrapper = shallow(
        <ExportModal boardName="testBoard" handleExport={() => testData} />
      ))
  );

  it("renders modal button without crashing", () => {
    const modalBtn = wrapper.find("#export-btn");
    expect(modalBtn.length).toEqual(1);
  });

  it("opens modal when button is clicked", () => {
    const modalBtn = wrapper.find("#export-btn");
    modalBtn.simulate("click");
    const modal = wrapper.find("Modal");
    expect(modal.prop("show")).toEqual(true);
  });

  it("renders the proper export data", () => {
    const modalBtn = wrapper.find("#export-btn");
    modalBtn.simulate("click");
    const textArea = wrapper.find(".pretty-print");
    expect(textArea.text()).toBe(testData);
  });

  it("shows confirmation that data is copied when copy button is clicked", () => {
    const copyToClipboard = wrapper.find(CopyToClipboard);
    copyToClipboard.simulate("Copy");
    const confirmation = wrapper.find(CopyConfirmation);
    expect(confirmation).toHaveLength(1);
  });

  it("downloads file successfully when download button is clicked", () => {
    const downloadBtn = wrapper.find("#download-btn");
    downloadBtn.simulate("click");
    expect(FileSaver.saveAs).toHaveBeenCalled();
  });
});
