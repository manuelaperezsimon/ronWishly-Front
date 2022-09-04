import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import { loadAllWishesActionCreator } from "../../store/features/wishes/slices/wishesSlice";
import Wrapper from "../../utils/Wrapper";
import useApi from "./useApi";

jest.mock("react-toastify");
const mockUseDispatch = jest.fn();

jest.mock("../../store/hooks", () => ({
  ...jest.requireActual("../../store/hooks"),
  useAppDispatch: () => mockUseDispatch,
}));

describe("Given a useApi hook", () => {
  const mockWishList = [
    {
      id: "1234",
      title: "Viaje a Japón",
      picture: "/wish.png",
      limitDate: expect.any(String),
      description: "Viajar en primavera",
    },
    {
      id: "223298242",
      title: "Navidad en NY",
      picture: "/NY.png",
      limitDate: expect.any(String),
      description: "Nieve nieve",
    },
  ];

  describe("When invoked a getAllWishes and receives a list of wishes", () => {
    test("Then it should call dispatch with loadAllWishesActionCreator with that list", async () => {
      const {
        result: {
          current: { getAllWishes },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await act(async () => {
        await getAllWishes();
      });

      await waitFor(() => {
        expect(mockUseDispatch).toHaveBeenCalledWith(
          loadAllWishesActionCreator(mockWishList)
        );
      });
    });

    test("Then it shoul send a loading modal", async () => {
      const {
        result: {
          current: { getAllWishes },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      await act(async () => {
        await getAllWishes();
      });

      await waitFor(() => {
        expect(toast.loading).toHaveBeenCalledWith("Please wait :)", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
    });

    describe("When invoke getAllWishes function and it not receives a mockWishList", () => {
      test("Then it should send an error message modal", async () => {
        axios.defaults.headers.get["IsTestError"] = true;

        const {
          result: {
            current: { getAllWishes },
          },
        } = renderHook(useApi, { wrapper: Wrapper });

        await getAllWishes();

        expect(toast.error).toHaveBeenCalledWith(
          "Oops, something went wrong :(",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        delete axios.defaults.headers.get["IsTestError"];
      });
    });
  });
});
