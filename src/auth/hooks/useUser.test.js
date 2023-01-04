import { act, renderHook } from "@testing-library/react";

import { useUser } from "./useUser";

describe("pruebas en el custom Hook useUser", () => {
  test("debe retornar el estado inicial", () => {
    const initialUser = { name: "", password: "", logged: false };
    const { result } = renderHook(() => useUser());
    const { user, setUserInput, clearInput } = result.current;
    expect(user).toEqual(initialUser);
    expect(setUserInput).toEqual(expect.any(Function));
    expect(clearInput).toEqual(expect.any(Function));
  });

  test("debe actualizar el estado del user", () => {
    const newUser = { name: "Dani", password: "1234", logged: false };

    const { result } = renderHook(() => useUser());
    const { setUserInput } = result.current;
    act(() => {
      setUserInput(newUser);
    });

    expect(result.current.user).toEqual(newUser);
  });

  test("debe resetear el estado al estado inicial", () => {
    const initialUser = { name: "", password: "", logged: false };
    const newUser = { name: "Dani", password: "1234", logged: false };

    const { result } = renderHook(() => useUser());
    const { setUserInput, clearInput } = result.current;
    act(() => {
      setUserInput(newUser);
    });

    expect(result.current.user).toEqual(newUser);

    act(() => {
      clearInput();
    });

    expect(result.current.user).toEqual(initialUser);
  });
});
