import { rest } from "msw";

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
];
