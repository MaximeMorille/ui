import React from "react";
import renderer from "react-test-renderer";

import FileInput from "libs/components/fileInput";

describe("FileInput", () => {
  it("renders correctly", () => {
    const component = renderer.create(
      <FileInput onChange={(e) => console.log(e)} />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should render children", () => {
    const component = renderer.create(
      <FileInput onChange={(e) => console.log(e)}>Upload files</FileInput>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should define accepted files", () => {
    const component = renderer.create(
      <FileInput onChange={(e) => console.log(e)} accept="audio/mp3">
        Upload files
      </FileInput>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should allow to select multiple files", () => {
    const component = renderer.create(
      <FileInput onChange={(e) => console.log(e)} multiple>
        Upload files
      </FileInput>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
