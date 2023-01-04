import { render, screen } from "@testing-library/react";
import { CardPilots } from "./CardPilots";

describe("Pruebas en el componente <CardPilot />", () => {
  const pilot = {
    name: "James",
    height: "1.73",
    birth_year: "25/06/1985",
    mass: "85",
    hair_color: "brown",
  };
  test("debe de hacer match con el snapshot", () => {
    const { container } = render(<CardPilots pilot={pilot} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la informacion de un piloto", () => {
    render(<CardPilots pilot={pilot} />);

    expect(screen.getByText("Pilot: James")).toBeTruthy();
    expect(screen.getByText("Height: 1.73")).toBeTruthy();
    expect(screen.getByText("Birth Year: 25/06/1985")).toBeTruthy();
    expect(screen.getByText("Hair Color: brown")).toBeTruthy();
  });
});
