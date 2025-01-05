import { queryOptions } from "@tanstack/vue-query";
import { positionsKeys } from "./keys";
import ky from "ky";
import { URLS } from "shared/api";
import { PositionDTO } from "../model/dto";

const getPositions = () => ky.get<PositionDTO[]>(URLS.positions).json();

export const getPositionsOptions = queryOptions({
  queryKey: positionsKeys.list,
  queryFn: getPositions,
  select: (data) => data
})