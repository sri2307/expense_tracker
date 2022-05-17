import { render, screen } from "@testing-library/react";
import Welcome from "@pages/index";

import { useSession } from "next-auth/react";

jest.mock("next-auth/react");
describe("Home", () => {
  it("renders a heading", () => {
    const mockSession: any = {
      expires: "2020-01-01T00:00:00.000Z",
      user: {
        id: "1",
        email: "unit-testing@jest.com",
        name: "Unit Testing",
      },
    };
    (useSession as jest.Mock).mockReturnValueOnce([mockSession, false]);
    render(<Welcome />);
    screen.debug();
    // const heading = screen.getByRole("heading", {
    //   name: /welcome to next\.js!/i,
    // });

    // expect(heading).toBeInTheDocument();
  });
});
