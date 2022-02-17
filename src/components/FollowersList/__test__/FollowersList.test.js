import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import FollowersList from "../FollowersList";

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  beforeEach(() => {
    console.log("RUNNING BEFORE EACH TEXT");
  });

  beforeAll(() => {
    console.log("RAN ONCE BEFORE ALL TESTS");
  });

  afterEach(() => {
    console.log("RUNNING AFTER EACH TEXT");
  });

  afterAll(() => {
    console.log("RAN ONCE AFTER ALL TESTS");
  });

  test("should render a follower element on the screen", async () => {
    render(<MockFollowersList />);
    const followerDivElement = await screen.findByTestId(/follower-item-0/i);
    expect(followerDivElement).toBeInTheDocument();
  });

  test("should render multiple followers elements on the screen", async () => {
    render(<MockFollowersList />);
    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
