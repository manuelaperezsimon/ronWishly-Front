import { rest } from "msw";

const idWish: string = "232464fe42536dd232";

export const handlers = [
  rest.post(
    `${process.env.REACT_APP_API_URL}users/register`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password || !body.repeatPassword) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json([
          {
            userName: "Pablito",
            password: "firsttodo",
            repeatPasswor: "firsttodo",
          },
        ])
      );
    }
  ),
  rest.post(
    `${process.env.REACT_APP_API_URL}users/login`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.userName || !body.password) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Wrong data",
          })
        );
      }
      return res(
        ctx.status(200),
        ctx.json({
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InJnZXJ0NDU0OWpmZTllMm54OSIsInVzZXJOYW1lIjoibWFyaW9nbCJ9.8Tv7Dnd5CrzjUSQ00fHc3HvdObTNJ5AA8sMymMSN0xg",
        })
      );
    }
  ),
  rest.get(`${process.env.REACT_APP_API_URL}wishes`, async (req, res, ctx) => {
    const headerTestError = req.headers.get("IsTestError");

    if (headerTestError) {
      return res(
        ctx.status(500),
        ctx.json({
          error: "Something went wrong",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        wishes: [
          {
            id: "1234",
            title: "Viaje a Japón",
            picture: "/wish.png",
            limitDate: new Date(),
            description: "Viajar en primavera",
          },
          {
            id: "223298242",
            title: "Navidad en NY",
            picture: "/NY.png",
            limitDate: new Date(),
            description: "Nieve nieve",
          },
        ],
      })
    );
  }),

  rest.delete(
    `${process.env.REACT_APP_API_URL}wishes/${idWish}`,
    async (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          wishDelete: {
            id: idWish,
          },
        })
      );
    }
  ),

  rest.delete(
    `${process.env.REACT_APP_API_URL}wishes/wrongId`,
    async (req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Wish not found" }));
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}wishes/${idWish}`,
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          wish: {
            id: idWish,
            title: "Navidad en NY",
            picture: "/NY.png",
            limitDate: "2022-09-07T19:12:29.422Z",
            description: "Nieve nieve",
          },
        })
      );
    }
  ),

  rest.get(
    `${process.env.REACT_APP_API_URL}wishes/wrongId`,
    (_req, res, ctx) => {
      return res(ctx.status(404), ctx.json({ error: "Something went wrong" }));
    }
  ),

  rest.post(
    `${process.env.REACT_APP_API_URL}wishes/`,
    async (req, res, ctx) => {
      const body = await req.json();
      if (!body.picture) {
        return res(
          ctx.status(400),
          ctx.json({
            error: "Error creating wish",
          })
        );
      }

      return res(
        ctx.status(201),
        ctx.json({
          id: idWish,
          title: "Navidad en NY",
          picture: "/NY.png",
          limitDate: "2022-09-07T19:12:29.422Z",
          description: "Nieve nieve",
        })
      );
    }
  ),
];
