type LocationDto = "USA" | "UK" | "Worldwide";

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