const POSSIBLE_LOCATIONS = ["USA", "UK", "Worldwide"];

type LocationDto = typeof POSSIBLE_LOCATIONS[number];

export interface PositionDTO {
  id: number,
  company: string,
  new: boolean,
  position: string,
  role: string,
  postedAt: string | Date,
  contract: "Full Time" | "Part Time",
  location: LocationDto,
  languages: string[],
  tools: string[],
}