import { renderHook, waitFor } from "@testing-library/react";
import axios from "axios";
import { act } from "react-dom/test-utils";
import { toast } from "react-toastify";
import {
  deleteWishActionCreator,
  loadAllWishesActionCreator,
} from "../../store/features/wishes/slices/wishesSlice";
import { NewOrModifyWish } from "../../store/interfaces/wishesInterfaces";
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

    describe("When invoke deleteWish function with a valid wish id", () => {
      const {
        result: {
          current: { deleteWish },
        },
      } = renderHook(useApi);

      const idWish: string = "232464fe42536dd232";

      test("Then it should call the dispatch with the delete action creator with the id", async () => {
        await act(async () => {
          await deleteWish(idWish);
        });

        expect(toast.success).toHaveBeenCalledWith(
          "Great! The wish has been deleted!",
          {
            position: toast.POSITION.TOP_CENTER,
          }
        );

        await waitFor(() => {
          expect(mockUseDispatch).toHaveBeenCalledWith(
            deleteWishActionCreator(idWish)
          );
        });
      });

      describe("When called with an invalid project id", () => {
        test("Then it should not dispatch the delete action", async () => {
          await act(async () => {
            await deleteWish("wrongId");
          });

          expect(toast.error).toHaveBeenCalledWith(
            "Oops, something went wrong :(",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );

          await waitFor(() => {
            expect(mockUseDispatch).not.toHaveBeenCalledWith(
              deleteWishActionCreator(idWish)
            );
          });
        });

        describe("When it's invoked with getWishById with the correct id", () => {
          test("Then it should return a wish with this id", async () => {
            const idWish = "232464fe42536dd232";
            const mockWish = {
              id: idWish,
              title: "Navidad en NY",
              picture: "/NY.png",
              limitDate: "2022-09-07T19:12:29.422Z",
              description: "Nieve nieve",
            };

            const {
              result: {
                current: { getWishById },
              },
            } = renderHook(useApi, { wrapper: Wrapper });

            const wish = await getWishById(idWish);

            await expect(wish).toStrictEqual(mockWish);
          });

          test("And if can't return a wish, it should call the error modal", async () => {
            const {
              result: {
                current: { getWishById },
              },
            } = renderHook(useApi, { wrapper: Wrapper });

            await getWishById("wrongId");

            expect(toast.error).toHaveBeenCalledWith(
              "Cannot show details from this wish :(",
              {
                position: toast.POSITION.TOP_CENTER,
              }
            );
          });
        });
      });
      describe("When invoke createWish function with a formData", () => {
        test("Then it should call the succes modal", async () => {
          const wish = new FormData();
          const {
            result: {
              current: { createWish },
            },
          } = renderHook(useApi, { wrapper: Wrapper });

          const mockWish = {
            title: "Navidad en NY",
            picture: "/NY.png",
            limitDate: expect.any(Date),
            description: "Nieve nieve",
          };

          wish.append("wish", JSON.stringify(mockWish));
          wish.append("picture", new File([], "picture.jng"));

          await act(async () => {
            await createWish(wish);
          });

          expect(toast.success).toHaveBeenCalledWith(
            "Wish created successfully!",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );
        });
      });

      describe("When invoke a create wish without correctly formData", () => {
        test("Then it should call the error modal", async () => {
          axios.defaults.headers.post["IsTestError"] = true;
          const wish = new FormData();

          const {
            result: {
              current: { createWish },
            },
          } = renderHook(useApi, { wrapper: Wrapper });

          const mockWish = {
            title: "",
            picture: "",
            limitDate: expect.any(Date),
            description: "",
          };

          wish.append("wish", JSON.stringify(mockWish));
          wish.append("picture", new File([], "picture.jng"));

          await act(async () => {
            await createWish(wish);
          });

          expect(toast.error).toHaveBeenCalledWith(
            "Cannot create the wish :(",
            {
              position: toast.POSITION.TOP_CENTER,
            }
          );

          delete axios.defaults.headers.post["IsTestError"];
        });
      });
    });
  });
});
