import React from "react";
import renderer from "react-test-renderer";
import ListComponent from "libs/components/list/listComponent";

describe("ListComponent", () => {
  const newItem = ({ id, name, icon = null }) => ({
    id: id || name,
    name,
    icon,
  });

  it("renders correctly", () => {
    const items = [];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={0}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders items", () => {
    const items = [
      newItem({ name: "item 1" }),
      newItem({ name: "item 2" }),
      newItem({ name: "item 3" }),
    ];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={0}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders items with a number id", () => {
    const items = [
      newItem({ id: 1, name: "item 1" }),
      newItem({ id: 2, name: "item 2" }),
      newItem({ id: 3, name: "item 3" }),
    ];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={0}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders items with icons", () => {
    const items = [newItem({ name: "item 1", icon: "some-icon" })];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={0}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("marks an item as selected", () => {
    const items = [
      newItem({ name: "item 1" }),
      newItem({ name: "item 2" }),
      newItem({ name: "item 3" }),
    ];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={1}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders PNG icon", () => {
    const items = [newItem({ name: "item 1", icon: "some-icon.png" })];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={0}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders SVG icon", () => {
    const items = [newItem({ name: "item 1", icon: "some-icon.svg" })];
    const component = renderer.create(
      <ListComponent
        items={items}
        selectedItem={0}
        onSelect={jest.fn()}
        className="some-class"
        style={{}}
      />,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
