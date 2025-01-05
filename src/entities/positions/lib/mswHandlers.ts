import { HttpHandler, HttpResponse, delay, http } from "msw";
import { URLS } from "shared/api";
import { positionsDB } from "../model/db";

const getPositionsHandler = http.get(URLS.positions, async () => {
  await delay(1200)
  return new HttpResponse(positionsDB)
})

export const positionsHandlers: HttpHandler[] = [getPositionsHandler]