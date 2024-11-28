import { Option } from "../Option/Option";

export interface BaseSelectProps {
  options: Option[],
  label: string,
  placeholder?: string,
}